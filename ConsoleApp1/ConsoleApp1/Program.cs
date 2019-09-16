using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        byte[] bytes = new byte[1024];

        static void Main(string[] args)
        {

            //TcpClient clientSocket = new TcpClient();

            //clientSocket.Connect("127.0.0.1", 1337);

            //NetworkStream serverStream = clientSocket.GetStream();

            //byte[] outStream = System.Text.Encoding.ASCII.GetBytes("test");

            //serverStream.Write(outStream, 0, outStream.Length);

            //serverStream.Flush();


            IPHostEntry host = Dns.GetHostEntry("localhost");
            IPAddress ipAddress = host.AddressList[1];
            IPEndPoint remoteEP = new IPEndPoint(ipAddress, 3000);

            //// Create a TCP/IP  socket.    
            Socket sender = new Socket(ipAddress.AddressFamily, SocketType.Stream, ProtocolType.Tcp);

            sender.Connect(remoteEP);

            Console.WriteLine("Socket connected to {0}", sender.RemoteEndPoint.ToString());

            //// Encode the data string into a byte array. 

            //{'controlType' : 'InputField', 'controlName' : 'User Name Textbox', 'identificationType' : 'id', 'identificationValue' : 'UserName' }'

            Command command = new Command();
            string jsonString;
            byte[] msg;
            byte[] bytes = new byte[1024];

            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "LAUNCH", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Launch() {  browser = "Chrome", applicationUrl = "https://localdev.riteq.com.au:8000/web/" }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            // Receive the response from the remote device.    
            int bytesRec = sender.Receive(bytes);
            Console.WriteLine(Encoding.ASCII.GetString(bytes, 0, bytesRec));
                
            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "CONTROL", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Control() { controlType = "InputField", controlName = "User Name Textbox", identificationType = "id", identificationValue = "UserName" }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);
            
            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject (new Command() { commandName = "CONTROL", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Control() { controlType = "InputField", controlName = "Password Textbox", identificationType = "id", identificationValue = "Password" }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);

            //jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "CONTROL", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Control() { controlType = "Button", controlName = "Login Button", identificationType = "class", identificationValue = "btn-lg" }) });
            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "CONTROL", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Control() { controlType = "Button", controlName = "Login Button", identificationType = "class", identificationValue = "btn-lg" }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(100);

            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "ACTION", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Action() {  action = "EnterText", actionValue = "-1111", controlName = "User Name Textbox", immediateExecution = true }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);
            
            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "ACTION", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Action() { action = "EnterText", actionValue = "D!sneyD3vs1", controlName = "Password Textbox", immediateExecution = true }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);
            
            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "ACTION", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Action() { action = "Click", actionValue = "", controlName = "Login Button", immediateExecution = true }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);

            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "CONTROL", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Control() { controlType = "Label", controlName = "Active Breadcrumb", identificationType = "class", identificationValue = "breadcrumb-item active" }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);

            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "ACTION", commandJSON = Newtonsoft.Json.JsonConvert.SerializeObject(new Action() { action = "Read", actionValue = "", controlName = "Active Breadcrumb", immediateExecution = true }) });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);

            Thread.Sleep(500);

            bytesRec = sender.Receive(bytes);
            Console.WriteLine(Encoding.ASCII.GetString(bytes, 0, bytesRec));

            jsonString = Newtonsoft.Json.JsonConvert.SerializeObject(new Command() { commandName = "EXECUTE", commandJSON = "" });
            msg = Encoding.ASCII.GetBytes(jsonString);
            sender.Send(msg);
                        
            Console.WriteLine("debug");

        }


        class Command
        {
            public string commandName {get; set;} 
            public string commandJSON { get; set; }

        }

        class Control
        {
         
            public string controlType { get; set; }
            public string controlName { get; set; }
            public string identificationType { get; set; }
            public string identificationValue { get; set; }
            
        }

        class Action
        {
            public string controlName { get; set; }
            public string action { get; set; }
            public string actionValue { get; set; }
            public Boolean immediateExecution { get; set; } = true;
            
        }

        class Launch
        {
            public string browser { get; set; }
            public string applicationUrl { get; set; }

        }

    }
        
}
