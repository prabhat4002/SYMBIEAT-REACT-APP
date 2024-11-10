import { Router } from "express";
import { FoodModel } from '../models/food.model.js';
import handler from 'express-async-handler';

const router = Router();

router.get('/', handler(async (req, res) => {
    console.log("Fetching all foods...");
    const foods = await FoodModel.find({});
    console.log("Foods fetched:", foods);
    res.send(foods);
}));

router.get('/tags', handler(async (req, res) => {
    console.log("Fetching tags...");
    const tags = await FoodModel.aggregate([
        { $unwind: '$tags' },
        { $group: { _id: '$tags', count: { $sum: 1 } } },
        { $project: { _id: 0, name: '$_id', count: '$count' } }
    ]).sort({ count: -1 });

    const all = { name: 'All', count: await FoodModel.countDocuments() };
    tags.unshift(all);
    console.log("Tags fetched:", tags);
    res.send(tags);
}));

router.get('/search/:searchTerm', handler(async (req, res) => {
    const { searchTerm } = req.params;
    console.log(`Searching foods with term: ${searchTerm}`);
    const searchRegex = new RegExp(searchTerm, 'i');
    const foods = await FoodModel.find({ name: { $regex: searchRegex } });
    console.log("Search results:", foods);
    res.send(foods);
}));

router.get('/tag/:tag', handler(async (req, res) => {
    const { tag } = req.params;
    console.log(`Fetching foods with tag: ${tag}`);
    const foods = await FoodModel.find({ tags: tag });
    console.log("Foods with tag:", foods);
    res.send(foods);
}));

router.get('/:foodId', handler(async (req, res) => {
    const { foodId } = req.params;
    console.log(`Fetching food with ID: ${foodId}`);
    const food = await FoodModel.findById(foodId);
    if (food) {
        console.log("Food found:", food);
        res.send(food);
    } else {
        console.log("Food not found");
        res.status(404).send('Food not found');
    }
}));

export default router;
