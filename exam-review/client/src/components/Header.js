import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><a href='/'>Homepage</a></li>
                    <li><a href='/favorite'>favorites</a></li>
                </ul>
            </nav>
        )
    }
}

export default Header
