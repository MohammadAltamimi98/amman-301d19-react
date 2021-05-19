import React, { Component } from 'react'

export class Cats extends Component {
    render() {
        console.log(this.props.cats);
        return (
            <>
                { this.props.showCatsComponent &&
                    this.props.cats.map((cat, idx) => {
                        return (
                            <div key={idx}>
                                {cat.name}
                                <button onClick={() => this.props.deleteCat(idx)} > remove cat</button>
                                <button onClick={() => this.props.showUpdateForm(idx)} > Update cat</button>
                            </div>

                        )
                    })
                }
            </>
        );
    }
}

export default Cats
