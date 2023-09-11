const router = require("express").Router();
const userRouter = require("./users");
const authRouter = require("./auth");
const movieRouter = require("./movies");
const listRouter = require("./lists");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/movie", movieRouter);
router.use("/list", listRouter);

module.exports = router;
