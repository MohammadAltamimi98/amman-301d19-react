import React, { Component } from 'react'

export class UpdateCatForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.updateCat(e)}>
                    <fieldset>
                        <legend>Update Cat Form</legend>
                        <label>Name of the cat</label>
                        <input onChange={(e) => this.props.updateCatName(e)} value={this.props.catName} type='text' />

                        <label>Breed of the cat</label>
                        <input onChange={(e) => this.props.updateCatBreed(e)} value={this.props.catBreed} type='text' />

                        <input type="submit" value="=Update Cat" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default UpdateCatForm
