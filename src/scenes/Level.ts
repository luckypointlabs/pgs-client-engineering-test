// You can write more code here
import Phaser from "phaser";
import Card from "../components/Card";
/* START OF COMPILED CODE */
const Suit = {
  spades: "spades",
  diamonds: "diamonds",
  hearts: "hearts",
  clubs: "clubs",
};

const Rank = {
  r2: "2",
  r3: "3",
  r4: "4",
  r5: "5",
  r6: "6",
  r7: "7",
  r8: "8",
  r9: "9",
  r10: "10",
  rJ: "J",
  rQ: "Q",
  rK: "K",
  rA: "A",
};

type CardData = {
  suit: string;
  rank: string;
};

export default class Level extends Phaser.Scene {
  constructor() {
    super("Level");

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // rectangle_1
    const rectangle_1 = this.add.rectangle(518, 305, 128, 128);
    rectangle_1.scaleX = 4.244992177953161;
    rectangle_1.scaleY = 2.049354714015962;
    rectangle_1.isFilled = true;

    // dealCards_text
    const dealCards_text = this.add.text(59, 282, "", {});
    dealCards_text.text = "Deal Cards";
    dealCards_text
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        dealCards_text.setColor("#ff69b4");
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        dealCards_text.setColor("#fff");
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
        this.dealCards();
      });

    // deck_sprite
    const deck_sprite = this.add.sprite(396, 292, "cards", "back");
    deck_sprite.scaleX = 0.37137935898347363;
    deck_sprite.scaleY = 0.3542052051861394;

    // cardsRemaining_text
    const cardsRemaining_text = this.add.text(389, 383, "", {});
    cardsRemaining_text.text = "Cards Remaining";
    cardsRemaining_text.setStyle({ color: "#0b0b0bff" });

    // sprite_1
    const cardPile = this.add.sprite(559, 293, "_MISSING");
    cardPile.scaleX = 3.062500079446789;
    cardPile.scaleY = 3.8749998849520755;

    // gameOver_text
    const gameOver_text = this.add.text(370, 247, "", {});
    gameOver_text.scaleX = 1.5862068965517242;
    gameOver_text.scaleY = 2.799809717956295;
    gameOver_text.text = "GAME OVER";
    gameOver_text.setStyle({ color: "#f90000ff", fontSize: "26px" });
    gameOver_text.visible = false;

    this.events.emit("scene-awake");
  }

  /* START-USER-CODE */

  // Write your code here

  create() {
    this.editorCreate();
  }

  dealCards() {
    // TODO: Should deal cards randomly to the scene in a pile in the render zone
    // TODO: If a card has been dealt it should not show up again until all other cards have been dealt
    // TODO: The player should be able to see the remaining number of cards in the deck
    // TODO: Once all other cards have been dealt the game should display the game over text
    // Bonus: Click on the card back to the deal cards
    // Bonus: Restart the game
    // Bonus: Click and draging on an individual card will allow you to move the card
    // Bonus: Double clicking on a card will flip the card over revealing the back of the card

    window.alert("I HAVE BEEN CLICKED");

    let newCard = this.getCardObject(this.getRandomCardData());
    if (newCard) {
      this.add
        .sprite(559, 293, "cards", newCard.texture)
        .setScale(0.37137935898347363, 0.3542052051861394);
    }
  }

  getRandomCardData() {
    // TODO: Should deal cards randomly without repeating cards
    // Should return a cardData object {rank: string, suit: string}
    let randomCardData: CardData = { rank: Rank.r3, suit: Suit.diamonds };
    return randomCardData;
  }

  /**
   * Creates a new card with card data
   * @param {*} cardData
   * @returns a new Card object based on the given cardData
   */
  getCardObject(cardData: CardData) {
    if (!cardData) return;

    var val = 0;
    var texture = "";
    switch (cardData.rank) {
      case Rank.r2:
        val = 2;
        break;
      case Rank.r3:
        val = 3;
        break;
      case Rank.r4:
        val = 4;
        break;
      case Rank.r5:
        val = 5;
        break;
      case Rank.r6:
        val = 6;
        break;
      case Rank.r7:
        val = 7;
        break;
      case Rank.r8:
        val = 8;
        break;
      case Rank.r9:
        val = 9;
        break;
      case Rank.r10:
        val = 10;
        break;
      case Rank.rJ:
        val = 10;
        texture = "Jack";
        break;
      case Rank.rQ:
        val = 10;
        texture = "Queen";
        break;
      case Rank.rK:
        val = 10;
        texture = "King";
        break;
      case Rank.rA:
        val = 11;
        texture = "Ace";
        break;
    }
    return new Card(cardData.suit, val.toString(), texture);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
