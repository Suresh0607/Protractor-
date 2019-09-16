using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WFM_Tests
{
    class Request
    {
        public string commandName { get; set; }
        public string commandJSON { get; set; }
        public Boolean containsParams { get; set; } = false;


    }
}
