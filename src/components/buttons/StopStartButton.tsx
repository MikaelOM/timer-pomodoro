import React from "react"
import { PiPlayBold, PiPauseBold } from "react-icons/pi"

import { StopWatchProperties } from "../../types"

export function StopStartButton({stop, changeStopValue}: StopWatchProperties) {
  
  return( 
    <>
      <button onClick={changeStopValue}>
        {stop ? <PiPlayBold /> : <PiPauseBold />}
      </button>
    </>
  )
}