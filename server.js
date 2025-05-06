const express = require('express');
const Razorpay = require('razorpay');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
const port = 3000;


const CLIENT_ID = '';
const CLIENT_SECRET = '';


const razorpay = new Razorpay({
  key_id: 'rzp_test_jsP25tWjtceUAz',
  key_secret: 'duPZteMujIA19aMiM6ek8nA9'
});



app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',  
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new GoogleStrategy({
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  return done(null, profile);
}));


app.get('/', (req, res) => {
  res.send(`<h2>Hello! <a href="/auth/google">Login with Google</a></h2>`);
});


app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);


app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    
    res.redirect('http://localhost:5500/clg%20project2.html'); 
  }
);


app.post('/create-order', (req, res) => {
  const options = {
    amount: 50000, 
    currency: 'INR',
    receipt: 'receipt#1',
    payment_capture: 1 
  };

  razorpay.orders.create(options, (err, order) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error creating order' });
    }
    res.json({ id: order.id });
  });
});

app.listen(port, () => {
  console.log(` Server running at http://localhost:${port}`);
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
