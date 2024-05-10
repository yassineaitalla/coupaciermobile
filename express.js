const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Pas de mot de passe dans votre cas
  database: 'vocabulaire'
});

connection.connect();

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  connection.query('SELECT * FROM utilisateur WHERE nomutilisateur = ? AND motdepasse = ?', [email, password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Erreur serveur' });
    } else {
      if (results.length > 0) {
        res.json({ success: true, message: 'Connexion réussie' });
      } else {
        res.status(401).json({ error: 'Identifiants incorrects' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
