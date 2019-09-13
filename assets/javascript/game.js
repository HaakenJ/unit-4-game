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

let obiWanCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='assets/images/obiWan.png' height='80%' width='80%'>")
    .css({'text-align': 'center', 'padding': '20px 0 0'});
let lukeCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='assets/images/lukeSkywalker.png' height='80%' width='80%'>")
    .css({'text-align': 'center', 'padding': '20px 0 0'});
let sidiousCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='assets/images/darthSidious.png' height='80%' width='80%'>")
    .css({'text-align': 'center', 'padding': '20px 0 0'});
let maulCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='assets/images/darthMaul.png' height='80%' width='80%'>")
    .css({'text-align': 'center', 'padding': '20px 0 0'});


$(document).ready(function () {
    $("#obi-wan").append(obiWanCard);
    $("#luke-skywalker").append(lukeCard);
    $("#darth-sidious").append(sidiousCard);
    $("#darth-maul").append(maulCard);
})