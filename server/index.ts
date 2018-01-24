import * as path from 'path';
import * as express from 'express';
import * as serveIndex from 'serve-index';
import { createServer } from 'http';
import { Server } from 'colyseus';

// Require BasicRoom handler
import { BlockChainiaRoom } from "./rooms/blockchainia.room";
import { StateHandlerRoom } from "./rooms/02-state-handler";
import { AuthRoom } from "./rooms/03-auth";

const port = Number(process.env.PORT || 2657);
const app = express();

// Create HTTP Server
const httpServer = createServer(app);

// Attach WebSocket Server on HTTP Server.
const gameServer = new Server({ server: httpServer });

// Register BasicRoom as "basic"
gameServer.register("blockchainia", BlockChainiaRoom);

gameServer.listen(port);

console.log(`Listening on http://localhost:${ port }`);