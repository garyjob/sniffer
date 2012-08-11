var pcap = require('pcap');
var pcap_session = pcap.createSession("", "");

var packetNumber = 0;
pcap_session.on('packet', function (raw_packet) {
    // do some stuff with a raw packet
  //console.log(raw_packet);
  var packet = pcap.decode.packet(raw_packet);
  //console.log(packet);
});

var express = require('express');

var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.methodOverride());
  app.use(express.errorHandler());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});


app.get('/', function(req, res){
	console.log("Line 30");
	res.render('index',{});
});

app.error(function(err, req, res, next) {
  res.render('error', {error: err});
});

app.listen(7777);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
