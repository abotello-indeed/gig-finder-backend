const ws = require('ws');
const db = require('./database/db');

const server = new ws.WebSocketServer({ port: 8080 });

server.on('connection', (socket) => {
    socket.on('message', async (data) => {
        const req = JSON.parse(data);
        const action = req.action;

        if(action === "connect"){
            const response = JSON.stringify(await db.gig.findAll());
            socket.send(response);
        }
        else if(action === "postGig") {
            const data = req.data;
            await db.gig.create(data);

            // broadcast updated list of gigs to all clients
            const response = JSON.stringify({
                action: "update",
                data: (await db.gig.findAll())
            });

            server.clients.forEach((client) => {
               if(client.readyState === ws.WebSocket.OPEN) {
                   client.send(response);
               }
            });
        }
    });
});

