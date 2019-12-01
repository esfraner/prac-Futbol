import { servicePlayers } from "./services/servicePlayers";
import { controllerPlayers } from "./controller/controllerPlayers";
import { viewPlayers } from "./view/viewPlayers";
import { FetchService } from "./services/fetch.service";
const fetch = new FetchService();
const view = new viewPlayers();
const service = new servicePlayers(fetch);
const controller = new controllerPlayers(view, service);
