import { Text } from "pixi.js";
import { TitleStyle } from "../../../utils/titleStyle/TitleStyle";

export class StartGameField extends Text
{
  protected _gameWidth: number;
  protected _gameHeight: number;

  constructor(gameWidth: number, gameHeight: number, style: TitleStyle)
  {
    super("Start Game", style);

    this._gameWidth = gameWidth;
    this._gameHeight = gameHeight;

    this.setup();
  }

  private setup(): void
  {
    this.interactive = true;
    this.buttonMode = true;
    this.position.x = this._gameWidth / 2 - this.width / 2;
    this.position.y = this._gameHeight / 2 - this.height / 2;
  }
}
