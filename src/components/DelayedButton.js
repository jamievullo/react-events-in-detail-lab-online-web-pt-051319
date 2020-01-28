// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    //might have took a few weeks to get this one without solution 
    //especially the syntax on the this.props.delay and setTimeout?????
    handleClick = (event) => {
        event.persist()
        setTimeout(() => {
        this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return <button onClick={this.handleClick}>Delayed</button>;
    }
}


export default DelayedButton;