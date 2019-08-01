import React, { Component } from 'react'


class EditAlbum extends Component {
    render() {
        return (
            <div>
                <section id="welcome" className="jumbotron text-center">
                    <div className="container">
                        <p></p>
                    </div>
                </section>

                <div className="container p-5">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="artist">Artist</label>
                                <input type="text" className="form-control" id="artist" placeholder="Artist" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="album">Album</label>
                                <input type="text" className="form-control" id="album" placeholder="Album" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="version">Version</label>
                                <input type="text" className="form-control" id="version" placeholder="Version" />
                            </div>
                            <div className="form-group col-md-6">
                                <label for="label">Label</label>
                                <input type="text" className="form-control" id="label" placeholder="Label" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-2">
                                <label for="releaseDay">Release Day</label>
                                <select id="releaseDay" className="form-control">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="releaseMonth">Release Month</label>
                                <select id="releaseMonth" className="form-control">
                                    <option selected>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                            </div>
                            <div className="form-group col-md-3">
                                <label for="releaseYear">Release Year</label>
                                <select id="releaseYear" className="form-control">
                                    <option selected>Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="form-group col-md-4">
                                <label for="exampleFormControlFile1">Upload album cover</label>
                                <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                        </div>

                        <div className="form-group col-md-5">
                            Select
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="addNew" id="toCollection" value="toCollection" checked />
                                <label className="form-check-label" for="toCollection">Add new album to collection</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="addNew" id="toWishlist" value="toWishlist" />
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