// Force
function forceBesidesNinetyDegrees() {

    let forceOne = document.getElementById('forceOne').value;
    let forceTwo = document.getElementById('forceTwo').value;
    let cosDegrees = document.getElementById('cosDegrees').value;
    let firstResult = [(((Math.pow(Number(forceOne), 2)) + (Math.pow(Number(forceTwo), 2))) + (2 * Number(forceOne) * Number(forceTwo)) * Math.cos(Number(cosDegrees) * Math.PI / 180))];
    let finalResult = Math.sqrt(firstResult);
    roundedResult = finalResult.toFixed(2);
    document.getElementById("forceBesidesNinetyDegreesAnswer").innerHTML = roundedResult;

}

// Electricity
function electricalCost() {

    let power = document.getElementById('powerElectricalCost').value;
    let pricePerKWh = document.getElementById('pricePerKWhElectricalCost').value;

    let amountOfHour = document.getElementById('amountOfHourElectricalCost').value;
    let amountOfDay = document.getElementById('amountOfDayElectricalCost').value;
    let amountOfMonth = document.getElementById('amountOfMonthElectricalCost').value;
    let amountOfYear = document.getElementById('amountOfYearElectricalCost').value;

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