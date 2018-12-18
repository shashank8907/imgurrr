import React, { Component } from 'react';
import './ImageCard.css';

 class ImageCard extends Component {

   render() {
     return (
       <div className="card">
         Hello peoples {this.props.name}
         <h1>{this.props.name}</h1>
       </div>
     );
   }
 }
 
export default ImageCard;
