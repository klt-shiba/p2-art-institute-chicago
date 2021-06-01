import React from 'react';

const Card = () => {
    return (
        <div>
            <img src={this.props.imgSrc} alt={"Hi"}></img>
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
        </div>
    )
}

export default Card;