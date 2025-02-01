const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema
const course = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true},
    img: { type: String },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
});

// option 1 là tên collection trong db
// option 2 là tên Schema tương ứng với collection
module.exports = mongoose.model('Course', course);