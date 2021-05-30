import React, { Component } from 'react'

export class ApiData extends Component {
    render() {
        return (

            this.props.apiData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <h2>{obj.title}</h2>
                        <h3>{obj.artist_name}</h3>
                        <img src={obj.thumbnail} alt='' />
                        <p>
                            {obj.description}
                        </p>

                        {/* <form >
                            <input type="hidden" name="title" value={obj.title} />
                            <input type="hidden" />
                            <input type="hidden" />
                            <input type="hidden" />
                            <input type='submit' value="from button" />
                        </form> */}
                        <button onClick={e => this.props.favoriteItem(obj)}>Add to favorites</button>
                    </div>
                )
            })
        );
    }
}

export default ApiData
