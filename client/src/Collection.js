import React, { Component } from 'react'

class Collection extends Component {
    state = {
        collection: []
    }

    // Runs automatically when the component is mounted
    componentDidMount() {
        fetch('/api/albums/collection')
            .then(res => res.json())
            .then(collection => this.setState({ collection: collection }))
    }

    handleDelete = (event) => {
        const id = event.target.value
        fetch('/api/albums/' + id, {
            method: 'DELETE',
        }).then(response => response.json())
        .then(collection => console.log(collection))
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <h1>My Collection</h1>
                {
                    this.state.collection.length === 0 ? (
                        <h3>Buuuh no albums in collection</h3>
                    ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <td>Artist</td>
                                        <td>Album</td>
                                        <td>Release date</td>
                                        <td>Delete</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.collection.map(vinyl =>
                                        <tr key={vinyl._id}>
                                            <td>{vinyl.artist}</td>
                                            <td>{vinyl.album}</td>
                                            <td>{vinyl.releaseDate}</td>
                                            <td><button type="button" value={vinyl._id} className="btn btn-danger" onClick={this.handleDelete}>Delete</button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )
                }
            </div>
        )
    }
}

export default Collection