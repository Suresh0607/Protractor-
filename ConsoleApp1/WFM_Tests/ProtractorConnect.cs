using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace WFM_Tests
{
    class ProtractorConnect
    {

        static IPHostEntry host = Dns.GetHostEntry("localhost");
        static IPAddress ipAddress = host.AddressList[1];
        static IPEndPoint remoteEP = new IPEndPoint(ipAddress, 3000);

        private static Socket Sender { get; set; } = new Socket(ipAddress.AddressFamily, SocketType.Stream, ProtocolType.Tcp);

        private static List<Command> commandArray = new List<Command>();

        public static Boolean ImmediateExecution = true;



        public static void connect()
        {   
            Sender.Connect(remoteEP);
            
            Console.WriteLine("Socket connected to {0}", Sender.RemoteEndPoint.ToString());
        }

        public static void command(Command command)
        {
            string jsonString = "";
            byte[] msg;


            if (command.GetType() == typeof(Launch))
            {
                jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Request() { commandName = "LAUNCH", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject((Launch)command) });
            }
            else if (command.GetType() == typeof(Control))
            {
                jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Request() { commandName = "CONTROL", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject((Control)command) });
            }
            else if (command.GetType() == typeof(Action))
            {
                if (ImmediateExecution)
                {
                    jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Request() { commandName = "ACTION", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject((Action)command) });
                }                    
                else
                    commandArray.Add((Action)command);
            }

            Thread.Sleep(100);

            msg = Encoding.ASCII.GetBytes(jsonString);
            Sender.Send(msg);
           
        }
        

        public static void sendCommands()
        {
            string jsonString = "";
            byte[] msg;

            if (commandArray.Count() > 0)
            {
                jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Request() { commandName = "EXECUTE", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(commandArray) });

                Thread.Sleep(500);

                msg = Encoding.ASCII.GetBytes(jsonString);
                Sender.Send(msg);

                commandArray.Clear();

            }
            
        }


        public static String getResponse(Boolean isCommandExecuted = true)
        {

            if (isCommandExecuted) {

                int bytesRec;
                byte[] bytes = new byte[1024];

                Thread.Sleep(100);

                bytesRec = Sender.Receive(bytes);

                return Encoding.ASCII.GetString(bytes, 0, bytesRec);

            } else
            {

                return "";

            }
               

        }


    }
}
