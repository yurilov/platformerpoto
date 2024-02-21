import { config } from "../src/config/config";
import { LoaderScene } from "../src/scenes/loaderScene/LoaderScene";
import { SceneManager } from "../src/scenes/sceneManager/SceneManager";

const {gameHeight, gameWidth, backgroundColor} = config;

SceneManager.initialize(gameWidth, gameHeight, backgroundColor);
SceneManager.changeScene(new LoaderScene(SceneManager));
