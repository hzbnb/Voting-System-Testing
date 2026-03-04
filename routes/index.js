const router = require("express").Router();
const voterRoutes = require("./voter.routes");
const ecRoutes = require("./ec.routes");
const voteRoutes = require("./vote.routes");

router.use('/', voterRoutes);
router.use('/ec', ecRoutes);
router.use('/v1/vote', voteRoutes);

module.exports = router;