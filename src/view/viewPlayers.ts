import { Player } from '../models/player.model';
import { GUI } from '../contants/GUI';
import { iPlayer } from '../models/player.interface';

export class viewPlayers {
  constructor() {}

  bindLoadPlayers(handler: any) {
    const players = handler();
    console.log(players);
    players.forEach((player: Player) => this.createCard(player));
  }

  createCard(player: Player) {
    const labelNombre = document.createElement('label');
    const labelAlias = document.createElement('label');
    const labelId = document.createElement('label');
    const labelBirthday = document.createElement('label');
    const textLabelNombre = document.createTextNode('Nombre: ');
    const textLabelAlias = document.createTextNode('Alias: ');
    const textLabelId = document.createTextNode('Id: ');
    const textLabelBirthday = document.createTextNode('Birthday: ');
    labelNombre.appendChild(textLabelNombre);
    labelAlias.appendChild(textLabelAlias);
    labelId.appendChild(textLabelId);
    labelBirthday.appendChild(textLabelBirthday);

    const spanNombre = document.createElement('span');
    const spanAlias = document.createElement('span');
    const spanId = document.createElement('span');
    const spanBirthday = document.createElement('span');
    spanNombre.className = 'col s12 m12';
    spanAlias.className = 'col s12 m12';
    spanId.className = 'col s12 m12';
    spanBirthday.className = 'col s12 m12';
    spanNombre.appendChild(labelNombre);
    spanAlias.appendChild(labelAlias);
    spanId.appendChild(labelId);
    spanBirthday.appendChild(labelBirthday);
    const textNombre = document.createTextNode(player.name);
    const textAlias = document.createTextNode(player.alias);
    const textId = document.createTextNode(player.id);
    const textBirthday = document.createTextNode(player.birthday);
    spanNombre.appendChild(textNombre);
    spanAlias.appendChild(textAlias);
    spanId.appendChild(textId);
    spanBirthday.appendChild(textBirthday);

    const divRow = document.createElement('div');
    divRow.classList.add('row', 'card');
    divRow.addEventListener(
      'click',
      () => {
        this.showPlayerInForm(player);
      },
      false
    ); //TODO
    //creado un div con card
    const divPlayer = document.createElement('div');
    divPlayer.className = 'col s6 m7';
    divPlayer.appendChild(spanId);
    divPlayer.appendChild(spanNombre);
    divPlayer.appendChild(spanAlias);
    divPlayer.appendChild(spanBirthday);
    divRow.appendChild(divPlayer);
    const divCard = document.createElement('div');
    divCard.classList.add('player-card');
    divPlayer.appendChild(divCard);

    // const divImage = _view.createElement(ELEMENTS.DIV);
    // const img = _view.createElement(ELEMENTS.IMG);
    // img.src = IMG.HEADER + Player.IMAGE;
    // img.setAttribute(ATTRIBUTES.WIDTH, IMG.WIDTH);
    // img.classList.add(IMG.CLASSNAME);
    // divImage.appendChild(img);
    // divImage.className = DIVIMAGE.CLASSNAME;
    // divRow.appendChild(divImage);
    const listCards: HTMLElement = GUI.LIST_CARDS;
    listCards.appendChild(divRow); //error?
  }

  showPlayerInForm = (player: Player) => {
    GUI.INPUT_ID.value = player.id;
    GUI.INPUT_NAME.value = player.name;
    GUI.INPUT_ALIAS.value = player.alias;
    GUI.INPUT_BIRTHDAY.value = player.birthday;
    console.log(player);
  };

  //this function should replace the current player attributes with the ones from the inputs
  getInputsToUpdatePlayer = (player: Player) => {
    player.name = GUI.INPUT_NAME.value;
    player.alias = GUI.INPUT_ALIAS.value;
    player.birthday = GUI.INPUT_BIRTHDAY.value;
  };

  getplayerFromInput = (): iPlayer => {
    const player: iPlayer = {
      id: GUI.INPUT_ID.value,
      name: GUI.INPUT_NAME.value,
      alias: GUI.INPUT_ALIAS.value,
      birthday: GUI.INPUT_BIRTHDAY.value
    };
    return player;
  };

  _updatePlayersEvent = (handler: CallableFunction) => {
    GUI.BUTTON_UPDATE.addEventListener('click', () => {
      handler(this.getplayerFromInput());
    });
  };

  _addPlayersEvent = (handler: CallableFunction) => {
    GUI.BUTTON_ADD.addEventListener('click', () => {
      handler(this.getplayerFromInput());
    });
  };
}
