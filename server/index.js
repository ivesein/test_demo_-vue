const Koa = require("koa");
const app = new Koa();
const bodyParser = require("koa-bodyparser");
const router = require("./routes/index");
const cors = require("koa2-cors");
app.use(cors());
// 引入数据库
// const mongoose = require("mongoose");
const { connect, initSchemas } = require("./database/init");
//立即执行函数
(async () => {
  await connect();
  initSchemas();
  // const User = mongoose.model("User");
  // let oneUser = new User({ userName: "大二飞哥", password: "123456" });

  // oneUser.save().then(() => {
  //   console.log("插入成功");
  // });
  // let users = await User.find({}).exec();
  // console.log("-----------------");
  // console.log(users);
  // console.log("-----------------");
})();

app.use(bodyParser());
app.use(router.routes(), router.allowedMethods());
// app.use(async ctx => {
//   if (ctx.url === "/" && ctx.method === "GET") {
//     let html = `
//       <h1>Koa2 request post Demo</h1>
//       <form method="POST" action="/">
//         <p>UserName</p>
//         <input name="userName" /></br>
//         <p>age</p>
//         <input name="age" /></br>
//         <p>webSite</p>
//         <input name="webSite" /></br>
//         <button type="submit">提交</button>
//       </form>
//     `;
//     ctx.body = html;
//   } else if (ctx.url === "/" && ctx.method === "POST") {
//     let postData = ctx.request.body;
//     ctx.body = postData;
//   } else {
//     ctx.body = "<h1>404!</h1>";
//   }
// });

app.listen(3000);
console.log("[server] is starting at port:3000");
