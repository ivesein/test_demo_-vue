const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const saltRounds = 10;

let ObjectId = Schema.Types.ObjectId;
//创建用户的Schema
const userSchema = new Schema({
  UserId: ObjectId,
  username: { unique: true, type: String },
  password: String,
  createAt: { type: Date, default: Date.now() },
  lastLoginAt: { type: Date, default: Date.now() }
});

//每次存储用户信息前 用户密码进行加密
userSchema.pre("save", function(next) {
  //获取salt
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);
    //加密 获取加密和的hash赋值给密码
    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});
userSchema.methods.comparePassword = function(_password, password) {
  return new Promise(function(resolve, reject) {
    bcrypt.compare(_password, password, function(err, isMatch) {
      if (!err) resolve(isMatch);
      else reject(err);
    });
  });
};
//发布模型
mongoose.model("User", userSchema);
