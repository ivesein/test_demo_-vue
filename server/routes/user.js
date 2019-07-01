const Router = require("koa-router");
const user = new Router();
const mongoose = require("mongoose");

user.get("/user", (ctx, next) => {
  ctx.body = "this is user page !!!!";
});
//用户登录路由
user.post("/login", async (ctx, next) => {
  let username = ctx.request.body.username;
  let password = ctx.request.body.password;
  const User = mongoose.model("User");
  try {
    let result = await User.findOne({ username: username });
    console.log(result);
    if (result) {
      //用户名存在时 开始比对密码
      let newUser = new User(); //因为是实例方法，所以要new出对象 才能调用方法
      await newUser
        .comparePassword(password, result.password)
        .then(isMatch => {
          ctx.body = {
            code: 200,
            message: isMatch
          };
        })
        .catch(error => {
          console.log(error);
          ctx.body = {
            code: 500,
            message: error
          };
        });
    } else {
      ctx.body = {
        code: 200,
        messaeg: "用户名不存在"
      };
    }
  } catch (error) {
    console.log(error);
    ctx.body = {
      code: 500,
      message: error
    };
  }
});
//用户注册路由
user.post("/sign_up", async (ctx, next) => {
  //取得User Model
  const User = mongoose.model("User");
  //判断用户名是否存在
  let ifExist = await User.findOne({ username: ctx.request.body.username });
  console.log(ifExist);
  if (ifExist) {
    ctx.body = {
      code: 200,
      message: "用户名已存在"
    };
  } else {
    //把从前端收到的post数据封装成一个新的user对象
    let newUser = new User(ctx.request.body);
    //用mongoose的save方法直接存储，然后判断是否成功，返回相应结果
    await newUser
      .save()
      .then(() => {
        //成功返回code=200，并返回成功信息
        ctx.body = {
          code: 200,
          message: "注册成功"
        };
      })
      .catch(err => {
        ctx.body = {
          code: 500,
          message: err
        };
      });
  }
});
module.exports = user;
