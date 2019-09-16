using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFM_Tests
{
    class LoginPage : CommonPage
    {
        public LoginPage()
        {
            //Initiating Controls

            ProtractorConnect.command(new Control(){ controlName = "User Name Textbox", controlType = "InputField", identificationType = "id", identificationValue = "UserName" });
            ProtractorConnect.command(new Control() { controlName = "Password Textbox", controlType = "InputField", identificationType = "id", identificationValue = "Password" });
            ProtractorConnect.command(new Control() { controlName = "Login Button", controlType = "Button", identificationType = "class", identificationValue = "btn-lg" });

           // ProtractorConnect.command(new Control(){ controlName = "User Name Textbox", controlType = "InputField", identificationType = "id", identificationValue = "inputUserName" });
           // ProtractorConnect.command(new Control() { controlName = "Password Textbox", controlType = "InputField", identificationType = "id", identificationValue = "inputPassword" });
           // ProtractorConnect.command(new Control() { controlName = "Login Button", controlType = "Button", identificationType = "class", identificationValue = "login-form__button" });

        }

        public void LoginToWeb(string username, string password, Boolean immediateExecution = true)
        {
            ProtractorConnect.ImmediateExecution = immediateExecution;
            EnterTextActionParams enterTextActionParams;

            string response;

            enterTextActionParams = new EnterTextActionParams() { text = username };
            ProtractorConnect.command(new Action() { action = "EnterText", controlName = "User Name Textbox", actionParamsJSON = Newtonsoft.Json.JsonConvert.SerializeObject(enterTextActionParams) });
            
            response = ProtractorConnect.getResponse(immediateExecution);

            enterTextActionParams = new EnterTextActionParams() { text = password };
            ProtractorConnect.command(new Action() { action = "EnterText", controlName = "Password Textbox", actionParamsJSON = Newtonsoft.Json.JsonConvert.SerializeObject(enterTextActionParams) });

            response = ProtractorConnect.getResponse(immediateExecution);
            
            ProtractorConnect.command(new Action() { action = "Click", controlName = "Login Button" });

            response = ProtractorConnect.getResponse(immediateExecution);

            if (immediateExecution == false)
            {
                ProtractorConnect.sendCommands();
                response = ProtractorConnect.getResponse();
            }
                
        }
        
    }
}
