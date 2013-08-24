function writeinfo(way,content,response,postData){
	response.writeHead(200, {"Content-Type": way});
    response.write(content);
    response.end();
}

function domysql(){
	var mq = require("mysql");
	  var mc = mq.createConnection({
		host: "localhost",
	    user: "root",
	    password: "",
		database: "trynodejs"
	  });
	  mc.connect();
	  return mc;
}

exports.writeinfo = writeinfo;
exports.domysql = domysql;