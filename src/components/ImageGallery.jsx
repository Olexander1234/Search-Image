import React, { Component } from "react";
import * as basicLightbox from "basiclightbox";
import './ImageGallery.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify"
import { ColorRing } from "react-loader-spinner";
export class ImageGallery extends Component {
 
  render() {
    switch (this.props.status) {
      case 'idle':

        return toast('🦄 search photo', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });

        case 'pending':
  
        return         <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />
        
 
        case 'resovled':
          return <ul className="ImageGallery">
          {this.props.images.map((image) => (
            <li  className="ImageGalleryItem" key={image.id}>
   
  
  
                  <img onClick={()=>this.props.openImageModal(image.largeImageURL)} className="ImageGalleryItem-image" src={image.webformatURL} alt={this.props.name} />
               
            </li>
          ))}
        </ul>
         
   
       
      default:
        break;
    }
   
  }
  
}

