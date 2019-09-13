let obiWan = {
    name: 'Obi-Wan Kenobi',
    healthPoints: 120,
    baseAttackPower: 8,
    currentAttackPower: 8,
    counterAttackPower: 8,
}
let lukeSkywalker = {
    name: 'Luke Skywalker',
    healthPoints: 100,
    baseAttackPower: 6,
    currentAttackPower: 6,
    counterAttackPower: 5,
}
let darthSidious = {
    name: 'Darth Sidious',
    healthPoints: 150,
    baseAttackPower: 10,
    currentAttackPower: 10,
    counterAttackPower: 20,
}
let darthMaul = {
    name: 'Darth Maul',
    healthPoints: 180,
    baseAttackPower: 12,
    currentAttackPower: 12,
    counterAttackPower: 25,
}

function getObjectFromId(characterId) {
    /* Pass in the id of the character's card and the function
        returns the object of that character. */
    switch (characterId) {
        case "obi-wan":
            return obiWan;
            break;
        case "luke-skywalker":
            return lukeSkywalker;
            break;
        case "darth-sidious":
            return darthSidious;
            break;
        case "darth-maul":
            return darthMaul;
    }
}

function returnHealthId(characterId) {
    /* Pass in the id of the character's card and the function
        returns the id of their health div in the form of a string
        to be passed into a jQuery selector. */
    switch (characterId) {
        case "obi-wan":
            return "#obi-health";
            break;
        case "luke-skywalker":
            return "#luke-health";
            break;
        case "darth-sidious":
            return "#sidious-health";
            break;
        case "darth-maul":
            return "#maul-health";
    }
}


$(document).ready(function () {
    let characterChosen = 0,
        enemyChosen = 0,
        enemyCharacter = "",
        yourCharacter = "",
        enemyId = "",
        yourId = "";
    $("#obi-health").append(obiWan.healthPoints);
    $("#luke-health").append(lukeSkywalker.healthPoints);
    $("#sidious-health").append(darthSidious.healthPoints);
    $("#maul-health").append(darthMaul.healthPoints);

    $(".character-cards").on("click", function () {
        if (characterChosen === 0) {
            yourCharacter = getObjectFromId(this.id);
            yourId = this.id;
            console.log(yourCharacter.name);
            $(this).appendTo($("#your-character"))
            $(".character-cards").not(this).each(function () {
                $(this).appendTo($("#enemies"));
                $(this).css({"float": "left", "background-color": "red", "border-color": "black"});
                $(this).addClass("enemy");
            characterChosen = 1;
            })
        }
        if (enemyChosen === 0) {
            $(".enemy").off().on("click", function () {
                enemyCharacter = getObjectFromId(this.id);
                enemyId = this.id;
                console.log(enemyCharacter.name);
                console.log("enemyId = " + enemyId);
                console.log(typeof enemyId);
                $(this).appendTo($("#current-fighter"));
                $(this).css({"background-color": "black", "border-color": "green", "color": "white"})
                enemyChosen = 1;
            });
        }
        $("#attack-button").off().on("click", function () {
            // Notify of your attack
            $("#your-attack").text(`You attacked ${enemyCharacter.name} for \
            ${yourCharacter.currentAttackPower} damage.`);
            // Lower enemy health
            enemyCharacter.healthPoints -= yourCharacter.currentAttackPower;
            // Display enemy health
            $(returnHealthId(enemyId)).text(enemyCharacter.healthPoints);

            // Notify of counterattack
            $("#enemy-attack").text(`${enemyCharacter.name} attacked you back for \
            ${enemyCharacter.counterAttackPower} damage.`);
            // Lower your health
            yourCharacter.healthPoints -= enemyCharacter.counterAttackPower;
            // Display your health
            $(returnHealthId(yourId)).text(yourCharacter.healthPoints);

            // Increase your attack power.
            yourCharacter.currentAttackPower += yourCharacter.baseAttackPower;
        })
    });


})