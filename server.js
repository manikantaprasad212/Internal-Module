 let os = require("node:os");
 let path = require("node:path");
 let moment = require("moment");

 console.log(os.platform());

 console.log(os.totalmem()/1024/1024/1024);

 console.log(os.freemem()/1024/1024);

 console.log(os.release());

 console.log(os.networkInterfaces());

 console.log(os.machine());

 console.log(os.type());

 console.log(os.uptime());

 console.log(path.parse("C:\Users\RAJUBHAI\Downloads\day18-flex1-percentages-main.zip"));

 console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));