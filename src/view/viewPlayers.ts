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
  createCard(Player: Player) {
    const divRow = document.createElement("div");
    divRow.classList.add("row", "card");
    divRow.addEventListener("onclick", function() {
      console.log("click");
    }); //TODO
    //creado un div con card
    const divPlayer = document.createElement("div");
    divPlayer.className = "col s8 m7";
    divRow.appendChild(divPlayer);

    const divCard = document.createElement("div");
    divCard.classList.add("player-card");
    divPlayer.appendChild(divCard);

    const p = document.createElement("p");
    const pText = document.createTextNode("Prueba");

    p.appendChild(pText);
    divPlayer.appendChild(p);

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
