
export class histoire{
    name = this.name;
    constructor(name,nickname){
        this.name = name;
        this.nickname = nickname;
    }
    answers = {
        q1 : "royaume de Dahomey",
        q2 : "1960",
        q3 : "Paul Ahyi ",
        q4 : "La conférence nationale des Forces vives"
    }
    /**
     * 
     * @param {HTMLElement} container 
     */
    appendTo(container){
        container.innerHTML = `<label for="q1" class="label">
                        1. Quel royaume historique est considéré comme le précurseur du Bénin moderne ?</label>
                    <input type="text" id="q1" class="champ" autocomplete="off" title="A. Royaume de Dahomey 
B. Royaume du Kongo
C. Royaume du Bénin
D. Royaume du Ghana
">
                    <label for="q2" class="label">
                    2. En quelle année le Bénin a-t-il obtenu son indépendance de la France ?
                    </label>
                    <input type="text" id="q2" class="champ" autocomplete="off" title="A. 1960
B. 1958
C. 1962
D. 1956">
                    <label for="q3" class="label">
                        3. Qui est l'auteur de la célèbre sculpture du "Roi Béhanzin" ?
                    </label>
                    <input type="text" id="q3" class="champ" autocomplete="off" title="A. Barthélémy Boganda
B. Béhanzin
C. Kerekou
D. Paul Ahyi">
                    <label for="q4" class="label">
                    4. Quel événement important a eu lieu en 1990 au Bénin ?
                    </label>
                    <input type="text" id="q4" class="champ" autocomplete="off" title="A. La proclamation de la République
B. La conférence nationale des Forces vives
C. L'élection du premier président
D. L'adoption de la nouvelle constitution">`;
    }
}

export class geographie{
    /**
     * 
     * @param {string} name 
     * @param {string} nickname 
     */
    constructor(name,nickname){
        this.name = name;
        this.nickname = nickname;
    }
    answers = {
        q1 : "Porto-novo",
        q2 : "Fleuve Ouémé",
        q3 : "Français",
        q4 : "Tropical humide"
        }

    appendTo(container){
        container.innerHTML = `<label for="q1" class="label">
                        1. Quelle est la capitale du Bénin ?</label>
                    <input type="text" id="q1" class="champ" autocomplete="off title = "A. Cotonou
B. Porto-Novo
C. Parakou
D. Natitingou">
                    <label for="q2" class="label">
                    2. Quel est le fleuve principal qui traverse le Bénin ?
                    </label>
                    <input type="text" id="q2" class="champ" autocomplete="off title = "A. Fleuve Niger
B. Fleuve Congo
C. Fleuve Ouémé
D. Fleuve Volta">
                    <label for="q3" class="label">
                    3. Quelle est la principale langue officielle du Bénin ?
                    </label>
                    <input type="text" id="q3" class="champ" autocomplete="off title = "A. Anglais
B. Français
C. Portugais
D. Espagnol">
                    <label for="q4" class="label">
                    4. Quel est le climat prédominant dans la majorité du Bénin ?
                    </label>
                    <input type="text" id="q4" class="champ" autocomplete="off title = "A. Tropical humide
B. Aride
C. Tempéré
D. Montagnard">`;
    }
}