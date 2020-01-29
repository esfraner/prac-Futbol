import Dexie from 'dexie';
import { Player } from '../models/player.model';
export class DexieService {
	futbolBD: any;
	constructor() {
		this.futbolBD = new Dexie('futbolDB');
		this.futbolBD.version(1).stores({
			players: 'id,name,alias,club,birthday,rol'
		});
		this.futbolBD.open();
	}
	addPlayer(player: Player) {
		this.futbolBD.players.put(player);
	}

	addBunchPlayers(players: Player[]) {
		this.futbolBD.players
			.bulkPut(players)
			.then(function() {
				console.log('Players added OK');
			})
			.catch(Dexie.BulkError, function(e: any) {
				console.log(
					'Some raindrops did not succeed. However, ' +
						(100000 - e.failures.length) +
						' raindrops was added successfully'
				);
			});
	}

	deletePlayer(id: string) {
		return this.futbolBD.players
			.where('id')
			.equals(id)
			.delete();
	}

	getPlayers() {
		return this.futbolBD.players.toArray();
	}
}
