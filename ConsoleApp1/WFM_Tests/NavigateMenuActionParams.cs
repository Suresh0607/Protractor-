using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFM_Tests
{
    class NavigateMenuActionParams : ActionParams
    {
        public string topLevelMenuLocatorJSON { get; set; }

        public string childMenuLocatorJSON { get; set; }

    }
}
