using System;
using NUnit.Framework;


namespace WFM_Tests
{
    [TestFixture]
    public class WFMTests
    {
        LoginPage loginPage;
        DashboardPage dashboardPage;

        [OneTimeSetUp]
        public void Initiate()
        {
            ProtractorConnect.connect();

            string connectResponse = ProtractorConnect.getResponse();

            Assert.AreEqual("You are connected !", connectResponse);

            ProtractorConnect.command(new Launch() { browser = "chrome", applicationUrl = "https://localdev.riteq.com.au:8000/web/" });
            //ProtractorConnect.command(new Launch() { browser = "chrome", applicationUrl = "http://future.riteq.com.au:8011/Web/" });

            string browsertitle = ProtractorConnect.getResponse();

            Assert.AreEqual("Wfm Identity Provider Login", browsertitle);

        }


        [Test]
        public void TestLogin()
        {
            string activePageHeader;

            loginPage = new LoginPage();

            loginPage.LoginToWeb("-1111", "D!sneyD3vs1");

            dashboardPage = new DashboardPage();

            activePageHeader = dashboardPage.obtainActivePageHeading();

            Assert.AreEqual("Operational", activePageHeader, "Dashboard Page header is incorrect");

            dashboardPage.NavigateToMenu("Team", "Employee Calendar");

        }
        
    }
}
