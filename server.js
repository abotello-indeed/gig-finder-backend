const ws = require('ws');
const server = new ws.WebSocketServer({ port: 8080 });

server.on('connection', (socket, req) => {
    socket.on('message', (data) => {
        const req = JSON.parse(data);
        const action = req.action;
        
        if(action === "connect"){
            //TO-DO: retrieve and send jobs from database
        }
        else if(action === "postGig") {
            //TO-DO: post new gig to database and broadcast it to all clients
        }
    });
});

