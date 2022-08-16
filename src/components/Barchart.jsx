import React from "react";
import "../App.css"
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { alcohol, malicAcid } from "./data";
const Barchart = () => {
 
  var data=[];
  // console.log(alcohol)
  for (let i=0;i<alcohol.length;i++){
    data.push([alcohol[i],malicAcid[i]])
  }
  console.log(data)
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: "value",
          data: alcohol,
          name: "colorIntensity",
        },
        yAxis: {
          type: "value",
          data: malicAcid,
          title:"hue",
          lable:"hue"
        },
        series: [
          {
            data: data,
            type: "bar",
            smooth: true,
          },
        ],
      
        tooltip: {
          trigger: "axis",
        },
      };
      echarts.use([BarChart, CanvasRenderer]);
    
      return (
        <>
            <div className="head">Bar chart</div>

        <div id="container1">
          <div id="yaxis">Malic Acid</div>
          <div class="right-conainer">
          <ReactEChartsCore
                className="chart1"
          echarts={echarts}
          option={options}
          notMerge={true}
          lazyUpdate={true}
          style={{height: '40vh', width: '80vw'}}
          onChartReady={() => console.log("done")}
        />
        <div className="data">Alcohole</div></div>
        
          </div>
        
        
        </>
        
      );
    };

export default Barchart