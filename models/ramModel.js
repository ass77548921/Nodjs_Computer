const db = require('../utils/database');

const Ram = class Ram {
    constructor(id, name, clock_rate, ram_type, image_url, size) {
       this.id = id;
       this.name = name;
       this.clock_rate = clock_rate;
       this.ram_type = ram_type;
       this.size = size;
       this.image_url = image_url;
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT ram.id, ram.name, clock_rate, size, image_url, classification.name as ram_type FROM ram, classification where ram_id = classification.ID');
    }


}

module.exports = Ram;