// Importer le SDK Firebase Admin
const admin = require('firebase-admin');

// Ajouter la clé de service
const serviceAccount = {
  "type": "service_account",
  "project_id": "minicare-cbf51",
  "private_key_id": "01ffe2dfd91aa829581c4c237654b267fa847b19",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDSJlRkdvgS3GWp\nSvK5FeZ2b/35E5/ltDnsapLUxMyDB1J3aXbDwBlHnNMsqrOpwajW9eghjHiFA0c7\nevKSpZLcMnHkiNsCtQYMY/ID/zG4QIthRbrWVKvx7GfTIYfkkNk14xV5AzsIGXaQ\nbp0EaWYJxS8uyR25AVXsorYCNP6RIxjQqbZPm7Bdaa6d1l98T7B08ECIbNuPoVcL\nIAmC1qo8GPaf0fvqDh5BHSWEPWYJ/pOvi71d9A+86Se2Ebarxs/P8xlN97JTsvM+\nsFgTlrkb6nZKv11E12kkPT6hVVdT+ujM8Qfpqnlgtj3XwHtSCTfZ8gfaBWYkNNxj\nNt2hNr4ZAgMBAAECggEACz5Uf9MLKwQqdsQtKBirPc04YQQLJyitPDBIBpT4ba69\nu2iTu32qxJV4CXDhH60eNdEOkEPyG0i9fgnSEmVELh6PUCc/031gs1dCFrNnwzhF\n1MicqlS5pd4MgIPv37tdube6eYDiHsjw+mGGqlqixFVN1NKbEd/Hy3s5onTYJWbq\nx1ovd67u7l6BvRjUzAuU0mEJZ5kIN0PPEYGDPHhSi/OE62XqpO3bB3azv9YpDM8/\n4FcFuob8+9icelwY7IQmiHqboOj5foRfabAzj3elUIbspdnzltMvasrGrDTkFpaT\neoU3DT+wNq8xV1jSaZkWtpARjTqjgP43J1W7Oy8xgQKBgQD8hAxEon3pZGfDw8w6\nUXTbwWplXd3DuLuHP2rhVuTWjtowLFTqOHE8r8n8nBsEEY6n/gmJkWCeaHu1h3iq\nopEX2BQcbveIQx+ynB//xMiXaVGV4YCmzr2E9bWus+EEr2vgn7pvKX7Zd6viY9U7\nAb7C7nWGhS8dGipjrhGZOCf1gQKBgQDVDKIz7bgTQ6DMGQ0ZxxrVbysoOju6vUKj\nPvBN+6BGC4OwDWDBplUyldf8Vy4G5JDVpaI2UHiAUWsFrFe8utZh46e/ekRRICnU\n0oXi6fRSlVkwqlN2BOEZb1t51+TBN8C813VJ5L1tmPlFZE0aHff802i2Dy5MyiQp\nCCqL5v8EmQKBgQDvtlMHHNI2q5AtsUPA4O70Zsof7FnHoSi0nalSvXCDlhzeulbp\n+ibVG3O+EFs9I4WvSGO5an60Ii++BhqwsZ7XadK9o0Hs4vvGTJu77A0YX2yJwgal\nU4FqJO8SJ8Sm8/iOxlLvkA7RVt+fDHKxj1iOKFz9FJXDJMG02tvt/fdBAQKBgBwP\npe2hCfW/mpZHVmpmxyoFknGh+ewGsZg+2ffrhJi1O4sct/nJpr8a7W/XK8DMqib5\nwfvVbYm5L5d3s7awBTyvd5DI0ea9jcTyVaAloICgGzdFt+h7jAqFmE7cGM06QrCc\n0F4DOtAMrghtxZoDCH7MeaZBKaADn++nm7MBoeVBAoGBAPCq/0zrA/GtSFdW+7Qa\n9NLLJumUah3QsQBbV2GKt5UhKqcv/OOyVQZL1uXHV9Y+K2dMLtrNEeFcQODIcHTe\nYRR+oweUVEN2eoIED58lNMF7aaG3FEjq3lbPH5Uf+U1+gLl318VwY9ulvG8mrryc\niFtsfofRRvUfWfk5LG1XSvnA\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-b7ti1@minicare-cbf51.iam.gserviceaccount.com",
  "client_id": "102988544958593892668",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-b7ti1%40minicare-cbf51.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

// Initialiser Firebase avec les informations d'authentification
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Exemple de base de données Firestore
const db = admin.firestore();

// Exemple d'ajout de données dans Firestore
const addData = async () => {
  const docRef = db.collection('users').doc('alovelace');

  await docRef.set({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815
  });

  console.log('Document ajouté');
  console.log('Bienvenue dans votre base de données');
};

// Fonction pour récupérer les données d'une collection
const getDataFromCollection = async () => {
    try {
      const snapshot = await db.collection('users').get();
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
      });
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  
  // Appeler la fonction
  getDataFromCollection();

addData();
