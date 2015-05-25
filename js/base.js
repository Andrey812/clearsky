/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists object 'base', its methods and related common functions.

    The 'base' is a player's area at the bottom of the map
    which must be defended from enemies and missiles.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

function base_initialize() {
    global.base = new base();
}

function base() {

    this.hit_state = 0;

    // Calculate base's line coordinates
    this.x = params.map.field_width * params.map.width_fields;
    this.y = (params.map.height_fields * params.map.field_height)
        - params.map.field_height / params.base.field_part;

    global.base_strike_y = this.y;

    // Prepare base's line picture
    global.surface.strokeStyle = params.base.color;
    global.surface.lineWidth = params.base.width;
    global.surface.beginPath();
    global.surface.moveTo(params.base.margin, this.y);
    global.surface.lineTo(this.x - params.base.margin, this.y);

    //Set base health
    this.health = params.base.health;

    this.draw = function() {
        global.surface.stroke();
        if (this.hit_state) {
            this.hit_state = 0;
            global.surface.strokeStyle = params.base.color;
        }
    }

    this.hit = function() {
        global.surface.strokeStyle = '#00ff00';
        this.hit_state = 1;

        this.health--;

        if (this.health == 0) {
            alert('GAME OVER');               // TODO
            this.health = params.base.health; // TODO
        }
    }

    this.unhit = function() {
        global.surface.strokeStyle = params.base.color;
    }
}


