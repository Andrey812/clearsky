/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists object 'hud', its methods and related common functions.

    This object shows the status of the game in the right side of the screen.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

function hud_initialize() {
    global.hud = new hud();
    global.hud.draw();
}

function hud() {
    this.draw = function() {

        this.clear();

        // TODO: Temp helth display
        global.surface.fillStyle = params.hud.text_color;
        global.surface.fillText('HEALTH: ' + global.base.health, 810, 25);
    }

    this.clear = function() {
        global.surface.clearRect(810, 0, 1000, 800);
    }
}
