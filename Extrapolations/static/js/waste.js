var trace1 = {
  type: 'bar',
  x: [26880],
  y: ['1 Year'],
  orientation: 'h',
  name: 'pounds',
  marker: {color:'rgb(0, 59, 92)'}
};

var trace2 = {
  type: 'bar',
  x: [2240],
  y: ['1 Month'],
  orientation: 'h',
  name: 'pounds',
  marker: {color: 'rgb(0, 85, 135)'}
};

var trace3 = {
  type: 'bar',
  x: [560],
  y: ['1 Week'],
  orientation: 'h',
  name: 'pounds',
  marker: {color: 'rgb(139, 184, 232)'}
};

var trace4 = {
  type: 'bar',
  x: [80],
  y: ['1 Day'],
  orientation: 'h',
  name: 'pounds',
  marker: {color: 'rgb(195, 215, 238)'}
};

var data = [trace1, trace2, trace3, trace4];

var layout = {
  showlegend: false,
  xaxis: {
    tickson: "boundaries",
    // ticklen: 1000,
    showdividers: true,
    dividercolor: 'grey',
    dividerwidth: 2
  },
  // yaxis: {range: [0, 55]},
  font: {
      family: 'Tw Cen MT',
      size: 14},
   ticklen: 20,
  yaxis: {title: 'Timeline'},
   title: 'Waste reduction',
  xaxis: {title: 'Pounds'},
  images: [
    {
      x: 0.25,
      y: 0.23,
      sizex: 0.5,
      sizey: 0.5,
      source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSwrVQiSCAIBa74uGsR0jMyLI27jWtDcfj4c4gQor-sF59gK8A&s",
      xanchor: "right",
      xref: "paper",
      yanchor: "bottom",
      yref: "paper"
    },
    {
        x: 0.15,
        y: 0.475,
        sizex: 0.26,
        sizey: 0.38,
        source: "data:image/jpeg;base64,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",
        xanchor: "right",
        xref: "paper",
        yanchor: "bottom",
        yref: "paper"
      },
  {
      x: 1.06,
      y: -.01,
      sizex: 0.26,
      sizey: 0.38,
      source: "data:image/png;base64,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",
      xanchor: "right",
      xref: "paper",
      yanchor: "bottom",
      yref: "paper"
    }
]
};


Plotly.newPlot('waste_reduction', data, layout, {showSendToCloud:true})
   