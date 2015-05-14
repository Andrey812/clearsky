/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists description of the object - 'missile' its methods and
    related common functions.

    The missile will is launched by object 'enemy'. It moves to the bottom
    of the map and makes damage of the player's base.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

// Move and delete missiles
function process_missiles() {
    for (i in global.missiles) {
        var missile = global.missiles[i];
        if (missile.y > global.map_height - 20)
        {
            delete global.missiles[i];
        }
        else {
            missile.move();
        }
    }
}

/* Enemy missile object */
function missile(x, y) {

    this.img = get_picture_by_id('enemy_missile');

    this.x = x - this.img.width / 2;
    this.y = y - this.img.height / 2;

    this.draw = function() {
        global.surface.drawImage(this.img, this.x, this.y);
    }

    this.move = function() {
        this.y += params.enemy.missile_speed;
        this.draw();
    }
};
