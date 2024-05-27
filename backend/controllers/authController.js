// backend/controllers/authController.js

const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendMail = require('../utils/mailer');

// Replace 'your_jwt_secret' with your actual JWT secret key
const JWT_SECRET = 'your_jwt_secret';

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user based on email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }
    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    // Send authentication email
    await sendMail(user.email, 'Authentication Successful', 'Welcome to our app!');
    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
};


exports.signup = async (req, res) => {
  const { email, password, username } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ email, password, username });
    await newUser.save();
    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User created successfully', token, user: newUser });
  } catch (error) {
    console.error('Signup error:', error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message }); // Send error message to the client
  }
};
