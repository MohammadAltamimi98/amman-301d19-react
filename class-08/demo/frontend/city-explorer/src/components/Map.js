import React, { Component } from 'react'

class Map extends Component {
    render() {
        return (
            <div>
                <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_MAP_KEY}&q&center=${this.props.lat},${this.props.lon}&zoom=10`} alt='' />
            </div>
        )
    }
}

export default Map
