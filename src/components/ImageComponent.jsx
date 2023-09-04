import React from "react";

class ImageComoponent extends React.Component{
    render(){
        return <img src={this.props.src} alt={this.props.alt} />
    }
}

export default ImageComoponent;