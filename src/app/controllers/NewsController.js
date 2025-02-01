const course = require('../models/Course.Model');

class NewsController {
    async index(req, res) {
        // res.render('news');
        try {
            const courses = await course.find({});
            res.json(courses);
        } catch (error) {
            res.status(500).json({ error: 'Error'});
        }
    }
}

module.exports = new NewsController();