document.addEventListener('DOMContentLoaded', function () {
    var xValue = ['a1', 'a2', 'a3'];
    var y1Value = [84, 84, 84];
    var y2Value = [84, 84, 89];
    var y3Value = [89, 89, 90];

    var trace1 = {
        x: xValue,
        y: y1Value,
        text: y1Value.map(String),
        name: '2016',
        type: 'bar'
    };

    var trace2 = {
        x: xValue,
        y: y2Value,
        text: y2Value.map(String),
        name: '2019',
        type: 'bar'
    };

    var trace3 = {
        x: xValue,
        y: y3Value,
        text: y3Value.map(String),
        name: '2022',
        type: 'bar',
        marker: {
            color: ['rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)'],
        }
    };

    var data = [trace1, trace2, trace3];

    var layout = { barmode: 'group' };

    var config = {
        toImageButtonOptions: {
            format: 'png',
            filename: 'graphData',
            height: 700,
            width: 900,
            scale: 2
        }
    };

    Plotly.newPlot('graphSection-contents', data, layout, config);
});
