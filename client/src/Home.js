import React, { Component } from 'react'
import img from './assets/album-covers/radiohead_ok_computer_standard.jpeg'

class Home extends Component {
    render() {
        return (
            <div id="welcome">
                <div className="container p-4">
                    <div className="card m-4 mx-auto border-dark" style={{ "maxWidth": "800px" }}>
                        <div className="row no-gutters align-items-center">
                            <div className="col-md-6">
                                <img src={img} className="card-img" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body text-center">
                                    <h3 className="card-title">TODAY'S SPIN</h3>
                                    <i className="fas fa-compact-disc m-1 big-disc"></i><br />
                                    <div className="card-text">
                                        <strong>Artist:</strong> Radiohead<br />
                                        <strong>Album:</strong> OK Computer<br />
                                        <strong>Version:</strong> Standard<br />
                                        <strong>Release date:</strong> June 16, 1997 <br />
                                        <strong>Label:</strong> Parlophone Records<br />
                                        <p className="card-text"><small className="text-muted">Last played 3 months ago</small></p>
                                        <button type="button" className="btn btn-outline-primary btn-sm">Play another record</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
