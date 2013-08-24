var querystring = require("querystring");
var config = require("./config");
var fs = require("fs");
var mc = config.domysql();
function getfile(filepath,response,postData){
	filepath = './tpl/'+filepath+'.t';
	fs.readFile(filepath,function(err,html){
		config.writeinfo('text/html',html,response,postData);
	});
}

function insideByuser(uid,infobody,response,postData){
	mc.query("select * from content where uid = " + uid, function(err, rs1, fields){
		console.log(rs1);
		for(var i = 0;i < rs1.length;i ++){
			infobody += '<tr><td>'+rs1[i]['content'] + '</td><td>' + rs1[i]['result']+ '</td><td>' + rs1[i]['dotime'] + '</td></tr>';
		}
		config.writeinfo('text/html',infobody + '</table><div><form method="post" action="/start"><input type="hidden" name="uid" value="' + uid + '" /><input type="submit" value="Getrank" /></form></div>'+
    '</body>'+
    '</html>',response,postData);
	});
	return infobody;
}

function getUserRank(userid,infobody,somefun,response,postData){
	return somefun(userid,infobody,response,postData);
}
function login(response,postData) {
	console.log("Request handler 'login' was called.");
	if(postData){
		console.log("data is ." + querystring.parse(postData).name);
	  mc.query("select id,username from user limit 1", function(err, rs, fields){
		if(err){
			console.log(err);
			config.writeinfo('text/html','database connected wrong<a href="/login">go back</a>',response,postData);
		}else{
			console.log(rs[0]['username']+'ok');
			if(querystring.parse(postData).name == rs[0]['username']){
				var infobody = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=utf-8" />'+
    '</head>'+
    '<body>'+
    '<table width="100%">'+
    '<tr><th>old</th><th>new</th><th>time</th></tr>';
    infobody += getUserRank(rs[0]['id'],infobody,insideByuser,response,postData);
			}else{
				config.writeinfo('text/html','<script>alert("It is wrong name");history.go(-1);</script>',response,postData);
			}
		}
	  });
	  return false;
	}
	getfile('login',response,postData);
}
function start(response, postData) {
  console.log("Request handler 'start' was called."+querystring.parse(postData).uid);
  var uid = querystring.parse(postData).uid;
  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<input name="uid" type="hidden" value="'+uid+'" /><textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';
    config.writeinfo('text/html',body,response,postData);
}
var co1 = 0;
var co2 = 0;

function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  var str = querystring.parse(postData).text;
  var strs = str.split(',');
  var string = new Array();
  for(var i = 0;i < strs.length;i ++){
	 string.push(parseInt(strs[i]));
  }
  var startTime = new Date().getTime();
  var newstr = rank(string);
  var c1 = co1;var c2 = co2;
  var endTime = new Date().getTime();
  var dotime = endTime - startTime;
  var uid = querystring.parse(postData).uid;
  mc.query("INSERT INTO content SET uid="+uid+",content='"+querystring.parse(postData).text+"',result='"+newstr+"',len="+strs.length+",co1="+c1+",co2="+c2+",dotime="+dotime, function(err, rs, fields){
    if(err){
		console.log(err);
		config.writeinfo('text/html','<script>alert("something is wrong!");history.go(-1);</script>',response,postData);
	}else{
		console.log(rs);
		config.writeinfo('text/html','<script>alert("success!The result is '+newstr+'");window.location.href="/login"</script>',response,postData);
	}
  });
}

 function rank(arrs){
	arrs = [arrs];
	var i = 0;
	while(1){
		if(i >= arrs.length){
			return arrs;
		}
		co1 ++;
		if(arrs[i].length <= 1){
			i ++;
			co2 ++;
			continue;
		}else{
			var temp = arrs[i][0];
			var left = new Array();
			var right = new Array();
			var mid = new Array();
			var newarr = new Array();
			for(var j = 0;j < arrs[i].length;j ++){
				if(arrs[i][j] < temp){
					left.push(arrs[i][j]);
				}else if(j != 0){
					right.push(arrs[i][j]);
				}else{
					mid.push(arrs[i][0]);
				}
			}
			for(var c = 0;c < arrs.length;c ++){
				if(c != i){
					newarr.push(arrs[c]);
				}else{
					if(left != '')
					newarr.push(left);
					if(mid != '')
					newarr.push(mid);
					if(right != ''){
						newarr.push(right);
					}
				}
			}
			arrs = newarr;
		}
	}
}

exports.start = start;
exports.upload = upload;
exports.login = login;