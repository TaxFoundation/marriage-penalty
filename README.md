# 2015 Marriage Penalty Chart Builder

This repository is used to generate an SVG graphic in the browser illustrating the 2015 US income tax bonus or penalty incurred through marriage. This tool relies on precompiled CSV data and [D3.js](http://d3js.org/). The charts generated show income from $10,000 to $1,000,000 on a logarithmic scale along the x axis. The share of income earned by each spouse is shown along the y axis, with a 100%-0% split at the top and a 50%-50% split at the bottom.

The data used to generate this graphic are sufficiently complex that an SVG graphic is not practical for display on websites. The charts generated with this tool are intended for conversion to raster images.

Written by [Tom VanAntwerp](https://github.com/tvanantwerp) at the [Tax Foundation](http://taxfoundation.org). Data supplied by [Kyle Pomerleau](https://github.com/kpomerleau) at the Tax Foundation, in cooperation with [Nick Kasprak](http://www.cbpp.org/about/index.cfm?fa=view&id=234) at [Center on Budget and Policy Priorities](http://www.cbpp.org/).