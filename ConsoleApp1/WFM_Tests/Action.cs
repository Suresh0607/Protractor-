using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFM_Tests
{
    class Action : Command
    {
        public string controlName { get; set; }
        public string action { get; set; }
        public string actionParamsJSON { get; set; }

    }
}
