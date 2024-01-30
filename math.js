//Quadratic formula
function quadraticFormula () {

    let a = document.getElementById('aQuadratic').value;
    let b = document.getElementById('bQuadratic').value;
    let c = document.getElementById('cQuadratic').value;

    firstResult = [(-1 * b) + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))] / 2 * a;
    secondResult = [(-1 * b) - (Math.sqrt(Math.pow(b, 2) - 4 * a * c))] / 2 * a;
    let firstRounded = firstResult.toFixed(0);
    let secondRounded = secondResult.toFixed(0);

    document.getElementById("answerPositiveQuadratic").innerText = firstRounded;
    document.getElementById("answerNegativeQuadratic").innerText = secondRounded;

    let case_1 =  secondRounded <= 0 && firstRounded > 0;
    let case_2 =  firstRounded <= 0 && secondRounded > 0;
    let case_3 =  secondRounded <= 0 && firstRounded <= 0;
    let case_4 =  secondRounded > 0 && firstRounded > 0;

    if (case_1) return document.getElementById("answerConclusionQuadratic").innerText = "(x + " + -1 * (secondRounded) + ")(x - " + (firstRounded) + ")"   ;
    if (case_2) return document.getElementById("answerConclusionQuadratic").innerText = "(x - " + (secondRounded) + ")(x + " + -1 * (firstRounded) + ")"   ;
    if (case_3) return document.getElementById("answerConclusionQuadratic").innerText = "(x + " + -1 * (secondRounded) + ")(x + " + -1 * (firstRounded) + ")"   ;
    if (case_4) return document.getElementById("answerConclusionQuadratic").innerText = "(x - " + (secondRounded) + ")(x - " + (firstRounded) + ")"   ;

}

function trigonometry () {

    let tanDegrees = document.getElementById("tanDeg").value;
    let cosDegrees = document.getElementById("cosDeg").value;
    let sinDegrees = document.getElementById("sinDeg").value;

    let tanDeg = Math.tan(Number(tanDegrees) * Math.PI / 180);
    let cosDeg = Math.cos(Number(cosDegrees) * Math.PI / 180);
    let sinDeg = Math.sin(Number(sinDegrees) * Math.PI / 180);

    let tanDegRound = tanDeg.toFixed(4);
    let cosDegRound = cosDeg.toFixed(4);
    let sinDegRound = sinDeg.toFixed(4);

    document.getElementById("tanDegResult").innerText = tanDegRound;
    document.getElementById("cosDegResult").innerText = cosDegRound;
    document.getElementById("sinDegResult").innerText = sinDegRound;

}