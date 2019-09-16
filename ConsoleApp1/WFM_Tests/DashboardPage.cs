using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;


namespace WFM_Tests
{
    class DashboardPage : CommonPage
    {

        public DashboardPage() 
        {
            ProtractorConnect.command(new Control() { controlName = "Active Breadcrumb", controlType = "Label", identificationType = "class", identificationValue = "breadcrumb-item active" });

            ProtractorConnect.command(new Control() { controlName = "Main Menu", controlType = "NavigationMenu", identificationType = "class", identificationValue = "nav navbar-nav" });

        }

        public string obtainActivePageHeading(Boolean immediateExecution = true)
        {
            string headerText = "";

            ProtractorConnect.ImmediateExecution = immediateExecution;

            ProtractorConnect.command(new Action() { action = "Read", controlName = "Active Breadcrumb" });

            headerText = ProtractorConnect.getResponse(immediateExecution);

            if (immediateExecution == false)
            {
                ProtractorConnect.sendCommands();
                headerText = ProtractorConnect.getResponse();
            }

            return headerText;
        }

        public void NavigateToMenu(string topLevelMenuName, string subMenuName)
        {
            string response; 

            //Control topLevelMenu = new Control() { controlName = topLevelMenuName, controlType = "NavigationMenu", identificationType = "xpath", identificationValue = "/span[@class='navbar-item' and text()='" + topLevelMenuName + "']/../../" };
            //Control subMenu = new Control() { controlName = subMenuName, controlType = "NavigationMenu", identificationType = "xpath", identificationValue = "/a[@class='dropdown-toggle menu-top' and text()='" + subMenuName + "']" };

            Control topLevelMenu = new Control() { controlName = topLevelMenuName, controlType = "NavigationMenu", identificationType = "linkText", identificationValue = topLevelMenuName };
            Control subMenu = new Control() { controlName = subMenuName, controlType = "NavigationMenu", identificationType = "linkText", identificationValue = subMenuName };


            NavigateMenuActionParams navigateMenuActionParam = new NavigateMenuActionParams()
            {
                topLevelMenuLocatorJSON = JsonConvert.SerializeObject(topLevelMenu),
                childMenuLocatorJSON = JsonConvert.SerializeObject(subMenu)
            };

            ProtractorConnect.command(new Action() { action = "Navigate", controlName = "Main Menu",  actionParamsJSON = JsonConvert.SerializeObject(navigateMenuActionParam) });

            response = ProtractorConnect.getResponse(true);

        }

    }
}
