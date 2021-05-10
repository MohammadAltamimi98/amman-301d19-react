import React, { Component } from 'react'

export class People extends Component {
    render() {
        return (
            this.props.people.map((person, idx) => {
                return (
                    <div key={idx}>
                        <h3>{person.name}</h3>
                        <p>{person.role}</p>
                    </div>
                )
            })

        )
    }
}

export default People
