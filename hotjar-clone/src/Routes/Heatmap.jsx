import React from 'react'
import HeatmapPart1 from '../AllPages/Heatmap/HeatmapsPart1'
import { HeatmapsPart2 } from '../AllPages/Heatmap/HeatmapsPart2'
import HeatmapsPart3 from '../AllPages/Heatmap/HeatmapsPart3'
import HeatmapsPart4 from '../AllPages/Heatmap/HeatmapsPart4'
import HeatmapsPart5 from '../AllPages/Heatmap/HeatmapsPart5'
import HeatmapsPart6 from '../AllPages/Heatmap/HeatmapsPart6'
import Footer from '../Components/Footer'

const Heatmap = () => {
  return (
    <div>
        <HeatmapPart1/>
        <HeatmapsPart2/>
        <HeatmapsPart3/>
        <HeatmapsPart4/>
        <HeatmapsPart5/>
        <HeatmapsPart6/>
        <Footer/>
    </div>
  )
}

export default Heatmap