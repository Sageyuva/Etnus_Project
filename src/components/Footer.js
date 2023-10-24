import React from 'react'
import "./custom.css"
import { Phone , Mail , Map  ,Instagram , Facebook , Linkedin ,Twitter} from 'lucide-react'
const Footer = () => {
  return (
    <div className='FooterMain'>
        <div className="contact">
            <h1>Contact</h1>
            <h2 className="addre">
                <Phone size={30} color='green'/> +91-9999-888-777
            </h2>
            <h2 className="addre">
                       <Mail size={30} color='red'/> RandomCook@gmail.com
            </h2>
            <h2 className="addre">
              <Map size={30} color='blue'/>Jayanagar, Bengaluru, Karnataka 560041
            </h2>
        </div>
        <div className="Address">
            <h1>Social Media</h1>
            <h2 className="addre"><Instagram size={30} color='red'/> @RandomCook</h2>
            <h2 className="addre"><Facebook size={30} color='blue' /> @RandomCook</h2>
            <h2 className="addre">
                       <Linkedin size={30} color='blue'/> @RandomCook
            </h2>
            
            <h2 className="addre"><Twitter size={30} color='blue' /> @RandomCook</h2>
        </div>
    </div>
  )
}

export default Footer