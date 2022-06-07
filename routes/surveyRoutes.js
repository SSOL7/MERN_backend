const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.get('/api/surveys/thanks', (req, res) => {
        res.send('Thank you angel');
    });

    app.post('/api/surveys', requireLogin, async (req, res) => {
        const body = req.body;

        const survey = new Survey({
            title: body.title,
            subject: body.subject,
            body: new Date().toLocaleString('fi-FI'),
            // recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now()
            
        });

        try {
            const mailer = new Mailer(survey, surveyTemplate(survey));
            await mailer.send();
            await survey.save();
            const user = await req.user.save();
            res.send(user);

            } catch (err) {

            console.log(err);
            res.status(422).send(err);
        }
    });
};

