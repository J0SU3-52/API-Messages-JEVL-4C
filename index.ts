import express from "express";
import routes from "./src/routes";
import corsMiddleware from "./src/middlewares/corsMiddleware";
import { init } from './src/services/serviceLocator/composer'

const server = express();

init()
server.use(corsMiddleware);
server.use(express.json());

routes(server)

server.listen(9000, function() {
    console.log("Server is listening on port 9000");
})