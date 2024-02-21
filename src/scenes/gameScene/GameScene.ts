import { Container } from "pixi.js";
import { IScene, SceneManager } from "../sceneManager/SceneManager";

export class GameScene extends Container implements IScene
{
	protected readonly _manager: SceneManager;

	public constructor(manager: SceneManager)
	{
		super();

		this._manager = manager;

		this.compose();
	}

	public update(): void
	{
		// empty
	}

	protected compose(): void
	{
		// empty
	}
}
