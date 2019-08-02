import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { Redirect } from 'react-router-dom'

class EditAlbum extends Component {
    id = this.props.match.params.id

    state = {
        artist: '',
        album: '',
        version: '',
        label: '',
        releaseDate: null,
        toCollection: true,
        toWishlist: false,
        redirectToReferrer: false
    }

    handleChange = (event) => {
        let value = event.target.value
        let id = event.target.id
        switch (id) {
            case 'artist':
                this.setState({ artist: value })
                break
            case 'album':
                this.setState({ album: value })
                break
            case 'version':
                this.setState({ version: value })
                break
            case 'label':
                this.setState({ label: value })
                break
            case 'toCollection':
                this.setState({ toCollection: value })
                break
            case 'toWishlist':
                this.setState({ toWishlist: value })
                break
            default:
                break
        }
    }

    handleDate = (date) => {
        this.setState({ releaseDate: date })
    }

    handleSubmit = (event) => {
        console.log("Submit handled")
        console.log(this.state)
        this.setState({redirectToReferrer: true})
    }

    render() {
        if (this.state.redirectToReferrer) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <section id="welcome" className="jumbotron text-center">
                    <div className="container">
                        <p></p>
                    </div>
                </section>

                <div className="container p-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="artist">Artist</label>
                                <input type="text" className="form-control" id="artist"
                                    placeholder="Artist" value={this.state.artist} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="album">Album</label>
                                <input type="text" className="form-control" id="album"
                                    placeholder="Album" value={this.state.album} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="version">Version</label>
                                <input type="text" className="form-control" id="version"
                                    placeholder="Version" value={this.state.version} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="label">Label</label>
                                <input type="text" className="form-control" id="label"
                                    placeholder="Label" value={this.state.label} onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="releaseDay">Release Day</label>
                                <DatePicker
                                    className="input-group date"
                                    selected={this.state.releaseDate}
                                    onChange={this.handleDate}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                />
                            </div>
                            <div className="form-group col-md-4">
                                <label for="exampleFormControlFile1">Upload album cover</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>

                        <div className="form-group col-md-5">
                            Select
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="addNew"
                                    id="toCollection" checked={this.state.toCollection ? 'on' : 'off'} onChange={this.handleChange} />
                                <label className="form-check-label" for="toCollection">Add new album to collection</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="addNew"
                                    id="toWishlist" checked={this.toWishlist} onChange={this.handleChange} />
                                <label className="form-check-label" for="toWishlist">Add new album to wishlist</label>
                            </div>
                        </div>

                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditAlbum