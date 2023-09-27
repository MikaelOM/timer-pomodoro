import React, { useState } from "react"
import { PiListBold, PiXBold } from "react-icons/pi"

import './style.css'

export function ModalTasksList() {
  const [ showModal, setShowModal ] = useState(false)

  return( 
    <>
      <button onClick={() => setShowModal(!showModal)}>
        <PiListBold />
      </button>
      { showModal &&
        <div className="modalContainer"
        onClick={() => setShowModal(false)}>
          <section className="modalContent">
            <div className="headerModal">
              <p>Modal Content</p>
              <span onClick={() => setShowModal(false)}>
                <PiXBold />
              </span>
            </div>
          </section>
        </div>
      }
    </>
  )
}