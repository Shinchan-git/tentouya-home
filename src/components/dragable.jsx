import React, { useRef } from 'react';
import useMoveObject from "./useMoveObject"
import "../css/global.css"

export default function Dragable() {

  const boxRef = useRef(null)
  const mouseEventAndStyle = useMoveObject(boxRef.current)

  return (
    <div>
      <div {...mouseEventAndStyle}>
        <div style={{ backgroundColor: "red", width: 30, height: 30 }} ref={boxRef}>
        </div>
      </div>
    </div>
  )
}
