import { Container, Loader, Sprite } from "pixi.js";
import { TitleStyle } from "../../utils/titleStyle/TitleStyle";
import { GameScene } from "../gameScene/GameScene";
import { IScene, SceneManager } from "../sceneManager/SceneManager";
import { StartGameField } from "./startGameField/StartGameField";

export class LobbyScene extends Container implements IScene
{
	protected readonly _manager: SceneManager;
	protected readonly _startGameField: StartGameField;

	public constructor(manager: SceneManager)
	{
		super();

		this._manager = manager;
		const textStile = new TitleStyle(SceneManager.width);

		this._startGameField = new StartGameField(
			SceneManager.width,
			SceneManager.height,
			textStile
		);
		this.setup();
		this._startGameField.addListener('click', () =>
		{
			SceneManager.changeScene(new GameScene(SceneManager))
		})
	}

	public update(): void
	{
		// empty
	}

	protected setup(): void
	{
		const textures =
			Loader.shared.resources["environment"].textures;

		if (textures)
		{
			const backgroundTexture = textures["background.png"];
			const backgroundImg = new Sprite(backgroundTexture);
			this.addChild(backgroundImg);
		}

		this.addChild(this._startGameField);
	}
}
