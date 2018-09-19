import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

class ScopeChoices extends Component {
    constructor(){
        super();
        this.state = {
            choice: ''
        }
    }
    handleChange = (e) => {

        console.log(e.target.id)

        this.setState({
            choice : e.target.id
        });
    }

    clickLabel = (e) => {
        
        console.log('clicked');
    }

handleSubmit = (e) => {
    // Prevent the page from refreshing upon submit 
        e.preventDefault();

        // upon submit, send the "choice" information to app.js
        this.props.pullDestination(this.state.choice);



} 
// scrollToComponent = () => {
//     console.log(scrollToComponent);
// }

    render(){
    return (
        <div className="darkTourist">
            <h1>Dark Tourist Destination Generator</h1>

            <form onSubmit={this.handleSubmit} action="" className="scopeChoices">
                <label htmlFor="local">Staying Local?</label>
                <input onChange={this.handleChange} type="radio" className="checked" id="local" name="radAnswer" value={this.state.goLocal} />
                <label onClick={this.clickLabel} htmlFor="global">Going Global?</label>
                <input onChange={this.handleChange} type="radio" className="checked" id="global" name="radAnswer" value={this.state.goGlobal} />
                <input className="smashSearch" type="submit" value="Your final destinations are..." />
            </form>

            <a href="https://www.netflix.com/title/80189791">Watch 'Dark Tourist' on Netflix:

                <img className="netflix" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" alt="" /></a>

        </div>
        )
    }

};

export default ScopeChoices;
