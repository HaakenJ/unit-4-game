let obiWan = {
    name: 'Obi-Wan Kenobi',
    healthPoints: 120,
    baseAttackPower: 8,
    currentAttackPower: 8,
    counterAttackPower: 10,
}
let lukeSkywalker = {
    name: 'Luke Skywalker',
    healthPoints: 110,
    baseAttackPower: 9,
    currentAttackPower: 9,
    counterAttackPower: 9,
}
let darthSidious = {
    name: 'Darth Sidious',
    healthPoints: 120,
    baseAttackPower: 6,
    currentAttackPower: 6,
    counterAttackPower: 20,
}
let darthMaul = {
    name: 'Darth Maul',
    healthPoints: 180,
    baseAttackPower: 3,
    currentAttackPower: 3,
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
        yourId = "",
        numOfEnemies = 3;
    $("#restart-btn").hide();
    $("#obi-health").append(obiWan.healthPoints);
    $("#luke-health").append(lukeSkywalker.healthPoints);
    $("#sidious-health").append(darthSidious.healthPoints);
    $("#maul-health").append(darthMaul.healthPoints);

    $(".character-cards").on("click", function () {
        // Check if a character has already been chosen.
        if (characterChosen === 0) {
            // Assign character object to yourCharacter and get id.
            yourCharacter = getObjectFromId(this.id);
            yourId = this.id;
            // Move card to #your-character location.
            $(this).appendTo($("#your-character"))
            // Move all cards in this class that aren't 'this' to #enemies.
            $(".character-cards").not(this).each(function () {
                $(this).appendTo($("#enemies"));
                $(this).css({"float": "left", "background-color": "red", "border-color": "black"});
                $(this).addClass("enemy");
            characterChosen = 1;
            })
        }
        if (enemyChosen === 0) {
            // Choose enemy
            $(".enemy").off().on("click", function () {
                // Clear any attack text
                $("#enemy-attack").text("");
                $("#your-attack").text("");
                // Assign current enemy object and id.
                enemyCharacter = getObjectFromId(this.id);
                enemyId = this.id;
                // Move enemy card to #current-fighter.
                $(this).appendTo($("#current-fighter"));
                $(this).css({"background-color": "black", "border-color": "green", "color": "white"})
                enemyChosen = 1;
            });
        }
        $("#attack-button").off().on("click", function () {

            // Only attack if your character has health.
            if (yourCharacter.healthPoints > 0) {
                // Notify of your attack
                $("#your-attack").text(`You attacked ${enemyCharacter.name} for \
                ${yourCharacter.currentAttackPower} damage.`);
                // Lower enemy health
                enemyCharacter.healthPoints -= yourCharacter.currentAttackPower;
                // Display enemy health
                $(returnHealthId(enemyId)).text(enemyCharacter.healthPoints);
                // Increase your attack power.
                yourCharacter.currentAttackPower += yourCharacter.baseAttackPower;
            }
            // Check if either enemy is out of health.
            if (enemyCharacter.healthPoints <= 0) {
                // Set health to 0 so it doesn't display negative.
                enemyCharacter.healthPoints = 0;
                $(returnHealthId(enemyId)).text(enemyCharacter.healthPoints);
                // Hide the enemy card.
                $("#" + enemyId).hide();
                // Notify user of victory.
                $("#enemy-attack").text("");
                $("#your-attack").text(`You have defeated ${enemyCharacter.name}\
                , you can choose to fight another enemy.`);
                numOfEnemies--;
                console.log('Enemies left: ' + numOfEnemies);
                if (numOfEnemies === 0) {
                    // Notify user of defeat.
                    $("#enemy-attack").text("");
                    $("#your-attack").text("You have defeated all the enemies!  You win!");
                    $("#restart-btn").show();
                }
            } 
            // Only counterattack if enemy has health.
            if (enemyCharacter.healthPoints > 0) {
                // Notify of counterattack
                $("#enemy-attack").text(`${enemyCharacter.name} attacked you back for \
                ${enemyCharacter.counterAttackPower} damage.`);
                // Lower your health
                yourCharacter.healthPoints -= enemyCharacter.counterAttackPower;
                // Display your health.
                $(returnHealthId(yourId)).text(yourCharacter.healthPoints);


            }

            if (yourCharacter.healthPoints <= 0) {
                // Set health to 0 so it doesn't display negative.
                yourCharacter.healthPoints = 0;
                $(returnHealthId(yourId)).text(yourCharacter.healthPoints);
                // Hide the your card.
                $("#" + yourId).hide();
                // Notify user of defeat.
                $("#enemy-attack").text("");
                $("#your-attack").text("You have been defeated.  GAME OVER");
                $("#restart-btn").show();
            }
        $("#restart-btn").on("click", function () {
            location.reload();
        })

            
        })
    });


})