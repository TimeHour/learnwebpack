import { WebSocketServer } from "ws";

const wss = new WebSocketServer({host: '0.0.0.0' , port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function message(data) {
    data = JSON.parse(data.toString());
    if(data.type == 'message'){
    
    wss.clients.forEach(function(client){
      if(client != ws){
      client.send(JSON.stringify({type: 'message', data: {text: data.data, isMe:false, name: ws.name}}));
        }
    });
  } else if(data.type == 'name'){
    ws.name = data.data;
  }
  });
});