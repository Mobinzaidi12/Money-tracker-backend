const { Router } = require('express');
const { addData, getData, deleteData } = require("../controllers/moneyTrackerController");


const moneyTrackerRouter = Router();


moneyTrackerRouter.route('/').post(addData).get(getData).delete(deleteData);



module.exports = moneyTrackerRouter;


