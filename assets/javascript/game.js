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
    }).append("<img src='../images/obiWan.png>");
let lukeCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='../images/lukeSkywalker.png>");
let sidiousCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='../images/darthSidious.png>");
let maulCard = $("<div>").css({
    'border': '4px solid green',
    'height': '150px',
    'width': '200px',
    'background-color': '#FFFFFF'
    }).append("<img src='../images/darthMaul.png>");


$(document).ready(function () {
    $("#obi-wan").append(obiWanCard);
    $("#luke-skywalker").append(lukeCard);
    $("#darth-sidious").append(sidiousCard);
    $("#darth-maul").append(maulCard);
})