import React from "react";
import datas from "./data/Wine-Data.json"
import "../App.css"
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
import * as echarts from "echarts/core";
import ReactEChartsCore from "echarts-for-react/lib/core";
const Barchart = () => {
  var data=[]
  var data1=[]
  var data2=[]
  for (let i=0;i<datas.length;i++){
    var s2=[]
    for (const key in datas[i]) {

      // console.log(`${key}: ${datas[i][key]}`);
      if(key==="Alcohol"){
        console.log(datas[i][key])
          s2.push(datas[i][key])
          data1.push(datas[i][key])
      }
      if(key==="Malic Acid"){
        s2.push(datas[i][key])
        data2.push(datas[i][key])
      }
  }
  data.push(s2)
}
data2.sort()
console.log(data2.sort())
  
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: "value",
          data: data1,
          name:"colorIntensity",
        },
        yAxis: {
          type: "value",
          data:data2,
         
          lable:"hue"
        },
        series: [
          {
            data: data,
            type: "bar",
            large: true
            
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