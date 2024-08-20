(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('dac') 

        var resizeDebounce = null; 


        function resizePlot() { 

          var bb = gd.getBoundingClientRect(); 

          Plotly.relayout(gd, { 

            width: bb.width, 

              height: bb.height 

            }); 

          } 


          Plotly.plot(gd,  

              {
  "data": [
    {
      "x": [2018.5, 2051.5],
      "y": [0, 0],
      "text": "yintercept: 0",
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 7.559055118110237,
        "color": "rgba(0,0,0,0.5)",
        "dash": "solid"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2020],
      "y": [-214.19999999999999, 10.200000000000001],
      "text": "xintercept: 2020",
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 5.6692913385826778,
        "color": "rgba(0,0,0,0.5)",
        "dash": "dash"
      },
      "hoveron": "points",
      "showlegend": false,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81000000000000005, -2.3199999999999998, -11.119999999999999, -30.52, -68.109999999999999, -124.54000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -0.81<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -2.32<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -11.12<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -30.52<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2045<br />value:  -68.11<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -124.54<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.79, -8.1699999999999999, -22.93, -49.450000000000003, -84.670000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -1.79<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:   -8.17<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -22.93<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value:  -49.45<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value:  -84.67<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81000000000000005, -3.8300000000000001, -18.710000000000001, -52.25, -115.58, -204],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -0.81<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -3.83<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -18.71<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value:  -52.25<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -115.58<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -204.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -1.76, -9.3599999999999994, -28.440000000000001, -68.040000000000006, -130.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -1.76<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:   -9.36<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -28.44<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value:  -68.04<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -130.11<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.40999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value:   -0.41<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.58999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:   -0.59<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.75, -9.2799999999999994, -26.870000000000001, -62.289999999999999, -116.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -0.79<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -1.75<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:   -9.28<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -26.87<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value:  -62.29<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -116.91<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.9099999999999999, -8.7200000000000006, -24.93, -54.770000000000003, -94.239999999999995],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -1.91<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:   -8.72<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -24.93<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value:  -54.77<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value:  -94.24<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -3.4100000000000001, -17.050000000000001, -48.5, -109.23999999999999, -195.97],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -0.79<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -3.41<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -17.05<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value:  -48.50<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -109.24<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -195.97<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.72, -9.0500000000000007, -27.280000000000001, -65.030000000000001, -124.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -1.72<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:   -9.05<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -27.28<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value:  -65.03<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -124.13<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.76000000000000001, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -0.59999999999999998, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -0.60<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_eedEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_eedEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.67000000000000004, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.77<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.66000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -0.66<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -0.66000000000000003, -0.80000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -0.66<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:   -0.80<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -0.59999999999999998, -0.73999999999999999, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.58<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -0.60<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:   -0.74<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -0.65000000000000002, -0.81000000000000005, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.62<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -0.65<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:   -0.81<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -0.60999999999999999, -0.81000000000000005, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -0.61<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:   -0.81<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -1.3400000000000001, -5.6100000000000003, -16.809999999999999, -41.200000000000003, -80.530000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -0.58<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -1.34<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:   -5.61<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -16.81<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -41.20<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value:  -80.53<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -0.78000000000000003, -3.8599999999999999, -11.18, -26.609999999999999, -46.890000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:   -3.86<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -11.18<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -26.61<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value:  -46.89<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -1.3899999999999999, -9.3399999999999999, -29.43, -72.609999999999999, -141.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -1.39<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:   -9.34<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value:  -29.43<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value:  -72.61<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -141.87<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -1.29, -6.8300000000000001, -21.039999999999999, -51.740000000000002, -101.95],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -1.29<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:   -6.83<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -21.04<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -51.74<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: -101.95<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.65000000000000002, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:   -0.65<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.63, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -0.63<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -0.58999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -0.59<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_ff55Eff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_ff55Eff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.70999999999999996, -0.81999999999999995, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:   -0.71<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:   -0.82<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.68000000000000005, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:   -0.68<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.73999999999999999, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:   -0.74<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio12_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.64000000000000001, -0.76000000000000001, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.68<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -0.64<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:   -0.76<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -0.63, -0.76000000000000001, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -0.63<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:   -0.76<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.65000000000000002, -0.79000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -0.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:   -0.79<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -0.53000000000000003, -0.77000000000000002, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -0.53<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:   -0.77<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio20_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -1.1000000000000001, -4.29, -11.109999999999999, -24.75, -44.039999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -1.10<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:   -4.29<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -11.11<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -24.75<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value:  -44.04<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -0.93999999999999995, -3.8399999999999999, -9.9100000000000001, -21.719999999999999, -33.890000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -0.94<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:   -3.84<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:   -9.91<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -21.72<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value:  -33.89<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -1.3999999999999999, -7.21, -23.559999999999999, -60.530000000000001, -122.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -1.40<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:   -7.21<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -23.56<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value:  -60.53<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: -122.65<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -1.05, -4.1900000000000004, -12.449999999999999, -31.390000000000001, -63.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -1.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:   -4.19<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -12.45<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -31.39<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -63.51<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio4_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.70999999999999996, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:   -0.71<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.68999999999999995, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -0.69<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.57999999999999996, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -0.58<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "longdashdot"
      },
      "hoveron": "points",
      "name": "(55,Nzero_55_RpEUEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(55,Nzero_55_RpEUEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -1.96, -9.6699999999999999, -27.920000000000002, -64.549999999999997, -121.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -0.80<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -1.96<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2035<br />value:   -9.67<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -27.92<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2045<br />value:  -64.55<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -121.41<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.76, -7.5599999999999996, -21.120000000000001, -45.719999999999999, -79.459999999999994],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -1.76<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:   -7.56<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -21.12<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value:  -45.72<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value:  -79.46<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81999999999999995, -3.7200000000000002, -18.649999999999999, -51.350000000000001, -112.2, -195.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -0.82<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -3.72<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -18.65<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value:  -51.35<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -112.20<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -195.01<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -1.6899999999999999, -8.6600000000000001, -26.329999999999998, -63.090000000000003, -121.04000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -1.69<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:   -8.66<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -26.33<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value:  -63.09<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -121.04<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.6599999999999999, -8.4900000000000002, -24.260000000000002, -56, -105.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -0.79<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -1.66<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:   -8.49<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -24.26<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value:  -56.00<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -105.19<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.6399999999999999, -7.0899999999999999, -20.09, -44.159999999999997, -77.359999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -1.64<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:   -7.09<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -20.09<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value:  -44.16<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value:  -77.36<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -3.3599999999999999, -16.5, -46.299999999999997, -103.20999999999999, -183.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -0.80<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -3.36<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -16.50<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value:  -46.30<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -103.21<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -183.93<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.9099999999999999, -9.6099999999999994, -28.899999999999999, -68.480000000000004, -129.22],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -1.91<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:   -9.61<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -28.90<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value:  -68.48<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -129.22<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_eedEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_eedEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.75, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.81000000000000005, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:   -0.81<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -0.80<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.22, -5.6799999999999997, -17.239999999999998, -42.380000000000003, -83.370000000000005],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -1.22<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:   -5.68<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -17.24<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value:  -42.38<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value:  -83.37<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.98999999999999999, -4.1100000000000003, -12.16, -29.109999999999999, -51.82],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -0.99<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:   -4.11<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -12.16<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -29.11<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value:  -51.82<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -2.1699999999999999, -11.460000000000001, -35.020000000000003, -84.040000000000006, -159.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -2.17<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -11.46<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value:  -35.02<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value:  -84.04<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -159.82<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.4199999999999999, -7.0800000000000001, -22.170000000000002, -55.049999999999997, -109.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -1.42<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:   -7.08<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -22.17<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -55.05<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: -109.06<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.75, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -0.72999999999999998, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.72999999999999998, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.68000000000000005, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -0.68<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_ff55Eff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_ff55Eff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.70999999999999996, -0.81999999999999995, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -0.71<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:   -0.71<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:   -0.82<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.68000000000000005, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:   -0.68<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:   -0.79<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.66000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -0.66<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio12_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.62, -0.72999999999999998, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -0.62<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:   -0.73<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -0.64000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.65<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -0.64<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.66000000000000003, -0.80000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -0.66<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:   -0.80<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.55000000000000004, -0.78000000000000003, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -0.55<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:   -0.78<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio20_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.63, -1.02, -3.8700000000000001, -10.26, -24.260000000000002, -46.009999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -0.63<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -1.02<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:   -3.87<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -10.26<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -24.26<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value:  -46.01<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -1, -4.1500000000000004, -9.9499999999999993, -19.719999999999999, -26.940000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.57<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -1.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:   -4.15<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:   -9.95<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -19.72<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value:  -26.94<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -1.3700000000000001, -7.1200000000000001, -22.77, -57.579999999999998, -115.20999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -1.37<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:   -7.12<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -22.77<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value:  -57.58<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: -115.21<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.88, -3.3700000000000001, -10.94, -29.93, -65.019999999999996],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -0.88<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:   -3.37<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -10.94<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -29.93<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -65.02<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio4_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.70999999999999996, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:   -0.71<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -0.67<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.68999999999999995, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -0.69<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.57999999999999996, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -0.58<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "solid"
      },
      "hoveron": "points",
      "name": "(57,Nzero_57_RpEUEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(57,Nzero_57_RpEUEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -0.60<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -2.0299999999999998, -9.8900000000000006, -28.18, -64.379999999999995, -119.63],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -0.67<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -2.03<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2035<br />value:   -9.89<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -28.18<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2045<br />value:  -64.38<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -119.63<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.64000000000000001, -1.9399999999999999, -8.3499999999999996, -23.079999999999998, -49.25, -83.870000000000005],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -1.94<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:   -8.35<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -23.08<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value:  -49.25<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value:  -83.87<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -3.2999999999999998, -17.120000000000001, -46.82, -101.59999999999999, -175.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -3.30<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -17.12<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value:  -46.82<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -101.60<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -175.50<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.8100000000000001, -8.8800000000000008, -26.449999999999999, -62.310000000000002, -117.95],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -1.81<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:   -8.88<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -26.45<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value:  -62.31<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -117.95<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.40999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value:   -0.41<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(174,0,0,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -0.74<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -0.73<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -1.8100000000000001, -9.0999999999999996, -25.289999999999999, -56.710000000000001, -103.08],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -1.81<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:   -9.10<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -25.29<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value:  -56.71<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -103.08<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.64000000000000001, -1.8899999999999999, -8.1699999999999999, -22.629999999999999, -48.43, -82.530000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -1.89<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:   -8.17<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -22.63<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value:  -48.43<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value:  -82.53<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -3.6699999999999999, -18.300000000000001, -49.700000000000003, -107.45999999999999, -186.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -3.67<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -18.30<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value:  -49.70<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -107.46<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -186.06<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -2.02, -9.6400000000000006, -27.600000000000001, -63.18, -116.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -2.02<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:   -9.64<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -27.60<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value:  -63.18<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -116.90<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(219,70,70,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_eedEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_eedEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.3799999999999999, -5.8200000000000003, -16.920000000000002, -40.189999999999998, -76.379999999999995],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -1.38<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:   -5.82<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -16.92<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value:  -40.19<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value:  -76.38<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81000000000000005, -1.52, -4.7800000000000002, -13.35, -29.940000000000001, -49.729999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.81<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:   -1.52<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:   -4.78<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -13.35<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -29.94<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value:  -49.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -2.5, -12.48, -36.509999999999998, -84.200000000000003, -154.91999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -2.50<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -12.48<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value:  -36.51<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value:  -84.20<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -154.92<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.5900000000000001, -7.5099999999999998, -22.239999999999998, -52.780000000000001, -101.15000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -1.59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:   -7.51<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -22.24<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -52.78<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: -101.15<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.80000000000000004, -0.82999999999999996, -0.70999999999999996, -0.40999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value:   -0.41<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(0,144,171,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_ff55Eff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_ff55Eff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio12_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio12_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio20_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio20_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -1.28, -3.6800000000000002, -10.1, -24.710000000000001, -48.560000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -1.28<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:   -3.68<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -10.10<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -24.71<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value:  -48.56<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.24, -3.9900000000000002, -10.08, -21.370000000000001, -32.229999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -1.24<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:   -3.99<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -10.08<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -21.37<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value:  -32.23<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.6200000000000001, -7.71, -24.91, -63.079999999999998, -126.04000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -1.62<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:   -7.71<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -24.91<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value:  -63.08<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: -126.04<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.0900000000000001, -3.98, -12.199999999999999, -31.559999999999999, -65.799999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -1.09<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:   -3.98<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -12.20<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -31.56<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -65.80<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio4_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio4_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limCC,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limCC,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limH2,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "lines",
      "line": {
        "width": 1.8897637795275593,
        "color": "rgba(9,87,134,1)",
        "dash": "dash"
      },
      "hoveron": "points",
      "name": "(59,Nzero_59_RpEUEff_bio7p5_limVRE,1,NA)",
      "legendgroup": "(59,Nzero_59_RpEUEff_bio7p5_limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81000000000000005, -2.3199999999999998, -11.119999999999999, -30.52, -68.109999999999999, -124.54000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -0.81<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -2.32<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -11.12<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -30.52<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2045<br />value:  -68.11<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2050<br />value: -124.54<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.79, -8.1699999999999999, -22.93, -49.450000000000003, -84.670000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -1.79<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:   -8.17<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -22.93<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value:  -49.45<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value:  -84.67<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81000000000000005, -3.8300000000000001, -18.710000000000001, -52.25, -115.58, -204],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -0.81<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -3.83<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -18.71<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value:  -52.25<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value: -115.58<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value: -204.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -1.76, -9.3599999999999994, -28.440000000000001, -68.040000000000006, -130.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -1.76<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:   -9.36<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -28.44<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value:  -68.04<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value: -130.11<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.40999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value:   -0.41<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.58999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -0.54<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:   -0.59<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:   -0.77<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.73<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.75, -9.2799999999999994, -26.870000000000001, -62.289999999999999, -116.91],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -0.79<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -1.75<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:   -9.28<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -26.87<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value:  -62.29<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value: -116.91<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.9099999999999999, -8.7200000000000006, -24.93, -54.770000000000003, -94.239999999999995],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -1.91<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:   -8.72<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -24.93<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value:  -54.77<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value:  -94.24<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -3.4100000000000001, -17.050000000000001, -48.5, -109.23999999999999, -195.97],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -0.79<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -3.41<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -17.05<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value:  -48.50<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value: -109.24<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value: -195.97<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.72, -9.0500000000000007, -27.280000000000001, -65.030000000000001, -124.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -1.72<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:   -9.05<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -27.28<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value:  -65.03<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value: -124.13<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.76000000000000001, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:   -0.76<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -0.59999999999999998, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.59<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -0.60<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.67000000000000004, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.71<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.71999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.77<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.66000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -0.66<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -0.66000000000000003, -0.80000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -0.66<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:   -0.80<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -0.59999999999999998, -0.73999999999999999, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.58<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -0.60<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:   -0.74<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -0.65000000000000002, -0.81000000000000005, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.62<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -0.65<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:   -0.81<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.62, -0.60999999999999999, -0.81000000000000005, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.62<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -0.61<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:   -0.81<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.57999999999999996, -1.3400000000000001, -5.6100000000000003, -16.809999999999999, -41.200000000000003, -80.530000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -0.58<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -1.34<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:   -5.61<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -16.81<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -41.20<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value:  -80.53<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.5, -0.78000000000000003, -3.8599999999999999, -11.18, -26.609999999999999, -46.890000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.50<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:   -3.86<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -11.18<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -26.61<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value:  -46.89<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -1.3899999999999999, -9.3399999999999999, -29.43, -72.609999999999999, -141.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -1.39<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:   -9.34<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value:  -29.43<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value:  -72.61<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value: -141.87<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -1.29, -6.8300000000000001, -21.039999999999999, -51.740000000000002, -101.95],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -1.29<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:   -6.83<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -21.04<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -51.74<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value: -101.95<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.65000000000000002, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:   -0.65<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.63, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.68<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -0.63<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -0.58999999999999997, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -0.59<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.70999999999999996, -0.81999999999999995, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:   -0.71<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:   -0.82<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.68000000000000005, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:   -0.68<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.73999999999999999, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:   -0.74<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.64000000000000001, -0.76000000000000001, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.68<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -0.64<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:   -0.76<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.66000000000000003, -0.63, -0.76000000000000001, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.66<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -0.63<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:   -0.76<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.65000000000000002, -0.79000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -0.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:   -0.79<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -0.53000000000000003, -0.77000000000000002, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.52<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -0.53<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:   -0.77<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.60999999999999999, -1.1000000000000001, -4.29, -11.109999999999999, -24.75, -44.039999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -0.61<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -1.10<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:   -4.29<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -11.11<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -24.75<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value:  -44.04<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -0.93999999999999995, -3.8399999999999999, -9.9100000000000001, -21.719999999999999, -33.890000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.57<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -0.94<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:   -3.84<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:   -9.91<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -21.72<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value:  -33.89<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -1.3999999999999999, -7.21, -23.559999999999999, -60.530000000000001, -122.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -1.40<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:   -7.21<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -23.56<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value:  -60.53<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value: -122.65<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -1.05, -4.1900000000000004, -12.449999999999999, -31.390000000000001, -63.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -1.05<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:   -4.19<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -12.45<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -31.39<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -63.51<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.70999999999999996, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -0.74<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:   -0.71<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -0.67<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.68999999999999995, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -0.69<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.57999999999999996, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -0.58<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_55_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_55_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -1.96, -9.6699999999999999, -27.920000000000002, -64.549999999999997, -121.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -0.80<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -1.96<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2035<br />value:   -9.67<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -27.92<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2045<br />value:  -64.55<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2050<br />value: -121.41<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.76, -7.5599999999999996, -21.120000000000001, -45.719999999999999, -79.459999999999994],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -1.76<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:   -7.56<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -21.12<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value:  -45.72<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value:  -79.46<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81999999999999995, -3.7200000000000002, -18.649999999999999, -51.350000000000001, -112.2, -195.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -0.82<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -3.72<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -18.65<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value:  -51.35<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value: -112.20<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value: -195.01<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -1.6899999999999999, -8.6600000000000001, -26.329999999999998, -63.090000000000003, -121.04000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -1.69<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:   -8.66<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -26.33<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value:  -63.09<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value: -121.04<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.6599999999999999, -8.4900000000000002, -24.260000000000002, -56, -105.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -0.79<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -1.66<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:   -8.49<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -24.26<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value:  -56.00<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value: -105.19<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.6399999999999999, -7.0899999999999999, -20.09, -44.159999999999997, -77.359999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -1.64<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:   -7.09<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -20.09<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value:  -44.16<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value:  -77.36<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -3.3599999999999999, -16.5, -46.299999999999997, -103.20999999999999, -183.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -0.80<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -3.36<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -16.50<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value:  -46.30<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value: -103.21<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value: -183.93<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.9099999999999999, -9.6099999999999994, -28.899999999999999, -68.480000000000004, -129.22],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -1.91<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:   -9.61<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -28.90<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value:  -68.48<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value: -129.22<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.75, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.71<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.81000000000000005, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:   -0.81<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -0.80<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.22, -5.6799999999999997, -17.239999999999998, -42.380000000000003, -83.370000000000005],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -1.22<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:   -5.68<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -17.24<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value:  -42.38<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value:  -83.37<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.98999999999999999, -4.1100000000000003, -12.16, -29.109999999999999, -51.82],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -0.99<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:   -4.11<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -12.16<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -29.11<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value:  -51.82<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -2.1699999999999999, -11.460000000000001, -35.020000000000003, -84.040000000000006, -159.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -2.17<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -11.46<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value:  -35.02<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value:  -84.04<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value: -159.82<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -1.4199999999999999, -7.0800000000000001, -22.170000000000002, -55.049999999999997, -109.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -1.42<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:   -7.08<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -22.17<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -55.05<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value: -109.06<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.75, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -0.77<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -0.72999999999999998, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.72999999999999998, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -0.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.68000000000000005, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -0.68<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.70999999999999996, -0.70999999999999996, -0.81999999999999995, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -0.71<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:   -0.71<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:   -0.82<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.68000000000000005, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.69<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:   -0.68<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:   -0.79<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.66000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -0.66<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.62, -0.72999999999999998, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -0.62<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:   -0.73<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.65000000000000002, -0.64000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.65<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -0.64<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -0.66000000000000003, -0.80000000000000004, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -0.66<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:   -0.80<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.55000000000000004, -0.78000000000000003, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -0.55<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:   -0.78<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.63, -1.02, -3.8700000000000001, -10.26, -24.260000000000002, -46.009999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -0.63<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -1.02<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:   -3.87<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -10.26<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -24.26<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value:  -46.01<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.56999999999999995, -1, -4.1500000000000004, -9.9499999999999993, -19.719999999999999, -26.940000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.57<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -1.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:   -4.15<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:   -9.95<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -19.72<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value:  -26.94<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -1.3700000000000001, -7.1200000000000001, -22.77, -57.579999999999998, -115.20999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -1.37<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:   -7.12<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -22.77<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value:  -57.58<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value: -115.21<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.88, -3.3700000000000001, -10.94, -29.93, -65.019999999999996],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -0.88<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:   -3.37<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -10.94<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -29.93<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -65.02<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.70999999999999996, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:   -0.71<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.69999999999999996, -0.67000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -0.67<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.68999999999999995, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -0.69<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.57999999999999996, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.53<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -0.58<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_57_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_57_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.48999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -0.49<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.55000000000000004, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -0.55<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.59999999999999998, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -0.60<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.45000000000000001, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -0.45<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.67000000000000004, -2.0299999999999998, -9.8900000000000006, -28.18, -64.379999999999995, -119.63],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -0.67<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -2.03<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2035<br />value:   -9.89<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -28.18<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2045<br />value:  -64.38<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2050<br />value: -119.63<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.64000000000000001, -1.9399999999999999, -8.3499999999999996, -23.079999999999998, -49.25, -83.870000000000005],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -1.94<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:   -8.35<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -23.08<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value:  -49.25<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value:  -83.87<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -3.2999999999999998, -17.120000000000001, -46.82, -101.59999999999999, -175.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -3.30<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -17.12<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value:  -46.82<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value: -101.60<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value: -175.50<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.8100000000000001, -8.8800000000000008, -26.449999999999999, -62.310000000000002, -117.95],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -1.81<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:   -8.88<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -26.45<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value:  -62.31<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value: -117.95<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.40999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value:   -0.41<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.53000000000000003, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -0.53<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -0.74<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.72999999999999998, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -0.73<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.44, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -0.44<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.34999999999999998, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -0.35<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68999999999999995, -1.8100000000000001, -9.0999999999999996, -25.289999999999999, -56.710000000000001, -103.08],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -0.69<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -1.81<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:   -9.10<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -25.29<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value:  -56.71<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value: -103.08<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.64000000000000001, -1.8899999999999999, -8.1699999999999999, -22.629999999999999, -48.43, -82.530000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -0.64<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -1.89<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:   -8.17<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -22.63<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value:  -48.43<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value:  -82.53<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -3.6699999999999999, -18.300000000000001, -49.700000000000003, -107.45999999999999, -186.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -3.67<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -18.30<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value:  -49.70<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value: -107.46<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value: -186.06<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -2.02, -9.6400000000000006, -27.600000000000001, -63.18, -116.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -2.02<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:   -9.64<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -27.60<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value:  -63.18<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value: -116.90<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.54000000000000004, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -0.54<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.58999999999999997, -0.78000000000000003, -0.82999999999999996, -0.70999999999999996, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -0.59<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.52000000000000002, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -0.52<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_eedEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.68000000000000005, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -0.68<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.3799999999999999, -5.8200000000000003, -16.920000000000002, -40.189999999999998, -76.379999999999995],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -1.38<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:   -5.82<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -16.92<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value:  -40.19<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value:  -76.38<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.81000000000000005, -1.52, -4.7800000000000002, -13.35, -29.940000000000001, -49.729999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.81<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:   -1.52<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:   -4.78<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -13.35<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -29.94<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value:  -49.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -2.5, -12.48, -36.509999999999998, -84.200000000000003, -154.91999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -2.50<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -12.48<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value:  -36.51<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value:  -84.20<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value: -154.92<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.5900000000000001, -7.5099999999999998, -22.239999999999998, -52.780000000000001, -101.15000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -1.59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:   -7.51<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -22.24<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -52.78<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value: -101.15<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.80000000000000004, -0.82999999999999996, -0.70999999999999996, -0.40999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value:   -0.71<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value:   -0.41<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.75, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -0.75<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_ff55Eff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.77000000000000002, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:   -0.77<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.71999999999999997, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(0,144,171,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio12_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.78000000000000003, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.73999999999999999, -0.78000000000000003, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -0.74<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -0.78<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(9,87,134,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio20_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -1.28, -3.6800000000000002, -10.1, -24.710000000000001, -48.560000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -1.28<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:   -3.68<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -10.10<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -24.71<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value:  -48.56<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.24, -3.9900000000000002, -10.08, -21.370000000000001, -32.229999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -1.24<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:   -3.99<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -10.08<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -21.37<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value:  -32.23<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -1.6200000000000001, -7.71, -24.91, -63.079999999999998, -126.04000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -1.62<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:   -7.71<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -24.91<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value:  -63.08<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value: -126.04<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.77000000000000002, -1.0900000000000001, -3.98, -12.199999999999999, -31.559999999999999, -65.799999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -0.77<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -1.09<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:   -3.98<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -12.20<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -31.56<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -65.80<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(174,0,0,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio4_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.80000000000000004, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "circle",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5,default,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5,default,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -0.80000000000000004, -0.82999999999999996, -0.71999999999999997, -0.41999999999999998, -0.040000000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:   -0.80<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value:   -0.42<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value:   -0.04<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "square",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limCC,limCCS,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.79000000000000004, -0.76000000000000001, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "diamond",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limH2,limH2,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    },
    {
      "x": [2020, 2025, 2030, 2035, 2040, 2045, 2050],
      "y": [0, -0.76000000000000001, -0.79000000000000004, -0.82999999999999996, -0.71999999999999997, -0.42999999999999999, -0.050000000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -0.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -0.79<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:   -0.83<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:   -0.72<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value:   -0.43<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value:   -0.05<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
      "type": "scatter",
      "mode": "markers",
      "marker": {
        "autocolorscale": false,
        "color": "rgba(219,70,70,1)",
        "opacity": 1,
        "size": 11.338582677165356,
        "symbol": "triangle-up",
        "line": {
          "width": 1.8897637795275593,
          "color": "rgba(0,0,0,1)"
        }
      },
      "hoveron": "points",
      "name": "(Nzero_59_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "legendgroup": "(Nzero_59_RpEUEff_bio7p5_limVRE,limVRE,1,NA)",
      "showlegend": true,
      "xaxis": "x",
      "yaxis": "y",
      "hoverinfo": "text",
      "frame": null
    }
  ],
  "layout": {
    "margin": {
      "t": 34.559877045102908,
      "r": 16.604400166044005,
      "b": 79.996157659465695,
      "l": 78.040680780406802
    },
    "font": {
      "color": "rgba(0,0,0,1)",
      "family": "",
      "size": 33.208800332088011
    },
    "xaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [2018.5, 2051.5],
      "tickmode": "array",
      "ticktext": ["2020", "2030", "2040", "2050"],
      "tickvals": [2020, 2030, 2040, 2050],
      "categoryorder": "array",
      "categoryarray": ["2020", "2030", "2040", "2050"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 8.3022000830220026,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 26.567040265670396
      },
      "tickangle": -90,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 1.5094909241858185,
      "zeroline": false,
      "anchor": "y",
      "title": {
        "text": "",
        "font": {
          "color": null,
          "family": null,
          "size": 0
        }
      },
      "hoverformat": ".2f"
    },
    "yaxis": {
      "domain": [0, 1],
      "automargin": true,
      "type": "linear",
      "autorange": false,
      "range": [-214.19999999999999, 10.200000000000001],
      "tickmode": "array",
      "ticktext": ["-200", "-150", "-100", "-50", "0"],
      "tickvals": [-200, -150, -100, -50, 0],
      "categoryorder": "array",
      "categoryarray": ["-200", "-150", "-100", "-50", "0"],
      "nticks": null,
      "ticks": "",
      "tickcolor": null,
      "ticklen": 8.3022000830220026,
      "tickwidth": 0,
      "showticklabels": true,
      "tickfont": {
        "color": "rgba(77,77,77,1)",
        "family": "",
        "size": 26.567040265670396
      },
      "tickangle": -0,
      "showline": false,
      "linecolor": null,
      "linewidth": 0,
      "showgrid": true,
      "gridcolor": "rgba(235,235,235,1)",
      "gridwidth": 1.5094909241858185,
      "zeroline": false,
      "anchor": "x",
      "title": {
        "text": "",
        "font": {
          "color": null,
          "family": null,
          "size": 0
        }
      },
      "hoverformat": ".2f"
    },
    "shapes": [
      {
        "type": "rect",
        "fillcolor": null,
        "line": {
          "color": null,
          "width": 0,
          "linetype": []
        },
        "yref": "paper",
        "xref": "paper",
        "x0": 0,
        "x1": 1,
        "y0": 0,
        "y1": 1
      }
    ],
    "showlegend": false,
    "legend": {
      "bgcolor": null,
      "bordercolor": null,
      "borderwidth": 0,
      "font": {
        "color": "rgba(0,0,0,1)",
        "family": "",
        "size": 19.925280199252807
      }
    },
    "hovermode": "closest",
    "barmode": "relative",
    "autosize": true
  },
  "config": {
    "doubleClick": "reset",
    "modeBarButtonsToAdd": ["hoverclosest", "hovercompare"],
    "showSendToCloud": false
  },
  "source": "A",
  "attrs": {
    "572c5c866afe": {
      "yintercept": {},
      "type": "scatter"
    },
    "572c53a247fb": {
      "xintercept": {}
    },
    "572c406f5c09": {
      "x": {},
      "y": {},
      "linetype": {},
      "colour": {}
    },
    "572c2f6c5b5c": {
      "x": {},
      "y": {},
      "shape": {},
      "fill": {}
    }
  },
  "cur_data": "572c5c866afe",
  "visdat": {
    "572c5c866afe": ["function (y) ", "x"],
    "572c53a247fb": ["function (y) ", "x"],
    "572c406f5c09": ["function (y) ", "x"],
    "572c2f6c5b5c": ["function (y) ", "x"]
  },
  "highlight": {
    "on": "plotly_click",
    "persistent": false,
    "dynamic": false,
    "selectize": false,
    "opacityDim": 0.20000000000000001,
    "selected": {
      "opacity": 1
    },
    "debounce": 0
  },
  "shinyEvents": ["plotly_hover", "plotly_click", "plotly_selected", "plotly_relayout", "plotly_brushed", "plotly_brushing", "plotly_clickannotation", "plotly_doubleclick", "plotly_deselect", "plotly_afterplot", "plotly_sunburstclick"],
  "base_url": "https://plot.ly"
}
           

                  ); 

           }()); 

  
