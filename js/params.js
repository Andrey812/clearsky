/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.

    This module consists constants and default values for the game.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

/* Params and values */
var params = {
    'map' : {
        'width_fields'              : 4,            // Horizontal count of the map's fields
        'height_fields'             : 4,            // Vertical count of the map's fields
        'field_width'               : 200,          // Width of the map's field in pixels
        'field_height'              : 200,          // Height of the map's field in pixels
        'field_text_length'         : 4,            // Count of the chars in the field's text
        'field_text_color'          : '#00aa00',    // Fields text color (hex)
        'field_text_typed_color'    : '#00ff00',    // Field typed char's text color (hex)
        'field_text_font'           : '20px bold',  // Size (px) and type of the field's text font
    },
    'pictures' : {
        'opts': {
            'path'                  : '../img/',    // Path to the dir with pictures
            'surface_width'         : 800,          // Map's surface width (px)
            'surface_height'        : 800,          // Map's surface height (px)
            'loading_wait_timer'    : 50            // Timer of waiting of the picture's loads cycle
        },
        'list': {
            'map_field' : {
                'sprites': ['map_field', 'map_field_strike'],
            },
            'enemy_heli' : {
                'sprites': ['enemy_heli_down', 'enemy_heli_up', 'enemy_heli_left', 'enemy_heli_right']
            },
            'enemy_missile' : {
                'sprites': ['enemy_missile']
            }
        }
    },
    'enemy': {
        'count'         : 2,    // Count of the enemies, attacking in the one time
        'speed'         : 4,    // Speed of the enemy (px/loop)
        'random_turn'   : 20,   // Chance of the turn in the current loop
        'random_fire'   : 8,    // Chance of the fire in the current loop
        'missile_speed' : 12,   // Speed of the missile (px/loop)
        'loop_timer'    : 50,   // Process game loop timer (ms)
        'gate_height'   : 50,   // Height of the appearing and disappearing of enemies
        'appear_rate'   : 9,    // Chance of the enemy appear in the current loop
        'appear_margin' : 100   // Left and right margin of the enemy's appearing
    },
    'base' : {
        'color'         : '#004400',    // Color of the base's line
        'width'         : 3,            // Width of the base's line (px)
        'health'        : 3,            // Count of the player's base health
        'margin'        : 4,            // Shift accroding left and right map's bordirs (px)
        'field_part'    : 4             // Height of the base's line in the bottom field of the map
    }
};

