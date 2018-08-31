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
                <label htmlFor="">Feeling Global?</label>
                <input onChange={this.handleChange} type="radio" id="global" name="radAnswer" value={this.state.goGlobal} />
                <input class="smashSearch" type="submit" value="Vacation... if you dare..." />
            </form>
        </div>
        )
    }

};

export default ScopeChoices;
