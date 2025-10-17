// eslint-disable-next-line no-undef
require('dotenv').config();
// eslint-disable-next-line no-undef
const express = require('express');
// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json()); // pour recevoir du JSON

// eslint-disable-next-line no-undef
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB !'))
  .catch(err => console.error('MongoDB connection error :', err));

// Exemple de modèle Mongoose
const AnimationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  html: { type: String, required: true },
  css: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});
const Animation = mongoose.model('Animation', AnimationSchema);

app.get('/show/animation', async (req, res) => {
  try {
    const animation = await Animation.find();
    res.json(animation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/show/animation/:id', async (req, res) => {
  try {
    const animation = await Animation.findById(req.params.id);
    if (!animation) {
      return res.status(404).json({ error: 'Animation not found' });
    }
    res.json(animation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

// javascript
app.put('/edit/animation/:id', async (req, res) => {
  try {
    const updatedAnimation = await Animation.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true, context: 'query' }
    );

    if (!updatedAnimation) {
      return res.status(404).json({ error: 'Animation not found' });
    }

    res.json(updatedAnimation);
  } catch (err) {
    if (err.name === 'ValidationError' || err.name === 'CastError') {
      return res.status(400).json({ error: err.message });
    }
    res.status(500).json({ error: err.message });
  }
});

app.post('/create/animation', async (req, res) => {
  try {
    const newAnim = new Animation(req.body);
    // await Animation.validate();
    const savedAnim = await newAnim.save();
    res.status(201).json(savedAnim);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/delete/animation/:id', async (req, res) => {
  try {
    const deletedAnimation = await Animation.findByIdAndDelete(req.params.id);
    if (!deletedAnimation) {
      return res.status(404).json({ error: 'Animation not found' });
    }
    res.json({ message: 'Animation deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server launched at port : ${PORT}`);
});
