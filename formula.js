function calculateAverage() {
    var AveASum = 0;
    var AveBSum = 0;
    var AveCSum = 0;
    var AveDSum = 0;
    var AveESum = 0;
    var AveFSum = 0;
    var AveGSum = 0;
    var AveHSum = 0;
    var AveISum = 0;
    var AveJSum = 0;
    var AveKSum = 0;
    var AveLSum = 0;
    var countA = 0;
    var countB = 0;
    var countC = 0;
    var countD = 0;
    var countE = 0;
    var countF = 0;
    var countG = 0;
    var countH = 0;
    var countI = 0;
    var countJ = 0;
    var countK = 0;
    var countL = 0;

    var averageAInputs = document.getElementsByName('AverageA[]');
    var averageBInputs = document.getElementsByName('AverageB[]');
    var averageCInputs = document.getElementsByName('AverageC[]');
    var averageDInputs = document.getElementsByName('AverageD[]');
    var averageEInputs = document.getElementsByName('AverageE[]');
    var averageFInputs = document.getElementsByName('AverageF[]');
    var averageGInputs = document.getElementsByName('AverageG[]');
    var averageHInputs = document.getElementsByName('AverageH[]');
    var averageIInputs = document.getElementsByName('AverageI[]');
    var averageJInputs = document.getElementsByName('AverageJ[]');
    var averageKInputs = document.getElementsByName('AverageK[]');
    var averageLInputs = document.getElementsByName('AverageL[]');
   
    for (var i = 0; i < averageAInputs.length; i++) {
        var averageAInputsValue = parseFloat(averageAInputs[i].value);
        var averageBInputsValue = parseFloat(averageBInputs[i].value);
        var averageCInputsValue = parseFloat(averageCInputs[i].value);
        var averageDInputsValue = parseFloat(averageDInputs[i].value);
        var averageEInputsValue = parseFloat(averageEInputs[i].value);
        var averageFInputsValue = parseFloat(averageFInputs[i].value);
        var averageGInputsValue = parseFloat(averageGInputs[i].value);
        var averageHInputsValue = parseFloat(averageHInputs[i].value);
        var averageIInputsValue = parseFloat(averageIInputs[i].value);
        var averageJInputsValue = parseFloat(averageJInputs[i].value);
        var averageKInputsValue = parseFloat(averageKInputs[i].value);
        var averageLInputsValue = parseFloat(averageLInputs[i].value);

        if (!isNaN(averageAInputsValue)) {
            AveASum += averageAInputsValue;
            countA++;
        }

        if (!isNaN(averageBInputsValue)) {
            AveBSum += averageBInputsValue;
            countB++;
        }

        if (!isNaN(averageCInputsValue)) {
            AveCSum += averageCInputsValue;
            countC++;
        }

        if (!isNaN(averageDInputsValue)) {
            AveDSum += averageDInputsValue;
            countD++;
        }

        if (!isNaN(averageEInputsValue)) {
            AveESum += averageEInputsValue;
            countE++;
        }

        if (!isNaN(averageFInputsValue)) {
            AveFSum += averageFInputsValue;
            countF++;
        }

        if (!isNaN(averageGInputsValue)) {
            AveGSum += averageGInputsValue;
            countG++;
        }

        if (!isNaN(averageHInputsValue)) {
            AveHSum += averageHInputsValue;
            countH++;
        }

        if (!isNaN(averageIInputsValue)) {
            AveISum += averageIInputsValue;
            countI++;
        }

        if (!isNaN(averageJInputsValue)) {
            AveJSum += averageJInputsValue;
            countJ++;
        }

        if (!isNaN(averageKInputsValue)) {
            AveKSum += averageKInputsValue;
            countK++;
        }
        if (!isNaN(averageLInputsValue)) {
            AveLSum += averageLInputsValue;
            countL++;
        }
    }

    var average1Value = AveASum / countA;
    var average2Value = AveBSum / countB;
    var average3Value = AveCSum / countC;
    var average4Value = AveDSum / countD;
    var average5Value = AveESum / countE;
    var average6Value = AveFSum / countF;
    var average7Value = AveGSum / countG;
    var average8Value = AveHSum / countH;
    var average9Value = AveISum / countI;
    var average10Value = AveJSum / countJ;
    var average11Value = AveKSum / countK;
    var average12Value = AveLSum / countL;

    // Calculate PS
    var PSValue = (average1Value + average2Value + average3Value + average4Value + average5Value + average6Value + average7Value + average8Value + average9Value + average10Value + average11Value + average12Value) / 12;
    // Calculate PSxW
    var PSxWValue = PSValue * .1;

    // Print into specified IDs
    document.getElementById("AverageAOutput").innerHTML = average1Value.toFixed(2);
    document.getElementById("AverageBOutput").innerHTML = average2Value.toFixed(2);
    document.getElementById("AverageCOutput").innerHTML = average3Value.toFixed(2);
    document.getElementById("AverageDOutput").innerHTML = average4Value.toFixed(2);
    document.getElementById("AverageEOutput").innerHTML = average5Value.toFixed(2);
    document.getElementById("AverageFOutput").innerHTML = average6Value.toFixed(2);
    document.getElementById("AverageGOutput").innerHTML = average7Value.toFixed(2);
    document.getElementById("AverageHOutput").innerHTML = average8Value.toFixed(2);
    document.getElementById("AverageIOutput").innerHTML = average9Value.toFixed(2);
    document.getElementById("AverageJOutput").innerHTML = average10Value.toFixed(2);
    document.getElementById("AverageKOutput").innerHTML = average11Value.toFixed(2);
    document.getElementById("AverageLOutput").innerHTML = average12Value.toFixed(2);
    document.getElementById("FinalAverageOutput1").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput2").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput3").innerHTML = PSxWValue.toFixed(2);
    document.getElementById("FinalAverageOutput4").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput5").innerHTML = PSxWValue.toFixed(2);
    document.getElementById("FinalAverageOutput6").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput7").innerHTML = PSxWValue.toFixed(2);
    document.getElementById("FinalAverageOutput8").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput9").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput10").innerHTML = PSValue.toFixed(2);
    document.getElementById("FinalAverageOutput11").innerHTML = PSxWValue.toFixed(2);
    document.getElementById("FinalAverageOutput12").innerHTML = PSxWValue.toFixed(2);
    document.getElementById("FinalAverageOutput13").innerHTML = PSxWValue.toFixed(2);
   }