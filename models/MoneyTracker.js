const mongoose = require('mongoose');

const moneyTrackerSchema = mongoose.Schema({
    itemName: { type: String, required: true },
    price: { type: Number, required: true },
    datetime: { type: Date, required: true },
    description: { type: String, required: true }
})


module.exports = mongoose.model("MoneyTracker", moneyTrackerSchema);