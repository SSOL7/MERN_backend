const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
require('./models/User');
require('./services/passport');
require('./models/Survey');
const keys = require('./config/keys');

const app = express();

app.use(cors());

mongoose.connect(keys.mongoURI);


app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
});
