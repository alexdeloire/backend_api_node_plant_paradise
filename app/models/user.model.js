module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })

  schema.plugin(mongoosePaginate);

  const User = mongoose.model("User", schema);
  return User;
};
