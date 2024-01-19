// Graph initiate
var data = [{
    type: 'bar',
    x: ['a1', 'a2', 'a3'],
    y: [],
    name: 'Group 1'
}, {
    type: 'bar',
    x: ['a1', 'a2', 'a3'],
    y: [],
    name: 'Group 2'
}, {
    type: 'bar',
    x: ['a1', 'a2', 'a3'],
    y: [],
    name: 'Group 3'
}];

var layout = {
    barmode: 'group',
    bargap: 0.2,
    height: 700,
    width: 1200,
    legend: {
        x: 0.2,
        y: 1.2,
        orientation: 'h',
    }
};

var config = {
    toImageButtonOptions: {
        format: 'png',
        filename: 'graphData',
        height: 700,
        width: 900,
        scale: 2
    },
    modeBarButtons: [
        ['toImage', 'autoScale2d']
    ],
};

// Update graph data
function updateGraph() {
    var a1 = [
        parseFloat(document.getElementById('a1v1').value),
        parseFloat(document.getElementById('a1v2').value),
        parseFloat(document.getElementById('a1v3').value)
    ];

    var a2 = [
        parseFloat(document.getElementById('a2v1').value),
        parseFloat(document.getElementById('a2v2').value),
        parseFloat(document.getElementById('a2v3').value)
    ];

    var a3 = [
        parseFloat(document.getElementById('a3v1').value),
        parseFloat(document.getElementById('a3v2').value),
        parseFloat(document.getElementById('a3v3').value)
    ];

    var updatedData = [{
        type: 'bar',
        x: ['a1', 'a2', 'a3'],
        y: a1,
        name: 'Year',
        text: a1.map(String),
        textposition: 'auto',
        textfont: {
            color: 'black',
            size: 16,
            family: 'Arial',
            weight: 'bold'
        },
        width: 0.2
    }, {
        type: 'bar',
        x: ['a1', 'a2', 'a3'],
        y: a2,
        name: 'Year',
        text: a2.map(String),
        textposition: 'auto',
        textfont: {
            color: 'black',
            size: 16,
            family: 'Arial',
            weight: 'bold'
        },
        width: 0.2
    }, {
        type: 'bar',
        x: ['a1', 'a2', 'a3'],
        y: a3,
        name: 'Year',
        width: 0.2,
        text: a3.map(String),
        textposition: 'auto',
        textfont: {
            color: 'black',
            size: 16,
            family: 'Arial',
            weight: 'bold'
        },
        marker: {
            color: ['rgba(204,204,204,1)', 'rgba(204,204,204,1)', 'rgba(204,204,204,1)'],
        },
    }];

    // New plot with updated values
    Plotly.newPlot('graphSection-contents', updatedData, layout, config);
}