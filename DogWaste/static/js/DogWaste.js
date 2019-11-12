
// // Control -> pre 

// var trace1 = {
//   x: [
//     ['Pre-intervention'], ['Control']
//   ], 
//   y: [50.5], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace2 = {
//   x: [
//     ['Pre-intervention'], ['Treatment']
//   ], 
//   y: [0], 
//   name: 'Treatment', 
//   type: 'bar',
//   marker: { color: 'rgb(0, 153, 51)'}
//  };

//  var trace3 = {
//   x: [
//     ['Post-intervention'], ['Control']
//   ], 
//   y: [0], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace4 = {
//   x: [
//     ['Post-intervention'], ['Treatment']
//   ], 
//   y: [0], 
//   name: 'Treatment', 
//   type: 'bar',
//   marker: { color: 'rgb(0, 153, 51)'}
//  };

// var data = [trace1, trace2, trace3, trace4];
// var layout = {
//   showlegend: false,
//   xaxis: {
//     tickson: "boundaries",
//     ticklen: 15
//   },
//   yaxis: {range: [0, 55]},
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
//   yaxis: {title: 'Dog Waste (average daily observations)'},
//   title: 'Change in Dog Waste Observations'
// };


// // Control -> pre and post

// var trace1 = {
//   x: [
//     ['Pre-intervention'], ['Control']
//   ], 
//   y: [50.5], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace2 = {
//   x: [
//     ['Pre-intervention'], ['Treatment']
//   ], 
//   y: [0], 
//   name: 'Treatment', 
//   type: 'bar',
//   marker: { color: 'rgb(0, 153, 51)'}
//  };

//  var trace3 = {
//   x: [
//     ['Post-intervention'], ['Control']
//   ], 
//   y: [43.2], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace4 = {
//   x: [
//     ['Post-intervention'], ['Treatment']
//   ], 
//   y: [0], 
//   name: 'Treatment', 
//   type: 'bar',
//   marker: { color: 'rgb(0, 153, 51)'}
//  };

// var data = [trace1, trace2, trace3, trace4];
// var layout = {
//   showlegend: false,
//   xaxis: {
//     tickson: "boundaries",
//     ticklen: 15
//   },
//   yaxis: {range: [0, 55]},
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
//   yaxis: {title: 'Dog Waste (average daily observations)'},
//   title: 'Change in Dog Waste Observations',
//   annotations: [
//         {
//           x: 2,
//           y: 43,
//           xref: 'x',
//           yref: 'y',
//           text: '-7.3 observations',
//           showarrow: true,
//           arrowhead: 1,
//           ax: 0,
//           ay: -40
//         }
//       ]
// };


// // Control --> pre and post
// // Treatment --> pre 

// var trace1 = {
//   x: [
//     ['Pre-intervention'], ['Control']
//   ], 
//   y: [50.5], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace2 = {
//   x: [
//     ['Pre-intervention'], ['Treatment']
//   ], 
//   y: [48.2], 
//   name: 'Treatment', 
//   type: 'bar',
//   marker: { color: 'rgb(0, 153, 51)'}
//  };

//  var trace3 = {
//   x: [
//     ['Post-intervention'], ['Control']
//   ], 
//   y: [43.2], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace4 = {
//   x: [
//     ['Post-intervention'], ['Treatment']
//   ], 
//   y: [0], 
//   name: 'Treatment', 
//   type: 'bar',
//   marker: { color: 'rgb(0, 153, 51)'}
//  };

// var data = [trace1, trace2, trace3, trace4];
// var layout = {
//   showlegend: false,
//   xaxis: {
//     tickson: "boundaries",
//     ticklen: 15
//   },
//   yaxis: {range: [0, 55]},
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
//   yaxis: {title: 'Dog Waste (average daily observations)'},
//   title: 'Change in Dog Waste Observations',
//   annotations: [
//         {
//           x: 2,
//           y: 43,
//           xref: 'x',
//           yref: 'y',
//           text: '-7.3 observations',
//           showarrow: true,
//           arrowhead: 1,
//           ax: 0,
//           ay: -40
//         }]
// };


// Final graph

var trace1 = {
  x: [
    ['Pre-intervention'], ['Control']
  ], 
  y: [50.5], 
  name: 'Control', 
  type: 'bar',
  marker: {color: 'rgb(190, 200, 209)'}
};

var trace2 = {
  x: [
    ['Pre-intervention'], ['Treatment']
  ], 
  y: [48.2], 
  name: 'Treatment', 
  type: 'bar',
  marker: { color: 'rgb(0, 153, 51)'}
 };

 var trace3 = {
  x: [
    ['Post-intervention'], ['Control']
  ], 
  y: [43.2], 
  name: 'Control', 
  type: 'bar',
  marker: {color: 'rgb(190, 200, 209)'}
};

var trace4 = {
  x: [
    ['Post-intervention'], ['Treatment']
  ], 
  y: [31], 
  name: 'Treatment', 
  type: 'bar',
  marker: { color: 'rgb(0, 153, 51)'}
 };

var data = [trace1, trace2, trace3, trace4];
var layout = {
  showlegend: false,
  xaxis: {
    tickson: "boundaries",
    ticklen: 15
  },
  yaxis: {range: [0, 55]},
  font: {
      family: 'Tw Cen MT',
      size: 14},
  yaxis: {title: 'Dog Waste (average daily observations)'},
  title: 'Change in Dog Waste Observations',
  annotations: [
        {
          x: 2,
          y: 43,
          xref: 'x',
          yref: 'y',
          text: '-7.3 observations',
          showarrow: true,
          arrowhead: 1,
          ax: 0,
          ay: -40
        },
        {
          x: 3,
          y: 31,
          xref: 'x',
          yref: 'y',
          text: '-17 observations',
          showarrow: true,
          arrowhead: 1,
          ax: 0,
          ay: -100
        }]
};


Plotly.newPlot('dog_waste', data, layout);