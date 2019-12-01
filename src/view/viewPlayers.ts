import { Player } from "../models/player.model";
import { GUI } from "../contants/GUI";
import {
  ELEMENTS,
  CLASSLISTS,
  DIVROW,
  ATTRIBUTES
} from "../contants/constants";

export class viewPlayers {
  constructor() {}
  chargeCards(players: Player[]) {
    players.forEach(player => this.createCard(player));
  }

  createPlayerAttributes(player: Player) {
    const spanNombre = document.createElement("span");
    const spanAlias = document.createElement("span");
    const spanId = document.createElement("span");
    const spanBirthday = document.createElement("span");
    const textNombre = document.createTextNode(player.name);
    const textAlias = document.createTextNode(player.alias);
    const textId = document.createTextNode(player.id);
    const textBirthday = document.createTextNode(player.birthday);
  }

  createCard(player: Player) {
    // <label for="">hola:</label><span>hola</span>
    // this.createPlayerAttributes(player);
    const labelNombre = document.createElement("label");
    const labelAlias = document.createElement("label");
    const labelId = document.createElement("label");
    const labelBirthday = document.createElement("label");
    const textLabelNombre = document.createTextNode("Nombre: ");
    const textLabelAlias = document.createTextNode("Alias: ");
    const textLabelId = document.createTextNode("Id: ");
    const textLabelBirthday = document.createTextNode("Birthday: ");

    const spanNombre = document.createElement("span");
    const spanAlias = document.createElement("span");
    const spanId = document.createElement("span");
    const spanBirthday = document.createElement("span");
    spanNombre.className = "col s12 m12";
    spanAlias.className = "col s12 m12";
    spanId.className = "col s12 m12";
    spanBirthday.className = "col s12 m12";
    spanNombre.appendChild(textLabelNombre);
    spanAlias.appendChild(textLabelAlias);
    spanId.appendChild(textLabelId);
    spanBirthday.appendChild(textLabelBirthday);
    const textNombre = document.createTextNode(player.name);
    const textAlias = document.createTextNode(player.alias);
    const textId = document.createTextNode(player.id);
    const textBirthday = document.createTextNode(player.birthday);
    spanNombre.appendChild(textNombre);
    spanAlias.appendChild(textAlias);
    spanId.appendChild(textId);
    spanBirthday.appendChild(textBirthday);

    const divRow = document.createElement("div");
    divRow.classList.add("row", "card");
    divRow.addEventListener("onclick", function() {
      console.log("click");
    }); //TODO
    //creado un div con card
    const divPlayer = document.createElement("div");
    divPlayer.className = "col s6 m7";
    divPlayer.appendChild(spanId);
    divPlayer.appendChild(spanNombre);
    divPlayer.appendChild(spanAlias);
    divPlayer.appendChild(spanBirthday);
    divRow.appendChild(divPlayer);
    const divCard = document.createElement("div");
    divCard.classList.add("player-card");
    divPlayer.appendChild(divCard);

    // const divImage = _view.createElement(ELEMENTS.DIV);
    // const img = _view.createElement(ELEMENTS.IMG);
    // img.src = IMG.HEADER + Player.IMAGE;
    // img.setAttribute(ATTRIBUTES.WIDTH, IMG.WIDTH);
    // img.classList.add(IMG.CLASSNAME);
    // divImage.appendChild(img);
    // divImage.className = DIVIMAGE.CLASSNAME;
    // divRow.appendChild(divImage);
    const listCards: HTMLElement | null = GUI.LIST_CARDS;
    listCards.appendChild(divRow); //error?
  }
}
