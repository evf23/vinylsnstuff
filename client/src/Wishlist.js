import React, { Component } from 'react'

class Wishlist extends Component {
    state = {
        wishlist: []
    }

    // Runs automatically when the component is mounted
    componentDidMount() {
        fetch('/api/albums/wishlist')
            .then(res => res.json())
            .then(wishlist => this.setState({ wishlist: wishlist }))
    }

    render() {
        return (
            <div>
                <h1>My Wishlist</h1>
                {
                    this.state.wishlist.length === 0 ? (
                        <h3>Buuuh no albums in wishlist</h3>
                    ) : (
                        <ol>
                           {this.state.wishlist.map(vinyl =>
                                <li>{vinyl.album}, {vinyl.artist}</li>
                            )}
                        </ol>
                    )
                }
            </div>
        )
    }
}

export default Wishlist