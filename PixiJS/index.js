var gameWidth = 800;
var gameHeight = 460;

var ground;
//Create a Pixi Application
let app = new PIXI.Application({ width: gameWidth, height: gameHeight, antialias: true });

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

PIXI.loader
    .add("background", "../Assets/PNG/background.png")
    .add("ground", "../Assets/PNG/groundGrass.png")
    .load(setup);

function setup() {

    let resources = PIXI.loader.resources;

    let background = new PIXI.Sprite(resources.background.texture);
    app.stage.addChild(background);

    let groundTex = resources.ground.texture;
    let tileW = groundTex.width;
    ground = new PIXI.TilingSprite(groundTex,gameWidth + tileW, groundTex.height);
    ground.tileW = tileW;
    ground.x = shiftGroundX(ground, Math.random() * tileW);
    ground.y = gameHeight - groundTex.height;
    app.stage.addChild(ground);

    upperground = new PIXI.TilingSprite(groundTex,gameWidth + tileW, groundTex.height);
    upperground.tileW = tileW;
    upperground.x = shiftGroundX(upperground, Math.random() * tileW);
    upperground.y = groundTex.height;
    upperground.scale.y = -1;
    app.stage.addChild(upperground);
}

function shiftGroundX(ground, deltaX){
    return (ground.x - deltaX) % ground.tileW;
}