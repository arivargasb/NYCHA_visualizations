
// // Control -> pre 

// var trace1 = {
//   x: [
//     ['Pre-intervention'], ['Control']
//   ], 
//   y: [171.1], 
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
//   yaxis: {range: [0, 209],
//     title: 'Litter (average daily observations)'},
//   title: 'Change in Litter Observations'
// };


// // Control -> pre 
// // Treatment --> pre

// var trace1 = {
//   x: [
//     ['Pre-intervention'], ['Control']
//   ], 
//   y: [171.1], 
//   name: 'Control', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace2 = {
//   x: [
//     ['Pre-intervention'], ['Treatment']
//   ], 
//   y: [183], 
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
// yaxis: {range: [0, 209],
//     title: 'Litter (average daily observations)'},
//   title: 'Change in Litter Observations'
// };


// // Control --> pre and post
// // Treatment --> pre 

// var trace1 = {
//     x: [
//       ['Pre-intervention'], ['Control']
//     ], 
//     y: [171.1], 
//     name: 'Control', 
//     type: 'bar',
//     marker: {color: 'rgb(190, 200, 209)'}
//   };
  
//   var trace2 = {
//     x: [
//       ['Pre-intervention'], ['Treatment']
//     ], 
//     y: [183], 
//     name: 'Treatment', 
//     type: 'bar',
//     marker: { color: 'rgb(0, 153, 51)'}
//    };
  
//    var trace3 = {
//     x: [
//       ['Post-intervention'], ['Control']
//     ], 
//     y: [208.1], 
//     name: 'Control', 
//     type: 'bar',
//     marker: {color: 'rgb(190, 200, 209)'}
//   };
  
//   var trace4 = {
//     x: [
//       ['Post-intervention'], ['Treatment']
//     ], 
//     y: [0], 
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
//     yaxis: {range: [0, 209],
//     title: 'Litter (average daily observations)'},     
//     title: 'Change in Litter Observations',
//     annotations: [
//           {
//     x: 2,
//     y: 202,
//     xref: 'x',
//     yref: 'y',
//     text: '37 observations',
//     showarrow: true,
//     arrowhead: 1,
//     ax: 0,
//     ay: 27
//     }]
          
//   };
  
  
  // Final graph
  
  var trace1 = {
    x: [
      ['Pre-intervention'], ['Control']
    ], 
    y: [171.1], 
    name: 'Control', 
    type: 'bar',
    marker: {color: 'rgb(190, 200, 209)'}
  };
  
  var trace2 = {
    x: [
      ['Pre-intervention'], ['Treatment']
    ], 
    y: [183], 
    name: 'Treatment', 
    type: 'bar',
    marker: { color: 'rgb(0, 153, 51)'}
   };
  
   var trace3 = {
    x: [
      ['Post-intervention'], ['Control']
    ], 
    y: [208.1], 
    name: 'Control', 
    type: 'bar',
    marker: {color: 'rgb(190, 200, 209)'}
  };
  
  var trace4 = {
    x: [
      ['Post-intervention'], ['Treatment']
    ], 
    y: [143.3], 
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
yaxis: {range: [0, 209],
    title: 'Litter (average daily observations)'},
    title: 'Change in Litter Observations',
    annotations: [
          {
            x: 2,
            y: 202,
            xref: 'x',
            yref: 'y',
            text: '37 observations',
            showarrow: true,
            arrowhead: 1,
            ax: 0,
            ay: 27
          },
          {
            x: 3,
            y: 150,
            xref: 'x',
            yref: 'y',
            text: '-39.7 observations',
            showarrow: true,
            arrowhead: 1,
            ax: 0,
            ay: -40
          }]
  };
  
  
  Plotly.newPlot('litter', data, layout);