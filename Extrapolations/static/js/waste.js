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
    showdividers: true,
    dividercolor: 'grey',
    dividerwidth: 2
  },
  font: {
      family: 'Tw Cen MT',
      size: 14},
   ticklen: 20,
  yaxis: {title: 'Timeline'},
  xaxis: {range: [0, 70000]},
   title: 'Waste reduction',
  xaxis: {title: 'Pounds'},
  images: [
    {
        x: 0.09,
        y: 0.8,
        sizex: 0.20,
        sizey: 0.25,
        source: "data:image/png;base64,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",
        xanchor: "right",
        xref: "paper",
        yanchor: "bottom",
        yref: "paper"
      },
    {
        x: 0.19,
        y: 0.475,
        sizex: 0.26,
        sizey: 0.35,
        source: "data:image/jpeg;base64,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",
        xanchor: "right",
        xref: "paper",
        yanchor: "bottom",
        yref: "paper"
      },
    {
      x: 0.36,
      y: 0.23,
      sizex: 0.5,
      sizey: 0.5,
      source: "http://christypresler.com/assets/images/blog/2013/11/giraffe.jpg",
      xanchor: "right",
      xref: "paper",
      yanchor: "bottom",
      yref: "paper"
    },
  {
      x: 0.92,
      y: 0.23,
      sizex: 0.4,
      sizey: 0.5,
      source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3mX6sG0jZmJ7Fce8VhpGH1mqD7i8SdCrQFfiIFeWwFz9DVw4&s",
      xanchor: "right",
      xref: "paper",
      yanchor: "bottom",
      yref: "paper"
    }
]
};


Plotly.newPlot('waste_reduction', data, layout, {showSendToCloud:true})
   