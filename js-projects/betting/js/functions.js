/**
 * Created by markbensley on 11/11/15.
 */
var windowHeight = window.innerHeight,
    pageHeader = document.getElementById('header').clientHeight,
    contentHeight = windowHeight - pageHeader;
    document.getElementById('content-container').style.cssText = "height:" + contentHeight + "px";


var horseNames = ['Aurora', 'Flash Step', 'Nightmar', 'Thad', 'Are', 'Cruis', 'Aphrodit', 'Poke', 'Flight Blosso', 'Columbo'],
    raceSpeed = 0,
    randomRace = 0,
    racePercentage = 0,
    finalScore = 0;


//Selects a random number of horses that will race
var numberOfRunners = Math.floor((Math.random() * horseNames.length) + 1);

//Shuffles the horseNames array
function shuffle(nextRace) {
    var currentIndex = nextRace.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = nextRace[currentIndex];
        nextRace[currentIndex] = nextRace[randomIndex];
        nextRace[randomIndex] = temporaryValue;


    }

    return nextRace;
}

//Sends the horse names array to be shuffled
shuffle(horseNames);


//Takes the number of horse that will race and takes that number of names from the horseNames array
var newSet = horseNames.splice(0,numberOfRunners),
    horses =[],
    lineUp = 0;

console.log(newSet.length);


//Builds out the array for the race
while(lineUp < numberOfRunners){
    //var random = Math.floor(Math.random() * 10);
    horses.push({'name': newSet[lineUp], 'odds': 1.50, 'number': lineUp++, 'raceSpeed': raceSpeed, 'randomRace': randomRace, 'racePercentage': racePercentage, 'finalScore': finalScore});
    lineUp++;
}
//console.log(horseNames);

var userName,
    playMoney = 100.00,
    betValue = 0;

    //Removes errors
   function removeErrors(){
       document.getElementById('nameError').style.cssText = 'display:none';
       document.getElementById('user-name').style.cssText = 'background: #fff';
   }


    //Tests users name
    function testUser(){
        userName = document.getElementById('user-name').value;
        if(/^([a-zA-Z]+\s)*[a-zA-Z]+$/.test(userName)){
            document.getElementById('player-name').innerHTML = "Welcome " +  userName;
            //document.getElementById('overlay').style.cssText = 'display:none';
        }
        else {
            document.getElementById('nameError').style.cssText = 'display:block';
            document.getElementById('user-name').style.cssText = 'background: #ffc3c3';
        }
    }


//Sets the players pot
document.getElementById('player-pot').innerHTML = playMoney;

//Builds the table to display runners
var listHorses = document.getElementById('horses');
for (var i = 0; i < horses.length; i++){
    listHorses.innerHTML += "<input class='horse-list' id='horse" + i +"' type='radio' value='" + horses[i].number + "' name='horseNumber' id='" + horses[i].name + "'><label for='horse" + i + "'><span class='horse-name'>" + horses[i].name + "</span><span class='horse-odds'> " + horses[i].odds + "</span></label>";
}

//Gets the list of horses from the html
var runners = document.getElementsByName('horseNumber');

