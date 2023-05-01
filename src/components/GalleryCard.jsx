import React from "react"
export const GalleryCard = (props) => {
   console.log("hiii")
    return (
        <div className="pcard-container">
          <div className="pcard">
            <div className="pcard" onClick={props.onClick}>
              <img className="pcardimg" style={{ width: '40rem' }} src={`data:image/jpeg;base64,${props.image}`} alt="makhasak" />
            </div>
         </div>
        </div>
    )
}