import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <form onSubmit={(e) => this.props.getCats(e)}>
                <fieldset>
                    <legend>Get Cats by Owner Name</legend>
                    <label>Enter your name</label>
                    <input type="text" onChange={(e) => this.props.updateName(e)} />
                    <input type="submit" value="get owner cats" />
                </fieldset>
            </form>
        )
    }
}

export default Form
