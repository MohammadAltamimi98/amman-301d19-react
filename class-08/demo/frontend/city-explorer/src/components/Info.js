import React, { Component } from 'react'

export class Info extends Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.name}
                </p>
            </div>
        )
    }
}

export default Info
