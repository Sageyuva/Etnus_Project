import React from 'react'
import "./custom.css"
const PopuarCard = (props) => {
  return (
    <div className='CardShow'>
   <center>
   <img  src={props.imgg} alt="" className='CardImg'/>
   </center>
   <h3 className='heading'>{props.HeadName}</h3>
   <p className='disc'>{props.Disc}</p>
   <div className="buttons">
    <h5 className='PriceTag'> <span className='RedP'>₹{props.high}</span>₹{props.low}</h5>
    <button className='OrdrBtnn'>
  Order Now
    </button>
   </div>
    </div>
  )
}

export default PopuarCard