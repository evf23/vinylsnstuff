import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import img from './assets/album-covers/radiohead_ok_computer_standard.jpeg'
import Container from 'react-bootstrap/Container'
import './css/styles.css'

class Main extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-lg p-5" style={{ 'background': "#0d72b7" }}>
                        <Container fluid="true">
                            <a className="navbar-brand" href="index.html">VINYLS N' STUFF</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                            <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="new.html"><i className="fas fa-plus mr-1"></i>Add New</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="fas fa-compact-disc mr-1"></i>Collection</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="far fa-heart mr-1"></i>Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                            <form id="nP" className="form-inline my-2 my-md-0">
                                <a href="https://twitter.com/intent/tweet?button_hashtag=NowSpinning&ref_src=twsrc%5Etfw" className="btn btn-outline-light" data-show-count="false">
                                    <i className="fas fa-music"></i>&nbsp; Radiohead – OK Computer</a>
                                <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                            </form>
                        </Container>
                    </nav>
                </header>

                <section id="randomSpin">
                    <div className="container p-4">
                        <div className="card m-4 mx-auto border-dark" style={{ "maxWidth": "800px" }}>
                            <div className="row no-gutters align-items-center">
                                <div className="col-md-6">
                                    <img src={img} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body text-center">
                                        <h3 className="card-title">TODAY'S SPIN</h3>
                                        <i className="fas fa-compact-disc m-1 big-disc"></i><br/>
                                        <div className="card-text">
                                            <strong>Artist:</strong> Radiohead<br />
                                            <strong>Album:</strong> OK Computer<br />
                                            <strong>Version:</strong> Standard<br />
                                            <strong>Release date:</strong> June 16, 1997 <br />
                                            <strong>Label:</strong> Parlophone Records<br/>
                                            <p className="card-text"><small className="text-muted">Last played 3 months ago</small></p>
                                            <button type="button" className="btn btn-outline-primary btn-sm">Play another record</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <div className={"footer p"}>
                        <p className={"text-center"}>&copy; 2019 VINYLS N' STUFF</p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Main
