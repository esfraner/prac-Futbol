import { Player } from '../models/player.model';
import { GUI } from '../contants/GUI';
import { iPlayer } from '../models/player.interface';

export class viewPlayers {
  checks: any;
  updateButton: any;
  name: any;
  surNameInput: any;
  addressInput: HTMLElement | null;
  postCodeInput: HTMLElement | null;
  landlineInput: HTMLElement | null;
  mobilePhoneInput: HTMLElement | null;
  emailInput: HTMLElement | null;
  birthDateInput: HTMLElement | null;
  countryInput: HTMLElement | null;
  body: HTMLElement | null;
  sendInput: HTMLElement | null;
  addButton: any;
  removeButton: any;
  alias: any;
  birthdate: any;
  club: any;
  constructor() {
    this.getElementsFromForm();
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

  getElementsFromForm() {
    this.name = GUI.INPUT_NAME;
    this.surNameInput = GUI.INPUT_SURNAME;
    this.addressInput = document.getElementById('address');
    this.postCodeInput = document.getElementById('postCode');
    this.landlineInput = document.getElementById('landline');
    this.mobilePhoneInput = document.getElementById('mobilePhone');
    this.emailInput = document.getElementById('email');
    this.birthDateInput = document.getElementById('birthDate');
    this.countryInput = document.getElementById('country');
    this.body = document.getElementById('general');
    this.sendInput = document.getElementById('sendBtn');
    this.addButton = GUI.BUTTON_ADD;
    this.updateButton = GUI.BUTTON_UPDATE;
    this.removeButton = GUI.BUTTON_REMOVE;
  }

  bindLoadPlayers(handler: any) {
    const players = handler();
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

  getName() {
    return this.name.value;
  }

  getAlias() {
    return this.alias.value;
  }

  getBirthdate() {
    return this.birthdate.value;
  }

  getClub() {
    return this.club.value;
  }

  bindInput({ check, input, value, handler }: any) {
    const checkPosition = document.getElementById(check);
    input.addEventListener('change', () => {
      let isValid = false;
      if (this._hasLength(3, value())) {
        isValid = handler(value());
        this._showAlert(checkPosition, isValid);
        this._validateAddButton();
        this._validateUpdateButton();
        this._validateRemoveButton();
      }
      if (!this._hasLength(3, value())) {
        console.log('ddfdf');
      }
      this.checks[check] = isValid;
    });
  }

  bindName(handler: CallableFunction) {
    this.bindInput({
      check: 'nameCheck',
      input: this.name,
      value: this.getName.bind(this),
      handler
    });
  }

  bindAlias(handler: CallableFunction) {
    this.bindInput({
      check: 'aliasCheck',
      input: this.alias,
      value: this.getAlias.bind(this),
      handler
    });
  }

  bindBirthdate(handler: CallableFunction) {
    this.bindInput({
      check: 'birthDateCheck',
      input: this.birthdate,
      value: this.getBirthdate.bind(this),
      handler
    });
  }

  bindClub(handler: CallableFunction) {
    this.bindInput({
      check: 'clubCheck',
      input: this.club,
      value: this.getClub.bind(this),
      handler
    });
  }

  _showAlert(element: HTMLElement, isSuccess: boolean) {
    isSuccess
      ? (element.className = 'fas fa-check')
      : (element.className = 'fas fa-times');
  }

  _validateAddButton() {
    this.addButton.disabled = Object.values(this.checks).includes(false);
  }

  _validateUpdateButton() {
    this.updateButton.disabled = Object.values(this.checks).includes(false);
  }

  _validateRemoveButton() {
    this.removeButton.disabled = Object.values(this.checks).includes(false);
  }

  _hasLength(length: number, element: string) {
    return element.length > length;
  }
}
