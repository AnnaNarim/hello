var http = require('http');

http.createServer(function (req, res){

if(req.url==='/open'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("Do you want to have a Porsche Panamera? \n for yes type   /yes \n for no type   /no");
}
if(req.url === '/open/yes'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("What can you do to have Porsche Panamera??? \n 1.Nothing (type /one)\n 2.Just buy it (type /two) :D \n 3.My friends can buy it on my birthday (type /three)\n 4. I am a looser for my entire life :) (type /four) ");
}

else  if(req.url === '/open/yes/one') {
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("So you actually do not want this car, not just a car but Porsche Panamera");
}

else if(req.url === '/open/yes/two'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("If you have 70.000$ and more what are you waithing for go and buy it :D ");
}

else if(req.url === '/open/yes/three'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("I do not think you have such rich friends :D \n");
}

else if(req.url === '/open/yes/four'){
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("Are you crazy?? Looser??? ok! if you think so!!!");
}

else if(req.url==='/open/no')
{
res.writeHead(200, {'Content-Type' : 'text/plain'});
res.end("So what are you doing here! Go hell out of here!!! I do not want to see you anymore :P ")
}

else
{
res.writeHead(404, {'Content-Type' : 'text/plain'});
res.end(" You type something wrong! TRY AGAIN");
}

}).listen(500);