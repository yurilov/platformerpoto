import { Container, Graphics, Loader } from "pixi.js";
import { assets } from "../../../resources/assets";
import { LobbyScene } from "../lobbyScene/LobbyScene";
import { IScene, SceneManager } from "../sceneManager/SceneManager";

export class LoaderScene extends Container implements IScene
{
	protected _loaderBar: Container;
	protected _loaderBarBorder: Graphics;
	protected _loaderBarFill: Graphics;
	protected _manager: SceneManager;

	public constructor(manager: SceneManager)
	{
		super();

		this._manager = manager;
		const loaderBarWidth = SceneManager.width * 0.8;

		this._loaderBarFill = new Graphics();
		this._loaderBarFill.beginFill(0x008800, 1);
		this._loaderBarFill.drawRect(0, 0, loaderBarWidth, 50);
		this._loaderBarFill.endFill();
		this._loaderBarFill.scale.x = 0;

		this._loaderBarBorder = new Graphics();
		this._loaderBarBorder.lineStyle(10, 0x0, 1);
		this._loaderBarBorder.drawRect(0, 0, loaderBarWidth, 50);

		this._loaderBar = new Container();
		this._loaderBar.addChild(this._loaderBarFill);
		this._loaderBar.addChild(this._loaderBarBorder);
		this._loaderBar.position.x =
			(SceneManager.width - this._loaderBar.width) / 2;
		this._loaderBar.position.y =
			(SceneManager.height - this._loaderBar.height) / 2;
		this.addChild(this._loaderBar);

		Loader.shared.add(assets);

		Loader.shared.onProgress.add(this.downloadProgress, this);
		Loader.shared.onComplete.once(this.gameLoaded, this);

		Loader.shared.load();
	}

	public update(): void
	{
		// empty
	}

	protected downloadProgress(loader: Loader): void
	{
		this._loaderBarFill.scale.x = loader.progress / 100;
	}

	protected gameLoaded(): void
	{
		SceneManager.changeScene(
			new LobbyScene(SceneManager)
		);
	}
}
