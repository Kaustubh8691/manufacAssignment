import React from "react";
import "../App.css";
import datas from "./data/Wine-Data.json"
import { ScatterChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
import { colorIntensity, hue } from "./data";
const Scatterchart = () => {
  var data=[];
  var data1=[]
  for (let i=0;i<datas.length;i++){
    var s2=[]
    for (const key in datas[i]) {

      if(key==="Color intensity"){
        // console.log(datas[i][key])
          s2.push(datas[i][key])
          data1.push(datas[i][key])
      }
      if(key==="Hue"){
        s2.push(datas[i][key])
      }
  }
  data.push(s2)
}
  
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: "value",
      data:  colorIntensity,
      name: "colorIntensity",
    },
    yAxis: {
      type: "value",
      data: hue,
      name:"Hue"
    },
    series: [
      {
        data: data,
        type: "scatter",
        smooth: true,
      },
    ],
    color:"green",
    tooltip: {
      trigger: "axis",
    },
  };
  echarts.use([ScatterChart, CanvasRenderer]);

  return (
    <>
    <div className="head">Scatter chart</div>
    <div className="container1">
      <div className="yaxis">Hue</div>
      <div className="right-conainer">
      <ReactEChartsCore
      className="chart1"
      echarts={echarts}
      option={options}
      xAxis="alcohole"
      notMerge={true}
      lazyUpdate={true}
      style={{height: '40vh', width: '80vw'}}
      onChartReady={() => console.log("done")}
    />
    <div className="data">Color Intensity</div></div>
    
      </div>
    
    
    </>
    
  );
};

export default Scatterchart;
