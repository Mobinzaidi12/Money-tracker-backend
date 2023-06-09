const MoneyTracker = require('../models/MoneyTracker');

const addData = async (req, res) => {
    try {
        const { itemName, price, datetime, description } = req.body;
        console.log(datetime)
        const data = await MoneyTracker.create({
            itemName, price, datetime, description
        })

        res.status(200).json({ status: true, message: "Data Create" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: error.message });

    }
}

const getData = async (req, res) => {
    try {
        const data = await MoneyTracker.find()
        res.status(200).json({ status: true, data });
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: false, message: error.message });

    }
}

const deleteData = async (req, res) => {
    try {
        const data = await MoneyTracker.deleteMany();
        res.status(200).json({ status: true, data: [] }); // Remove unnecessary parentheses around []

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: error.message });
    }
};


module.exports = { addData, getData, deleteData }