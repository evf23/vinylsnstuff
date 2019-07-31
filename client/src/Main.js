import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Main extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav id="mainNavbar" class="navbar navbar-dark navbar-expand-lg p-5" style={{ 'background': "#0d72b7" }}>
                        <Container fluid="true">
                            <a class="navbar-brand" href="index.html">VINYLS N' STUFF</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link" href="new.html"><i class="fas fa-plus mr-1"></i>Add New</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><i class="fas fa-compact-disc mr-1"></i>Collection</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#"><i class="far fa-heart mr-1"></i>Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                            <form id="nP" class="form-inline my-2 my-md-0">
                                <a href="https://twitter.com/intent/tweet?button_hashtag=NowSpinning&ref_src=twsrc%5Etfw" class="btn btn-outline-light" data-show-count="false">
                                    <i class="fas fa-music"></i>&nbsp; Radiohead – OK Computer</a>
                                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                            </form>
                        </Container>
                    </nav>
                </header>

                <section>
                    <div class="container p-4">
                        <div class="card m-4 mx-auto border-dark" style={{"max-width": "800px"}}>
                            <div class="row no-gutters align-items-center">
                                <div class="col-md-6">
                                    <img src="assets/album-covers/radiohead_ok_computer_standard.jpeg" class="card-img" alt="..." />
                                </div>
                                <div class="col-md-6">
                                    <div class="card-body text-center">
                                        <h3 class="card-title">TODAY'S SPIN</h3>
                                        <i class="fas fa-compact-disc m-1 big-disc"></i>
                                        <p class="card-text"><p><strong>Artist:</strong> Radiohead<br/>
                                            <strong>Album:</strong> OK Computer<br/>
                                            <strong>Version:</strong> Standard<br/>
                                            <strong>Release date:</strong> June 16, 1997 <br/>
                                            <strong>Label:</strong> Parlophone Records</p>
                                            <p class="card-text"><small class="text-muted">Last played 3 months ago</small></p>
                                            <button type="button" class="btn btn-outline-primary btn-sm">Play another record</button>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Main
