var game = new Phaser.Game(400, 120, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
game.transparent = true;

function preload() {
   game.load.atlasJSONHash('bot', '../../assets/sprites/animation/running_bot.png', '../../assets/sprites/animation/running_bot.json');
   game.load.spritesheet('harry', '../../assets/sprites/charsets/Harry_potter_charset_4_by_nissemann123456789.png', 32, 32);
}

var bot, harry1, harry2;

function create() {
   //  This sprite is using a texture atlas for all of its animation data
   bot = game.add.sprite(200, 50, 'bot');

   //  Here we add a new animation called 'run'
   //  We haven't specified any frames because it's using every frame in the texture atlas
   bot.animations.add('run');

   //  And this starts the animation playing by using its key ("run")
   //  15 is the frame rate (15fps)
   //  true means it will loop when it finishes
   bot.animations.play('run', 15, true);
   
   harry1 = game.add.sprite(10, 10, 'harry');
   harry1.animations.add('walk', [0, 1, 2]);
   harry1.animations.play('walk', 5, true);
   
   harry2 = game.add.sprite(52, 10, 'harry');
   harry2.animations.add('walk', [0, 1, 2, 1]);
   harry2.animations.play('walk', 5, true);
}

function update() {
    bot.x -= 2;
    if (bot.x < -bot.width) {
        bot.x = game.world.width;
    }
}