import React, { useState, useEffect } from "react"
import "./index.css"

import { StopWatchProperties } from "../../types"

export function Stopwatch({ stop }: StopWatchProperties) {
  const [totalTimeSeconds, setTotalTimeSeconds] = useState(15 * 60)
  const minutes = Math.floor(totalTimeSeconds / 60)
  const seconds = totalTimeSeconds % 60

  useEffect(() => {
    if(stop === false) {
      totalTimeSeconds === 0 ? 
        alert("O tempo acabou") 
      :
        setTimeout(() => {
          setTotalTimeSeconds( totalTimeSeconds - 1 )
        }, 1000)
    }
  }, [totalTimeSeconds, stop])

  return (
    <div className="time-container">
      <div className={"stop-watch"}>
        <span>{ minutes.toString().padStart(2, "0")}</span>
        <span>:</span>
        <span>{ seconds.toString().padStart(2, "0") }</span>
      </div>
    </div>
  )
}