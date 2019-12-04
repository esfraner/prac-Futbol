import { Player } from '../models/player.model';
import { GUI } from '../contants/GUI';
import { iPlayer } from '../models/player.interface';
import { ICON_CLASS } from '../contants/constants';
import moment = require('moment');

export class viewPlayers {
  checks: any;
  constructor() {
    this.checks = {
      nameCheck: false,
      surnameCheck: false,
      addressCheck: false,
      postCodeCheck: false,
      landLineCheck: false,
      mobilePhoneCheck: false,
      emailCheck: false,
      birthDateCheck: false
    };
  }

  async bindLoadPlayers(handler: any) {
    const players = await handler();
    console.log(players);
    players.forEach((player: iPlayer) => this.createCard(player));
  }

  createCard(player: iPlayer) {
    const labelNombre = document.createElement('label');
    const labelAlias = document.createElement('label');
    const labelId = document.createElement('label');
    const labelBirthday = document.createElement('label');
    const labelClub = document.createElement('label');
    const labelRol = document.createElement('label');
    const textLabelNombre = document.createTextNode('Nombre: ');
    const textLabelAlias = document.createTextNode('Alias: ');
    const textLabelId = document.createTextNode('Id: ');
    const textLabelBirthday = document.createTextNode('Birthday: ');
    const textLabelClub = document.createTextNode('Club: ');
    const textLabelRol = document.createTextNode('Rol: ');
    labelNombre.appendChild(textLabelNombre);
    labelAlias.appendChild(textLabelAlias);
    labelId.appendChild(textLabelId);
    labelBirthday.appendChild(textLabelBirthday);
    labelClub.appendChild(textLabelClub);
    labelRol.appendChild(textLabelRol);

    const spanNombre = document.createElement('span');
    const spanAlias = document.createElement('span');
    const spanId = document.createElement('span');
    const spanBirthday = document.createElement('span');
    const spanClub = document.createElement('span');
    const spanRol = document.createElement('span');
    spanNombre.className = 'col s12 m12';
    spanAlias.className = 'col s12 m12';
    spanId.className = 'col s12 m12';
    spanBirthday.className = 'col s12 m12';
    spanClub.className = 'col s12 m12';
    spanRol.className = 'col s12 m12';
    spanNombre.appendChild(labelNombre);
    spanAlias.appendChild(labelAlias);
    spanId.appendChild(labelId);
    spanBirthday.appendChild(labelBirthday);
    spanClub.appendChild(labelClub);
    spanRol.appendChild(labelRol);

    const textNombre = document.createTextNode(player.name);
    const textAlias = document.createTextNode(player.alias);
    const textId = document.createTextNode(player.id);
    const textBirthday = document.createTextNode(player.birthday);
    const textClub = document.createTextNode(player.club);
    const textRol = document.createTextNode(player.rol);
    spanNombre.appendChild(textNombre);
    spanAlias.appendChild(textAlias);
    spanId.appendChild(textId);
    spanBirthday.appendChild(textBirthday);
    spanClub.appendChild(textClub);
    spanRol.appendChild(textRol);

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
    divPlayer.appendChild(spanClub);
    divPlayer.appendChild(spanRol);
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

  showPlayerInForm = (player: iPlayer) => {
    GUI.INPUT_ID.value = player.id;
    GUI.INPUT_NAME.value = player.name;
    GUI.INPUT_ALIAS.value = player.alias;
    GUI.INPUT_BIRTHDAY.value = player.birthday;
    console.log(player);
  };

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
      birthday: moment(GUI.INPUT_BIRTHDAY.value).format('DD/MM/YYYY'),
      club: GUI.INPUT_CLUB.value,
      rol: GUI.INPUT_CLUB.value
    };
    return player;
  };

  _updatePlayersEvent = (
    handler: CallableFunction,
    handler2: CallableFunction
  ) => {
    GUI.BUTTON_UPDATE.addEventListener('click', () => {
      handler(this.getplayerFromInput());
      this.refreshView();
      this.bindLoadPlayers(handler2);
      this.cleanInputs();
    });
  };

  _addPlayersEvent = (
    handler: CallableFunction,
    handler2: CallableFunction
  ) => {
    GUI.BUTTON_ADD.addEventListener('click', () => {
      handler(this.getplayerFromInput());
      console.log(handler2());
      this.refreshView();
      this.bindLoadPlayers(handler2);
      this.cleanInputs();
    });
  };

  _removePlayersEvent = (
    handler: CallableFunction,
    handler2: CallableFunction
  ) => {
    GUI.BUTTON_REMOVE.addEventListener('click', () => {
      const resultNumber = handler(this.getplayerFromInput());
      this.isPlayerCorrect(resultNumber);
      this.refreshView();
      this.bindLoadPlayers(handler2);
      this.cleanInputs();
    });
  };

  isPlayerCorrect(number: number) {
    number >= 0 ? alert('Borrado') : alert('No existe el player');
  }

  refreshView() {
    GUI.LIST_CARDS.querySelectorAll('*').forEach((n: HTMLElement) =>
      n.remove()
    );
  }

  cleanInputs() {
    GUI.INPUT_ID.value = '';
    GUI.INPUT_NAME.value = '';
    GUI.INPUT_ALIAS.value = '';
    GUI.INPUT_BIRTHDAY.value = '';
  }

  _cleanInputsButton = () => {
    GUI.BUTTON_CLEAN.addEventListener('click', () => {
      this.cleanInputs();
    });
  };

  handlerOnKeyUp(handler: CallableFunction, target: any) {
    const isValidInput = handler(target.value);
    const elementName = target.getAttribute('data-icon');
    this.stateCheckHandler(isValidInput, GUI[elementName]);
  }

  handlerOnChange(target: any) {
    if (target.value.length == 0 || target.value === '') {
      const elementName = target.getAttribute('data-icon');
      GUI[elementName].setAttribute('class', '');
    }
  }

  stateCheckHandler(isValidInput: boolean, elementIcon: HTMLElement) {
    isValidInput
      ? this.showTickIcon(elementIcon)
      : this.showCrossIcon(elementIcon);
  }

  showTickIcon(element: HTMLElement) {
    element.className = ICON_CLASS.TICK;
  }

  showCrossIcon(element: HTMLElement) {
    element.className = ICON_CLASS.CROSS;
  }

  _eventKeyUpName(handler: CallableFunction) {
    GUI.INPUT_NAME.addEventListener('keyup', ({ target }: any) => {
      this.handlerOnKeyUp(handler, target);
    });
  }

  _eventChangeName() {
    GUI.INPUT_NAME.addEventListener('change', ({ target }: any) => {
      this.handlerOnChange(target);
    });
  }

  _eventKeyUpAlias(handler: CallableFunction) {
    GUI.INPUT_ALIAS.addEventListener('keyup', ({ target }: any) => {
      this.handlerOnKeyUp(handler, target);
    });
  }

  _eventChangeAlias() {
    GUI.INPUT_ALIAS.addEventListener('change', ({ target }: any) => {
      this.handlerOnChange(target);
    });
  }

  _eventKeyUpRol(handler: CallableFunction) {
    GUI.INPUT_ROL.addEventListener('keyup', ({ target }: any) => {
      this.handlerOnKeyUp(handler, target);
    });
  }

  _eventChangeBirthday() {
    GUI.INPUT_BIRTHDAY.addEventListener('change', ({ target }: any) => {
      this.handlerOnChange(target);
    });
  }

  _eventKeyUpBirthday(handler: CallableFunction) {
    GUI.INPUT_BIRTHDAY.addEventListener('keyup', ({ target }: any) => {
      this.handlerOnKeyUp(handler, target);
    });
  }

  _eventChangeRol() {
    GUI.INPUT_ROL.addEventListener('change', ({ target }: any) => {
      this.handlerOnChange(target);
    });
  }

  _validateAddButton() {
    GUI.BUTTON_ADD.disabled = Object.values(this.checks).includes(false);
  }

  _validateUpdateButton() {
    GUI.BUTTON_UPDATE.disabled = Object.values(this.checks).includes(false);
  }

  _validateRemoveButton() {
    GUI.BUTTON_REMOVE.disabled = Object.values(this.checks).includes(false);
  }

  _showAllPlayers = (handler: CallableFunction) => {
    GUI.BUTTON_SHOW_ALL.addEventListener('click', () => {
      this.refreshView();
      this.bindLoadPlayers(handler);
    });
  };

  bindLoadSearchedPlayers(handler: CallableFunction) {
    const searchedPlayers = handler();
    searchedPlayers.forEach((player: iPlayer) => this.createCard(player));
  }

  _searchPlayer = (handler: CallableFunction) => {
    GUI.BUTTON_SEARCH.addEventListener('click', () => {
      this.refreshView();
      this.bindLoadSearchedPlayers(handler);
    });
  };
}
