var cellWidth = 2,
    cellHeight = 2,
    baseDimension = 400,
    svg = d3.select('body').append('svg')
      .attr('width', cellWidth * baseDimension).attr('height', cellHeight * baseDimension), // Assumes equal number of rows and columns
    colorize = d3.scale.linear()
      .domain([
        -0.12,
        -0.1,
        -0.08,
        -0.06,
        -0.04,
        -0.02,
        0,
        0.02,
        0.04,
        0.06,
        0.08,
        0.1,
        0.12
      ])
      .range([
        '#48002a',
        '#880018',
        '#b71c1c',
        '#f44336',
        '#e57373',
        '#ef9a9a',
        '#eeeeee',
        '#90caf9',
        '#64b5f6',
        '#2196f3',
        '#0d47a1',
        '#0d276f',
        '#000b33'
      ].reverse());

d3.text("data/kids-0.csv", function(text){ // Available data sets: kids-0.csv, kids-1.csv, kids-2.csv
  var data = d3.csv.parseRows(text);
  var rowCount = data.length,
      columnCount = data[0].length;

  for (var i = 0; i < rowCount; i++) {
    for (var j = 0; j < columnCount; j++) {
      svg.append('rect')
        .attr('x', cellWidth * j)
        .attr('y', cellHeight * i)
        .attr('width', cellWidth)
        .attr('height', cellHeight)
        .attr('fill', colorize(data[i][j]));
    }
  }
});