export default class Card {
  constructor(suit: string, value: string, texture: string) {
    if (texture == "") {
      texture = value;
    }

    this.suit = suit;
    this.value = value;
    this.texture = suit + texture;
  }

  public suit: string;
  public value: string;
  public texture: string;
}
