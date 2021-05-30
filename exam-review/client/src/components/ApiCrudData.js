import React, { Component } from 'react'

export class ApiCrudData extends Component {
    render() {
        return (
            this.props.apiCrudData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <h2>{obj.title}</h2>
                        <h3>{obj.artist_name}</h3>
                        <img src={obj.thumbnail} alt='' />
                        <p>
                            {obj.description}
                        </p>
                        <button onClick={e => this.props.deleteItem(obj.slug)}>Delete this item</button>

                        <button onClick={e => this.props.showUpdateForm(obj.description, obj.slug)}>
                            Show update form
                        </button>
                    </div>
                )
            })
        )
    }
}

export default ApiCrudData
