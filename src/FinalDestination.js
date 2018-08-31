import React, { Component } from 'react';

// Final Destination is taking in the places array in props, calling map on those places. map() uses each value within the array as an argument in a function where you will utilize those values. Here we are making some mark up with those values.
class FinalDestination extends Component {
    render() {
        return (
            <ul>
            { 
                this.props.places.map(singlePlace => {
                    return (
                        <section className="destinationDescription">
                            <h2>{singlePlace.name}</h2>
                            <img src={singlePlace.url} alt=""/>
                            <p>{singlePlace.description}</p>
                        </section>
                    )
                })
            }
            </ul>
        )

    }
}

export default FinalDestination;