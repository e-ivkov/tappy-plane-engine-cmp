var __reflect=this&&this.__reflect||function(t,e,n){t.__class__=e,n?n.push(e):n=[e],t.__types__=t.__types__?n.concat(t.__types__):n},__extends=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);n.prototype=e.prototype,t.prototype=new n},__awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,a){function o(t){try{c(i.next(t))}catch(e){a(e)}}function s(t){try{c(i["throw"](t))}catch(e){a(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(o,s)}c((i=i.apply(t,e||[])).next())})},__generator=this&&this.__generator||function(t,e){function n(t){return function(e){return i([t,e])}}function i(n){if(r)throw new TypeError("Generator is already executing.");for(;c;)try{if(r=1,a&&(o=a[2&n[0]?"return":n[0]?"throw":"next"])&&!(o=o.call(a,n[1])).done)return o;switch(a=0,o&&(n=[0,o.value]),n[0]){case 0:case 1:o=n;break;case 4:return c.label++,{value:n[1],done:!1};case 5:c.label++,a=n[1],n=[0];continue;case 7:n=c.ops.pop(),c.trys.pop();continue;default:if(o=c.trys,!(o=o.length>0&&o[o.length-1])&&(6===n[0]||2===n[0])){c=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){c.label=n[1];break}if(6===n[0]&&c.label<o[1]){c.label=o[1],o=n;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(n);break}o[2]&&c.ops.pop(),c.trys.pop();continue}n=e.call(t,c)}catch(i){n=[6,i],a=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,a,o,s,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},LoadingUI=function(t){function e(){var e=t.call(this)||this;return e.createView(),e}return __extends(e,t),e.prototype.createView=function(){this.textField=new egret.TextField,this.addChild(this.textField),this.textField.y=300,this.textField.width=480,this.textField.height=100,this.textField.textAlign="center"},e.prototype.onProgress=function(t,e){this.textField.text="Loading..."+t+"/"+e},e}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var Main=function(t){function e(){var e=t.call(this)||this;return e._backgrounds=new Array,e._player=new Plane,e._obstacles=new Array,e._scoreText=new ScoreText,e._score=0,e.addEventListener(egret.Event.ADDED_TO_STAGE,e.onAddToStage,e),e}return __extends(e,t),e.prototype.changeState=function(t){null!=this._state&&this._state.exit(),this._state=t,t.enter()},e.prototype.onAddToStage=function(t){egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()},this.runGame()["catch"](function(t){console.log(t)}),this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onClick,this)},e.prototype.onClick=function(t){this._state.onClick()},e.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[4,RES.getResAsync("description_json")];case 2:return t=e.sent(),[2]}})})},e.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var t,e;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),t=new LoadingUI,this.stage.addChild(t),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload",0,t)];case 2:return n.sent(),this.stage.removeChild(t),[3,4];case 3:return e=n.sent(),console.error(e),[3,4];case 4:return[2]}})})},e.prototype.createGameScene=function(){var t=this;this._backgrounds.push(this.createBackground(0)),this._backgrounds.push(this.createBackground(1)),this._backgrounds.push(this.createTopBackgroundAddition(0)),this._backgrounds.push(this.createTopBackgroundAddition(1)),this._backgrounds.push(this.createBottomBackgroundAddition(0)),this._backgrounds.push(this.createBottomBackgroundAddition(1)),this._backgrounds.forEach(function(e,n){t.addChild(e)}),this._player.init("planeGreen1_png",this),this.addChild(this._player);var e=this._scoreText;e.x=.5*this.stage.stageWidth,e.y=25,e.setNumber(0),this.addChild(e),this.changeState(new PreGameState(this)),egret.lifecycle.addLifecycleListener(function(e){e.onUpdate=function(){t._state.update()}})},e.prototype.createBackground=function(t){var n=e.createBitmapByName("background_png");return n.x=n.width*t,n},e.prototype.createTopBackgroundAddition=function(t){var n=(this.stage.stageWidth,e.createBitmapByName("groundGrass_png"));return n.x=n.width*t,n.scaleY=-1,n.y=n.height,n},e.prototype.createBottomBackgroundAddition=function(t){var n=this.stage.stageHeight,i=e.createBitmapByName("groundGrass_png");return i.x=i.width*t,i.y=n-i.height,i},e.prototype.createObstacle=function(){var t=new Obstacle("rockGrass_png",this);return t},e.createBitmapByName=function(t){var e=new egret.Bitmap,n=RES.getRes(t);return e.texture=n,e},e.prototype.loopBackgrounds=function(){this._backgrounds.forEach(function(t,e){t.x<=-t.width&&(t.x+=2*t.width)})},e.prototype.updateScoreText=function(){this._scoreText.setNumber(this._score)},e.prototype.increaseScore=function(){this._score+=1,this.updateScoreText()},e.GRAVITY=.2,e.HORIZONTAL_SPEED=5,e}(egret.DisplayObjectContainer);__reflect(Main.prototype,"Main");var Obstacle=function(t){function e(e,n){var i=t.call(this)||this;i._alreadyHitOrPassed=!1;var r=Main.createBitmapByName(e),a=new egret.Shape;return a.graphics.beginFill(15158332),a.graphics.drawRect(0,0,r.width,r.height),a.graphics.endFill(),i._hitbox=a,i._image=r,i.x=n.stage.stageWidth,Math.random()>.5?(i.scaleY=-1,i.y=r.height):i.y=n.stage.stageHeight-r.height,a.alpha=0,i.addChild(a),i.addChild(i._image),i}return __extends(e,t),e.prototype.checkPass=function(t){return!this._alreadyHitOrPassed&&t>this.x},e.prototype.checkCollision=function(t,e){return this._hitbox.hitTestPoint(t,e,!1)},e.prototype.setAsUsed=function(){this._alreadyHitOrPassed=!0},e}(egret.DisplayObjectContainer);__reflect(Obstacle.prototype,"Obstacle");var Plane=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.init=function(t,e){this._initialized=!0,this._main=e,this._ySpeed=0;var n=Main.createBitmapByName(t);n.anchorOffsetX=.5*n.width,n.anchorOffsetY=.5*n.height,this.x=.5*this._main.stage.stageWidth,this.y=.5*this._main.stage.stageHeight,this._image=n,this.addChild(this._image)},e.prototype.update=function(){this._initialized&&(this.y-=this._ySpeed,(this.y<70||this.y>this._main.stage.stageHeight-70)&&this._main.changeState(new EndState(this._main)),this._ySpeed-=Main.GRAVITY)},e.prototype.jump=function(){var t=5;this._ySpeed=t},e}(egret.DisplayObjectContainer);__reflect(Plane.prototype,"Plane");var DebugPlatform=function(){function t(){}return t.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2,{nickName:"username"}]})})},t.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(t){return[2]})})},t}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var ScoreText=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setNumber=function(t){var e=this;this.removeChildren();var n=t.toString(10).split("");n.forEach(function(t,n){var i=Main.createBitmapByName("number"+t+"_png");i.x=n*i.width+5,e.addChild(i)})},e}(egret.DisplayObjectContainer);__reflect(ScoreText.prototype,"ScoreText");var SomeState=function(){function t(t){this._main=t}return t}();__reflect(SomeState.prototype,"SomeState");var PreGameState=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.update=function(){},e.prototype.onClick=function(){this._main.changeState(new GameState(this._main))},e.prototype.enter=function(){var t=this._main;t._score=0,t.updateScoreText(),t._player.y=.5*t.stage.stageHeight,t._player._ySpeed=0;var e=function(e){t.removeChild(e)};t._obstacles.forEach(e),t._obstacles=new Array;var n=null==this._getReadyCaption?Main.createBitmapByName("textGetReady_png"):this._getReadyCaption;this._getReadyCaption=n,n.anchorOffsetX=.5*n.width,n.x=.5*this._main.stage.stageWidth,n.y=25,this._main.addChild(n)},e.prototype.exit=function(){this._main.removeChild(this._getReadyCaption)},e}(SomeState);__reflect(PreGameState.prototype,"PreGameState");var GameState=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.SPAWN_OBSTACLE_EVERY=400,e}return __extends(e,t),e.prototype.update=function(){var t=this._main,e=function(t){return t.x-=Main.HORIZONTAL_SPEED};if(t._backgrounds.forEach(e),t._obstacles.forEach(e),this._lastSpawnedObstacle<=0){var n=new Obstacle("rockGrass_png",t);t._obstacles.push(n),t.addChild(n),this._lastSpawnedObstacle=this.SPAWN_OBSTACLE_EVERY}this.checkObstacles(t._obstacles),t.loopBackgrounds(),t._player.update(),this._lastSpawnedObstacle-=Main.HORIZONTAL_SPEED},e.prototype.onClick=function(){this._main._player.jump()},e.prototype.enter=function(){this._lastSpawnedObstacle=0},e.prototype.exit=function(){},e.prototype.checkObstacles=function(t){var e=this,n=this._main._player,i=function(t){return t.checkPass(n.x)?(t.setAsUsed(),void e._main.increaseScore()):void(t.checkCollision(n.x,n.y)&&(t.setAsUsed(),e._main.changeState(new EndState(e._main))))};t.forEach(i)},e}(SomeState);__reflect(GameState.prototype,"GameState");var EndState=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.update=function(){},e.prototype.onClick=function(){this._main.changeState(new PreGameState(this._main))},e.prototype.enter=function(){var t=null==this._gameOverCaption?Main.createBitmapByName("textGameOver_png"):this._gameOverCaption;this._gameOverCaption=t,t.anchorOffsetX=.5*t.width,t.x=.5*this._main.stage.stageWidth,t.y=.5*this._main.stage.stageHeight,this._main.addChild(t)},e.prototype.exit=function(){this._main.removeChild(this._gameOverCaption)},e}(SomeState);__reflect(EndState.prototype,"EndState");