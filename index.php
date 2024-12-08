<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Step Form</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./Scripts/main_script.js" defer type="module"></script>

</head>
<body>
    <header>
        <div class="header-container">
            <h2 class="titre">Question - CULTURE</h2>
            <img src="./Image/logo.png" alt="logo du site" class="image">
        </div>
    </header>
    <section class="step">
        <div class="step-content active" id="step1">
            <h2 class="titre_important">Jeu de culture</h2>
            <!-- starting form -->
            <form id="step1Form">
                <h3 class="titre1">Informations Personnelles</h3>
                <div class="group">
                    <label for="nom" class="label">Nom</label>
                    <input type="text" name="nom" id="nom" class="champ" required>
                </div>
                <div class="group">
                    <label for="prenom" class="label">Prénom</label>
                    <input type="text" name="prenom" id="prenom" class="champ" required>
                </div>
                <div class="group">
                    <label for="email" class="label">Email</label>
                    <input type="email" name="email" id="email" class="champ" required autocomplete="autocomplete">
                </div>
                <!-- input type radio -->
                <div class="bouton">
                    <div class="group radio-group">
                        <label for="histo" class="label">HISTOIRE</label>
                        <input type="radio" id="histo" class="champ" name="choix" value="histoire" required>
                    </div>
                    <div class="group radio-group">
                        <label for="geo" class="label">GEOGRAPHIE</label>
                        <input type="radio" id="geo" class="champ" name="choix" value="geographie" required>
                    </div>
                </div>
                <button id="submit" class="btn">Suivant</button>
            </form>
        </div>
        <div class="step-content" id="step2">
            <h3 class="titre1"> Questionnaire</h3>
            <!-- First form -->
            <form id="step2Form" action="index.php" method="post">
                <div id="questionsContainer">
                    <!-- HISTOIRE -->
                    <!-- <label for="q1" class="label">
                        1. Quel royaume historique est considéré comme le précurseur du Bénin moderne ?</label>
                    <input type="text" id="q1" class="champ">
                    <label for="q2" class="label">
                        2. En quelle année le Bénin a-t-il obtenu son indépendance de la France ?
                    </label>
                    <input type="text" id="q2" class="champ">
                    <label for="q3" class="label">
                        Qui est l'auteur de la célèbre sculpture du "Roi Béhanzin" ?
                    </label>
                    <input type="text" id="q3" class="champ">
                    <label for="q4" class="label">
                        4. Quel événement important a eu lieu en 1990 au Bénin ?
                    </label>
                    <input type="text" id="q4" class="champ"> -->

                    <!-- GEOGRAPHIE -->
                    <!-- <label for="q1" class="label">
                        1. Quelle est la capitale du Bénin ?</label>
                    <input type="text" id="q1" class="champ">
                    <label for="q2" class="label">
                        2. Quel est le fleuve principal qui traverse le Bénin ?
                    </label>
                    <input type="text" id="q2" class="champ">
                    <label for="q3" class="label">
                        3. Quelle est la principale langue officielle du Bénin ?
                    </label>
                    <input type="text" id="q3" class="champ">
                    <label for="q4" class="label">
                        4. Quel est le climat prédominant dans la majorité du Bénin ?
                    </label>
                    <input type="text" id="q4" class="champ"> -->

                </div>
                <br><br>
                <div class="navigation-buttons">
                    <button type="button" class="btn" id="prevbtn">Précédent</button>
                    <button type="button" class="btn" id="nextbtn">Suivant</button>
                </div>
            </form>
        </div>
        <div class="step-content" id="step3">
            <!-- SCORE -->
            <h2 class="titre_important">Recapitulatif des données saisis</h2>
            <p class="paragraphe">Nom : <span id="recapNom"></span></p>
            <p class="paragraphe">Prénom : <span id="recapPrenom"></span></p>
            <p class="paragraphe">Email : <span id="recapEmail"></span></p>
            <p class="paragraphe">Choix : <span id="recapChoix"></span></p>
            <div id="recapQuestions"></div>
            <div class="score">
                <p class="paragraphe special">Score sur 20 : <span id="score"></span></p>
                <p class="paragraphe special">Le meilleur Score sur 20 : <span id="bestScore"></span></p>
        </div>
            <div class="navigation-buttons">
                <button type="button" class="btn" id="refresh">Reprendre</button>
            </div>
        </div>
    </section>
</body>
</html>