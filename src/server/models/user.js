var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var userSchema = mongoose.Schema({
    email        : String,
    password     : String
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
userSchema.methods.toJSON = function(){
    var obj = this.toObject();
    delete obj.password;
    return obj;
}
module.exports = mongoose.model('User', userSchema);
