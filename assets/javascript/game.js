let obiWan = {
    name: 'Obi-Wan Kenobi',
    picture: '',
    healthPoints: 120,
    baseAttackPower: 8,
    currentAttackPower: 8,
    counterAttackPower: 8,
}
let lukeSkywalker = {
    name: 'Luke Skywalker',
    picture: '',
    healthPoints: 100,
    baseAttackPower: 6,
    currentAttackPower: 6,
    counterAttackPower: 5,
}
let darthSidious = {
    name: 'Darth Sidious',
    picture: '',
    healthPoints: 150,
    baseAttackPower: 10,
    currentAttackPower: 10,
    counterAttackPower: 20,
}
let darthMaul = {
    name: 'Darth Maul',
    picture: '',
    healthPoints: 180,
    baseAttackPower: 12,
    currentAttackPower: 12,
    counterAttackPower: 25,
}




$(document).ready(function () {
    let characterChosen = 0,
        enemyChosen = 0;
    $("#obi-health").append(obiWan.healthPoints);
    $("#luke-health").append(lukeSkywalker.healthPoints);
    $("#sidious-health").append(darthSidious.healthPoints);
    $("#maul-health").append(darthMaul.healthPoints);

    $(".character-cards").on("click", function () {
        if (characterChosen === 0) {
            $(this).appendTo($("#your-character"))
            $(".character-cards").not(this).each(function () {
                $(this).appendTo($("#enemies"));
                $(this).css({"float": "left", "background-color": "red", "border-color": "black"});
                $(this).addClass("enemy");
            characterChosen = 1;
            })
        }
        if (enemyChosen === 0) {
            $(".enemy").on("click", function () {
                $(this).appendTo($("#current-fighter"));
                $(this).css({"background-color": "black", "border-color": "green", "color": "white"})
                enemyChosen = 1;
            });
        }
    });


})