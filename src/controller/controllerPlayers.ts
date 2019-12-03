import { viewPlayers } from '../view/viewPlayers';
import { servicePlayers } from '../services/servicePlayers';
import { formService } from '../services/form.service';
import { Player } from '../models/player.model';
import { PLAYERS } from '../contants/players.mock';
import { iPlayer } from '../models/player.interface';
import { GUI } from '../contants/GUI';

export class controllerPlayers {
  view: viewPlayers;
  servicePlayer: servicePlayers;
  formService: formService;
  constructor(
    view: viewPlayers,
    servicePlayer: servicePlayers,
    formService: formService
  ) {
    this.view = view;
    this.servicePlayer = servicePlayer;
    this.formService = formService;
    this.view.bindLoadPlayers(this.handlerLoadPLayers);
    this.initViewEvents();
  }

  handlerLoadPLayers = (): Player[] => {
    return this.servicePlayer.getInitPlayers();
  };

  handlerGetPLayers = (): Player[] => {
    return this.servicePlayer.getPlayers();
  };
  initViewEvents() {
    this.view._addPlayersEvent(
      this.servicePlayer.addPlayer,
      this.handlerGetPLayers
    );
    this.view._updatePlayersEvent(
      this.servicePlayer.updatePlayerAttributes,
      this.handlerGetPLayers
    );
    this.view._removePlayersEvent(
      this.servicePlayer.removePlayer,
      this.handlerGetPLayers
    );
    this.view._cleanInputsButton();
    this.view._eventKeyUpName(this.formService.validateName);
    this.view._eventChangeName();
    this.view._eventKeyUpAlias(this.formService.validateAlias);
    this.view._eventChangeAlias();
    this.view._eventKeyUpRol(this.formService.validateRol);
    this.view._eventChangeRol();
    this.view._eventKeyUpBirthday(this.formService.validateBirthday);
    this.view._eventChangeBirthday();
    this.view._showAllPlayers(this.handlerGetPLayers);
    this.view._searchPlayer(this.handlerSearchedPlayers);
  }

  handlerSearchedPlayers = (): Player[] => {
    return this.servicePlayer.searchPlayerFromArray(GUI.INPUT_SEARCH.value); //TODO: this param should come from view
  };
}
