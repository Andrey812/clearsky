/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists description of the object - 'missle' its methods and
    related common functions.

    The missle will is launched by object 'enemy'. It moves to the bottom
    of the map and makes damage of the player's base.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

// Move and delete missles
function process_missles() {
    for (i in global.missles) {
        var missle = global.missles[i];
        if (missle.y > global.map_height - 20)
        {
            delete global.missles[i];
        }
        else {
            missle.move();
        }
    }
}

/* Enemy missle object */
function missle(x, y) {

    this.img = get_picture_by_id('enemy_missle');

    this.x = x - this.img.width / 2;
    this.y = y - this.img.height / 2;

    this.draw = function() {
        global.surface.drawImage(this.img, this.x, this.y);
    }

    this.move = function() {
        this.y += params.enemy.missle_speed;
        this.draw();
    }
};
