import { Component } from "react";
import './Modal.css'
export class Modal extends Component{




    handleKeydown=(e) => {
        if (e.key === "Escape") {
         this.props.onClose()
        }
      }
 componentDidMount(){
    window.addEventListener("keydown",this.handleKeydown );  

 }
 componentWillUnmount(){
    window.removeEventListener("keydown",this.handleKeydown );  


 }

 handleOverlayClick=(e)=>{
    if (e.currentTarget === e.target) {
        this.props.onClose() 
    }
 }
    render(){
        return(
            <div className="Overlay" onClick={this.handleOverlayClick}>

                <div className="Modal"> 
              
             
                <svg className="svg" onClick={this.props.onClose} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                <img   className="ImageGalleryItem-image2" src={this.props.largeImageURL} alt={this.props.name} />
                </div> 
                
                </div>
          
                
        )
    }
}