//Starts the betting process
function placeBet(){

    //betValue is the amount bet
    betValue = document.getElementById('bet-placed').value;

    if(!betValue || !/^\s*-?\d+(\.\d{1,2})?\s*$/.test(betValue)){
        alert('Enter amount');
    }
    else{

        //Check players balance
        if (playMoney <= 0){
            alert("You do not have enough money to place any more bets");
        }
        else if (betValue > playMoney) {
            alert("Your maximum bet that can be placed is:" + playMoney);
            document.getElementById('bet-placed').value = playMoney;
        }

        else{
            playMoney -= betValue;
            document.getElementById('player-pot').innerHTML = playMoney;

            //Gets the sleceted horse chossen by user
            for (var run = 0; run < runners.length; run++){
                if(runners[run].checked){
                    var runnerId = runners[run].value;
                    betValue = Number(betValue);
                    break;
                }
            }

            if(runnerId){

                //Checks the users chosen horse against the list of hosrses to collect all data about chosen horse
                for (var findHorses = 0; findHorses < horses.length; findHorses++) {
                    if(runnerId == horses[findHorses].number){
                        var chossenHorseNumber = horses[findHorses].number,
                            chossenHorseName = horses[findHorses].name,
                            chossenHorseOdds = horses[findHorses].odds;
                    }
                }

                //Add all ods together, horses odds divided by whole odss number times 100
                //Find total odds
                var totalOdds = 0;
                for(var horseOdds in horses ){
                    totalOdds += horses[horseOdds].odds;
                }

                var horseOddsPerc = 0,
                    finalScore = 0,
                    randomRace = 0,
                    raceSpeed = 0;
                for(var horsePerc = 0; horsePerc < horses.length; horsePerc++){
                    horseOddsPerc = horses[horsePerc].odds;
                    horseOddsPerc = horseOddsPerc / totalOdds * 100;
                    horseOddsPerc = Math.round(horseOddsPerc);

                    if(horseOddsPerc <= 15){
                        raceSpeed = 1;
                        randomRace = Math.floor((Math.random() * 10) + 1);
                        horses[horsePerc].raceSpeed = raceSpeed;
                        horses[horsePerc].randomRace = randomRace;
                        horses[horsePerc].racePercentage = horseOddsPerc;
                        finalScore = raceSpeed + randomRace;
                        horses[horsePerc].finalScore = finalScore;


                    }
                    else if (horseOddsPerc >= 16 && horseOddsPerc < 20){
                        raceSpeed = 2;
                        randomRace = Math.floor((Math.random() * 10) + 1);
                        horses[horsePerc].raceSpeed = raceSpeed;
                        horses[horsePerc].randomRace = randomRace;
                        horses[horsePerc].racePercentage = horseOddsPerc;
                        finalScore = raceSpeed + randomRace;
                        horses[horsePerc].finalScore = finalScore;
                    }
                    else if (horseOddsPerc >= 21 && horseOddsPerc < 35){
                        raceSpeed = 3;
                        randomRace = Math.floor((Math.random() * 10) + 1);
                        horses[horsePerc].raceSpeed = raceSpeed;
                        horses[horsePerc].randomRace = randomRace;
                        horses[horsePerc].racePercentage = horseOddsPerc;
                        finalScore = raceSpeed + randomRace;
                        horses[horsePerc].finalScore = finalScore;
                    }
                    else {
                        raceSpeed = 4;
                        randomRace = Math.floor((Math.random() * 10) + 1);
                        horses[horsePerc].raceSpeed = raceSpeed;
                        horses[horsePerc].randomRace = randomRace;
                        horses[horsePerc].racePercentage = horseOddsPerc;
                        finalScore = raceSpeed + randomRace;
                        horses[horsePerc].finalScore = finalScore;
                    }

                    console.log(horses[horsePerc].raceSpeed);
                }

                //Check to see if more than one horse has the same final score
                var extraRace = [];


                //Finds the lowest number for finalScore
                var minFinalScore = horses.reduce(function(minFinalScore, obj) {
                    return obj.finalScore < minFinalScore ? obj.finalScore : minFinalScore;
                }, Infinity);

                //Looks at all the horses and push all horses numbers with the lowest score to a new array
                for (var findWinner in horses )
                {
                    if(minFinalScore == horses[findWinner].finalScore){
                        extraRace.push(horses[findWinner].number);
                    }
                }



                console.log('Lowest score ' + minFinalScore);

                //Push out come of extraRace to a new array and check its length
                var betReturn = betValue * chossenHorseOdds + betValue,
                    headWinner;
                if (extraRace.length >= 2){
                    //Select a random winner if theres more than one horse with the same low score
                    headWinner = extraRace[Math.floor(Math.random() * extraRace.length)]
                    console.log('Theres more than one winner: ' + extraRace.length);
                    console.log('Won by a nose' + headWinner);
                    console.log('You chose horse number: ' + chossenHorseNumber);
                }
                else {
                    //The winner is selected
                    headWinner = extraRace;
                    console.log('There was only one winner horse number ' + extraRace);
                    console.log('You chose horse number: ' + chossenHorseNumber);
                }

                if (headWinner == chossenHorseNumber){
                    alert('You Won!! £' + betReturn + ' has been added to your account.');
                    playMoney += betReturn;
                    document.getElementById('player-pot').innerHTML = playMoney;

                }
                else
                {
                    alert('You lost please try again');
                }
            }
            else {
                alert('no horse selected');
            }






        }

    }





}


