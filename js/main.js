/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists game loaders, loop control functions and common structures,
    used for the playing process.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

/*
Application globals
Several key/value pairs will be added
to this in the process of application work
*/
var global = {
    'pictures'              : {},           // Collection of the pictures
    'enemies'               : {},           // Collection of the objects, enemies
    'missiles'              : {},           // Collection of the objects, missiles
    'common_pictures_cnt'   : 0,            // Count of the pictures
    'pictures_loaded_cnt'   : 0,            // Count of the loaded pictures
    'enemy_id'              : 0,            // ID of the enemy in the collection of the enemies
    'missile_id'            : 0             // ID of the missile in the collection of the missiles
}

load_pictures();

// Wait for picture loading
var pic_load_waiter = setInterval(function () {
    if (global.pictures_loaded_cnt == global.common_pictures_cnt) {

        initial_start();
        clearInterval(pic_load_waiter);
    };
}, params.pictures.opts.loading_wait_timer);

// Initial start of the screen (draw map and set up state of the engine)
function initial_start() {

    base_initialize();
    map_initialize();
    hud_initialize();

    main_loop();

    // Key press detection
    addEventListener("keypress", function(e){
        check_typed(String.fromCharCode(e.keyCode));
    });
}

function main_loop() {

    global.flow_timer = setInterval(function() {

        clear_screen();

        global.base.draw();

        process_enemies();
        process_missiles();

        process_map();

    }, params.enemy.loop_timer);
}

function gen_random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gen_random_bool() {
    return (Math.floor(Math.random() * 9) % 2);
}
