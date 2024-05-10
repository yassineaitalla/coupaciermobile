const express = require('express');
const mysql = require('mysql');

const app = express();

// Configuration de la connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Laisse le mot de passe vide s'il n'y en a pas
  database: 'vocabulaire'
});

// Connexion à la base de données
connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connexion à la base de données réussie');
});

// Exemple de route pour récupérer tous les utilisateurs avec leurs noms d'utilisateur et mots de passe
app.get('/utilisateurs', (req, res) => {
  const sql = 'SELECT nomutilisateur, motdepasse FROM utilisateur';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs:', err);
      res.status(500).send('Erreur serveur');
      return;
    }
    res.json(results);
  });
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
