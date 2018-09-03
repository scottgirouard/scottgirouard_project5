import React, { Component } from 'react';

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

handleSubmit = (e) => {
    // Prevent the page from refreshing upon submit 
        e.preventDefault();

        // upon submit, send the "choice" information to app.js
        this.props.pullDestination(this.state.choice);



} 


    render(){
    return (
        <div class="darkTourist">
            <h1>Dark Tourist Destination Generator</h1>

            <form onSubmit={this.handleSubmit} action="" className="scopeChoices">
                <label htmlFor="">Staying Local?</label>
                <input onChange={this.handleChange} type="radio" id="local" name="radAnswer" value={this.state.goLocal} />
                <label htmlFor="">Going Global?</label>
                <input onChange={this.handleChange} type="radio" id="global" name="radAnswer" value={this.state.goGlobal} />
                <input class="smashSearch" type="submit" value="Your final destinations are..." />
            </form>

            <a href="https://www.netflix.com/title/80189791">Watch 'Dark Tourist' on Netflix:

                <img class="netflix" src="https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" alt="" /></a>

        </div>
        )
    }

};

export default ScopeChoices;
