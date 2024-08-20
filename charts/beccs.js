(function(){ 

        window.PLOTLYENV={'BASE_URL': 'https://plotly.com'}; 

        

        var gd = document.getElementById('beccs') 

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
      "y": [-329.80500000000001, 15.705000000000002],
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
      "y": [0, -3.7799999999999998, -23.289999999999999, -80.010000000000005, -151.81, -216.12, -255.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -3.78<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -23.29<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -80.01<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2040<br />value: -151.81<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2045<br />value: -216.12<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12", "period: 2050<br />value: -255.45<br />scenario: Nzero_55_bio12<br />tgt2030: 55<br />scenario: Nzero_55_bio12"],
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
      "y": [0, -3.2200000000000002, -20.82, -71.459999999999994, -124.36, -159.43000000000001, -178.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -3.22<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -20.82<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -71.46<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: -124.36<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: -159.43<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: -178.67<br />scenario: Nzero_55_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [0, -3.7000000000000002, -24.920000000000002, -89.879999999999995, -177.66, -259.05000000000001, -312.51999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -3.70<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -24.92<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -89.88<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: -177.66<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: -259.05<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: -312.52<br />scenario: Nzero_55_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [0, -3.8599999999999999, -24.98, -96.859999999999999, -177.91999999999999, -246.06, -290.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -3.86<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -24.98<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -96.86<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: -177.92<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: -246.06<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: -290.50<br />scenario: Nzero_55_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [0, -2.0600000000000001, -12.800000000000001, -49.390000000000001, -92.849999999999994, -131.59, -186.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -2.06<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2030<br />value:  -12.80<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -49.39<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -92.85<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2045<br />value: -131.59<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20", "period: 2050<br />value: -186.08<br />scenario: Nzero_55_bio20<br />tgt2030: 55<br />scenario: Nzero_55_bio20"],
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
      "y": [0, -1.8, -11.119999999999999, -43.119999999999997, -74.870000000000005, -94.989999999999995, -140.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -1.80<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:  -11.12<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -43.12<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -74.87<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value:  -94.99<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: -140.06<br />scenario: Nzero_55_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [0, -2.4300000000000002, -14.99, -55.549999999999997, -104.29000000000001, -148.58000000000001, -213.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -2.43<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:  -14.99<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -55.55<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value: -104.29<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: -148.58<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: -213.02<br />scenario: Nzero_55_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [0, -3.5899999999999999, -20.140000000000001, -71.659999999999997, -127.84999999999999, -174.02000000000001, -226.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -3.59<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:  -20.14<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -71.66<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value: -127.85<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: -174.02<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: -226.65<br />scenario: Nzero_55_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [0, -1.25, -7.1399999999999997, -18.530000000000001, -32.909999999999997, -36.420000000000002, -35.32],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -1.25<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -7.14<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -18.53<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -32.91<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2045<br />value:  -36.42<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4", "period: 2050<br />value:  -35.32<br />scenario: Nzero_55_bio4<br />tgt2030: 55<br />scenario: Nzero_55_bio4"],
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
      "y": [0, -1.26, -7.7300000000000004, -24.530000000000001, -38.450000000000003, -32.57, -28.359999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -1.26<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -7.73<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -24.53<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -38.45<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value:  -32.57<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value:  -28.36<br />scenario: Nzero_55_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [0, -1.3, -6.8899999999999997, -21.82, -35.979999999999997, -36.43, -34.149999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -1.30<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -6.89<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -21.82<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value:  -35.98<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value:  -36.43<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value:  -34.15<br />scenario: Nzero_55_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [0, -0.69999999999999996, -4.1100000000000003, -17.489999999999998, -32.060000000000002, -39.869999999999997, -36.07],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -4.11<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -17.49<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -32.06<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value:  -39.87<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value:  -36.07<br />scenario: Nzero_55_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [0, -2.8100000000000001, -17.469999999999999, -59.240000000000002, -119.72, -175.22999999999999, -222.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -2.81<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -17.47<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -59.24<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: -119.72<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: -175.23<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: -222.19<br />scenario: Nzero_55_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5"],
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
      "y": [0, -2.2999999999999998, -14.94, -54.960000000000001, -102.83, -137.21000000000001, -162.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -2.30<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -14.94<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -54.96<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: -102.83<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: -137.21<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: -162.94<br />scenario: Nzero_55_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [0, -3, -20.969999999999999, -71.480000000000004, -139.06, -190.41, -240.47999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -3.00<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -20.97<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -71.48<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: -139.06<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: -190.41<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: -240.48<br />scenario: Nzero_55_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [0, -1.3, -9.8499999999999996, -50.229999999999997, -119.36, -180.59, -236.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -1.30<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:   -9.85<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -50.23<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: -119.36<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: -180.59<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: -236.51<br />scenario: Nzero_55_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [0, -3.5299999999999998, -21.489999999999998, -75.060000000000002, -142.87, -203.24000000000001, -240.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -3.53<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -21.49<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -75.06<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: -142.87<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: -203.24<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: -240.61<br />scenario: Nzero_55_eedEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [0, -3.1000000000000001, -19.699999999999999, -71.069999999999993, -126.91, -163.97, -185.81],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -3.10<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -19.70<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -71.07<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: -126.91<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: -163.97<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: -185.81<br />scenario: Nzero_55_eedEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [0, -3.6499999999999999, -24.41, -87.689999999999998, -172.94999999999999, -253.00999999999999, -305.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -3.65<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -24.41<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -87.69<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: -172.95<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: -253.01<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: -305.45<br />scenario: Nzero_55_eedEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [0, -3.7999999999999998, -24.260000000000002, -93.769999999999996, -172.78999999999999, -241.22, -286.29000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -3.80<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -24.26<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -93.77<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: -172.79<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: -241.22<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: -286.29<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [0, -1.75, -11.029999999999999, -46.240000000000002, -88.569999999999993, -128.16999999999999, -175.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -1.75<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:  -11.03<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -46.24<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -88.57<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: -128.17<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: -175.49<br />scenario: Nzero_55_eedEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [0, -1.5600000000000001, -10.300000000000001, -42.560000000000002, -76.5, -98.980000000000004, -133.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -1.56<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:  -10.30<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -42.56<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -76.50<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -98.98<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: -133.67<br />scenario: Nzero_55_eedEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [0, -1.79, -12.08, -49.299999999999997, -95.549999999999997, -138.84999999999999, -191.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -1.79<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:  -12.08<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -49.30<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -95.55<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: -138.85<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: -191.76<br />scenario: Nzero_55_eedEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [0, -3.3500000000000001, -19.07, -70.030000000000001, -125.72, -171.66, -224.63],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -3.35<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:  -19.07<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -70.03<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value: -125.72<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: -171.66<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: -224.63<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [0, -1.22, -6.8700000000000001, -17.789999999999999, -30.949999999999999, -33.149999999999999, -32.060000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -1.22<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -6.87<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -17.79<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -30.95<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value:  -33.15<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value:  -32.06<br />scenario: Nzero_55_eedEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [0, -1.3200000000000001, -7.8799999999999999, -25.359999999999999, -39.950000000000003, -33.509999999999998, -29.710000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -1.32<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -7.88<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -25.36<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -39.95<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value:  -33.51<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value:  -29.71<br />scenario: Nzero_55_eedEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [0, -1.3100000000000001, -6.7000000000000002, -20.75, -35.509999999999998, -36.07, -34.850000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -1.31<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -6.70<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -20.75<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value:  -35.51<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value:  -36.07<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value:  -34.85<br />scenario: Nzero_55_eedEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [0, -0.92000000000000004, -5.1399999999999997, -18.850000000000001, -33.390000000000001, -39.840000000000003, -35.359999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.92<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -5.14<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -18.85<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -33.39<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value:  -39.84<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value:  -35.36<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [0, -2.9399999999999999, -17.600000000000001, -60.460000000000001, -120.67, -175.52000000000001, -221.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -2.94<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -17.60<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -60.46<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: -120.67<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: -175.52<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: -221.35<br />scenario: Nzero_55_eedEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [0, -2.3100000000000001, -14.59, -55.899999999999999, -105.78, -142.25, -170.80000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -2.31<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -14.59<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -55.90<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: -105.78<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: -142.25<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: -170.80<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [0, -3.02, -20.760000000000002, -71.349999999999994, -137.66999999999999, -190.28999999999999, -240.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -3.02<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -20.76<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -71.35<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: -137.67<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: -190.29<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: -240.11<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [0, -1.54, -10.789999999999999, -51.780000000000001, -120.25, -182.53999999999999, -238.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -1.54<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -10.79<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -51.78<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: -120.25<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: -182.54<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: -238.49<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [0, -2.0499999999999998, -14.140000000000001, -55.090000000000003, -107.48, -153.28999999999999, -181.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -2.05<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:  -14.14<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -55.09<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: -107.48<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: -153.29<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: -181.88<br />scenario: Nzero_55_ff55Eff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [0, -2.1899999999999999, -14.300000000000001, -58.619999999999997, -106.2, -132.03, -149.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -2.19<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:  -14.30<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -58.62<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value: -106.20<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: -132.03<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: -149.37<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [0, -2.7599999999999998, -18.120000000000001, -69.230000000000004, -136.66, -201.25999999999999, -246.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -2.76<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:  -18.12<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -69.23<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: -136.66<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: -201.26<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: -246.94<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [0, -3.27, -18.84, -80.569999999999993, -152.59, -216.08000000000001, -252.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -3.27<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -18.84<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -80.57<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value: -152.59<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: -216.08<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: -252.71<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [0, -1.0700000000000001, -7.2400000000000002, -33.460000000000001, -65.909999999999997, -95.650000000000006, -124.08],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -1.07<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -7.24<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -33.46<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -65.91<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -95.65<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: -124.08<br />scenario: Nzero_55_ff55Eff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [0, -1, -6.8300000000000001, -31.370000000000001, -60.579999999999998, -84.310000000000002, -106.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -1.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.83<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -31.37<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -60.58<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -84.31<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value: -106.60<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [0, -1.0900000000000001, -7.2699999999999996, -33.25, -66.840000000000003, -98.489999999999995, -128.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -1.09<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -7.27<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -33.25<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -66.84<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -98.49<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: -128.57<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [0, -1.8400000000000001, -11.16, -52.039999999999999, -97.840000000000003, -137.91999999999999, -182.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -1.84<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -11.16<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -52.04<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -97.84<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value: -137.92<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: -182.08<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [0, -1, -5.9000000000000004, -21.280000000000001, -34.810000000000002, -35.789999999999999, -36.189999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -1.00<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -5.90<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -21.28<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -34.81<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -35.79<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value:  -36.19<br />scenario: Nzero_55_ff55Eff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [0, -0.71999999999999997, -4.8099999999999996, -23.59, -37.789999999999999, -36, -33.200000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -4.81<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -23.59<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -37.79<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -36.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value:  -33.20<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [0, -1.1499999999999999, -6.04, -22.300000000000001, -39, -41.399999999999999, -38.579999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -1.15<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.04<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -22.30<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value:  -39.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value:  -41.40<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value:  -38.58<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [0, -1, -5.4199999999999999, -19.399999999999999, -34.579999999999998, -39.369999999999997, -35.600000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -1.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -5.42<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -19.40<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -34.58<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -39.37<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -35.60<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [0, -1.4299999999999999, -10.57, -46.920000000000002, -98.5, -147.25999999999999, -184.46000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -1.43<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:  -10.57<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -46.92<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:  -98.50<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: -147.26<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: -184.46<br />scenario: Nzero_55_ff55Eff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [0, -1.49, -11.09, -50.950000000000003, -99.510000000000005, -130.03999999999999, -155.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -1.49<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -11.09<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -50.95<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -99.51<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -130.04<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -155.25<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -2.3599999999999999, -15.07, -59.719999999999999, -118.84, -170.55000000000001, -213.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -2.36<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -15.07<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -59.72<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -118.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -170.55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -213.79<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -1.3999999999999999, -10.140000000000001, -49.049999999999997, -114.77, -180, -234.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -1.40<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -10.14<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -49.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -114.77<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -180.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -234.79<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -1.77, -11.960000000000001, -46.289999999999999, -92.390000000000001, -134.99000000000001, -162.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -1.77<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:  -11.96<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -46.29<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -92.39<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: -134.99<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: -162.82<br />scenario: Nzero_55_RpEUEff_bio12<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [0, -1.79, -11.31, -47.880000000000003, -88.959999999999994, -113.78, -131.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -1.79<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:  -11.31<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -47.88<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -88.96<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.78<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: -131.66<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [0, -2.48, -16.670000000000002, -60.799999999999997, -119.56999999999999, -174.11000000000001, -213.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -2.48<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:  -16.67<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -60.80<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: -119.57<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: -174.11<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: -213.79<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [0, -2.6600000000000001, -16, -66.599999999999994, -127.53, -183.22, -215.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -2.66<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -16.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -66.60<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value: -127.53<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: -183.22<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: -215.58<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.83999999999999997, -5.9199999999999999, -26.93, -54.5, -81.25, -110.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.84<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -5.92<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -26.93<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -54.50<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -81.25<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: -110.41<br />scenario: Nzero_55_RpEUEff_bio20<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [0, -0.87, -6.1699999999999999, -29.75, -56.789999999999999, -77.260000000000005, -97.170000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.87<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -6.17<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -29.75<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -56.79<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -77.26<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -97.17<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.78000000000000003, -5.6500000000000004, -26.82, -55.479999999999997, -83.150000000000006, -109.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -5.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -26.82<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -55.48<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -83.15<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: -109.25<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [0, -1.4199999999999999, -8.5299999999999994, -42.68, -81.609999999999999, -119.77, -160.96000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -1.42<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -8.53<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -42.68<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -81.61<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value: -119.77<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: -160.96<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [0, -1.1499999999999999, -6.5, -21.800000000000001, -35.829999999999998, -38.670000000000002, -36.829999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -1.15<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -6.50<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -21.80<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -35.83<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -38.67<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value:  -36.83<br />scenario: Nzero_55_RpEUEff_bio4<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [0, -0.97999999999999998, -6.2599999999999998, -25.039999999999999, -40.100000000000001, -37.530000000000001, -34.990000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.98<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.26<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -25.04<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -40.10<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -37.53<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value:  -34.99<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [0, -1.3500000000000001, -7.7000000000000002, -23.050000000000001, -39.270000000000003, -43.299999999999997, -40.850000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -1.35<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -23.05<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -39.27<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value:  -43.30<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value:  -40.85<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [0, -1.1599999999999999, -6.2300000000000004, -20.399999999999999, -35.939999999999998, -39.469999999999999, -37.030000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -1.16<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.23<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -20.40<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -35.94<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -39.47<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -37.03<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [0, -1.5700000000000001, -11.359999999999999, -43.25, -90.739999999999995, -137.12, -168.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -1.57<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:  -11.36<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -43.25<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -90.74<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: -137.12<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: -168.93<br />scenario: Nzero_55_RpEUEff_bio7p5<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [0, -1.48, -10.539999999999999, -45.18, -89.299999999999997, -120.18000000000001, -143.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -1.48<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -10.54<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -45.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -89.30<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -120.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -143.14<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -2.2599999999999998, -15.16, -56.609999999999999, -112.65000000000001, -163.16, -203.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -2.26<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -15.16<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -56.61<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -112.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -163.16<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -203.58<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -1.0700000000000001, -8.3300000000000001, -41.899999999999999, -100.19, -164.18000000000001, -214.69999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -1.07<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.33<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -41.90<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: -100.19<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -164.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -214.70<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />tgt2030: 55<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -4.0499999999999998, -26.07, -87.269999999999996, -162.86000000000001, -227.83000000000001, -265.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -4.05<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -26.07<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -87.27<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2040<br />value: -162.86<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2045<br />value: -227.83<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12", "period: 2050<br />value: -265.87<br />scenario: Nzero_57_bio12<br />tgt2030: 57<br />scenario: Nzero_57_bio12"],
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
      "y": [0, -3.4900000000000002, -22.329999999999998, -74.349999999999994, -127.02, -160.08000000000001, -177.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -3.49<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -22.33<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -74.35<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: -127.02<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: -160.08<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: -177.28<br />scenario: Nzero_57_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [0, -4.0999999999999996, -27.780000000000001, -96.150000000000006, -184.34, -260.48000000000002, -305.73000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -4.10<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -27.78<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -96.15<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: -184.34<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: -260.48<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: -305.73<br />scenario: Nzero_57_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [0, -4.2699999999999996, -29.66, -101.47, -179.66, -242.47999999999999, -280.41000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -4.27<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -29.66<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value: -101.47<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: -179.66<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: -242.48<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: -280.41<br />scenario: Nzero_57_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [0, -3.25, -17.489999999999998, -58.07, -102.66, -140.22, -195.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -3.25<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2030<br />value:  -17.49<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -58.07<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2040<br />value: -102.66<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2045<br />value: -140.22<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20", "period: 2050<br />value: -195.40<br />scenario: Nzero_57_bio20<br />tgt2030: 57<br />scenario: Nzero_57_bio20"],
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
      "y": [0, -2.77, -15.640000000000001, -52.049999999999997, -86.469999999999999, -107.5, -151.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -2.77<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:  -15.64<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -52.05<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -86.47<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: -107.50<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: -151.47<br />scenario: Nzero_57_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [0, -3.2599999999999998, -18.48, -62.719999999999999, -113.11, -156.06999999999999, -217.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -3.26<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:  -18.48<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -62.72<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value: -113.11<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: -156.07<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: -217.47<br />scenario: Nzero_57_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [0, -3.7999999999999998, -21.329999999999998, -73.540000000000006, -127.97, -170.38999999999999, -227.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -3.80<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:  -21.33<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -73.54<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value: -127.97<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: -170.39<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: -227.90<br />scenario: Nzero_57_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [0, -1.25, -8.0500000000000007, -19.68, -34.090000000000003, -37.490000000000002, -36.039999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -1.25<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -8.05<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -19.68<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -34.09<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2045<br />value:  -37.49<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4", "period: 2050<br />value:  -36.04<br />scenario: Nzero_57_bio4<br />tgt2030: 57<br />scenario: Nzero_57_bio4"],
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
      "y": [0, -1.3400000000000001, -8.7100000000000009, -26.469999999999999, -41.630000000000003, -36.659999999999997, -32.149999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -1.34<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -8.71<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -26.47<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -41.63<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value:  -36.66<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value:  -32.15<br />scenario: Nzero_57_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [0, -1.3500000000000001, -7.7000000000000002, -22.719999999999999, -36.520000000000003, -36.600000000000001, -34.740000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -1.35<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -7.70<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -22.72<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value:  -36.52<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value:  -36.60<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value:  -34.74<br />scenario: Nzero_57_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [0, -0.69999999999999996, -4.1699999999999999, -17.010000000000002, -32.32, -40.68, -36.990000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -4.17<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -17.01<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -32.32<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value:  -40.68<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value:  -36.99<br />scenario: Nzero_57_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [0, -3.0800000000000001, -19.219999999999999, -62.43, -123.16, -178.06, -224.18000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -3.08<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -19.22<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -62.43<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: -123.16<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: -178.06<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: -224.18<br />scenario: Nzero_57_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5"],
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
      "y": [0, -2.8799999999999999, -17.57, -59.219999999999999, -108.3, -141.25, -164.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -2.88<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -17.57<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -59.22<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: -108.30<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: -141.25<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: -164.17<br />scenario: Nzero_57_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [0, -3.1699999999999999, -22.73, -74.109999999999999, -140.96000000000001, -194.33000000000001, -242.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -3.17<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -22.73<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -74.11<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: -140.96<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: -194.33<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: -242.50<br />scenario: Nzero_57_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [0, -2, -13.949999999999999, -53, -119.91, -182.97, -237.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -2.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -13.95<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -53.00<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: -119.91<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: -182.97<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: -237.64<br />scenario: Nzero_57_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [0, -3.75, -22.800000000000001, -75.900000000000006, -141.56, -197.88, -232.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -3.75<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -22.80<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -75.90<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: -141.56<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: -197.88<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: -232.01<br />scenario: Nzero_57_eedEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [0, -3.4500000000000002, -21.940000000000001, -73.909999999999997, -127.02, -158.87, -176.27000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -3.45<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -21.94<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -73.91<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: -127.02<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: -158.87<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: -176.27<br />scenario: Nzero_57_eedEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [0, -3.8599999999999999, -25.77, -89.650000000000006, -174.09999999999999, -250.00999999999999, -297.69999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -3.86<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -25.77<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -89.65<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: -174.10<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: -250.01<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: -297.70<br />scenario: Nzero_57_eedEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [0, -4.2000000000000002, -28.98, -99.290000000000006, -177.68000000000001, -241.30000000000001, -277.95999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -4.20<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -28.98<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -99.29<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: -177.68<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: -241.30<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: -277.96<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [0, -2.7000000000000002, -15, -52.700000000000003, -96.090000000000003, -134.18000000000001, -186.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -2.70<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:  -15.00<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -52.70<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -96.09<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: -134.18<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: -186.76<br />scenario: Nzero_57_eedEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [0, -2.0299999999999998, -12.359999999999999, -46.020000000000003, -78.980000000000004, -98.189999999999998, -139.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -2.03<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:  -12.36<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -46.02<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -78.98<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:  -98.19<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: -139.90<br />scenario: Nzero_57_eedEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [0, -2.7200000000000002, -15.68, -54.170000000000002, -99.400000000000006, -139.38999999999999, -196.47999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -2.72<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:  -15.68<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -54.17<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -99.40<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: -139.39<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: -196.48<br />scenario: Nzero_57_eedEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [0, -3.8100000000000001, -21.649999999999999, -73.180000000000007, -127.25, -169.88, -227.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -3.81<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:  -21.65<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -73.18<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value: -127.25<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: -169.88<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: -227.28<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [0, -1.3100000000000001, -7.7599999999999998, -19.48, -33.710000000000001, -36.549999999999997, -35.119999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -1.31<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -7.76<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -19.48<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -33.71<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value:  -36.55<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value:  -35.12<br />scenario: Nzero_57_eedEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [0, -1.3500000000000001, -8.9299999999999997, -26.84, -42.590000000000003, -37.969999999999999, -33.740000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -1.35<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -8.93<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -26.84<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -42.59<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value:  -37.97<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value:  -33.74<br />scenario: Nzero_57_eedEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [0, -1.3600000000000001, -7.7400000000000002, -22.449999999999999, -37.009999999999998, -38.130000000000003, -36.649999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -1.36<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -7.74<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -22.45<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value:  -37.01<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value:  -38.13<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value:  -36.65<br />scenario: Nzero_57_eedEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [0, -1.1899999999999999, -6.7699999999999996, -21.120000000000001, -35.700000000000003, -40.859999999999999, -35.799999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -1.19<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -6.77<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -21.12<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -35.70<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value:  -40.86<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value:  -35.80<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [0, -2.8900000000000001, -17.93, -59.490000000000002, -118.51000000000001, -172.37, -216.78],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -2.89<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -17.93<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -59.49<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: -118.51<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: -172.37<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: -216.78<br />scenario: Nzero_57_eedEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [0, -2.5, -15.779999999999999, -55.799999999999997, -103.39, -136.34999999999999, -161.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -2.50<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -15.78<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -55.80<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: -103.39<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: -136.35<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: -161.20<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [0, -3.1400000000000001, -21.649999999999999, -71.25, -135.88, -188.63999999999999, -237.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -3.14<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -21.65<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -71.25<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: -135.88<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: -188.64<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: -237.58<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [0, -2.0099999999999998, -13.91, -53.619999999999997, -122.2, -182.99000000000001, -237.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -2.01<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -13.91<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -53.62<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: -122.20<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: -182.99<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: -237.13<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [0, -2.0800000000000001, -14.289999999999999, -52.960000000000001, -102.36, -144.18000000000001, -169.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -2.08<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:  -14.29<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -52.96<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value: -102.36<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: -144.18<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: -169.66<br />scenario: Nzero_57_ff55Eff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [0, -2.54, -16.16, -60.18, -107.84, -133.28, -149.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -2.54<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:  -16.16<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -60.18<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value: -107.84<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: -133.28<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: -149.89<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [0, -3.1000000000000001, -20.530000000000001, -72.709999999999994, -141.22999999999999, -205.74000000000001, -250.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -3.10<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:  -20.53<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -72.71<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: -141.23<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: -205.74<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: -250.36<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [0, -3.9300000000000002, -25.379999999999999, -89.549999999999997, -162.84999999999999, -222.44999999999999, -253.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -3.93<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -25.38<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -89.55<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: -162.85<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: -222.45<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: -253.36<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [0, -1.52, -8.6500000000000004, -34.969999999999999, -67.140000000000001, -97.859999999999999, -127.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -1.52<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -8.65<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -34.97<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -67.14<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -97.86<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: -127.62<br />scenario: Nzero_57_ff55Eff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [0, -1.6799999999999999, -9.4199999999999999, -35.299999999999997, -64.390000000000001, -87.219999999999999, -108.29000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -1.68<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -9.42<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -35.30<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -64.39<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -87.22<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value: -108.29<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [0, -1.77, -9.9700000000000006, -38.789999999999999, -75.510000000000005, -112, -146.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -1.77<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -9.97<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -38.79<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -75.51<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value: -112.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: -146.66<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [0, -2.8100000000000001, -16.02, -58.609999999999999, -105.12, -144.47999999999999, -191.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -2.81<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -16.02<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -58.61<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value: -105.12<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value: -144.48<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: -191.67<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [0, -1.3500000000000001, -7.2199999999999998, -21.18, -35.170000000000002, -37.43, -37.399999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -1.35<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -7.22<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -21.18<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -35.17<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value:  -37.43<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value:  -37.40<br />scenario: Nzero_57_ff55Eff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [0, -1.3200000000000001, -7.4900000000000002, -24.289999999999999, -39.109999999999999, -37.299999999999997, -34.409999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -1.32<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.49<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -24.29<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -39.11<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -37.30<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value:  -34.41<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [0, -1.3999999999999999, -7.8700000000000001, -22.350000000000001, -38.340000000000003, -39.899999999999999, -36.939999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -1.40<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.87<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -22.35<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value:  -38.34<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value:  -39.90<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value:  -36.94<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [0, -1.1899999999999999, -6.5700000000000003, -19.579999999999998, -34.030000000000001, -39.960000000000001, -36.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -1.19<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -6.57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -19.58<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -34.03<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -39.96<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -36.51<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [0, -1.8500000000000001, -12.890000000000001, -49.439999999999998, -100.95, -148.11000000000001, -185.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -1.85<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:  -12.89<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -49.44<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value: -100.95<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: -148.11<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: -185.14<br />scenario: Nzero_57_ff55Eff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [0, -1.8100000000000001, -13.109999999999999, -52.810000000000002, -101.87, -132.84, -157.43000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -1.81<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -13.11<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -52.81<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value: -101.87<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -132.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -157.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -2.8300000000000001, -17.350000000000001, -62.07, -121.20999999999999, -173.09, -217.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -2.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -17.35<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -62.07<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -121.21<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -173.09<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -217.74<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -1.8100000000000001, -11.66, -50.420000000000002, -115.73, -180.44999999999999, -235.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -1.81<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -11.66<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -50.42<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -115.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -180.45<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -235.74<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -1.78, -11.98, -46.780000000000001, -93.450000000000003, -136.47, -164.22999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -1.78<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:  -11.98<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -46.78<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -93.45<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: -136.47<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: -164.23<br />scenario: Nzero_57_RpEUEff_bio12<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [0, -1.8799999999999999, -12.699999999999999, -53.509999999999998, -98.319999999999993, -124.55, -142.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -1.88<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:  -12.70<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -53.51<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -98.32<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: -124.55<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: -142.05<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [0, -2.2400000000000002, -15.93, -57.130000000000003, -112.89, -164.96000000000001, -203.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -2.24<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:  -15.93<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -57.13<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: -112.89<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: -164.96<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: -203.62<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [0, -2.5800000000000001, -15.609999999999999, -65.659999999999997, -125.7, -180.16, -211.30000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -2.58<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -15.61<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -65.66<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value: -125.70<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: -180.16<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: -211.30<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.73999999999999999, -4.8799999999999999, -23.760000000000002, -48.18, -72.859999999999999, -98.469999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -4.88<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -23.76<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -48.18<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -72.86<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value:  -98.47<br />scenario: Nzero_57_RpEUEff_bio20<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [0, -0.84999999999999998, -5.9400000000000004, -29.48, -56.07, -78.459999999999994, -99.329999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.85<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.94<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -29.48<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -56.07<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -78.46<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -99.33<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.82999999999999996, -6.0899999999999999, -27.850000000000001, -57.640000000000001, -86.810000000000002, -114.48999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -6.09<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -27.85<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -57.64<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -86.81<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: -114.49<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [0, -1.48, -8.8000000000000007, -42.630000000000003, -81.040000000000006, -118.98, -160.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -1.48<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -8.80<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -42.63<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -81.04<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value: -118.98<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: -160.26<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [0, -1.1799999999999999, -6.7699999999999996, -22.34, -36.450000000000003, -39.770000000000003, -38.170000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -1.18<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -6.77<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -22.34<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -36.45<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -39.77<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value:  -38.17<br />scenario: Nzero_57_RpEUEff_bio4<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [0, -0.97999999999999998, -6.0999999999999996, -24.25, -38.329999999999998, -35.369999999999997, -33.030000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.98<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.10<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -24.25<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -38.33<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -35.37<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value:  -33.03<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [0, -1.3300000000000001, -7.5300000000000002, -23.109999999999999, -38.810000000000002, -41.579999999999998, -39],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -1.33<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.53<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -23.11<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -38.81<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value:  -41.58<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value:  -39.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [0, -1.21, -6.4000000000000004, -20.870000000000001, -36.75, -41.07, -38.530000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -1.21<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.40<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -20.87<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -36.75<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -41.07<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -38.53<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [0, -1.53, -11.119999999999999, -42.240000000000002, -88.329999999999998, -133.52000000000001, -165.41999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -1.53<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:  -11.12<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -42.24<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -88.33<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: -133.52<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: -165.42<br />scenario: Nzero_57_RpEUEff_bio7p5<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [0, -1.48, -10.41, -45.289999999999999, -88.959999999999994, -119.17, -142.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -1.48<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -10.41<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -45.29<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -88.96<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -119.17<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -142.21<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -2.3199999999999998, -15.56, -57.869999999999997, -114.42, -164.87, -207.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -2.32<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -15.56<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -57.87<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -114.42<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -164.87<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -207.29<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -1.1100000000000001, -8.5099999999999998, -42.289999999999999, -99.469999999999999, -163.65000000000001, -215.96000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -1.11<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.51<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -42.29<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -99.47<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -163.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -215.96<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />tgt2030: 57<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -2.7999999999999998, -27.870000000000001, -92.129999999999995, -168.13, -229.74000000000001, -263.22000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -2.80<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -27.87<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -92.13<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2040<br />value: -168.13<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2045<br />value: -229.74<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12", "period: 2050<br />value: -263.22<br />scenario: Nzero_59_bio12<br />tgt2030: 59<br />scenario: Nzero_59_bio12"],
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
      "y": [0, -2.6000000000000001, -24.210000000000001, -79.930000000000007, -134.44999999999999, -165.88, -180.59],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -2.60<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -24.21<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -79.93<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: -134.45<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: -165.88<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: -180.59<br />scenario: Nzero_59_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [0, -2.8100000000000001, -29.690000000000001, -102.5, -193.74000000000001, -270.08999999999997, -314.10000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -2.81<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -29.69<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value: -102.50<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: -193.74<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: -270.09<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: -314.10<br />scenario: Nzero_59_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [0, -3.0299999999999998, -34.079999999999998, -113.97, -196.22, -257.99000000000001, -290.41000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -3.03<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -34.08<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value: -113.97<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: -196.22<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: -257.99<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: -290.41<br />scenario: Nzero_59_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [0, -2.3300000000000001, -18.18, -61.460000000000001, -107.26000000000001, -145.34, -203.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -2.33<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2030<br />value:  -18.18<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -61.46<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2040<br />value: -107.26<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2045<br />value: -145.34<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20", "period: 2050<br />value: -203.25<br />scenario: Nzero_59_bio20<br />tgt2030: 59<br />scenario: Nzero_59_bio20"],
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
      "y": [0, -2.2000000000000002, -16.059999999999999, -53.43, -87.590000000000003, -108.31999999999999, -154.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -2.20<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:  -16.06<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -53.43<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -87.59<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: -108.32<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: -154.87<br />scenario: Nzero_59_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [0, -2.3700000000000001, -19.460000000000001, -65.780000000000001, -115.98999999999999, -157.33000000000001, -220.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -2.37<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:  -19.46<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -65.78<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: -115.99<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: -157.33<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: -220.38<br />scenario: Nzero_59_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [0, -2.8500000000000001, -27.780000000000001, -87.989999999999995, -145.44999999999999, -186.63, -243.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -2.85<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:  -27.78<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -87.99<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value: -145.45<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: -186.63<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: -243.68<br />scenario: Nzero_59_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [0, -1.1299999999999999, -8.5800000000000001, -19.809999999999999, -33.25, -35.579999999999998, -34.219999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -1.13<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -8.58<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -19.81<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -33.25<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2045<br />value:  -35.58<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4", "period: 2050<br />value:  -34.22<br />scenario: Nzero_59_bio4<br />tgt2030: 59<br />scenario: Nzero_59_bio4"],
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
      "y": [0, -1.3, -9.6799999999999997, -27.440000000000001, -42.460000000000001, -36.829999999999998, -32.450000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -1.30<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -9.68<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -27.44<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -42.46<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value:  -36.83<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value:  -32.45<br />scenario: Nzero_59_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [0, -1.27, -8.5, -24.16, -38.710000000000001, -37.189999999999998, -35.399999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -1.27<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -8.50<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -24.16<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value:  -38.71<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value:  -37.19<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value:  -35.40<br />scenario: Nzero_59_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [0, -1.1000000000000001, -6.3099999999999996, -19.649999999999999, -33.810000000000002, -40.780000000000001, -36.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -1.10<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -6.31<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -19.65<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -33.81<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value:  -40.78<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value:  -36.51<br />scenario: Nzero_59_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [0, -2.2799999999999998, -20.149999999999999, -64.219999999999999, -125.55, -179.58000000000001, -225.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -2.28<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -20.15<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -64.22<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: -125.55<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: -179.58<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: -225.51<br />scenario: Nzero_59_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5"],
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
      "y": [0, -2.1899999999999999, -17.640000000000001, -59.859999999999999, -108.3, -139.91, -162.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -2.19<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:  -17.64<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -59.86<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: -108.30<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: -139.91<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: -162.03<br />scenario: Nzero_59_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [0, -2.2799999999999998, -22.809999999999999, -73.980000000000004, -139.69, -190.75999999999999, -239.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -2.28<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:  -22.81<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -73.98<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: -139.69<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: -190.76<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: -239.84<br />scenario: Nzero_59_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [0, -2.4300000000000002, -16.690000000000001, -55.899999999999999, -121.44, -182.36000000000001, -236.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -2.43<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:  -16.69<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -55.90<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: -121.44<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: -182.36<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: -236.03<br />scenario: Nzero_59_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [0, -4.2300000000000004, -28.030000000000001, -89.340000000000003, -161.16, -218.44999999999999, -249.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -4.23<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -28.03<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -89.34<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: -161.16<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: -218.45<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: -249.65<br />scenario: Nzero_59_eedEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [0, -4, -25.73, -81.870000000000005, -136.91, -167.09999999999999, -180.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -4.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -25.73<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -81.87<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: -136.91<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: -167.10<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: -180.64<br />scenario: Nzero_59_eedEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [0, -4.2599999999999998, -30.32, -101.5, -190.59, -264.77999999999997, -306.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -4.26<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -30.32<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value: -101.50<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: -190.59<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: -264.78<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: -306.62<br />scenario: Nzero_59_eedEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [0, -2.9900000000000002, -32.240000000000002, -107.70999999999999, -185.65000000000001, -246.00999999999999, -278.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -2.99<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -32.24<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value: -107.71<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: -185.65<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: -246.01<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: -278.76<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [0, -3.4700000000000002, -18.75, -57.960000000000001, -100.51000000000001, -136.28999999999999, -187.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -3.47<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:  -18.75<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -57.96<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value: -100.51<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: -136.29<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: -187.13<br />scenario: Nzero_59_eedEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [0, -3, -16.140000000000001, -51.329999999999998, -83.819999999999993, -101.65000000000001, -141.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -3.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:  -16.14<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -51.33<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -83.82<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: -101.65<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: -141.64<br />scenario: Nzero_59_eedEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [0, -3.5299999999999998, -19.390000000000001, -62.240000000000002, -109.27, -148.49000000000001, -204.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -3.53<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:  -19.39<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -62.24<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value: -109.27<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: -148.49<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: -204.26<br />scenario: Nzero_59_eedEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [0, -2.1099999999999999, -24.300000000000001, -79.900000000000006, -134.06, -174.34999999999999, -231.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -2.11<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:  -24.30<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -79.90<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value: -134.06<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: -174.35<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: -231.47<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [0, -1.1399999999999999, -8.5999999999999996, -20.629999999999999, -34.560000000000002, -36.590000000000003, -35.219999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -1.14<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -8.60<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -20.63<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -34.56<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value:  -36.59<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value:  -35.22<br />scenario: Nzero_59_eedEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [0, -1.3200000000000001, -9.9800000000000004, -28.48, -43.5, -37, -32.630000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -1.32<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -9.98<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -28.48<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -43.50<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value:  -37.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value:  -32.63<br />scenario: Nzero_59_eedEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [0, -1.26, -8.6400000000000006, -24.309999999999999, -39.560000000000002, -37.659999999999997, -35.840000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -1.26<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -8.64<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -24.31<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value:  -39.56<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value:  -37.66<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value:  -35.84<br />scenario: Nzero_59_eedEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [0, -1.29, -7.9400000000000004, -22.07, -36.18, -41.210000000000001, -37.310000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -1.29<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -7.94<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -22.07<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -36.18<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value:  -41.21<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value:  -37.31<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [0, -2.29, -19.489999999999998, -61.829999999999998, -120.87, -174.94999999999999, -219.56],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -2.29<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:  -19.49<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -61.83<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: -120.87<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: -174.95<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: -219.56<br />scenario: Nzero_59_eedEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [0, -2.21, -17.699999999999999, -59.740000000000002, -108.64, -140.31, -162.59],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -2.21<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -17.70<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -59.74<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: -108.64<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: -140.31<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: -162.59<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [0, -2.27, -22.120000000000001, -72.140000000000001, -135.72, -186.02000000000001, -234.99000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -2.27<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:  -22.12<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -72.14<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: -135.72<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: -186.02<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: -234.99<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [0, -2.4900000000000002, -17.129999999999999, -57.520000000000003, -124.22, -185.09, -237.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -2.49<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -17.13<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -57.52<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: -124.22<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: -185.09<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: -237.16<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [0, -3.25, -19.489999999999998, -64.079999999999998, -118.17, -162.36000000000001, -188.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -3.25<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -19.49<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -64.08<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: -118.17<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: -162.36<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: -188.37<br />scenario: Nzero_59_ff55Eff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [0, -2.77, -17.27, -59.07, -102.51000000000001, -121.84999999999999, -136.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -2.77<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -17.27<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -59.07<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: -102.51<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: -121.85<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: -136.29<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [0, -3.5699999999999998, -22.809999999999999, -75.780000000000001, -142.43000000000001, -200.63, -238.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -3.57<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -22.81<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -75.78<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: -142.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: -200.63<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: -238.62<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [0, -4.3499999999999996, -31.050000000000001, -102.95, -180.88999999999999, -239.19, -265.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -4.35<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -31.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value: -102.95<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: -180.89<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: -239.19<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: -265.26<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [0, -1.79, -9.6699999999999999, -36.520000000000003, -68.519999999999996, -105.36, -129.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -1.79<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -9.67<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -36.52<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -68.52<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value: -105.36<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: -129.21<br />scenario: Nzero_59_ff55Eff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [0, -1.79, -9.5999999999999996, -33.810000000000002, -60.68, -87.329999999999998, -104.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -1.79<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -9.60<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -33.81<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -60.68<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -87.33<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value: -104.12<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [0, -1.8300000000000001, -10.210000000000001, -38.259999999999998, -72.939999999999998, -113.02, -141.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -1.83<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:  -10.21<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -38.26<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -72.94<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value: -113.02<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: -141.76<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [0, -3.9399999999999999, -22.379999999999999, -70.730000000000004, -118.66, -155.63999999999999, -208.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -3.94<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -22.38<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -70.73<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value: -118.66<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value: -155.64<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: -208.13<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [0, -1.3799999999999999, -9, -20.73, -34.57, -37.130000000000003, -36.880000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -1.38<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -9.00<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -20.73<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -34.57<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value:  -37.13<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value:  -36.88<br />scenario: Nzero_59_ff55Eff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [0, -1.5600000000000001, -10.65, -26.469999999999999, -41.729999999999997, -39.25, -35.840000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -1.56<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:  -10.65<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -26.47<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -41.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -39.25<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value:  -35.84<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [0, -1.4299999999999999, -8.7699999999999996, -23.030000000000001, -38.719999999999999, -38.700000000000003, -38.57],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -1.43<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -8.77<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -23.03<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value:  -38.72<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value:  -38.70<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value:  -38.57<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [0, -1.27, -7.9699999999999998, -21.199999999999999, -35.670000000000002, -41.539999999999999, -37.859999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -1.27<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.97<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -21.20<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -35.67<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -41.54<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -37.86<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [0, -2.5800000000000001, -16.649999999999999, -55.329999999999998, -109.45999999999999, -157.84999999999999, -196.03999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -2.58<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:  -16.65<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -55.33<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value: -109.46<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: -157.85<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: -196.04<br />scenario: Nzero_59_ff55Eff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [0, -2.3100000000000001, -15.49, -55.359999999999999, -104.09999999999999, -130.96000000000001, -152.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -2.31<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -15.49<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -55.36<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value: -104.10<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -130.96<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -152.89<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -3.1299999999999999, -21.359999999999999, -67.680000000000007, -127.54000000000001, -177.91, -223.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -3.13<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -21.36<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -67.68<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -127.54<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -177.91<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -223.57<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -2.3399999999999999, -16.34, -54.780000000000001, -119.61, -182.25999999999999, -234.22],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -2.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -16.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -54.78<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -119.61<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -182.26<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -234.22<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -2.02, -13.6, -48.840000000000003, -95.180000000000007, -136.77000000000001, -162.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -2.02<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:  -13.60<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -48.84<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -95.18<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: -136.77<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: -162.67<br />scenario: Nzero_59_RpEUEff_bio12<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [0, -1.97, -12.880000000000001, -49.640000000000001, -90.200000000000003, -113.09, -128.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -1.97<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:  -12.88<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -49.64<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -90.20<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.09<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: -128.44<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [0, -2.5099999999999998, -17.210000000000001, -60.270000000000003, -117.22, -168.55000000000001, -204.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -2.51<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:  -17.21<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -60.27<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: -117.22<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: -168.55<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: -204.93<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [0, -3.6699999999999999, -21.920000000000002, -72.920000000000002, -133.94999999999999, -184.28999999999999, -209.97],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -3.67<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -21.92<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -72.92<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value: -133.95<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: -184.29<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: -209.97<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [0, -1.1899999999999999, -7.4699999999999998, -29.039999999999999, -55.939999999999998, -81.180000000000007, -107.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -1.19<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -7.47<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -29.04<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -55.94<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -81.18<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: -107.82<br />scenario: Nzero_59_RpEUEff_bio20<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [0, -1.4299999999999999, -8.4399999999999995, -32.630000000000003, -59.200000000000003, -80.200000000000003, -99.599999999999994],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -1.43<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -8.44<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -32.63<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -59.20<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -80.20<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -99.60<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [0, -1.24, -7.5700000000000003, -28.719999999999999, -56.560000000000002, -82.650000000000006, -106.20999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -1.24<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -7.57<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -28.72<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -56.56<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -82.65<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: -106.21<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [0, -2.4500000000000002, -13.779999999999999, -47.689999999999998, -87.650000000000006, -130.90000000000001, -172.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -2.45<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -13.78<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -47.69<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -87.65<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value: -130.90<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: -172.60<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [0, -1.5800000000000001, -9.3200000000000003, -22.98, -37.450000000000003, -41.82, -40.189999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -1.58<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -9.32<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -22.98<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -37.45<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -41.82<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value:  -40.19<br />scenario: Nzero_59_RpEUEff_bio4<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [0, -1.48, -8.25, -25.010000000000002, -39.829999999999998, -36.840000000000003, -34.270000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -1.48<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -8.25<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -25.01<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -39.83<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -36.84<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value:  -34.27<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [0, -1.54, -9.5500000000000007, -24.66, -40.789999999999999, -43.609999999999999, -41.280000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -1.54<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -9.55<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -24.66<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -40.79<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value:  -43.61<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value:  -41.28<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [0, -1.25, -7.5800000000000001, -19.73, -35.189999999999998, -40.140000000000001, -37.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -1.25<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -7.58<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -19.73<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -35.19<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -40.14<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -37.51<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [0, -1.8500000000000001, -13.18, -46.359999999999999, -93.879999999999995, -138.49000000000001, -171.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -1.85<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:  -13.18<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -46.36<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -93.88<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: -138.49<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: -171.35<br />scenario: Nzero_59_RpEUEff_bio7p5<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [0, -1.73, -12.26, -46.640000000000001, -89.859999999999999, -117.22, -137.15000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -1.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -12.26<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -46.64<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -89.86<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -117.22<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -137.15<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -2.6200000000000001, -17.440000000000001, -59.409999999999997, -116.64, -167.84, -211.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -2.62<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -17.44<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -59.41<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -116.64<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -167.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -211.03<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -1.76, -13.09, -46.780000000000001, -106.54000000000001, -170.18000000000001, -221.03999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -1.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -13.09<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -46.78<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: -106.54<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -170.18<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -221.04<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />tgt2030: 59<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -3.7799999999999998, -23.289999999999999, -80.010000000000005, -151.81, -216.12, -255.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2025<br />value:   -3.78<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2030<br />value:  -23.29<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2035<br />value:  -80.01<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2040<br />value: -151.81<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2045<br />value: -216.12<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12", "period: 2050<br />value: -255.45<br />scenario: Nzero_55_bio12<br />lim: default<br />scenario: Nzero_55_bio12"],
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
      "y": [0, -3.2200000000000002, -20.82, -71.459999999999994, -124.36, -159.43000000000001, -178.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2025<br />value:   -3.22<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2030<br />value:  -20.82<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2035<br />value:  -71.46<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2040<br />value: -124.36<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2045<br />value: -159.43<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC", "period: 2050<br />value: -178.67<br />scenario: Nzero_55_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio12_limCC"],
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
      "y": [0, -3.7000000000000002, -24.920000000000002, -89.879999999999995, -177.66, -259.05000000000001, -312.51999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2025<br />value:   -3.70<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2030<br />value:  -24.92<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2035<br />value:  -89.88<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2040<br />value: -177.66<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2045<br />value: -259.05<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2", "period: 2050<br />value: -312.52<br />scenario: Nzero_55_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_bio12_limH2"],
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
      "y": [0, -3.8599999999999999, -24.98, -96.859999999999999, -177.91999999999999, -246.06, -290.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2025<br />value:   -3.86<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2030<br />value:  -24.98<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2035<br />value:  -96.86<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2040<br />value: -177.92<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2045<br />value: -246.06<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE", "period: 2050<br />value: -290.50<br />scenario: Nzero_55_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio12_limVRE"],
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
      "y": [0, -2.0600000000000001, -12.800000000000001, -49.390000000000001, -92.849999999999994, -131.59, -186.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2025<br />value:   -2.06<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2030<br />value:  -12.80<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2035<br />value:  -49.39<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2040<br />value:  -92.85<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2045<br />value: -131.59<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20", "period: 2050<br />value: -186.08<br />scenario: Nzero_55_bio20<br />lim: default<br />scenario: Nzero_55_bio20"],
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
      "y": [0, -1.8, -11.119999999999999, -43.119999999999997, -74.870000000000005, -94.989999999999995, -140.06],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2025<br />value:   -1.80<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2030<br />value:  -11.12<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2035<br />value:  -43.12<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2040<br />value:  -74.87<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2045<br />value:  -94.99<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC", "period: 2050<br />value: -140.06<br />scenario: Nzero_55_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio20_limCC"],
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
      "y": [0, -2.4300000000000002, -14.99, -55.549999999999997, -104.29000000000001, -148.58000000000001, -213.02000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2025<br />value:   -2.43<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2030<br />value:  -14.99<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2035<br />value:  -55.55<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2040<br />value: -104.29<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2045<br />value: -148.58<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2", "period: 2050<br />value: -213.02<br />scenario: Nzero_55_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_bio20_limH2"],
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
      "y": [0, -3.5899999999999999, -20.140000000000001, -71.659999999999997, -127.84999999999999, -174.02000000000001, -226.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2025<br />value:   -3.59<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2030<br />value:  -20.14<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2035<br />value:  -71.66<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2040<br />value: -127.85<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2045<br />value: -174.02<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE", "period: 2050<br />value: -226.65<br />scenario: Nzero_55_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio20_limVRE"],
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
      "y": [0, -1.25, -7.1399999999999997, -18.530000000000001, -32.909999999999997, -36.420000000000002, -35.32],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2025<br />value:   -1.25<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2030<br />value:   -7.14<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2035<br />value:  -18.53<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2040<br />value:  -32.91<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2045<br />value:  -36.42<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4", "period: 2050<br />value:  -35.32<br />scenario: Nzero_55_bio4<br />lim: default<br />scenario: Nzero_55_bio4"],
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
      "y": [0, -1.26, -7.7300000000000004, -24.530000000000001, -38.450000000000003, -32.57, -28.359999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2025<br />value:   -1.26<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2030<br />value:   -7.73<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2035<br />value:  -24.53<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2040<br />value:  -38.45<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2045<br />value:  -32.57<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC", "period: 2050<br />value:  -28.36<br />scenario: Nzero_55_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio4_limCC"],
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
      "y": [0, -1.3, -6.8899999999999997, -21.82, -35.979999999999997, -36.43, -34.149999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2025<br />value:   -1.30<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2030<br />value:   -6.89<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2035<br />value:  -21.82<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2040<br />value:  -35.98<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2045<br />value:  -36.43<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2", "period: 2050<br />value:  -34.15<br />scenario: Nzero_55_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_bio4_limH2"],
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
      "y": [0, -0.69999999999999996, -4.1100000000000003, -17.489999999999998, -32.060000000000002, -39.869999999999997, -36.07],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2030<br />value:   -4.11<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2035<br />value:  -17.49<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2040<br />value:  -32.06<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2045<br />value:  -39.87<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE", "period: 2050<br />value:  -36.07<br />scenario: Nzero_55_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio4_limVRE"],
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
      "y": [0, -2.8100000000000001, -17.469999999999999, -59.240000000000002, -119.72, -175.22999999999999, -222.19],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2025<br />value:   -2.81<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2030<br />value:  -17.47<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2035<br />value:  -59.24<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2040<br />value: -119.72<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2045<br />value: -175.23<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5", "period: 2050<br />value: -222.19<br />scenario: Nzero_55_bio7p5<br />lim: default<br />scenario: Nzero_55_bio7p5"],
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
      "y": [0, -2.2999999999999998, -14.94, -54.960000000000001, -102.83, -137.21000000000001, -162.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2025<br />value:   -2.30<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2030<br />value:  -14.94<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2035<br />value:  -54.96<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2040<br />value: -102.83<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2045<br />value: -137.21<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC", "period: 2050<br />value: -162.94<br />scenario: Nzero_55_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_bio7p5_limCC"],
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
      "y": [0, -3, -20.969999999999999, -71.480000000000004, -139.06, -190.41, -240.47999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2025<br />value:   -3.00<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2030<br />value:  -20.97<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2035<br />value:  -71.48<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2040<br />value: -139.06<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2045<br />value: -190.41<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2", "period: 2050<br />value: -240.48<br />scenario: Nzero_55_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_bio7p5_limH2"],
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
      "y": [0, -1.3, -9.8499999999999996, -50.229999999999997, -119.36, -180.59, -236.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2025<br />value:   -1.30<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2030<br />value:   -9.85<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2035<br />value:  -50.23<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2040<br />value: -119.36<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2045<br />value: -180.59<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE", "period: 2050<br />value: -236.51<br />scenario: Nzero_55_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_bio7p5_limVRE"],
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
      "y": [0, -3.5299999999999998, -21.489999999999998, -75.060000000000002, -142.87, -203.24000000000001, -240.61000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2025<br />value:   -3.53<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2030<br />value:  -21.49<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2035<br />value:  -75.06<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2040<br />value: -142.87<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2045<br />value: -203.24<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12", "period: 2050<br />value: -240.61<br />scenario: Nzero_55_eedEff_bio12<br />lim: default<br />scenario: Nzero_55_eedEff_bio12"],
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
      "y": [0, -3.1000000000000001, -19.699999999999999, -71.069999999999993, -126.91, -163.97, -185.81],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2025<br />value:   -3.10<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2030<br />value:  -19.70<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2035<br />value:  -71.07<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2040<br />value: -126.91<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2045<br />value: -163.97<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC", "period: 2050<br />value: -185.81<br />scenario: Nzero_55_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio12_limCC"],
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
      "y": [0, -3.6499999999999999, -24.41, -87.689999999999998, -172.94999999999999, -253.00999999999999, -305.44999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2025<br />value:   -3.65<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2030<br />value:  -24.41<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2035<br />value:  -87.69<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2040<br />value: -172.95<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2045<br />value: -253.01<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2", "period: 2050<br />value: -305.45<br />scenario: Nzero_55_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio12_limH2"],
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
      "y": [0, -3.7999999999999998, -24.260000000000002, -93.769999999999996, -172.78999999999999, -241.22, -286.29000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2025<br />value:   -3.80<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2030<br />value:  -24.26<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2035<br />value:  -93.77<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2040<br />value: -172.79<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2045<br />value: -241.22<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE", "period: 2050<br />value: -286.29<br />scenario: Nzero_55_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio12_limVRE"],
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
      "y": [0, -1.75, -11.029999999999999, -46.240000000000002, -88.569999999999993, -128.16999999999999, -175.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2025<br />value:   -1.75<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2030<br />value:  -11.03<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2035<br />value:  -46.24<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2040<br />value:  -88.57<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2045<br />value: -128.17<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20", "period: 2050<br />value: -175.49<br />scenario: Nzero_55_eedEff_bio20<br />lim: default<br />scenario: Nzero_55_eedEff_bio20"],
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
      "y": [0, -1.5600000000000001, -10.300000000000001, -42.560000000000002, -76.5, -98.980000000000004, -133.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2025<br />value:   -1.56<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2030<br />value:  -10.30<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2035<br />value:  -42.56<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2040<br />value:  -76.50<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2045<br />value:  -98.98<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC", "period: 2050<br />value: -133.67<br />scenario: Nzero_55_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio20_limCC"],
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
      "y": [0, -1.79, -12.08, -49.299999999999997, -95.549999999999997, -138.84999999999999, -191.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2025<br />value:   -1.79<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2030<br />value:  -12.08<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2035<br />value:  -49.30<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2040<br />value:  -95.55<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2045<br />value: -138.85<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2", "period: 2050<br />value: -191.76<br />scenario: Nzero_55_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio20_limH2"],
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
      "y": [0, -3.3500000000000001, -19.07, -70.030000000000001, -125.72, -171.66, -224.63],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2025<br />value:   -3.35<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2030<br />value:  -19.07<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2035<br />value:  -70.03<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2040<br />value: -125.72<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2045<br />value: -171.66<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE", "period: 2050<br />value: -224.63<br />scenario: Nzero_55_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio20_limVRE"],
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
      "y": [0, -1.22, -6.8700000000000001, -17.789999999999999, -30.949999999999999, -33.149999999999999, -32.060000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2025<br />value:   -1.22<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2030<br />value:   -6.87<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2035<br />value:  -17.79<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2040<br />value:  -30.95<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2045<br />value:  -33.15<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4", "period: 2050<br />value:  -32.06<br />scenario: Nzero_55_eedEff_bio4<br />lim: default<br />scenario: Nzero_55_eedEff_bio4"],
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
      "y": [0, -1.3200000000000001, -7.8799999999999999, -25.359999999999999, -39.950000000000003, -33.509999999999998, -29.710000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2025<br />value:   -1.32<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2030<br />value:   -7.88<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2035<br />value:  -25.36<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2040<br />value:  -39.95<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2045<br />value:  -33.51<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC", "period: 2050<br />value:  -29.71<br />scenario: Nzero_55_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio4_limCC"],
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
      "y": [0, -1.3100000000000001, -6.7000000000000002, -20.75, -35.509999999999998, -36.07, -34.850000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2025<br />value:   -1.31<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2030<br />value:   -6.70<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2035<br />value:  -20.75<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2040<br />value:  -35.51<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2045<br />value:  -36.07<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2", "period: 2050<br />value:  -34.85<br />scenario: Nzero_55_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio4_limH2"],
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
      "y": [0, -0.92000000000000004, -5.1399999999999997, -18.850000000000001, -33.390000000000001, -39.840000000000003, -35.359999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2025<br />value:   -0.92<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2030<br />value:   -5.14<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2035<br />value:  -18.85<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2040<br />value:  -33.39<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2045<br />value:  -39.84<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE", "period: 2050<br />value:  -35.36<br />scenario: Nzero_55_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio4_limVRE"],
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
      "y": [0, -2.9399999999999999, -17.600000000000001, -60.460000000000001, -120.67, -175.52000000000001, -221.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2025<br />value:   -2.94<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2030<br />value:  -17.60<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2035<br />value:  -60.46<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2040<br />value: -120.67<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2045<br />value: -175.52<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5", "period: 2050<br />value: -221.35<br />scenario: Nzero_55_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_55_eedEff_bio7p5"],
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
      "y": [0, -2.3100000000000001, -14.59, -55.899999999999999, -105.78, -142.25, -170.80000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2025<br />value:   -2.31<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2030<br />value:  -14.59<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2035<br />value:  -55.90<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2040<br />value: -105.78<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2045<br />value: -142.25<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC", "period: 2050<br />value: -170.80<br />scenario: Nzero_55_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_eedEff_bio7p5_limCC"],
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
      "y": [0, -3.02, -20.760000000000002, -71.349999999999994, -137.66999999999999, -190.28999999999999, -240.11000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2025<br />value:   -3.02<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2030<br />value:  -20.76<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2035<br />value:  -71.35<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2040<br />value: -137.67<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2045<br />value: -190.29<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2", "period: 2050<br />value: -240.11<br />scenario: Nzero_55_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_eedEff_bio7p5_limH2"],
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
      "y": [0, -1.54, -10.789999999999999, -51.780000000000001, -120.25, -182.53999999999999, -238.49000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -1.54<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -10.79<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -51.78<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2040<br />value: -120.25<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2045<br />value: -182.54<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE", "period: 2050<br />value: -238.49<br />scenario: Nzero_55_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_eedEff_bio7p5_limVRE"],
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
      "y": [0, -2.0499999999999998, -14.140000000000001, -55.090000000000003, -107.48, -153.28999999999999, -181.88],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2025<br />value:   -2.05<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2030<br />value:  -14.14<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2035<br />value:  -55.09<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2040<br />value: -107.48<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2045<br />value: -153.29<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12", "period: 2050<br />value: -181.88<br />scenario: Nzero_55_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio12"],
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
      "y": [0, -2.1899999999999999, -14.300000000000001, -58.619999999999997, -106.2, -132.03, -149.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2025<br />value:   -2.19<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2030<br />value:  -14.30<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2035<br />value:  -58.62<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2040<br />value: -106.20<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2045<br />value: -132.03<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC", "period: 2050<br />value: -149.37<br />scenario: Nzero_55_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio12_limCC"],
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
      "y": [0, -2.7599999999999998, -18.120000000000001, -69.230000000000004, -136.66, -201.25999999999999, -246.94],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2025<br />value:   -2.76<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2030<br />value:  -18.12<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2035<br />value:  -69.23<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2040<br />value: -136.66<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2045<br />value: -201.26<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2", "period: 2050<br />value: -246.94<br />scenario: Nzero_55_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio12_limH2"],
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
      "y": [0, -3.27, -18.84, -80.569999999999993, -152.59, -216.08000000000001, -252.71000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -3.27<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -18.84<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -80.57<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2040<br />value: -152.59<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2045<br />value: -216.08<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE", "period: 2050<br />value: -252.71<br />scenario: Nzero_55_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio12_limVRE"],
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
      "y": [0, -1.0700000000000001, -7.2400000000000002, -33.460000000000001, -65.909999999999997, -95.650000000000006, -124.08],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2025<br />value:   -1.07<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2030<br />value:   -7.24<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2035<br />value:  -33.46<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2040<br />value:  -65.91<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2045<br />value:  -95.65<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20", "period: 2050<br />value: -124.08<br />scenario: Nzero_55_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio20"],
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
      "y": [0, -1, -6.8300000000000001, -31.370000000000001, -60.579999999999998, -84.310000000000002, -106.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2025<br />value:   -1.00<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2030<br />value:   -6.83<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2035<br />value:  -31.37<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2040<br />value:  -60.58<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2045<br />value:  -84.31<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC", "period: 2050<br />value: -106.60<br />scenario: Nzero_55_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio20_limCC"],
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
      "y": [0, -1.0900000000000001, -7.2699999999999996, -33.25, -66.840000000000003, -98.489999999999995, -128.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2025<br />value:   -1.09<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2030<br />value:   -7.27<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2035<br />value:  -33.25<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2040<br />value:  -66.84<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2045<br />value:  -98.49<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2", "period: 2050<br />value: -128.57<br />scenario: Nzero_55_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio20_limH2"],
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
      "y": [0, -1.8400000000000001, -11.16, -52.039999999999999, -97.840000000000003, -137.91999999999999, -182.08000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -1.84<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -11.16<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -52.04<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2040<br />value:  -97.84<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2045<br />value: -137.92<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE", "period: 2050<br />value: -182.08<br />scenario: Nzero_55_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio20_limVRE"],
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
      "y": [0, -1, -5.9000000000000004, -21.280000000000001, -34.810000000000002, -35.789999999999999, -36.189999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2025<br />value:   -1.00<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2030<br />value:   -5.90<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2035<br />value:  -21.28<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2040<br />value:  -34.81<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2045<br />value:  -35.79<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4", "period: 2050<br />value:  -36.19<br />scenario: Nzero_55_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio4"],
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
      "y": [0, -0.71999999999999997, -4.8099999999999996, -23.59, -37.789999999999999, -36, -33.200000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2025<br />value:   -0.72<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2030<br />value:   -4.81<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2035<br />value:  -23.59<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2040<br />value:  -37.79<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2045<br />value:  -36.00<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC", "period: 2050<br />value:  -33.20<br />scenario: Nzero_55_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio4_limCC"],
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
      "y": [0, -1.1499999999999999, -6.04, -22.300000000000001, -39, -41.399999999999999, -38.579999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2025<br />value:   -1.15<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2030<br />value:   -6.04<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2035<br />value:  -22.30<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2040<br />value:  -39.00<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2045<br />value:  -41.40<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2", "period: 2050<br />value:  -38.58<br />scenario: Nzero_55_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio4_limH2"],
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
      "y": [0, -1, -5.4199999999999999, -19.399999999999999, -34.579999999999998, -39.369999999999997, -35.600000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -1.00<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -5.42<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -19.40<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -34.58<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -39.37<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -35.60<br />scenario: Nzero_55_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio4_limVRE"],
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
      "y": [0, -1.4299999999999999, -10.57, -46.920000000000002, -98.5, -147.25999999999999, -184.46000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2025<br />value:   -1.43<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2030<br />value:  -10.57<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2035<br />value:  -46.92<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2040<br />value:  -98.50<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2045<br />value: -147.26<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5", "period: 2050<br />value: -184.46<br />scenario: Nzero_55_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_55_ff55Eff_bio7p5"],
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
      "y": [0, -1.49, -11.09, -50.950000000000003, -99.510000000000005, -130.03999999999999, -155.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -1.49<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -11.09<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -50.95<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2040<br />value:  -99.51<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -130.04<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -155.25<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -2.3599999999999999, -15.07, -59.719999999999999, -118.84, -170.55000000000001, -213.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -2.36<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -15.07<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -59.72<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -118.84<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -170.55<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -213.79<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -1.3999999999999999, -10.140000000000001, -49.049999999999997, -114.77, -180, -234.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -1.40<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -10.14<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -49.05<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -114.77<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -180.00<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -234.79<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -1.77, -11.960000000000001, -46.289999999999999, -92.390000000000001, -134.99000000000001, -162.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2025<br />value:   -1.77<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2030<br />value:  -11.96<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2035<br />value:  -46.29<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2040<br />value:  -92.39<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2045<br />value: -134.99<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12", "period: 2050<br />value: -162.82<br />scenario: Nzero_55_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio12"],
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
      "y": [0, -1.79, -11.31, -47.880000000000003, -88.959999999999994, -113.78, -131.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2025<br />value:   -1.79<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2030<br />value:  -11.31<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2035<br />value:  -47.88<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2040<br />value:  -88.96<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.78<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC", "period: 2050<br />value: -131.66<br />scenario: Nzero_55_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio12_limCC"],
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
      "y": [0, -2.48, -16.670000000000002, -60.799999999999997, -119.56999999999999, -174.11000000000001, -213.78999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2025<br />value:   -2.48<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2030<br />value:  -16.67<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2035<br />value:  -60.80<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2040<br />value: -119.57<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2045<br />value: -174.11<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2", "period: 2050<br />value: -213.79<br />scenario: Nzero_55_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio12_limH2"],
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
      "y": [0, -2.6600000000000001, -16, -66.599999999999994, -127.53, -183.22, -215.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -2.66<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -16.00<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -66.60<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2040<br />value: -127.53<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2045<br />value: -183.22<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE", "period: 2050<br />value: -215.58<br />scenario: Nzero_55_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.83999999999999997, -5.9199999999999999, -26.93, -54.5, -81.25, -110.41],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2025<br />value:   -0.84<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2030<br />value:   -5.92<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2035<br />value:  -26.93<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2040<br />value:  -54.50<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2045<br />value:  -81.25<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20", "period: 2050<br />value: -110.41<br />scenario: Nzero_55_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio20"],
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
      "y": [0, -0.87, -6.1699999999999999, -29.75, -56.789999999999999, -77.260000000000005, -97.170000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.87<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2030<br />value:   -6.17<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2035<br />value:  -29.75<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2040<br />value:  -56.79<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2045<br />value:  -77.26<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC", "period: 2050<br />value:  -97.17<br />scenario: Nzero_55_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.78000000000000003, -5.6500000000000004, -26.82, -55.479999999999997, -83.150000000000006, -109.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.78<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2030<br />value:   -5.65<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2035<br />value:  -26.82<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2040<br />value:  -55.48<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2045<br />value:  -83.15<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2", "period: 2050<br />value: -109.25<br />scenario: Nzero_55_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio20_limH2"],
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
      "y": [0, -1.4199999999999999, -8.5299999999999994, -42.68, -81.609999999999999, -119.77, -160.96000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -1.42<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -8.53<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -42.68<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -81.61<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2045<br />value: -119.77<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE", "period: 2050<br />value: -160.96<br />scenario: Nzero_55_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio20_limVRE"],
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
      "y": [0, -1.1499999999999999, -6.5, -21.800000000000001, -35.829999999999998, -38.670000000000002, -36.829999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2025<br />value:   -1.15<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2030<br />value:   -6.50<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2035<br />value:  -21.80<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2040<br />value:  -35.83<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2045<br />value:  -38.67<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4", "period: 2050<br />value:  -36.83<br />scenario: Nzero_55_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio4"],
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
      "y": [0, -0.97999999999999998, -6.2599999999999998, -25.039999999999999, -40.100000000000001, -37.530000000000001, -34.990000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.98<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.26<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2035<br />value:  -25.04<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2040<br />value:  -40.10<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2045<br />value:  -37.53<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC", "period: 2050<br />value:  -34.99<br />scenario: Nzero_55_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio4_limCC"],
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
      "y": [0, -1.3500000000000001, -7.7000000000000002, -23.050000000000001, -39.270000000000003, -43.299999999999997, -40.850000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2025<br />value:   -1.35<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.70<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2035<br />value:  -23.05<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2040<br />value:  -39.27<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2045<br />value:  -43.30<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2", "period: 2050<br />value:  -40.85<br />scenario: Nzero_55_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio4_limH2"],
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
      "y": [0, -1.1599999999999999, -6.2300000000000004, -20.399999999999999, -35.939999999999998, -39.469999999999999, -37.030000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -1.16<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.23<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -20.40<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -35.94<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -39.47<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -37.03<br />scenario: Nzero_55_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio4_limVRE"],
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
      "y": [0, -1.5700000000000001, -11.359999999999999, -43.25, -90.739999999999995, -137.12, -168.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2025<br />value:   -1.57<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2030<br />value:  -11.36<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2035<br />value:  -43.25<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2040<br />value:  -90.74<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2045<br />value: -137.12<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5", "period: 2050<br />value: -168.93<br />scenario: Nzero_55_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_55_RpEUEff_bio7p5"],
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
      "y": [0, -1.48, -10.539999999999999, -45.18, -89.299999999999997, -120.18000000000001, -143.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -1.48<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -10.54<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -45.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -89.30<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -120.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -143.14<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_55_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -2.2599999999999998, -15.16, -56.609999999999999, -112.65000000000001, -163.16, -203.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -2.26<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -15.16<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -56.61<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -112.65<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -163.16<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -203.58<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_55_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -1.0700000000000001, -8.3300000000000001, -41.899999999999999, -100.19, -164.18000000000001, -214.69999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -1.07<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.33<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -41.90<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: -100.19<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -164.18<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -214.70<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_55_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -4.0499999999999998, -26.07, -87.269999999999996, -162.86000000000001, -227.83000000000001, -265.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2025<br />value:   -4.05<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2030<br />value:  -26.07<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2035<br />value:  -87.27<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2040<br />value: -162.86<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2045<br />value: -227.83<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12", "period: 2050<br />value: -265.87<br />scenario: Nzero_57_bio12<br />lim: default<br />scenario: Nzero_57_bio12"],
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
      "y": [0, -3.4900000000000002, -22.329999999999998, -74.349999999999994, -127.02, -160.08000000000001, -177.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2025<br />value:   -3.49<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2030<br />value:  -22.33<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2035<br />value:  -74.35<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2040<br />value: -127.02<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2045<br />value: -160.08<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC", "period: 2050<br />value: -177.28<br />scenario: Nzero_57_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio12_limCC"],
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
      "y": [0, -4.0999999999999996, -27.780000000000001, -96.150000000000006, -184.34, -260.48000000000002, -305.73000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2025<br />value:   -4.10<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2030<br />value:  -27.78<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2035<br />value:  -96.15<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2040<br />value: -184.34<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2045<br />value: -260.48<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2", "period: 2050<br />value: -305.73<br />scenario: Nzero_57_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_bio12_limH2"],
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
      "y": [0, -4.2699999999999996, -29.66, -101.47, -179.66, -242.47999999999999, -280.41000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2025<br />value:   -4.27<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2030<br />value:  -29.66<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2035<br />value: -101.47<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2040<br />value: -179.66<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2045<br />value: -242.48<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE", "period: 2050<br />value: -280.41<br />scenario: Nzero_57_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio12_limVRE"],
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
      "y": [0, -3.25, -17.489999999999998, -58.07, -102.66, -140.22, -195.40000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2025<br />value:   -3.25<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2030<br />value:  -17.49<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2035<br />value:  -58.07<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2040<br />value: -102.66<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2045<br />value: -140.22<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20", "period: 2050<br />value: -195.40<br />scenario: Nzero_57_bio20<br />lim: default<br />scenario: Nzero_57_bio20"],
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
      "y": [0, -2.77, -15.640000000000001, -52.049999999999997, -86.469999999999999, -107.5, -151.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2025<br />value:   -2.77<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2030<br />value:  -15.64<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2035<br />value:  -52.05<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2040<br />value:  -86.47<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2045<br />value: -107.50<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC", "period: 2050<br />value: -151.47<br />scenario: Nzero_57_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio20_limCC"],
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
      "y": [0, -3.2599999999999998, -18.48, -62.719999999999999, -113.11, -156.06999999999999, -217.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2025<br />value:   -3.26<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2030<br />value:  -18.48<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2035<br />value:  -62.72<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2040<br />value: -113.11<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2045<br />value: -156.07<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2", "period: 2050<br />value: -217.47<br />scenario: Nzero_57_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_bio20_limH2"],
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
      "y": [0, -3.7999999999999998, -21.329999999999998, -73.540000000000006, -127.97, -170.38999999999999, -227.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2025<br />value:   -3.80<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2030<br />value:  -21.33<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2035<br />value:  -73.54<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2040<br />value: -127.97<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2045<br />value: -170.39<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE", "period: 2050<br />value: -227.90<br />scenario: Nzero_57_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio20_limVRE"],
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
      "y": [0, -1.25, -8.0500000000000007, -19.68, -34.090000000000003, -37.490000000000002, -36.039999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2025<br />value:   -1.25<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2030<br />value:   -8.05<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2035<br />value:  -19.68<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2040<br />value:  -34.09<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2045<br />value:  -37.49<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4", "period: 2050<br />value:  -36.04<br />scenario: Nzero_57_bio4<br />lim: default<br />scenario: Nzero_57_bio4"],
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
      "y": [0, -1.3400000000000001, -8.7100000000000009, -26.469999999999999, -41.630000000000003, -36.659999999999997, -32.149999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2025<br />value:   -1.34<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2030<br />value:   -8.71<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2035<br />value:  -26.47<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2040<br />value:  -41.63<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2045<br />value:  -36.66<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC", "period: 2050<br />value:  -32.15<br />scenario: Nzero_57_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio4_limCC"],
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
      "y": [0, -1.3500000000000001, -7.7000000000000002, -22.719999999999999, -36.520000000000003, -36.600000000000001, -34.740000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2025<br />value:   -1.35<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2030<br />value:   -7.70<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2035<br />value:  -22.72<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2040<br />value:  -36.52<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2045<br />value:  -36.60<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2", "period: 2050<br />value:  -34.74<br />scenario: Nzero_57_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_bio4_limH2"],
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
      "y": [0, -0.69999999999999996, -4.1699999999999999, -17.010000000000002, -32.32, -40.68, -36.990000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2025<br />value:   -0.70<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2030<br />value:   -4.17<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2035<br />value:  -17.01<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2040<br />value:  -32.32<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2045<br />value:  -40.68<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE", "period: 2050<br />value:  -36.99<br />scenario: Nzero_57_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio4_limVRE"],
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
      "y": [0, -3.0800000000000001, -19.219999999999999, -62.43, -123.16, -178.06, -224.18000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2025<br />value:   -3.08<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2030<br />value:  -19.22<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2035<br />value:  -62.43<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2040<br />value: -123.16<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2045<br />value: -178.06<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5", "period: 2050<br />value: -224.18<br />scenario: Nzero_57_bio7p5<br />lim: default<br />scenario: Nzero_57_bio7p5"],
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
      "y": [0, -2.8799999999999999, -17.57, -59.219999999999999, -108.3, -141.25, -164.16999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2025<br />value:   -2.88<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2030<br />value:  -17.57<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2035<br />value:  -59.22<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2040<br />value: -108.30<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2045<br />value: -141.25<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC", "period: 2050<br />value: -164.17<br />scenario: Nzero_57_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_bio7p5_limCC"],
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
      "y": [0, -3.1699999999999999, -22.73, -74.109999999999999, -140.96000000000001, -194.33000000000001, -242.5],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2025<br />value:   -3.17<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2030<br />value:  -22.73<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2035<br />value:  -74.11<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2040<br />value: -140.96<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2045<br />value: -194.33<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2", "period: 2050<br />value: -242.50<br />scenario: Nzero_57_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_bio7p5_limH2"],
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
      "y": [0, -2, -13.949999999999999, -53, -119.91, -182.97, -237.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2025<br />value:   -2.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2030<br />value:  -13.95<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2035<br />value:  -53.00<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2040<br />value: -119.91<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2045<br />value: -182.97<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE", "period: 2050<br />value: -237.64<br />scenario: Nzero_57_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_bio7p5_limVRE"],
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
      "y": [0, -3.75, -22.800000000000001, -75.900000000000006, -141.56, -197.88, -232.00999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2025<br />value:   -3.75<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2030<br />value:  -22.80<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2035<br />value:  -75.90<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2040<br />value: -141.56<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2045<br />value: -197.88<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12", "period: 2050<br />value: -232.01<br />scenario: Nzero_57_eedEff_bio12<br />lim: default<br />scenario: Nzero_57_eedEff_bio12"],
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
      "y": [0, -3.4500000000000002, -21.940000000000001, -73.909999999999997, -127.02, -158.87, -176.27000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2025<br />value:   -3.45<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2030<br />value:  -21.94<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2035<br />value:  -73.91<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2040<br />value: -127.02<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2045<br />value: -158.87<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC", "period: 2050<br />value: -176.27<br />scenario: Nzero_57_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio12_limCC"],
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
      "y": [0, -3.8599999999999999, -25.77, -89.650000000000006, -174.09999999999999, -250.00999999999999, -297.69999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2025<br />value:   -3.86<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2030<br />value:  -25.77<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2035<br />value:  -89.65<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2040<br />value: -174.10<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2045<br />value: -250.01<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2", "period: 2050<br />value: -297.70<br />scenario: Nzero_57_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio12_limH2"],
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
      "y": [0, -4.2000000000000002, -28.98, -99.290000000000006, -177.68000000000001, -241.30000000000001, -277.95999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2025<br />value:   -4.20<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2030<br />value:  -28.98<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2035<br />value:  -99.29<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2040<br />value: -177.68<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2045<br />value: -241.30<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE", "period: 2050<br />value: -277.96<br />scenario: Nzero_57_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio12_limVRE"],
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
      "y": [0, -2.7000000000000002, -15, -52.700000000000003, -96.090000000000003, -134.18000000000001, -186.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2025<br />value:   -2.70<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2030<br />value:  -15.00<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2035<br />value:  -52.70<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2040<br />value:  -96.09<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2045<br />value: -134.18<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20", "period: 2050<br />value: -186.76<br />scenario: Nzero_57_eedEff_bio20<br />lim: default<br />scenario: Nzero_57_eedEff_bio20"],
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
      "y": [0, -2.0299999999999998, -12.359999999999999, -46.020000000000003, -78.980000000000004, -98.189999999999998, -139.90000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2025<br />value:   -2.03<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2030<br />value:  -12.36<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2035<br />value:  -46.02<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2040<br />value:  -78.98<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2045<br />value:  -98.19<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC", "period: 2050<br />value: -139.90<br />scenario: Nzero_57_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio20_limCC"],
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
      "y": [0, -2.7200000000000002, -15.68, -54.170000000000002, -99.400000000000006, -139.38999999999999, -196.47999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2025<br />value:   -2.72<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2030<br />value:  -15.68<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2035<br />value:  -54.17<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2040<br />value:  -99.40<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2045<br />value: -139.39<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2", "period: 2050<br />value: -196.48<br />scenario: Nzero_57_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio20_limH2"],
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
      "y": [0, -3.8100000000000001, -21.649999999999999, -73.180000000000007, -127.25, -169.88, -227.28],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2025<br />value:   -3.81<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2030<br />value:  -21.65<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2035<br />value:  -73.18<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2040<br />value: -127.25<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2045<br />value: -169.88<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE", "period: 2050<br />value: -227.28<br />scenario: Nzero_57_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio20_limVRE"],
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
      "y": [0, -1.3100000000000001, -7.7599999999999998, -19.48, -33.710000000000001, -36.549999999999997, -35.119999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2025<br />value:   -1.31<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2030<br />value:   -7.76<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2035<br />value:  -19.48<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2040<br />value:  -33.71<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2045<br />value:  -36.55<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4", "period: 2050<br />value:  -35.12<br />scenario: Nzero_57_eedEff_bio4<br />lim: default<br />scenario: Nzero_57_eedEff_bio4"],
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
      "y": [0, -1.3500000000000001, -8.9299999999999997, -26.84, -42.590000000000003, -37.969999999999999, -33.740000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2025<br />value:   -1.35<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2030<br />value:   -8.93<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2035<br />value:  -26.84<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2040<br />value:  -42.59<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2045<br />value:  -37.97<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC", "period: 2050<br />value:  -33.74<br />scenario: Nzero_57_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio4_limCC"],
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
      "y": [0, -1.3600000000000001, -7.7400000000000002, -22.449999999999999, -37.009999999999998, -38.130000000000003, -36.649999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2025<br />value:   -1.36<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2030<br />value:   -7.74<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2035<br />value:  -22.45<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2040<br />value:  -37.01<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2045<br />value:  -38.13<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2", "period: 2050<br />value:  -36.65<br />scenario: Nzero_57_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio4_limH2"],
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
      "y": [0, -1.1899999999999999, -6.7699999999999996, -21.120000000000001, -35.700000000000003, -40.859999999999999, -35.799999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2025<br />value:   -1.19<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2030<br />value:   -6.77<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2035<br />value:  -21.12<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2040<br />value:  -35.70<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2045<br />value:  -40.86<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE", "period: 2050<br />value:  -35.80<br />scenario: Nzero_57_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio4_limVRE"],
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
      "y": [0, -2.8900000000000001, -17.93, -59.490000000000002, -118.51000000000001, -172.37, -216.78],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2025<br />value:   -2.89<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2030<br />value:  -17.93<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2035<br />value:  -59.49<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2040<br />value: -118.51<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2045<br />value: -172.37<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5", "period: 2050<br />value: -216.78<br />scenario: Nzero_57_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_57_eedEff_bio7p5"],
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
      "y": [0, -2.5, -15.779999999999999, -55.799999999999997, -103.39, -136.34999999999999, -161.19999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2025<br />value:   -2.50<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2030<br />value:  -15.78<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2035<br />value:  -55.80<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2040<br />value: -103.39<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2045<br />value: -136.35<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC", "period: 2050<br />value: -161.20<br />scenario: Nzero_57_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_eedEff_bio7p5_limCC"],
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
      "y": [0, -3.1400000000000001, -21.649999999999999, -71.25, -135.88, -188.63999999999999, -237.58000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2025<br />value:   -3.14<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2030<br />value:  -21.65<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2035<br />value:  -71.25<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2040<br />value: -135.88<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2045<br />value: -188.64<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2", "period: 2050<br />value: -237.58<br />scenario: Nzero_57_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_eedEff_bio7p5_limH2"],
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
      "y": [0, -2.0099999999999998, -13.91, -53.619999999999997, -122.2, -182.99000000000001, -237.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -2.01<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -13.91<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -53.62<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2040<br />value: -122.20<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2045<br />value: -182.99<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE", "period: 2050<br />value: -237.13<br />scenario: Nzero_57_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_eedEff_bio7p5_limVRE"],
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
      "y": [0, -2.0800000000000001, -14.289999999999999, -52.960000000000001, -102.36, -144.18000000000001, -169.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2025<br />value:   -2.08<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2030<br />value:  -14.29<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2035<br />value:  -52.96<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2040<br />value: -102.36<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2045<br />value: -144.18<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12", "period: 2050<br />value: -169.66<br />scenario: Nzero_57_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio12"],
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
      "y": [0, -2.54, -16.16, -60.18, -107.84, -133.28, -149.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2025<br />value:   -2.54<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2030<br />value:  -16.16<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2035<br />value:  -60.18<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2040<br />value: -107.84<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2045<br />value: -133.28<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC", "period: 2050<br />value: -149.89<br />scenario: Nzero_57_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio12_limCC"],
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
      "y": [0, -3.1000000000000001, -20.530000000000001, -72.709999999999994, -141.22999999999999, -205.74000000000001, -250.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2025<br />value:   -3.10<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2030<br />value:  -20.53<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2035<br />value:  -72.71<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2040<br />value: -141.23<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2045<br />value: -205.74<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2", "period: 2050<br />value: -250.36<br />scenario: Nzero_57_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio12_limH2"],
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
      "y": [0, -3.9300000000000002, -25.379999999999999, -89.549999999999997, -162.84999999999999, -222.44999999999999, -253.36000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -3.93<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -25.38<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2035<br />value:  -89.55<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2040<br />value: -162.85<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2045<br />value: -222.45<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE", "period: 2050<br />value: -253.36<br />scenario: Nzero_57_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio12_limVRE"],
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
      "y": [0, -1.52, -8.6500000000000004, -34.969999999999999, -67.140000000000001, -97.859999999999999, -127.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2025<br />value:   -1.52<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2030<br />value:   -8.65<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2035<br />value:  -34.97<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2040<br />value:  -67.14<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2045<br />value:  -97.86<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20", "period: 2050<br />value: -127.62<br />scenario: Nzero_57_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio20"],
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
      "y": [0, -1.6799999999999999, -9.4199999999999999, -35.299999999999997, -64.390000000000001, -87.219999999999999, -108.29000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2025<br />value:   -1.68<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2030<br />value:   -9.42<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2035<br />value:  -35.30<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2040<br />value:  -64.39<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2045<br />value:  -87.22<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC", "period: 2050<br />value: -108.29<br />scenario: Nzero_57_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio20_limCC"],
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
      "y": [0, -1.77, -9.9700000000000006, -38.789999999999999, -75.510000000000005, -112, -146.66],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2025<br />value:   -1.77<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2030<br />value:   -9.97<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2035<br />value:  -38.79<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2040<br />value:  -75.51<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2045<br />value: -112.00<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2", "period: 2050<br />value: -146.66<br />scenario: Nzero_57_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio20_limH2"],
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
      "y": [0, -2.8100000000000001, -16.02, -58.609999999999999, -105.12, -144.47999999999999, -191.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -2.81<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -16.02<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -58.61<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2040<br />value: -105.12<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2045<br />value: -144.48<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE", "period: 2050<br />value: -191.67<br />scenario: Nzero_57_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio20_limVRE"],
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
      "y": [0, -1.3500000000000001, -7.2199999999999998, -21.18, -35.170000000000002, -37.43, -37.399999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2025<br />value:   -1.35<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2030<br />value:   -7.22<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2035<br />value:  -21.18<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2040<br />value:  -35.17<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2045<br />value:  -37.43<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4", "period: 2050<br />value:  -37.40<br />scenario: Nzero_57_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio4"],
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
      "y": [0, -1.3200000000000001, -7.4900000000000002, -24.289999999999999, -39.109999999999999, -37.299999999999997, -34.409999999999997],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2025<br />value:   -1.32<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2030<br />value:   -7.49<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2035<br />value:  -24.29<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2040<br />value:  -39.11<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2045<br />value:  -37.30<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC", "period: 2050<br />value:  -34.41<br />scenario: Nzero_57_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio4_limCC"],
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
      "y": [0, -1.3999999999999999, -7.8700000000000001, -22.350000000000001, -38.340000000000003, -39.899999999999999, -36.939999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2025<br />value:   -1.40<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2030<br />value:   -7.87<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2035<br />value:  -22.35<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2040<br />value:  -38.34<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2045<br />value:  -39.90<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2", "period: 2050<br />value:  -36.94<br />scenario: Nzero_57_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio4_limH2"],
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
      "y": [0, -1.1899999999999999, -6.5700000000000003, -19.579999999999998, -34.030000000000001, -39.960000000000001, -36.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -1.19<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -6.57<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -19.58<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -34.03<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -39.96<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -36.51<br />scenario: Nzero_57_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio4_limVRE"],
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
      "y": [0, -1.8500000000000001, -12.890000000000001, -49.439999999999998, -100.95, -148.11000000000001, -185.13999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2025<br />value:   -1.85<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2030<br />value:  -12.89<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2035<br />value:  -49.44<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2040<br />value: -100.95<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2045<br />value: -148.11<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5", "period: 2050<br />value: -185.14<br />scenario: Nzero_57_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_57_ff55Eff_bio7p5"],
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
      "y": [0, -1.8100000000000001, -13.109999999999999, -52.810000000000002, -101.87, -132.84, -157.43000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -1.81<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -13.11<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -52.81<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2040<br />value: -101.87<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -132.84<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -157.43<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -2.8300000000000001, -17.350000000000001, -62.07, -121.20999999999999, -173.09, -217.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -2.83<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -17.35<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -62.07<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -121.21<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -173.09<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -217.74<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -1.8100000000000001, -11.66, -50.420000000000002, -115.73, -180.44999999999999, -235.74000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -1.81<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -11.66<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -50.42<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -115.73<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -180.45<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -235.74<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -1.78, -11.98, -46.780000000000001, -93.450000000000003, -136.47, -164.22999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2025<br />value:   -1.78<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2030<br />value:  -11.98<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2035<br />value:  -46.78<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2040<br />value:  -93.45<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2045<br />value: -136.47<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12", "period: 2050<br />value: -164.23<br />scenario: Nzero_57_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio12"],
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
      "y": [0, -1.8799999999999999, -12.699999999999999, -53.509999999999998, -98.319999999999993, -124.55, -142.05000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2025<br />value:   -1.88<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2030<br />value:  -12.70<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2035<br />value:  -53.51<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2040<br />value:  -98.32<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2045<br />value: -124.55<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC", "period: 2050<br />value: -142.05<br />scenario: Nzero_57_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio12_limCC"],
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
      "y": [0, -2.2400000000000002, -15.93, -57.130000000000003, -112.89, -164.96000000000001, -203.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2025<br />value:   -2.24<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2030<br />value:  -15.93<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2035<br />value:  -57.13<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2040<br />value: -112.89<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2045<br />value: -164.96<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2", "period: 2050<br />value: -203.62<br />scenario: Nzero_57_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio12_limH2"],
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
      "y": [0, -2.5800000000000001, -15.609999999999999, -65.659999999999997, -125.7, -180.16, -211.30000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -2.58<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -15.61<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -65.66<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2040<br />value: -125.70<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2045<br />value: -180.16<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE", "period: 2050<br />value: -211.30<br />scenario: Nzero_57_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio12_limVRE"],
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
      "y": [0, -0.73999999999999999, -4.8799999999999999, -23.760000000000002, -48.18, -72.859999999999999, -98.469999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2025<br />value:   -0.74<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2030<br />value:   -4.88<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2035<br />value:  -23.76<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2040<br />value:  -48.18<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2045<br />value:  -72.86<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20", "period: 2050<br />value:  -98.47<br />scenario: Nzero_57_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio20"],
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
      "y": [0, -0.84999999999999998, -5.9400000000000004, -29.48, -56.07, -78.459999999999994, -99.329999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2025<br />value:   -0.85<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2030<br />value:   -5.94<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2035<br />value:  -29.48<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2040<br />value:  -56.07<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2045<br />value:  -78.46<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC", "period: 2050<br />value:  -99.33<br />scenario: Nzero_57_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio20_limCC"],
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
      "y": [0, -0.82999999999999996, -6.0899999999999999, -27.850000000000001, -57.640000000000001, -86.810000000000002, -114.48999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2025<br />value:   -0.83<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2030<br />value:   -6.09<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2035<br />value:  -27.85<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2040<br />value:  -57.64<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2045<br />value:  -86.81<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2", "period: 2050<br />value: -114.49<br />scenario: Nzero_57_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio20_limH2"],
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
      "y": [0, -1.48, -8.8000000000000007, -42.630000000000003, -81.040000000000006, -118.98, -160.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -1.48<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2030<br />value:   -8.80<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -42.63<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -81.04<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2045<br />value: -118.98<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE", "period: 2050<br />value: -160.26<br />scenario: Nzero_57_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio20_limVRE"],
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
      "y": [0, -1.1799999999999999, -6.7699999999999996, -22.34, -36.450000000000003, -39.770000000000003, -38.170000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2025<br />value:   -1.18<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2030<br />value:   -6.77<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2035<br />value:  -22.34<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2040<br />value:  -36.45<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2045<br />value:  -39.77<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4", "period: 2050<br />value:  -38.17<br />scenario: Nzero_57_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio4"],
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
      "y": [0, -0.97999999999999998, -6.0999999999999996, -24.25, -38.329999999999998, -35.369999999999997, -33.030000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2025<br />value:   -0.98<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2030<br />value:   -6.10<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2035<br />value:  -24.25<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2040<br />value:  -38.33<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2045<br />value:  -35.37<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC", "period: 2050<br />value:  -33.03<br />scenario: Nzero_57_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio4_limCC"],
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
      "y": [0, -1.3300000000000001, -7.5300000000000002, -23.109999999999999, -38.810000000000002, -41.579999999999998, -39],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2025<br />value:   -1.33<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2030<br />value:   -7.53<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2035<br />value:  -23.11<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2040<br />value:  -38.81<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2045<br />value:  -41.58<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2", "period: 2050<br />value:  -39.00<br />scenario: Nzero_57_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio4_limH2"],
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
      "y": [0, -1.21, -6.4000000000000004, -20.870000000000001, -36.75, -41.07, -38.530000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -1.21<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -6.40<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -20.87<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -36.75<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -41.07<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -38.53<br />scenario: Nzero_57_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio4_limVRE"],
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
      "y": [0, -1.53, -11.119999999999999, -42.240000000000002, -88.329999999999998, -133.52000000000001, -165.41999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2025<br />value:   -1.53<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2030<br />value:  -11.12<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2035<br />value:  -42.24<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2040<br />value:  -88.33<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2045<br />value: -133.52<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5", "period: 2050<br />value: -165.42<br />scenario: Nzero_57_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_57_RpEUEff_bio7p5"],
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
      "y": [0, -1.48, -10.41, -45.289999999999999, -88.959999999999994, -119.17, -142.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -1.48<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -10.41<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -45.29<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -88.96<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -119.17<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -142.21<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_57_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -2.3199999999999998, -15.56, -57.869999999999997, -114.42, -164.87, -207.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -2.32<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -15.56<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -57.87<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -114.42<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -164.87<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -207.29<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_57_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -1.1100000000000001, -8.5099999999999998, -42.289999999999999, -99.469999999999999, -163.65000000000001, -215.96000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -1.11<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:   -8.51<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -42.29<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2040<br />value:  -99.47<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -163.65<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -215.96<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_57_RpEUEff_bio7p5_limVRE"],
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
      "y": [0, -2.7999999999999998, -27.870000000000001, -92.129999999999995, -168.13, -229.74000000000001, -263.22000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2025<br />value:   -2.80<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2030<br />value:  -27.87<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2035<br />value:  -92.13<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2040<br />value: -168.13<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2045<br />value: -229.74<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12", "period: 2050<br />value: -263.22<br />scenario: Nzero_59_bio12<br />lim: default<br />scenario: Nzero_59_bio12"],
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
      "y": [0, -2.6000000000000001, -24.210000000000001, -79.930000000000007, -134.44999999999999, -165.88, -180.59],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2025<br />value:   -2.60<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2030<br />value:  -24.21<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2035<br />value:  -79.93<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2040<br />value: -134.45<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2045<br />value: -165.88<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC", "period: 2050<br />value: -180.59<br />scenario: Nzero_59_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio12_limCC"],
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
      "y": [0, -2.8100000000000001, -29.690000000000001, -102.5, -193.74000000000001, -270.08999999999997, -314.10000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2025<br />value:   -2.81<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2030<br />value:  -29.69<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2035<br />value: -102.50<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2040<br />value: -193.74<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2045<br />value: -270.09<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2", "period: 2050<br />value: -314.10<br />scenario: Nzero_59_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_bio12_limH2"],
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
      "y": [0, -3.0299999999999998, -34.079999999999998, -113.97, -196.22, -257.99000000000001, -290.41000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2025<br />value:   -3.03<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2030<br />value:  -34.08<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2035<br />value: -113.97<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2040<br />value: -196.22<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2045<br />value: -257.99<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE", "period: 2050<br />value: -290.41<br />scenario: Nzero_59_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio12_limVRE"],
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
      "y": [0, -2.3300000000000001, -18.18, -61.460000000000001, -107.26000000000001, -145.34, -203.25],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2025<br />value:   -2.33<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2030<br />value:  -18.18<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2035<br />value:  -61.46<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2040<br />value: -107.26<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2045<br />value: -145.34<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20", "period: 2050<br />value: -203.25<br />scenario: Nzero_59_bio20<br />lim: default<br />scenario: Nzero_59_bio20"],
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
      "y": [0, -2.2000000000000002, -16.059999999999999, -53.43, -87.590000000000003, -108.31999999999999, -154.87],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2025<br />value:   -2.20<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2030<br />value:  -16.06<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2035<br />value:  -53.43<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2040<br />value:  -87.59<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2045<br />value: -108.32<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC", "period: 2050<br />value: -154.87<br />scenario: Nzero_59_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio20_limCC"],
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
      "y": [0, -2.3700000000000001, -19.460000000000001, -65.780000000000001, -115.98999999999999, -157.33000000000001, -220.38],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2025<br />value:   -2.37<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2030<br />value:  -19.46<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2035<br />value:  -65.78<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2040<br />value: -115.99<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2045<br />value: -157.33<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2", "period: 2050<br />value: -220.38<br />scenario: Nzero_59_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_bio20_limH2"],
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
      "y": [0, -2.8500000000000001, -27.780000000000001, -87.989999999999995, -145.44999999999999, -186.63, -243.68000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2025<br />value:   -2.85<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2030<br />value:  -27.78<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2035<br />value:  -87.99<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2040<br />value: -145.45<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2045<br />value: -186.63<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE", "period: 2050<br />value: -243.68<br />scenario: Nzero_59_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio20_limVRE"],
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
      "y": [0, -1.1299999999999999, -8.5800000000000001, -19.809999999999999, -33.25, -35.579999999999998, -34.219999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2025<br />value:   -1.13<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2030<br />value:   -8.58<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2035<br />value:  -19.81<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2040<br />value:  -33.25<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2045<br />value:  -35.58<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4", "period: 2050<br />value:  -34.22<br />scenario: Nzero_59_bio4<br />lim: default<br />scenario: Nzero_59_bio4"],
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
      "y": [0, -1.3, -9.6799999999999997, -27.440000000000001, -42.460000000000001, -36.829999999999998, -32.450000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2025<br />value:   -1.30<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2030<br />value:   -9.68<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2035<br />value:  -27.44<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2040<br />value:  -42.46<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2045<br />value:  -36.83<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC", "period: 2050<br />value:  -32.45<br />scenario: Nzero_59_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio4_limCC"],
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
      "y": [0, -1.27, -8.5, -24.16, -38.710000000000001, -37.189999999999998, -35.399999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2025<br />value:   -1.27<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2030<br />value:   -8.50<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2035<br />value:  -24.16<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2040<br />value:  -38.71<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2045<br />value:  -37.19<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2", "period: 2050<br />value:  -35.40<br />scenario: Nzero_59_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_bio4_limH2"],
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
      "y": [0, -1.1000000000000001, -6.3099999999999996, -19.649999999999999, -33.810000000000002, -40.780000000000001, -36.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2025<br />value:   -1.10<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2030<br />value:   -6.31<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2035<br />value:  -19.65<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2040<br />value:  -33.81<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2045<br />value:  -40.78<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE", "period: 2050<br />value:  -36.51<br />scenario: Nzero_59_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio4_limVRE"],
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
      "y": [0, -2.2799999999999998, -20.149999999999999, -64.219999999999999, -125.55, -179.58000000000001, -225.50999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2025<br />value:   -2.28<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2030<br />value:  -20.15<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2035<br />value:  -64.22<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2040<br />value: -125.55<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2045<br />value: -179.58<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5", "period: 2050<br />value: -225.51<br />scenario: Nzero_59_bio7p5<br />lim: default<br />scenario: Nzero_59_bio7p5"],
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
      "y": [0, -2.1899999999999999, -17.640000000000001, -59.859999999999999, -108.3, -139.91, -162.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2025<br />value:   -2.19<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2030<br />value:  -17.64<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2035<br />value:  -59.86<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2040<br />value: -108.30<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2045<br />value: -139.91<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC", "period: 2050<br />value: -162.03<br />scenario: Nzero_59_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_bio7p5_limCC"],
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
      "y": [0, -2.2799999999999998, -22.809999999999999, -73.980000000000004, -139.69, -190.75999999999999, -239.84],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2025<br />value:   -2.28<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2030<br />value:  -22.81<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2035<br />value:  -73.98<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2040<br />value: -139.69<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2045<br />value: -190.76<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2", "period: 2050<br />value: -239.84<br />scenario: Nzero_59_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_bio7p5_limH2"],
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
      "y": [0, -2.4300000000000002, -16.690000000000001, -55.899999999999999, -121.44, -182.36000000000001, -236.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2025<br />value:   -2.43<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2030<br />value:  -16.69<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2035<br />value:  -55.90<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2040<br />value: -121.44<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2045<br />value: -182.36<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE", "period: 2050<br />value: -236.03<br />scenario: Nzero_59_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_bio7p5_limVRE"],
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
      "y": [0, -4.2300000000000004, -28.030000000000001, -89.340000000000003, -161.16, -218.44999999999999, -249.65000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2025<br />value:   -4.23<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2030<br />value:  -28.03<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2035<br />value:  -89.34<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2040<br />value: -161.16<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2045<br />value: -218.45<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12", "period: 2050<br />value: -249.65<br />scenario: Nzero_59_eedEff_bio12<br />lim: default<br />scenario: Nzero_59_eedEff_bio12"],
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
      "y": [0, -4, -25.73, -81.870000000000005, -136.91, -167.09999999999999, -180.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2025<br />value:   -4.00<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2030<br />value:  -25.73<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2035<br />value:  -81.87<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2040<br />value: -136.91<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2045<br />value: -167.10<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC", "period: 2050<br />value: -180.64<br />scenario: Nzero_59_eedEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio12_limCC"],
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
      "y": [0, -4.2599999999999998, -30.32, -101.5, -190.59, -264.77999999999997, -306.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2025<br />value:   -4.26<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2030<br />value:  -30.32<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2035<br />value: -101.50<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2040<br />value: -190.59<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2045<br />value: -264.78<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2", "period: 2050<br />value: -306.62<br />scenario: Nzero_59_eedEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio12_limH2"],
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
      "y": [0, -2.9900000000000002, -32.240000000000002, -107.70999999999999, -185.65000000000001, -246.00999999999999, -278.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2025<br />value:   -2.99<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2030<br />value:  -32.24<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2035<br />value: -107.71<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2040<br />value: -185.65<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2045<br />value: -246.01<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE", "period: 2050<br />value: -278.76<br />scenario: Nzero_59_eedEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio12_limVRE"],
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
      "y": [0, -3.4700000000000002, -18.75, -57.960000000000001, -100.51000000000001, -136.28999999999999, -187.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2025<br />value:   -3.47<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2030<br />value:  -18.75<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2035<br />value:  -57.96<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2040<br />value: -100.51<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2045<br />value: -136.29<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20", "period: 2050<br />value: -187.13<br />scenario: Nzero_59_eedEff_bio20<br />lim: default<br />scenario: Nzero_59_eedEff_bio20"],
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
      "y": [0, -3, -16.140000000000001, -51.329999999999998, -83.819999999999993, -101.65000000000001, -141.63999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2025<br />value:   -3.00<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2030<br />value:  -16.14<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2035<br />value:  -51.33<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2040<br />value:  -83.82<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2045<br />value: -101.65<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC", "period: 2050<br />value: -141.64<br />scenario: Nzero_59_eedEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio20_limCC"],
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
      "y": [0, -3.5299999999999998, -19.390000000000001, -62.240000000000002, -109.27, -148.49000000000001, -204.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2025<br />value:   -3.53<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2030<br />value:  -19.39<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2035<br />value:  -62.24<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2040<br />value: -109.27<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2045<br />value: -148.49<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2", "period: 2050<br />value: -204.26<br />scenario: Nzero_59_eedEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio20_limH2"],
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
      "y": [0, -2.1099999999999999, -24.300000000000001, -79.900000000000006, -134.06, -174.34999999999999, -231.47],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2025<br />value:   -2.11<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2030<br />value:  -24.30<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2035<br />value:  -79.90<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2040<br />value: -134.06<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2045<br />value: -174.35<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE", "period: 2050<br />value: -231.47<br />scenario: Nzero_59_eedEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio20_limVRE"],
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
      "y": [0, -1.1399999999999999, -8.5999999999999996, -20.629999999999999, -34.560000000000002, -36.590000000000003, -35.219999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2025<br />value:   -1.14<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2030<br />value:   -8.60<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2035<br />value:  -20.63<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2040<br />value:  -34.56<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2045<br />value:  -36.59<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4", "period: 2050<br />value:  -35.22<br />scenario: Nzero_59_eedEff_bio4<br />lim: default<br />scenario: Nzero_59_eedEff_bio4"],
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
      "y": [0, -1.3200000000000001, -9.9800000000000004, -28.48, -43.5, -37, -32.630000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2025<br />value:   -1.32<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2030<br />value:   -9.98<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2035<br />value:  -28.48<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2040<br />value:  -43.50<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2045<br />value:  -37.00<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC", "period: 2050<br />value:  -32.63<br />scenario: Nzero_59_eedEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio4_limCC"],
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
      "y": [0, -1.26, -8.6400000000000006, -24.309999999999999, -39.560000000000002, -37.659999999999997, -35.840000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2025<br />value:   -1.26<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2030<br />value:   -8.64<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2035<br />value:  -24.31<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2040<br />value:  -39.56<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2045<br />value:  -37.66<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2", "period: 2050<br />value:  -35.84<br />scenario: Nzero_59_eedEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio4_limH2"],
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
      "y": [0, -1.29, -7.9400000000000004, -22.07, -36.18, -41.210000000000001, -37.310000000000002],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2025<br />value:   -1.29<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2030<br />value:   -7.94<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2035<br />value:  -22.07<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2040<br />value:  -36.18<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2045<br />value:  -41.21<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE", "period: 2050<br />value:  -37.31<br />scenario: Nzero_59_eedEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio4_limVRE"],
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
      "y": [0, -2.29, -19.489999999999998, -61.829999999999998, -120.87, -174.94999999999999, -219.56],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2025<br />value:   -2.29<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2030<br />value:  -19.49<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2035<br />value:  -61.83<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2040<br />value: -120.87<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2045<br />value: -174.95<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5", "period: 2050<br />value: -219.56<br />scenario: Nzero_59_eedEff_bio7p5<br />lim: default<br />scenario: Nzero_59_eedEff_bio7p5"],
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
      "y": [0, -2.21, -17.699999999999999, -59.740000000000002, -108.64, -140.31, -162.59],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2025<br />value:   -2.21<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2030<br />value:  -17.70<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2035<br />value:  -59.74<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2040<br />value: -108.64<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2045<br />value: -140.31<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC", "period: 2050<br />value: -162.59<br />scenario: Nzero_59_eedEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_eedEff_bio7p5_limCC"],
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
      "y": [0, -2.27, -22.120000000000001, -72.140000000000001, -135.72, -186.02000000000001, -234.99000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2025<br />value:   -2.27<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2030<br />value:  -22.12<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2035<br />value:  -72.14<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2040<br />value: -135.72<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2045<br />value: -186.02<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2", "period: 2050<br />value: -234.99<br />scenario: Nzero_59_eedEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_eedEff_bio7p5_limH2"],
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
      "y": [0, -2.4900000000000002, -17.129999999999999, -57.520000000000003, -124.22, -185.09, -237.16],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2025<br />value:   -2.49<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2030<br />value:  -17.13<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2035<br />value:  -57.52<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2040<br />value: -124.22<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2045<br />value: -185.09<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE", "period: 2050<br />value: -237.16<br />scenario: Nzero_59_eedEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_eedEff_bio7p5_limVRE"],
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
      "y": [0, -3.25, -19.489999999999998, -64.079999999999998, -118.17, -162.36000000000001, -188.37],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2025<br />value:   -3.25<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2030<br />value:  -19.49<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2035<br />value:  -64.08<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2040<br />value: -118.17<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2045<br />value: -162.36<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12", "period: 2050<br />value: -188.37<br />scenario: Nzero_59_ff55Eff_bio12<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio12"],
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
      "y": [0, -2.77, -17.27, -59.07, -102.51000000000001, -121.84999999999999, -136.28999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2025<br />value:   -2.77<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2030<br />value:  -17.27<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2035<br />value:  -59.07<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2040<br />value: -102.51<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2045<br />value: -121.85<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC", "period: 2050<br />value: -136.29<br />scenario: Nzero_59_ff55Eff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio12_limCC"],
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
      "y": [0, -3.5699999999999998, -22.809999999999999, -75.780000000000001, -142.43000000000001, -200.63, -238.62],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2025<br />value:   -3.57<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2030<br />value:  -22.81<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2035<br />value:  -75.78<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2040<br />value: -142.43<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2045<br />value: -200.63<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2", "period: 2050<br />value: -238.62<br />scenario: Nzero_59_ff55Eff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio12_limH2"],
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
      "y": [0, -4.3499999999999996, -31.050000000000001, -102.95, -180.88999999999999, -239.19, -265.25999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2025<br />value:   -4.35<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2030<br />value:  -31.05<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2035<br />value: -102.95<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2040<br />value: -180.89<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2045<br />value: -239.19<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE", "period: 2050<br />value: -265.26<br />scenario: Nzero_59_ff55Eff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio12_limVRE"],
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
      "y": [0, -1.79, -9.6699999999999999, -36.520000000000003, -68.519999999999996, -105.36, -129.21000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2025<br />value:   -1.79<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2030<br />value:   -9.67<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2035<br />value:  -36.52<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2040<br />value:  -68.52<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2045<br />value: -105.36<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20", "period: 2050<br />value: -129.21<br />scenario: Nzero_59_ff55Eff_bio20<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio20"],
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
      "y": [0, -1.79, -9.5999999999999996, -33.810000000000002, -60.68, -87.329999999999998, -104.12],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2025<br />value:   -1.79<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2030<br />value:   -9.60<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2035<br />value:  -33.81<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2040<br />value:  -60.68<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2045<br />value:  -87.33<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC", "period: 2050<br />value: -104.12<br />scenario: Nzero_59_ff55Eff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio20_limCC"],
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
      "y": [0, -1.8300000000000001, -10.210000000000001, -38.259999999999998, -72.939999999999998, -113.02, -141.75999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2025<br />value:   -1.83<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2030<br />value:  -10.21<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2035<br />value:  -38.26<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2040<br />value:  -72.94<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2045<br />value: -113.02<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2", "period: 2050<br />value: -141.76<br />scenario: Nzero_59_ff55Eff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio20_limH2"],
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
      "y": [0, -3.9399999999999999, -22.379999999999999, -70.730000000000004, -118.66, -155.63999999999999, -208.13],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2025<br />value:   -3.94<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2030<br />value:  -22.38<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2035<br />value:  -70.73<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2040<br />value: -118.66<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2045<br />value: -155.64<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE", "period: 2050<br />value: -208.13<br />scenario: Nzero_59_ff55Eff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio20_limVRE"],
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
      "y": [0, -1.3799999999999999, -9, -20.73, -34.57, -37.130000000000003, -36.880000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2025<br />value:   -1.38<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2030<br />value:   -9.00<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2035<br />value:  -20.73<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2040<br />value:  -34.57<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2045<br />value:  -37.13<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4", "period: 2050<br />value:  -36.88<br />scenario: Nzero_59_ff55Eff_bio4<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio4"],
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
      "y": [0, -1.5600000000000001, -10.65, -26.469999999999999, -41.729999999999997, -39.25, -35.840000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2025<br />value:   -1.56<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2030<br />value:  -10.65<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2035<br />value:  -26.47<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2040<br />value:  -41.73<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2045<br />value:  -39.25<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC", "period: 2050<br />value:  -35.84<br />scenario: Nzero_59_ff55Eff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio4_limCC"],
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
      "y": [0, -1.4299999999999999, -8.7699999999999996, -23.030000000000001, -38.719999999999999, -38.700000000000003, -38.57],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2025<br />value:   -1.43<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2030<br />value:   -8.77<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2035<br />value:  -23.03<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2040<br />value:  -38.72<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2045<br />value:  -38.70<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2", "period: 2050<br />value:  -38.57<br />scenario: Nzero_59_ff55Eff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio4_limH2"],
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
      "y": [0, -1.27, -7.9699999999999998, -21.199999999999999, -35.670000000000002, -41.539999999999999, -37.859999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2025<br />value:   -1.27<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2030<br />value:   -7.97<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2035<br />value:  -21.20<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2040<br />value:  -35.67<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2045<br />value:  -41.54<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE", "period: 2050<br />value:  -37.86<br />scenario: Nzero_59_ff55Eff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio4_limVRE"],
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
      "y": [0, -2.5800000000000001, -16.649999999999999, -55.329999999999998, -109.45999999999999, -157.84999999999999, -196.03999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2025<br />value:   -2.58<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2030<br />value:  -16.65<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2035<br />value:  -55.33<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2040<br />value: -109.46<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2045<br />value: -157.85<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5", "period: 2050<br />value: -196.04<br />scenario: Nzero_59_ff55Eff_bio7p5<br />lim: default<br />scenario: Nzero_59_ff55Eff_bio7p5"],
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
      "y": [0, -2.3100000000000001, -15.49, -55.359999999999999, -104.09999999999999, -130.96000000000001, -152.88999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2025<br />value:   -2.31<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2030<br />value:  -15.49<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2035<br />value:  -55.36<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2040<br />value: -104.10<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2045<br />value: -130.96<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC", "period: 2050<br />value: -152.89<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_ff55Eff_bio7p5_limCC"],
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
      "y": [0, -3.1299999999999999, -21.359999999999999, -67.680000000000007, -127.54000000000001, -177.91, -223.56999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2025<br />value:   -3.13<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2030<br />value:  -21.36<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2035<br />value:  -67.68<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2040<br />value: -127.54<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2045<br />value: -177.91<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2", "period: 2050<br />value: -223.57<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_ff55Eff_bio7p5_limH2"],
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
      "y": [0, -2.3399999999999999, -16.34, -54.780000000000001, -119.61, -182.25999999999999, -234.22],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2025<br />value:   -2.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2030<br />value:  -16.34<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2035<br />value:  -54.78<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2040<br />value: -119.61<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2045<br />value: -182.26<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE", "period: 2050<br />value: -234.22<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_ff55Eff_bio7p5_limVRE"],
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
      "y": [0, -2.02, -13.6, -48.840000000000003, -95.180000000000007, -136.77000000000001, -162.66999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2025<br />value:   -2.02<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2030<br />value:  -13.60<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2035<br />value:  -48.84<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2040<br />value:  -95.18<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2045<br />value: -136.77<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12", "period: 2050<br />value: -162.67<br />scenario: Nzero_59_RpEUEff_bio12<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio12"],
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
      "y": [0, -1.97, -12.880000000000001, -49.640000000000001, -90.200000000000003, -113.09, -128.44],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2025<br />value:   -1.97<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2030<br />value:  -12.88<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2035<br />value:  -49.64<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2040<br />value:  -90.20<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2045<br />value: -113.09<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC", "period: 2050<br />value: -128.44<br />scenario: Nzero_59_RpEUEff_bio12_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio12_limCC"],
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
      "y": [0, -2.5099999999999998, -17.210000000000001, -60.270000000000003, -117.22, -168.55000000000001, -204.93000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2025<br />value:   -2.51<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2030<br />value:  -17.21<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2035<br />value:  -60.27<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2040<br />value: -117.22<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2045<br />value: -168.55<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2", "period: 2050<br />value: -204.93<br />scenario: Nzero_59_RpEUEff_bio12_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio12_limH2"],
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
      "y": [0, -3.6699999999999999, -21.920000000000002, -72.920000000000002, -133.94999999999999, -184.28999999999999, -209.97],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2025<br />value:   -3.67<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2030<br />value:  -21.92<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2035<br />value:  -72.92<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2040<br />value: -133.95<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2045<br />value: -184.29<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE", "period: 2050<br />value: -209.97<br />scenario: Nzero_59_RpEUEff_bio12_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio12_limVRE"],
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
      "y": [0, -1.1899999999999999, -7.4699999999999998, -29.039999999999999, -55.939999999999998, -81.180000000000007, -107.81999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2025<br />value:   -1.19<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2030<br />value:   -7.47<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2035<br />value:  -29.04<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2040<br />value:  -55.94<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2045<br />value:  -81.18<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20", "period: 2050<br />value: -107.82<br />scenario: Nzero_59_RpEUEff_bio20<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio20"],
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
      "y": [0, -1.4299999999999999, -8.4399999999999995, -32.630000000000003, -59.200000000000003, -80.200000000000003, -99.599999999999994],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2025<br />value:   -1.43<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2030<br />value:   -8.44<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2035<br />value:  -32.63<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2040<br />value:  -59.20<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2045<br />value:  -80.20<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC", "period: 2050<br />value:  -99.60<br />scenario: Nzero_59_RpEUEff_bio20_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio20_limCC"],
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
      "y": [0, -1.24, -7.5700000000000003, -28.719999999999999, -56.560000000000002, -82.650000000000006, -106.20999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2025<br />value:   -1.24<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2030<br />value:   -7.57<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2035<br />value:  -28.72<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2040<br />value:  -56.56<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2045<br />value:  -82.65<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2", "period: 2050<br />value: -106.21<br />scenario: Nzero_59_RpEUEff_bio20_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio20_limH2"],
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
      "y": [0, -2.4500000000000002, -13.779999999999999, -47.689999999999998, -87.650000000000006, -130.90000000000001, -172.59999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2025<br />value:   -2.45<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2030<br />value:  -13.78<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2035<br />value:  -47.69<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2040<br />value:  -87.65<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2045<br />value: -130.90<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE", "period: 2050<br />value: -172.60<br />scenario: Nzero_59_RpEUEff_bio20_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio20_limVRE"],
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
      "y": [0, -1.5800000000000001, -9.3200000000000003, -22.98, -37.450000000000003, -41.82, -40.189999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2025<br />value:   -1.58<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2030<br />value:   -9.32<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2035<br />value:  -22.98<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2040<br />value:  -37.45<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2045<br />value:  -41.82<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4", "period: 2050<br />value:  -40.19<br />scenario: Nzero_59_RpEUEff_bio4<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio4"],
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
      "y": [0, -1.48, -8.25, -25.010000000000002, -39.829999999999998, -36.840000000000003, -34.270000000000003],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2025<br />value:   -1.48<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2030<br />value:   -8.25<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2035<br />value:  -25.01<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2040<br />value:  -39.83<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2045<br />value:  -36.84<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC", "period: 2050<br />value:  -34.27<br />scenario: Nzero_59_RpEUEff_bio4_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio4_limCC"],
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
      "y": [0, -1.54, -9.5500000000000007, -24.66, -40.789999999999999, -43.609999999999999, -41.280000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2025<br />value:   -1.54<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2030<br />value:   -9.55<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2035<br />value:  -24.66<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2040<br />value:  -40.79<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2045<br />value:  -43.61<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2", "period: 2050<br />value:  -41.28<br />scenario: Nzero_59_RpEUEff_bio4_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio4_limH2"],
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
      "y": [0, -1.25, -7.5800000000000001, -19.73, -35.189999999999998, -40.140000000000001, -37.509999999999998],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2025<br />value:   -1.25<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2030<br />value:   -7.58<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2035<br />value:  -19.73<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2040<br />value:  -35.19<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2045<br />value:  -40.14<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE", "period: 2050<br />value:  -37.51<br />scenario: Nzero_59_RpEUEff_bio4_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio4_limVRE"],
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
      "y": [0, -1.8500000000000001, -13.18, -46.359999999999999, -93.879999999999995, -138.49000000000001, -171.34999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2025<br />value:   -1.85<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2030<br />value:  -13.18<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2035<br />value:  -46.36<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2040<br />value:  -93.88<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2045<br />value: -138.49<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5", "period: 2050<br />value: -171.35<br />scenario: Nzero_59_RpEUEff_bio7p5<br />lim: default<br />scenario: Nzero_59_RpEUEff_bio7p5"],
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
      "y": [0, -1.73, -12.26, -46.640000000000001, -89.859999999999999, -117.22, -137.15000000000001],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2025<br />value:   -1.73<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2030<br />value:  -12.26<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2035<br />value:  -46.64<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2040<br />value:  -89.86<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2045<br />value: -117.22<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC", "period: 2050<br />value: -137.15<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC<br />lim: limCCS<br />scenario: Nzero_59_RpEUEff_bio7p5_limCC"],
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
      "y": [0, -2.6200000000000001, -17.440000000000001, -59.409999999999997, -116.64, -167.84, -211.03],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2025<br />value:   -2.62<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2030<br />value:  -17.44<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2035<br />value:  -59.41<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2040<br />value: -116.64<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2045<br />value: -167.84<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2", "period: 2050<br />value: -211.03<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2<br />lim: limH2<br />scenario: Nzero_59_RpEUEff_bio7p5_limH2"],
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
      "y": [0, -1.76, -13.09, -46.780000000000001, -106.54000000000001, -170.18000000000001, -221.03999999999999],
      "text": ["period: 2020<br />value:    0.00<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2025<br />value:   -1.76<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2030<br />value:  -13.09<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2035<br />value:  -46.78<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2040<br />value: -106.54<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2045<br />value: -170.18<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE", "period: 2050<br />value: -221.04<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE<br />lim: limVRE<br />scenario: Nzero_59_RpEUEff_bio7p5_limVRE"],
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
      "range": [-329.80500000000001, 15.705000000000002],
      "tickmode": "array",
      "ticktext": ["-300", "-200", "-100", "0"],
      "tickvals": [-300, -200, -100.00000000000003, 0],
      "categoryorder": "array",
      "categoryarray": ["-300", "-200", "-100", "0"],
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
    "572c2b8d5d5e": {
      "yintercept": {},
      "type": "scatter"
    },
    "572c365c78cc": {
      "xintercept": {}
    },
    "572c47cc67b2": {
      "x": {},
      "y": {},
      "linetype": {},
      "colour": {}
    },
    "572c4a89749a": {
      "x": {},
      "y": {},
      "shape": {},
      "fill": {}
    }
  },
  "cur_data": "572c2b8d5d5e",
  "visdat": {
    "572c2b8d5d5e": ["function (y) ", "x"],
    "572c365c78cc": ["function (y) ", "x"],
    "572c47cc67b2": ["function (y) ", "x"],
    "572c4a89749a": ["function (y) ", "x"]
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

  
