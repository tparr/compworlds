var AM = new AssetManager();

AM.queueDownload("./img/title.png");
AM.queueDownload("./img/gameover.png");
AM.queueDownload("./img/level_win.png");

AM.queueDownload("./img/castlevania_background.png");
AM.queueDownload("./img/bruno.png");
AM.queueDownload("./img/sammy1.png");
AM.queueDownload("./img/f.png");
AM.queueDownload("./img/brainz.png");
AM.queueDownload("./img/pug.png");

AM.queueDownload("./img/avocado.png");
AM.queueDownload("./img/bacon.png");
AM.queueDownload("./img/beans.png");
AM.queueDownload("./img/bottle.png");
AM.queueDownload("./img/bread.png");
AM.queueDownload("./img/carrot.png");
AM.queueDownload("./img/cheese.png");
AM.queueDownload("./img/ham.png");
AM.queueDownload("./img/ketchup.png");
AM.queueDownload("./img/mayo.png");
AM.queueDownload("./img/mustard.png");
AM.queueDownload("./img/paper.png");
AM.queueDownload("./img/pepper.png");
AM.queueDownload("./img/tomato.png");
AM.queueDownload("./img/student.png");
AM.queueDownload("./img/teacher.png");
AM.queueDownload("./img/mini-boss.png");
//AM.queueDownload("./img/mini-boss2.png");
//AM.queueDownload("./img/mini-boss3.png");
AM.queueDownload("./img/professor_growler.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    flipTheTable(gameEngine);
    gameEngine.titleScreen();

});

var flipTheTable = function(gameEngine) {
  //set up level
  var background = new Background(gameEngine, AM.getAsset("./img/castlevania_background.png"));
  gameEngine.addEntity(background);
  gameEngine.addPlayer(new Bruno(gameEngine, AM.getAsset("./img/bruno.png"), background));
  gameEngine.addHud(new Hud(gameEngine, AM.getAsset("./img/brainz.png"), 3));

  var sStats = {d:1, h:3, t:1, s:2};
  var tStats = {d:2, h:5, t:2, s:1};
  var pStats = {d:3, h:1, t:0, s:4};
  var mStats = {d:2, h:10, t:3, s:0};
  var bStats = {d:3, h:20, t:4, s:0};

  //enemies
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/student.png"), 0, 0, 39, 64, 0.2, 6, true), 1000, 700, 20, sStats, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/student.png"), 0, 0, 39, 64, 0.2, 6, true), 1810, 700, 20, sStats, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/student.png"), 0, 0, 39, 64, 0.2, 6, true), 2354, 700, 20, sStats, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/student.png"), 0, 0, 39, 64, 0.2, 6, true), 3652, 700, 20, sStats, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/student.png"), 0, 0, 39, 64, 0.2, 6, true), 6086, 297, 20, sStats, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/student.png"), 0, 0, 39, 64, 0.2, 6, true), 6454, 297, 20, sStats, true));

  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/teacher.png"), 0, 0, 90, 105, 0.2, 4, true), 3490, 650, 45, tStats, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/teacher.png"), 0, 0, 90, 105, 0.2, 4, true), 4958, 650, 45, {d:2, h:7, t:2, s:3}, true));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/teacher.png"), 0, 0, 90, 105, 0.2, 4, true), 6510, 650, 45, tStats, true));
  //this.animation = new Animation(ASSET_MANAGER.getAsset("./img/teacher.png"), 0, 0, 90, 105, 0.2, 4, true, true);

  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/pug.png"), 0, 0, 80, 62, 0.2, 5, true), 2742, 500, 40, pStats, false));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/pug.png"), 0, 0, 80, 62, 0.2, 5, true), 4054, 500, 40, pStats, false));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/pug.png"), 0, 0, 80, 62, 0.2, 5, true), 5000, 500, 40, pStats, false));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/pug.png"), 0, 0, 80, 62, 0.2, 5, true), 6954, 500, 40, pStats, false));

  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/mini-boss.png"), 653, 3.5, 135, 153, 0.31, 5, true), 4586, 600, 76, mStats, false));
  gameEngine.addEntity(new Enemy(gameEngine, background, new Animation(AM.getAsset("./img/professor_growler.png"), 0, 0, 160, 160, 0.5, 3, true), 8000, 600, 80, bStats, true));

  //items
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/avocado.png"), 4742, 600, 2));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/bacon.png"), 40));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/beans.png"), 7000, 600, 5));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/bottle.png"), 400, 600, 1));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/bottle.png"), 5834, 340, 1));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/bread.png"), 160));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/carrot.png"), 6338, 600, 0));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/carrot.png"), 5354, 600, 0));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/cheese.png"), 250));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/ham.png"), 290));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/ketchup.png"), 3222, 600, 3));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/mayo.png"), 370));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/mustard.png"), 1506, 600, 4));
  gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/mustard.png"), 6354, 211, 4));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/paper.png"), 450));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/pepper.png"), 490));
  // gameEngine.addEntity(new Item(gameEngine, background, AM.getAsset("./img/tomato.png"), 530));

  //platforms

  gameEngine.addPlatform(new Platform(gameEngine, background, 0, 760, 11000, 55));
  gameEngine.addPlatform(new Platform(gameEngine, background, 5825, 490, 190, 55));
  gameEngine.addPlatform(new Platform(gameEngine, background, 6085, 361, 630, 55));
  gameEngine.addPlatform(new Platform(gameEngine, background, 6785, 490, 380, 55));
  gameEngine.addPlatform(new Platform(gameEngine, background, 8645, 360, 1080, 55));
  console.log("All Done!");
};

