const express = require('express');
const routes = require('./routes/routes');
const cors = require('cors'); // Importer CORS
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // Pour gérer les requêtes JSON

// Utiliser le fichier unique de routes pour toutes les routes
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
