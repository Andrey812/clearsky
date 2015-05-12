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
        'width_cells': 4,
        'height_cells': 4,
        'cell_width': 200,
        'cell_height': 200,
        'cell_text_length': 8,
        'cell_text_color': '#00aa00',
        'cell_text_typed_color': '#00ff00',
        'cell_text_font': '20px bold',
    },
    'pictures' : {
        'opts': {
            'path' : '../img/',
            'surface_width': 800,
            'surface_height': 800,
            'loading_wait_timer': 50
        },
        'list': {
            'map_cell' : {
                'sprites': ['map_cell'],
            },
            'enemy_heli' : {
                'sprites': ['enemy_heli_down', 'enemy_heli_up', 'enemy_heli_left', 'enemy_heli_right']
            },
            'enemy_missle' : {
                'sprites': ['enemy_missle']
            }
        }
    },
    'enemy': {
        'count': 1,             // Count of the enemies, attacking in the one time
        'speed': 4,             // Speed of the enemy (px/loop)
        'random_turn': 20,      // Chance of the turn in the current loop
        'random_fire': 8,       // Chance of the fire in the current loop
        'missle_speed': 12,     // Speed of the missle (px/loop)
        'loop_timer': 50,       // Process enemy timer (ms)
        'gate_height': 50,      // Height of the appearing and disappearing of enemies
        'appear_rate': 9,       // Chance of the enemy appear in the current loop
        'appear_margin': 100    // Left and right margin of the enemy's appearing
    }
};

