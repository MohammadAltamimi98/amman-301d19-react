'use strict';
const ownerModel = require('../model/owner.model');

const getCatsByOwner = async (req, res) => {
    const { name } = req.query;
    await ownerModel.owner.find({ name: name }, async function (err, ownerData) {
        try {
            res.send(ownerData[0].cats);
        } catch (error) {
            console.log(error)
        }

    });
}

const createCats = async (req, res) => {
    console.log(req.body);
    const { catName, catBreed, ownerName } = req.body;
    await ownerModel.owner.find({ name: ownerName }, (error, ownerData) => {
        ownerData[0].cats.push({
            name: catName,
            breed: catBreed
        })
        ownerData[0].save();
        res.send(ownerData[0].cats);
    });
}

const deleteCatsForOwner = async (req, res) => {
    const index = Number(req.params.index);
    console.log(req.params);
    const { name } = req.query;
    await ownerModel.owner.find({ name: name }, (err, ownerData) => {

        const newCatsArr = ownerData[0].cats.filter((cat, idx) => {
            return idx !== index
        });
        ownerData[0].cats = newCatsArr;
        ownerData[0].save();

        res.send(' Cat deleted!')
    });
}

const updateCatForOwner = async (req, res) => {
    const index = Number(req.params.index);
    const { catName, catBreed, ownerName } = req.body;
    await ownerModel.owner.find({ name: ownerName }, (err, ownerData) => {
        console.log(ownerData);

        ownerData[0].cats.splice(index, 1, {
            name: catName,
            breed: catBreed
        });
        ownerData[0].save();
        res.send(ownerData[0].cats)
    });
}

module.exports = {
    getCatsByOwner,
    createCats,
    deleteCatsForOwner,
    updateCatForOwner
}