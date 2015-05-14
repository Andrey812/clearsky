/*
    This code is part of the node-webkit project, the game named 'Clear Sky'.
    The module consists object 'map', its methods and related common functions.

    The 'map' is a game field which consists other objects - enemies, missiles,
    smaller fields (map fields) etc.

    Please, read of the readme file about game description and structure.

    Author: Andrey Nikolaev
    E-mail: morsml@yandex.ru
*/

// Common map functions
function map_initialize() {
    global.map = new map(
        params.map.width_fields,
        params.map.height_fields
    );

    global.map.draw();
}

// Process field's text when char key pressed
function check_typed(chr) {

    // Check text of the each map field
    // Process text typed parts if needed
    // Make field hit if needed
    for (f in global.map.fields) {
        var fld = global.map.fields[f];

        if (fld.text.charAt(fld.text_typed) == chr) {
            fld.text_typed++;
        }
        else if(fld.text_typed) {
            fld.text_typed = 0;
        }

        if (fld.text_typed == fld.text.length) {
            fld.hit();
        }
    }
}

// Common map processor for every loop
function process_map() {
    if (global.field_hit) {
        global.field_hit.unhit();
    }
    global.map.draw();
}

// Object "Map"
function map(width, height) {

    this.width = width;
    this.height = height;

    this.fields = [];

    var wi = -1;
    var hi = 0;

    var id = 0;

    var map_field = get_picture_by_id('map_field');

    for (hi = 0; hi < this.height; hi++) {
        for (wi = 0; wi < this.width; wi++) {

            var x_pos = wi * (map_field.width - 1);
            var y_pos = hi * (map_field.height - 1);

            var f = new field(id++, x_pos, y_pos);

            this.fields.push(f);
        }
    }

    this.draw = function() {
        for (i = 0; i < this.fields.length; i++) {
            this.draw_field(i);
        };
    }

    this.draw_field = function(f_num) {
        this.fields[f_num].draw();
    }
}

// Object "Field"
// Fields are fields of the map
function field(id, x, y) {

    this.id = id;
    this.x = x;
    this.y = y;

    this.img = get_picture_by_id('map_field');

    this.text_typed = 0;
    this.text = gen_text(params.map.field_text_length);

    this.draw = function() {
        global.surface.drawImage(this.img, this.x, this.y);
        this.draw_text();
    };

    this.draw_text = function() {
        global.surface.fillStyle = params.map.field_text_color;
        global.surface.fillText(this.text, this.x + 10, (this.y + params.map.field_height - 10) );

        if (this.text_typed) {
            global.surface.fillStyle = params.map.field_text_typed_color;
            global.surface.fillText(this.text.slice(0,this.text_typed)
                , this.x + 10, (this.y + params.map.field_height - 10) );
        }
    }

    this.hit = function() {
        this.draw_text();
        this.img = get_picture_by_id('map_field_strike');
        global.field_hit = this;
        this.draw();
    }

    this.unhit = function() {
        this.text_typed = 0;
        this.draw_text();
        this.text = gen_text(params.map.field_text_length);
        this.img = get_picture_by_id('map_field');

        delete global.field_hit;
    }
}

// Make random text
function gen_text(len) {
    var vow = ['a', 'e', 'i', 'o', 'u', 'y'];
    var cons = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];

    var string = "";

    for (i = 0; i < len; i++) {
        if (i % 2 == 0) {
            string += cons[gen_random(0, 19)];
        }
        else {
            string += vow[gen_random(0, 5)];
        }
    }

    return string;
}
