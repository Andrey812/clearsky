/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists description of the object - 'enemy' its methods and
    related common functions.

    The 'enemy' moves around the map and tries to attack the base of the player
    launching missles to the bottom of the map.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

// Make, move and delete enemies
function process_enemies() {

    enemies_count_handler();

    for (i in global.enemies) {
        var enemy = global.enemies[i];

        // Destroy
        if (enemy.destroyed) {
            delete global.enemies[i];
            continue;
        }

        // Detect hit
        if (global.field_hit) {
            if (global.field_hit.id == enemy.nested_field()) {
                enemy.destroyed = 1;
            }
        }

        if (!enemy.destroyed) {
            // Move
            if (enemy.y < params.enemy.gate_height) {
                delete global.enemies[i];
            }
            else {
                enemy.move();
            }
        }
    }
}

// Control consistent level of enemies according params
function enemies_count_handler() {
    var enemies_cnt = Object.keys(global.enemies).length;

    if (enemies_cnt < params.enemy.count && !gen_random(0, params.enemy.appear_rate)) {
        global.enemies[global.enemy_id++] = new enemy();
    }
}

// Enemy object
function enemy() {
    this.x = gen_random(params.enemy.appear_margin, global.map_width - params.enemy.appear_margin);
    this.y = params.enemy.gate_height;
    this.direction = 'down';
    this.img = get_picture_by_id('enemy_heli_down');
    this.fired = 0;
    this.destroyed = 0;

    // Release the missle
    this.fire = function() {
        var fire_point = get_picture_center(this.x, this.y, this.img);

        global.missles[global.missle_id++] = new missle(fire_point[0], fire_point[1]);
        this.fired = 1;
    }

    // Draw itself
    this.draw = function() {
        global.surface.drawImage(this.img, this.x, this.y);
    }

    // Move and fire
    this.move = function() {

        if (!this.fired && this.is_firezone() && !gen_random(0, params.enemy.random_fire)) {
            this.fire();
        }

        if (this.direction == 'down' && this.y > global.map_height - params.map.cell_height / 2)
        {
            this.direction = 'right';
            this.img = get_picture_by_id('enemy_heli_right');
        }

        if (this.direction == 'right' && this.x > global.map_width - params.enemy.appear_margin) {
            this.direction = 'up';
            this.img = get_picture_by_id('enemy_heli_up');
        }

        switch(this.direction) {
            case 'down':
                this.y += params.enemy.speed;
                break;
            case 'up':
                this.y -= params.enemy.speed;
                break;
            case 'right':
                this.x += params.enemy.speed;
                break;
            case 'left':
                this.x -= params.enemy.speed;
                break;
        }

        this.draw();
    }

    // Detect map's firezone
    this.is_firezone = function() {
        var t_brd = global.map_height - params.map.cell_height * 2; // top border
        var b_brd = global.map_height - params.map.cell_height; // bottom border

        if (this.y > t_brd && this.y < b_brd) {
            return 1;
        }
    }

    // Detect fields, where this object is nested
    this.nested_field = function() {
        return params.map.width_cells * parseInt(this.y / params.map.cell_height)
            + parseInt(this.x / params.map.cell_width);
    }
}
