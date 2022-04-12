const Tutorial = require('../models/tutorialModel');

exports.getTutorials = (req, res, next) => {
    Tutorial.fetchAll(Tutorials => {
        res.json(Tutorials)
    });
};

exports.getTutorial = (req, res, next) => {
    const prodId = req.params.id;
    Tutorial.findById(prodId, Tutorial => {
        res.json(Tutorial)
    });
};

exports.postEditTutorial = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const published = req.body.published;
    const description = req.body.description;
    const updatedTutorial = new Tutorial(
        id,
        title,
        description,
        published
    );
    updatedTutorial.save();
    res.status(200).json({ message: id ? 'Tutorial Updated Successfully' : 'Tutorial Added Successfully' })
};

exports.DeleteTutorials = (req, res, next) => {
    const prodId = req.params.id;
    Tutorial.deleteById(prodId);
    res.status(200).json({ message: "record deleted successfully" })
};