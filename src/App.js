import React from "react";
import * as echarts from "echarts/core";
import ScatterChart from './components/ScatterChart'

// Import bar charts, all suffixed with Chart
// Import the tooltip, title, rectangular coordinate system, dataset and transform components
// all suffixed with Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";

// Features like Universal Transition and Label Layout
import { LabelLayout, UniversalTransition } from "echarts/features";

// Import the Canvas renderer
// Note that including the CanvasRenderer or SVGRenderer is a required step
import { CanvasRenderer } from "echarts/renderers";
import Barchart from "./components/Barchart";

// Register the required components
const App = () => {
  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
  ]);
  
  return (
    <>
    <ScatterChart />
    <Barchart/>
    </>
  );
};

export default App;

