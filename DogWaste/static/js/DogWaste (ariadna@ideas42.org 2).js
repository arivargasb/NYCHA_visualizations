// // Control -> pre

// var trace1 = {
//     x: [
//       ['Control','Control'],
//       ['Pre-intervention', 'Post-intervention']
//     ], 
//     y: [50.5, 0], 
//     name: 'pounds', 
//     type: 'bar',
//     marker: {color: 'rgb(190, 200, 209)'}
//   };
  
//   var trace2 = {
//     x: [
//       ['Treatment','Treatment'],
//       ['Pre-intervention', 'Post-intervention']
//     ], 
//     y: [0, 0], 
//     name: 'pounds', 
//     type: 'bar',
//     marker: {color: 'rgb(45, 150, 140)'}
//   };
  
//   var data = [trace1, trace2];
//   var layout = {
//     showlegend: false,
//     xaxis: {
//       tickson: "boundaries",
//       ticklen: 15,
//       showdividers: true,
//       dividercolor: 'grey',
//       dividerwidth: 2
//     },
//     yaxis: {range: [0, 55]},
//     font: {
//         family: 'Tw Cen MT',
//         size: 14},
//      ticklen: 10,
//     yaxis: {title: 'Dog waste (pounds)'},
//      title: 'Change in Dog Waste Observations'
//   };
  
// Control -> pre and post

// var trace1 = {
//   x: [
//     ['Control','Control'],
//     ['Pre-intervention', 'Post-intervention']
//   ], 
//   y: [50.5, 43.2], 
//   name: 'pounds', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace2 = {
//   x: [
//     ['Treatment','Treatment'],
//     ['Pre-intervention', 'Post-intervention']
//   ], 
//   y: [0, 0], 
//   name: 'pounds', 
//   type: 'bar',
//   marker: {color: 'rgb(45, 150, 140)'}
// };

// var data = [trace1, trace2];
// var layout = {
//   showlegend: false,
//   xaxis: {
//     tickson: "boundaries",
//     ticklen: 15,
//     showdividers: true,
//     dividercolor: 'grey',
//     dividerwidth: 2
//   },
//   yaxis: {range: [0, 55]},
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
//    ticklen: 10,
//   yaxis: {title: 'Dog waste (pounds)'},
//    title: 'Change in Dog Waste Observations',
//    annotations: [
//         {
//           x: 1,
//           y: 43,
//           xref: 'x',
//           yref: 'y',
//           text: '-7.3 pounds',
//           showarrow: true,
//           arrowhead: 1,
//           ax: 0,
//           ay: -40
//         }]
//         };

// Control -> pre and post
// Treatment -> pre

// var trace1 = {
//   x: [
//     ['Control','Control'],
//     ['Pre-intervention', 'Post-intervention']
//   ], 
//   y: [50.5, 43.2], 
//   name: 'pounds', 
//   type: 'bar',
//   marker: {color: 'rgb(190, 200, 209)'}
// };

// var trace2 = {
//   x: [
//     ['Treatment','Treatment'],
//     ['Pre-intervention', 'Post-intervention']
//   ], 
//   y: [48.2, 0], 
//   name: 'pounds', 
//   type: 'bar',
//   marker: {color: 'rgb(45, 150, 140)'}
// };

// var data = [trace1, trace2];
// var layout = {
//   showlegend: false,
//   xaxis: {
//     tickson: "boundaries",
//     ticklen: 15,
//     showdividers: true,
//     dividercolor: 'grey',
//     dividerwidth: 2
//   },
//   yaxis: {range: [0, 55]},
//   font: {
//       family: 'Tw Cen MT',
//       size: 14},
//    ticklen: 10,
//   yaxis: {title: 'Dog waste (pounds)'},
//    title: 'Change in Dog Waste Observations',
//    annotations: [
//         {
//           x: 1,
//           y: 43,
//           xref: 'x',
//           yref: 'y',
//           text: '-7.3 pounds',
//           showarrow: true,
//           arrowhead: 1,
//           ax: 0,
//           ay: -40
//         }]
//         };

// Final graph

var trace1 = {
  x: [
    ['Control','Control'],
    ['Pre-intervention', 'Post-intervention']
  ], 
  y: [50.5, 43.2], 
  name: 'pounds', 
  type: 'bar',
  marker: {color: 'rgb(190, 200, 209)'}
};

var trace2 = {
  x: [
    ['Treatment','Treatment'],
    ['Pre-intervention', 'Post-intervention']
  ], 
  y: [48.2, 31], 
  name: 'pounds', 
  type: 'bar',
  marker: {color: 'rgb(0, 153, 51)'}
};

var data = [trace1, trace2];
var layout = {
  showlegend: false,
  xaxis: {
    tickson: "boundaries",
    ticklen: 15,
    showdividers: true,
    dividercolor: 'grey',
    dividerwidth: 2
  },
  yaxis: {range: [0, 55]},
  font: {
      family: 'Tw Cen MT',
      size: 14},
   ticklen: 10,
  yaxis: {title: 'Dog waste (pounds)'},
   title: 'Change in Dog Waste Observations',
  annotations: [
    {
      x: 1,
      y: 43,
      xref: 'x',
      yref: 'y',
      text: '-7.3 pounds',
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
      text: '-17 pounds',
      showarrow: true,
      arrowhead: 1,
      ax: 0,
      ay: -100
    }]
};

Plotly.newPlot('dog_waste', data, layout);