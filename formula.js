function calculateAverage() {
    var AveASum = 0;
    var AveBSum = 0;
    var AveCSum = 0;
    var AveDSum = 0;
    var countA = 0;
    var countB = 0;
    var countC = 0;
    var countD = 0;

    var averageAInputs = document.getElementsByName('AverageA[]');
    var averageBInputs = document.getElementsByName('AverageB[]');
    var averageCInputs = document.getElementsByName('AverageC[]');
    var averageDInputs = document.getElementsByName('AverageD[]');
   
    for (var i = 0; i < averageAInputs.length; i++) {
        var averageAInputsValue = parseFloat(averageAInputs[i].value);
        var averageBInputsValue = parseFloat(averageBInputs[i].value);
        var averageCInputsValue = parseFloat(averageCInputs[i].value);
        var averageDInputsValue = parseFloat(averageDInputs[i].value);

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
    }

    var average1Value = AveASum / countA;
    var average2Value = AveBSum / countB;
    var average3Value = AveCSum / countC;
    var average4Value = AveDSum / countD;

    // Calculate PS
    var PSValue = (average1Value + average2Value + average3Value + average4Value) / 4;
    // Calculate PSxW
    var PSxWValue = PSValue * .1;
    var PSxW2Value = PSValue *.05;

    // Print into specified IDs
    document.getElementById("AverageAOutput").innerHTML = average1Value.toFixed(2);
    document.getElementById("AverageBOutput").innerHTML = average2Value.toFixed(2);
    document.getElementById("AverageCOutput").innerHTML = average3Value.toFixed(2);
    document.getElementById("AverageDOutput").innerHTML = average4Value.toFixed(2);
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
    document.getElementById("FinalAverageOutput11").innerHTML = PSxW2Value.toFixed(2);
    document.getElementById("FinalAverageOutput12").innerHTML = PSxWValue.toFixed(2);
    document.getElementById("FinalAverageOutput13").innerHTML = PSxWValue.toFixed(2);
   }