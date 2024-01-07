// Conversion
function centiToFeetConverter (valNum) {
    let result = (valNum * 0.394)/12; // calculates the result as feets
    roundedResult = result.toFixed(1); // rounds up or down the results
    document.getElementById("outputFeets").innerHTML = roundedResult;
}
// Force
function forceBesidesNinetyDegrees() {
    var fOne = document.getElementById('fOne').value;
    var fTwo = document.getElementById('fTwo').value;
    var cosDegrees = document.getElementById('cosDegrees').value;
    var firstResult = [(((Math.pow(Number(fOne), 2)) + (Math.pow(Number(fTwo), 2))) + (2 * Number(fOne) * Number(fTwo) * Math.cos(Number(cosDegrees))))];
    var finalResult = Math.sqrt(firstResult);
    roundedResult = finalResult.toFixed(2);
    document.getElementById("forceBesidesNinetyDegreesAnswer").innerHTML = roundedResult;
}

function perpendicularForce() {
    var forceOnePerpendicular = document.getElementById('forceOnePerpendicular').value;
    var forceTwoPerpendicular = document.getElementById('forceTwoPerpendicular').value;
    var firstResult = Math.pow(Number(forceOnePerpendicular), 2) + Math.pow(Number(forceTwoPerpendicular), 2);
    var finalResult = Math.sqrt(firstResult);
    roundedResult = finalResult.toFixed(2);
    document.getElementById("forcePerpendicularAnswer").innerHTML = roundedResult;
}

// Electricity
function electricalCost() {
    var power = document.getElementById('powerElectricalCost').value;
    var pricePerKWh = document.getElementById('pricePerKWhElectricalCost').value;

    var amountOfHour = document.getElementById('amountOfHourElectricalCost').value;
    var amountOfDay = document.getElementById('amountOfDayElectricalCost').value;
    var amountOfMonth = document.getElementById('amountOfMonthElectricalCost').value;
    var amountOfYear = document.getElementById('amountOfYearElectricalCost').value;

    let timeMonth = Number((amountOfHour * 30) * amountOfMonth);
    let timeDay = Number(amountOfHour * amountOfDay);
    let timeYear = Number(timeMonth * amountOfYear);

    powerKiloWatts =  (power / 1000);
    costHour = Number(powerKiloWatts * amountOfHour * pricePerKWh);
    costDay = Number(powerKiloWatts * timeDay * pricePerKWh);
    costMonth = Number(powerKiloWatts * timeMonth * pricePerKWh);
    costYear = Number(powerKiloWatts * timeYear * pricePerKWh); 

    roundedResultHour = costHour.toFixed(2);
    roundedResultDay = costDay.toFixed(2);
    roundedResultMonth = costMonth.toFixed(2);
    roundedResultYear = costYear.toFixed(2);

    document.getElementById("costIfTimeIsHour").innerHTML = roundedResultHour;
    document.getElementById("costIfTimeIsDay").innerHTML = roundedResultDay
    document.getElementById("costIfTimeIsMonth").innerHTML = roundedResultMonth;
    document.getElementById("costIfTimeIsYear").innerHTML = roundedResultYear;
}

//Quadratic formula
function quadraticFormula () {
    var aQuadraticFormula = document.getElementById('aQuadratic').value;
    var bQuadraticFormula = document.getElementById('bQuadratic').value;
    var cQuadraticFormula = document.getElementById('cQuadratic').value;

    resultPositive = [(-1 * (bQuadraticFormula)) + (Math.sqrt(Math.pow(bQuadraticFormula, 2) - 4 * aQuadraticFormula * cQuadraticFormula))] / 2 * aQuadraticFormula;
    resultNegative = [(-1 * (bQuadraticFormula)) - (Math.sqrt(Math.pow(bQuadraticFormula, 2) - 4 * aQuadraticFormula * cQuadraticFormula))] / 2 * aQuadraticFormula;
    roundedPositive = resultPositive.toFixed(0);
    roundedNegative = resultNegative.toFixed(0);

    document.getElementById("answerPositiveQuadratic").innerHTML = roundedPositive;
    document.getElementById("answerNegativeQuadratic").innerHTML = roundedNegative;

    if (roundedNegative <= -1 && roundedPositive >-1) {
    document.getElementById("answerConclusionQuadratic").innerHTML = "(x + " + -1 * (roundedNegative) + ")(x - " + (roundedPositive) + ")"   ;
    }

    else
    if (roundedPositive <= -1 && roundedNegative >-1) {
    document.getElementById("answerConclusionQuadratic").innerHTML = "(x - " + (roundedNegative) + ")(x + " + -1 * (roundedPositive) + ")"   ;
        }

    else{
    if (roundedNegative <= -1 && roundedPositive <= -1) {
    document.getElementById("answerConclusionQuadratic").innerHTML = "(x + " + (roundedNegative) + ")(x + " + (roundedPositive) + ")"   ;
            }
    }

    if (roundedNegative > -1 && roundedPositive > -1) {
    document.getElementById("answerConclusionQuadratic").innerHTML = "(x - " + (roundedNegative) + ")(x - " + (roundedPositive) + ")"   ;
    }
    

}
