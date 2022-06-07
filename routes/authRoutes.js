const passport = require('passport');
import {surveySchema} from '../models/Survey';

module.exports = (app) => {
    let notes = [
        {
          title: "Angel",
          subject: "1014-32666-777",
          body: new Date().toLocaleString('fi-FI'),
        },
        {
          title: "Puni",
          subject: "010-3334-44555",
          body: new Date().toLocaleString('fi-FI')
        },
        {
          title: "Jeti",
          subject: "010-222-2022",
          body: new Date().toLocaleString('fi-FI'),
        }
      ]

    app.get('/auth/google', passport.authenticate('google', { 
            scope: ['profile', 'email']
        })
    ); 
    
    app.post('/surveys', (req, res) => {
        const body = req.body;
        const note = {
            title: body.title,
            subject: body.subject,
            body: new Date().toLocaleString('fi-FI'),
        }
        notes = notes.concat(note)
        response.json(note)
    });

    app.get('/surveys', (request, res) => {
        // const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
        const note = request.body
        // note.id = maxId + 1
        notes = notes.concat(note)
      
        res.json(notes)
      });
      
        
    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('http://localhost:3000/surveys');
        }
    );

    

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
}
