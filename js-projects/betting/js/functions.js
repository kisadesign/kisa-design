/**
 * Created by markbensley on 11/11/15.
 */
var horses = [
        {name: 'horse1', odds: 1.50, number: 1},
        {name: 'horse2', odds: 1.75, number: 2},
        {name: 'horse3', odds: 1.25, number: 3},
        {name: 'horse4', odds: 3.00, number: 4},
        {name: 'horse5', odds: 1.50, number: 5}
    ],
    userName = prompt('Please enter your name:'),
    playMoney = 100.00,
    betValue;
//console.log(horses[0].name);
document.getElementById('player-name').innerHTML = userName;
document.getElementById('player-pot').innerHTML = playMoney;

var listHorses = document.getElementById('horses');
for (var i = 0; i < horses.length; i++){
    listHorses.innerHTML += "<p>" + horses[i].name + "</p>";

}



var placeBet = function(){
    betValue = document.getElementById('bet-placed').value;
    alert('bet placed' + betValue);
}