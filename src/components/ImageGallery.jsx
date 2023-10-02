import React, { Component } from "react";
import * as basicLightbox from "basiclightbox";
import './ImageGallery.css';

export class ImageGallery extends Component {
  state = {};

  openImageModal = (imageURL) => {
    const instance = basicLightbox.create(`
      <img className="ImageGalleryItem-image" src="${imageURL}" alt="${this.props.name}" />
    `);

    instance.show();


    instance.element().addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        instance.close();
      }
    });


    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        instance.close();
      }
    });
  };

  render() {
    return (
      <ul className="ImageGallery">
        {this.props.images.map((image) => (
          <li className="ImageGalleryItem" key={image.id}>
            <div className="Overlay" onClick={() => this.openImageModal(image.largeImageURL)}>
              <div className="Modal">
                <img className="ImageGalleryItem-image" src={image.webformatURL} alt={this.props.name} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}