using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFM_Tests
{
    class Control : Command
    {
        public string controlType { get; set; }
        public string controlName { get; set; }
        public string identificationType { get; set; }
        public string identificationValue { get; set; }

    }
}
