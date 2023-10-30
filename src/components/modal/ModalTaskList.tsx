import { useState } from "react"
import { PiListBold, PiXBold, PiPlusBold,PiCheckFatBold } from "react-icons/pi"

import './style.css'

export function ModalTasksList() {
  const [ showModal, setShowModal ] = useState(false)

  return( 
    <>
      <button onClick={() => setShowModal(!showModal)}>
        <PiListBold />
      </button>
      { showModal &&
        <div className="modalContainer">
          <section className="modalContent">
            <div className="headerModal">
              <p>Modal Content</p>
              <span onClick={() => setShowModal(false)}>
                <PiXBold />
              </span>
            </div>
            <div className="contentModal">

            </div>
            <div className="modalControls">
              <button>
                <PiPlusBold />
              </button>
              <button>
                <PiCheckFatBold />
              </button>
            </div>
          </section>
        </div>
      }
    </>
  )
}