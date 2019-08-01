import React, { Component } from 'react'

class Wishlist extends Component {
    state = {
        wishlist: []
    }

    render() {
        return (
            <div>
                <h1>My Wishlist</h1>
                <ol>
                    {this.state.wishlist.map(vinyl =>
                        <li>{vinyl.name}</li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Wishlist