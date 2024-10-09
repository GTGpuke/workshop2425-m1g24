const express = require('express');
const userRoutes = require('./routes/userRoutes');  // Vérifie ce chemin
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Pour traiter les requêtes JSON
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
