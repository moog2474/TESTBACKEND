const Restaurants = require('../models/restaurants.model')

exports.getAll = async (req, res) => {
    try {
        const result = await Restaurants.find();
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.getOne = async (req, res) => {
    const { _id } = req.params;

    try {
        const result = await Restaurants.find({ _id })
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.createRestaurant = async (res, req) => {
    try {
        const result = await Restaurants.create(req.body);
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.updateRestaurant = async (req, res) => {
    const { _id } = req.params;

    try {
        const result = await Restaurants.findByIdAndUpdate({ _id }, req.body)
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}

exports.deleteRestaurant = async (req, res) => {
    const { _id } = req.params;
    try {
        const result = await Restaurants.findByIdAndDelete({ _id });
        res.json({ status: true, result })
    } catch (err) {
        res.json({ status: false, message: err })
    }
}