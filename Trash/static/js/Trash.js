
// // // Control -> pre 

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
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
//   yaxis: {range: [0, 64],
//     title: 'Trash (average daily observations)'},
//   title: 'Change in Trash Observations'
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
//   y: [63.7], 
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
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
// yaxis: {range: [0, 64],
//     title: 'Trash (average daily observations)'},
//   title: 'Change in Trash Observations',
//     annotations: [
//           {
//             x: 2,
//             y: 63,
//             xref: 'x',
//             yref: 'y',
//             text: '13.2 observations',
//             showarrow: true,
//             arrowhead: 1,
//             ax: 0,
//             ay: 50
//           },   
//       ]
// };


// Control --> pre and post
// Treatment --> pre 

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
    y: [63.7], 
    name: 'Control', 
    type: 'bar',
    marker: {color: 'rgb(190, 200, 209)'}
  };
  
  var trace4 = {
    x: [
      ['Post-intervention'], ['Treatment']
    ], 
    y: [0], 
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
    font: {
        family: 'Tw Cen MT',
        size: 14},
    yaxis: {range: [0, 64],
    title: 'Trash (average daily observations)'},     
    title: 'Change in Trash Observations',
    annotations: [
      {
        x: 2,
        y: 63,
        xref: 'x',
        yref: 'y',
        text: '13.2 observations',
        showarrow: true,
        arrowhead: 1,
        ax: 0,
        ay: 50
      },
    
  ]
          
  };
  
  
// //   // Final graph
  
//   var trace1 = {
//     x: [
//       ['Pre-intervention'], ['Control']
//     ], 
//     y: [50.5], 
//     name: 'Control', 
//     type: 'bar',
//     marker: {color: 'rgb(190, 200, 209)'}
//   };
  
//   var trace2 = {
//     x: [
//       ['Pre-intervention'], ['Treatment']
//     ], 
//     y: [48.2], 
//     name: 'Treatment', 
//     type: 'bar',
//     marker: { color: 'rgb(0, 153, 51)'}
//    };
  
//    var trace3 = {
//     x: [
//       ['Post-intervention'], ['Control']
//     ], 
//     y: [63.7], 
//     name: 'Control', 
//     type: 'bar',
//     marker: {color: 'rgb(190, 200, 209)'}
//   };
  
//   var trace4 = {
//     x: [
//       ['Post-intervention'], ['Treatment']
//     ], 
//     y: [41.3], 
//     name: 'Treatment', 
//     type: 'bar',
//     marker: { color: 'rgb(0, 153, 51)'}
//    };
  
//   var data = [trace1, trace2, trace3, trace4];
//   var layout = {
//     showlegend: false,
//     xaxis: {
//       tickson: "boundaries",
//       ticklen: 15
//     },
//     font: {
//         family: 'Tw Cen MT',
//         size: 14},
// yaxis: {range: [0, 64],
//     title: 'Trash (average daily observations)'},
//     title: 'Change in Trash Observations',
//     annotations: [
//           {
//             x: 2,
//             y: 63,
//             xref: 'x',
//             yref: 'y',
//             text: '13.2 observations',
//             showarrow: true,
//             arrowhead: 1,
//             ax: 0,
//             ay: 50
//           },
//           {
//             x: 3,
//             y: 42,
//             xref: 'x',
//             yref: 'y',
//             text: '-6.9 observations',
//             showarrow: true,
//             arrowhead: 1,
//             ax: 0,
//             ay: -25
//           }]
//   };
  
  
  Plotly.newPlot('trash', data, layout);