function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration, frames, loop) {
    this.spriteSheet = spriteSheet;
    this.startX = startX;
    this.startY = startY;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
}

Animation.prototype.setFireUp = function() {
  this.frameDuration = this.frameDuration / 2;
  this.totalTime = this.frameDuration * this.frames;
}

Animation.prototype.resetFireUp = function() {
  this.frameDuration = this.frameDuration * 2;
  this.totalTime = this.frameDuration * this.frames;
}

Animation.prototype.drawStill = function (ctx, xindex, yindex, x, y, direction) {
        if(direction) {ctx.save(); ctx.scale(-1, 1);
    ctx.drawImage(this.spriteSheet,
                   xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                   this.frameWidth, this.frameHeight,
                   x*-1 - this.frameWidth, y,
                   this.frameWidth,
                   this.frameHeight);
    ctx.restore();
    } else {
        ctx.drawImage(this.spriteSheet,
                   xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
                   this.frameWidth, this.frameHeight,
                   x, y,
                   this.frameWidth,
                   this.frameHeight);
    }
}

Animation.prototype.advanceFrame = function(tick) {
  this.elapsedTime += tick;
  if (this.isDone()) {
      if (this.loop) this.elapsedTime = 0;
  }
}

Animation.prototype.drawFrame = function (tick, ctx, x, y, direction) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    // if (frame > 9) { //total fram count
    //     frame = 18 - frame;
    // }

    //if walking
    //if ghost

    //if left

    xindex = frame % this.frames; //number of frames per line
    yindex = this.startY;//Math.floor(frame / 9); //advance to next line if necessary

    //console.log(frame + " " + xindex + " " + yindex);
    if(direction) {ctx.save(); ctx.scale(-1, 1);
    ctx.drawImage(this.spriteSheet,
                   xindex * this.frameWidth + this.startX, yindex * this.frameHeight + this.startY,  // source from sheet
                   this.frameWidth, this.frameHeight,
                   x*-1 - this.frameWidth, y,
                   this.frameWidth,
                   this.frameHeight);
    ctx.restore();
    } else {
        ctx.drawImage(this.spriteSheet,
                   xindex * this.frameWidth + this.startX, yindex * this.frameHeight + this.startY,  // source from sheet
                   this.frameWidth, this.frameHeight,
                   x, y,
                   this.frameWidth,
                   this.frameHeight);
    }
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}
