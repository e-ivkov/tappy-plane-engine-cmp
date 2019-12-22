class Main extends egret.DisplayObjectContainer {

    static readonly HORIZONTAL_SPEED = 5;
    
    private _backgrounds:egret.Bitmap[];

    public constructor() {
        super();
        this._backgrounds = new Array();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        egret.lifecycle.addLifecycleListener((context) => {
            context.onUpdate = () => {

                this._backgrounds.forEach(bg => {
                    bg.x -= Main.HORIZONTAL_SPEED;
                });
                this.loopBackgrounds();

            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        const result = await RES.getResAsync("description_json")
    }

    private async loadResource() {
        try {
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload", 0, loadingView);
            this.stage.removeChild(loadingView);
        }
        catch (e) {
            console.error(e);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private createGameScene() {
        this._backgrounds.push(this.createBackground(0));
        this._backgrounds.push(this.createBackground(1));
        this._backgrounds.push(this.createTopBackgroundAddition(0));
        this._backgrounds.push(this.createTopBackgroundAddition(1));
        this._backgrounds.push(this.createBottomBackgroundAddition(0));
        this._backgrounds.push(this.createBottomBackgroundAddition(1));

        this._backgrounds.forEach((bg, i) => {
            this.addChild(bg);
        });
    }

    private createBackground(i: number) : egret.Bitmap {
        let bg = this.createBitmapByName("background_png");
        bg.x = bg.width * i;

        return bg;
    }

    private createTopBackgroundAddition(i: number) : egret.Bitmap {
        let stageW = this.stage.stageWidth;
        
        let bg = this.createBitmapByName("groundGrass_png");
        bg.x = bg.width * i;
        bg.scaleY = -1;
        bg.y = bg.height;
        return bg;
    }

    private createBottomBackgroundAddition(i: number) : egret.Bitmap {
        let stageH = this.stage.stageHeight;
        
        let bg = this.createBitmapByName("groundGrass_png");
        bg.x = bg.width * i;
        bg.y = stageH - bg.height;
        return bg;
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    private loopBackgrounds() {
        this._backgrounds.forEach((bg, i) => {
            if(bg.x <= -bg.width) {
                // Moving background forward to a double of its width
                // Only works when background is wider than the screen
                // Also possible to accumulate integral error (constant additions instead of hard assignment)
                bg.x += bg.width * 2;
            }
        });
    }
}