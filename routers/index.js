const { Router } = require("express");
const moneyTrackerRouter = require('./moneyTrackerRoute')
const appRouter = Router();


appRouter.use('/moneyTracker', moneyTrackerRouter)


module.exports = appRouter






