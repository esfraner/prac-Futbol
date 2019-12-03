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

  async getInitPlayers() {
    const fetchedPlayers = await this.fetchData();
    fetchedPlayers.forEach((_player: Player) =>
      this.players.push(new Player(_player))
    );
    console.log(this.players);
    /*  PLAYERS.forEach((_player: Player) =>
      this.players.push(new Player(_player))
    ); */
    return this.players;
  }

  getPlayers() {
    return this.players;
  }

  updatePlayerAttributes = (player: iPlayer) => {
    this.players
      .filter(_player => _player.id == player.id)
      .map((_player: Player) => {
        _player.name = player.name;
        _player.alias = player.alias;
        _player.birthday = player.birthday;
      });
    console.log(this.players);
  };

  addPlayer = (player: Player) => {
    const lastId = this.getLastIdPlayer();
    const newPlayer: Player = { ...player, id: lastId };
    this.players.push(new Player(newPlayer));
    console.log(this.players);
  };

  private getLastIdPlayer() {
    return '' + (parseInt(this.players[this.players.length - 1].id) + 1);
  }

  removePlayer = (player: Player) => {
    const playerToRemove = this.players.findIndex(
      _player => _player.id == player.id
    );
    if (playerToRemove >= 0) {
      this.players.splice(playerToRemove, 1);
      console.log(this.players);
    }
    return playerToRemove;
  };

  searchPlayerFromArray(searchedWord: string): Player[] {
    return this.players.filter(
      ({ name, alias }) =>
        name.includes(searchedWord) || alias.includes(searchedWord)
    );
  }
}
