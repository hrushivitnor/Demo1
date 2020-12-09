var m=require("./node2.2");
var fs=require("fs");
var qstring=require("querystring");
var http=require("http");
var url=require("url");
function process_request(req,resp)
{
	const p=url.parse(req.url);
	console.log("query String::"+p.query);
	console.log("pathname::"+p.pathname);
	console.log(req.url);
	switch(p.pathname)
	{
		case "/":
		   fs.readFile("formfact.html",function(err,data){
			   if(err){
				  resp.end("error");
				  console.log("error");
			   }
			   else
				  resp.end(data);
			   
		   });
		   break;
		   
		case "/use2.2":
		      var q=qstring.parse(p.query);
			  console.log("in factorial");
			  console.log(q.num)
			  var ans;
			  if(q.num<5)
			  { ans=m.factorial(q.num);}
			  else if(q.num>5&&q.num<10)
			  { ans=m.printTable(q.num);}
			   else
			   { ans=m.prime(q.num);}
		   resp.end("Responded operation result::"+ans);
			  break;
			  
			 //default:
			 //console.log("default");
			 //break;
			  
	}
}
var server=http.createServer(process_request);
server.listen(8181);
console.log("server is running on port 8181");

