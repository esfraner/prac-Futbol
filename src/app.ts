import { servicePlayers } from "./services/servicePlayers";
import { controllerPlayers } from "./controller/controllerPlayers";
import { viewPlayers } from "./view/viewPlayers";

const view = new viewPlayers();
const service = new servicePlayers();
const controller = new controllerPlayers(view, service);
