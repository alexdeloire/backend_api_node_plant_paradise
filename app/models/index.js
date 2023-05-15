const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model")(mongoose, mongoosePaginate);
db.role = require("./role.model");
db.items = require("./item.model.js")(mongoose, mongoosePaginate);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;