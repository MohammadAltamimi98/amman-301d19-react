import React, { Component } from 'react'

export class PrintFood extends Component {
    render() {
        return (
            this.props.recipes.map((data, idx) => {
                return (
                    <div key={idx}>
                        <h4>{data.recipe.label}</h4>
                        <img src={data.recipe.image} alt="" />
                    </div>
                )
            })
        )
    }
}

export default PrintFood
