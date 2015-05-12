/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.

    The module consists methods for working with game graphics.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

// Clear canvas
function clear_screen() {
    global.surface.clearRect(0, 0,
       params.pictures.opts.surface_width, params.pictures.opts.surface_height );
}

// Load all pictures, described in the params
function load_pictures() {

    // Initialize surface
    global.surface = document.getElementById("map").getContext("2d");
    global.surface.font = params.map.cell_text_font,

    // Calculate width and height of the map in pixels
    global.map_width = params.map.width_cells * params.map.cell_width;
    global.map_height = params.map.height_cells * params.map.cell_height;

    // Load pictures
    for (i in params.pictures.list) {

        // Splitting by sprites
        for (si in params.pictures.list[i].sprites) {
            var pic_name = params.pictures.list[i].sprites[si];

            global.pictures[pic_name] = new Image();
            global.pictures[pic_name].src = params.pictures.opts.path + pic_name + '.png';

            // Flag of picture loaded
            global.pictures[pic_name].addEventListener('load', function(){
                global.pictures_loaded_cnt++;
            });

            // Increment count of pictures
            global.common_pictures_cnt++;
        }
    }
}

// Return id in the store of the pictures
function get_picture_by_id(pic_name) {
    return global.pictures[pic_name];
}

// Calculate and return x and y coordinates of picture's center
function get_picture_center(x_pos, y_pos, img) {
    return [x_pos + img.width / 2, y_pos + img.height / 2];
}
