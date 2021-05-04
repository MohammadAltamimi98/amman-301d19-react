import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.getLocation}>
                    <input onChange={this.props.updateSearchQuery} type='text' placeholder='city name' />
                    <input type="submit" value='get city' />
                </form>
            </div>
        )
    }
}

export default Form
