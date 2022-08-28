import React from 'react'
import RecordingPart3 from '../AllPages/Recording/RecodingPart3'
import RecordingPart1 from '../AllPages/Recording/RecordingPart1'
import { RecordingPart2 } from '../AllPages/Recording/RecordingPart2'
import RecordingPart4 from '../AllPages/Recording/RecordingPart4'
import RecordingPart5 from '../AllPages/Recording/RecordingPart5'
import RecordingPart6 from '../AllPages/Recording/RecordingPart6'
import Footer from '../Components/Footer'

const Recording = () => {
  return (
    <div>
        <RecordingPart1/>
        <RecordingPart2/>
        <RecordingPart3/>
        <RecordingPart4/>
        <RecordingPart5/>
        <RecordingPart6/>
        <Footer/>
    </div>
  )
}

export default Recording