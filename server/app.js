var pcap = require('pcap');
var pcap_session = pcap.createSession("", "");

var packetNumber = 0;
pcap_session.on('packet', function (raw_packet) {
    // do some stuff with a raw packet
  console.log(raw_packet);
});