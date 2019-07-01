const Router = require("koa-router");
const user = require("../routes/user");

const router = new Router();

router.use(user.routes(), user.allowedMethods());

module.exports = router;
