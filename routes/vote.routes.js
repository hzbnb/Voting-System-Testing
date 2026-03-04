const router = require("express").Router();
const { castVoteController } = require("../controllers");
const auth = require("../middlewares/auth");
const access = require("../middlewares/access");

router.post('/cast', auth(["voter"]), access("forward"), castVoteController.castVote);

module.exports = router;
