import { Player } from '../models/player.model';
import { PLAYERS } from '../contants/players.mock';
import { FetchService } from './fetch.service';
import { iPlayer } from '../models/player.interface';

export class servicePlayers {
  players: Player[];
  fetchService: FetchService;
  constructor(fetchService: FetchService) {
    this.players = [];
    this.fetchService = fetchService;
  }

  async fetchData() {
    return await this.fetchService.makeFetchRequest(
      'http://127.17.0.1/getData.php',
      'GET'
    );
  }

  getPlayers(): Player[] {
    // const fetchedPlayers = await this.fetchData();
    // fetchedPlayers.forEach((_player: Player) =>
    //   this.players.push(new Player(_player))
    // );
    PLAYERS.forEach((_player: Player) =>
      this.players.push(new Player(_player))
    );
    return this.players;
  }

  updatePlayerAttributes = (player: iPlayer) => {
    this.players
      .filter(_player => _player.id == player.id)
      .map((_player: iPlayer) => {
        _player.name = player.name;
        _player.alias = player.alias;
        _player.birthday = player.birthday;
      });
    console.log(this.players);
  };
}
