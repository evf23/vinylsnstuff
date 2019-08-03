import React, { Component } from 'react'

class Collection extends Component {
    state = {
        collection: []
    }

    render() {
        return (
            <div>
                <h1>My Collection</h1>
                {
                    this.state.collection.length === 0 ? (
                        <h3>Buuuh no albums in collection</h3>
                    ) : (
                        <ol>
                           {this.state.collection.map(vinyl =>
                                <li>{vinyl.name}</li>
                            )}
                        </ol>
                    )
                }
            </div>
        )
    }
}

export default Collection