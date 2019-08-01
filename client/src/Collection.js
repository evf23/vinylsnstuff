import React, { Component } from 'react'

class Collection extends Component {
    state = {
        collection: []
    }

    render() {
        return (
            <div>
                <h1>My Collection</h1>
                <ol>
                    {this.state.collection.map(vinyl =>
                        <li>{vinyl.name}</li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Collection