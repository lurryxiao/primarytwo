function route(handle, pathname, response, postData) {
  if (typeof handle[pathname] === 'function') {
    handle[pathname](response, postData);
  } else {
	var fs = require("fs");
	fs.readFile('.'+pathname, function (err, html) {  
    if (err) {  
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
		return false;
    }   
		console.log("dirname: " + pathname);
        response.writeHeader(200, {"Content-Type": "text/plain"});    
        response.write(html);    
        response.end();      
	});  
  }
}

exports.route = route;