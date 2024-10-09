CREATE TABLE Adresses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    adresse_1 VARCHAR(255) NOT NULL,
    adresse_2 VARCHAR(255),
    ville VARCHAR(100) NOT NULL,
    code_postal VARCHAR(20) NOT NULL,
    pays VARCHAR(100) NOT NULL,
    id_patient INT,
    FOREIGN KEY (id_patient) REFERENCES Patients(id) ON DELETE SET NULL
);
CREATE TABLE Adresses_Medecin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    adresse_1 VARCHAR(255) NOT NULL,
    adresse_2 VARCHAR(255),
    ville VARCHAR(100) NOT NULL,
    code_postal VARCHAR(20) NOT NULL,
    pays VARCHAR(100) NOT NULL
    id_medecin INT,
    FOREIGN KEY (id_medecin) REFERENCES Medecins(id) ON DELETE SET NULL
);

CREATE TABLE Medecins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    telephone BIGINT,
    numero_RPPS VARCHAR(255),
    est_generaliste BOOLEAN,
    est_cardiologue BOOLEAN,
    est_dermatologue BOOLEAN,
    est_radiologue BOOLEAN,
    est_gynecologue BOOLEAN,
    est_neurologue BOOLEAN,
    est_ophtalmologue BOOLEAN,
    est_pediatre BOOLEAN,
    est_psychiatre BOOLEAN,
    est_urgentiste BOOLEAN,
    description VARCHAR(255),
);

CREATE TABLE Patients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    authentification_carte_vitale BOOLEAN NOT NULL DEFAULT FALSE,
    numero_securite_sociale VARCHAR(15),
    date_naissance DATE,
    sexe ENUM('Homme', 'Femme', 'Autre'),
    telephone VARCHAR(15),
    est_abonne BOOLEAN,
    adresse_complete VARCHAR(255),
    description VARCHAR(255),
);

CREATE TABLE Maladies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    description TEXT,
    code_CIM VARCHAR(20),
    est_chronique BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE Medicaments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    principe_actif VARCHAR(255) NOT NULL,
    forme_pharmaceutique ENUM('Comprimé', 'Gélule', 'Sirop', 'Pommade', 'Injection'),
    dosage VARCHAR(50),
    indications TEXT,
    contre_indications TEXT,
    effets_secondaires TEXT
);

CREATE TABLE Medecin_Patient (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_medecin INT,
    id_patient INT,
    date_debut_relation DATE NOT NULL,
    FOREIGN KEY (id_medecin) REFERENCES Medecins(id) ON DELETE CASCADE,
    FOREIGN KEY (id_patient) REFERENCES Patients(id) ON DELETE CASCADE
);

CREATE TABLE Patient_Maladie (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient INT,
    id_maladie INT,
    date_diagnostique DATE,
    FOREIGN KEY (id_patient) REFERENCES Patients(id) ON DELETE CASCADE,
    FOREIGN KEY (id_maladie) REFERENCES Maladies(id) ON DELETE CASCADE
);

CREATE TABLE Traitements(
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_patient_maladie INT,
    id_medicament INT,
    date_prescription DATE,
    dose_a_prendre VARCHAR(50),
    nombre_de_fois INT,
    frequence_prise INT,
    FOREIGN KEY (id_patient_maladie) REFERENCES Patients_Maladies(id) ON DELETE CASCADE,
    FOREIGN KEY (id_medicament) REFERENCES Medicaments(id) ON DELETE CASCADE 
);

CREATE TABLE Abonnements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    prix DECIMAL(10, 2) NOT NULL,
    duree_en_jours INT NOT NULL,
    est_actif BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE Utilisateur_Abonnement (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur INT,
    id_abonnement INT,
    date_debut DATE NOT NULL,
    date_fin DATE NOT NULL,
    est_actif BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (id_utilisateur) REFERENCES Utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (id_abonnement) REFERENCES Abonnements(id) ON DELETE CASCADE
);

CREATE TABLE Paiements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_utilisateur_abonnement INT,
    montant DECIMAL(10, 2) NOT NULL,
    date_paiement DATE NOT NULL,
    mode_de_paiement ENUM('Carte de crédit', 'PayPal', 'Virement', 'Autre') NOT NULL,
    statut ENUM('Effectué', 'Échoué', 'En attente') NOT NULL,
    FOREIGN KEY (id_utilisateur_abonnement) REFERENCES Utilisateur_Abonnement(id) ON DELETE CASCADE
);