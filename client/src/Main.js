import React, { Component } from "react"
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "./Home"
import EditAlbum from "./EditAlbum"
import Container from 'react-bootstrap/Container'

const editAlbumUrl = '/editAlbum'
const homeUrl = '/'

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <header>
                        <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-lg p-5" style={{ 'background': "#0d72b7" }}>
                            <Container fluid="true">
                                <NavLink className="navbar-brand" to={homeUrl}>VINYLS N' STUFF</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={editAlbumUrl}><i className="fas fa-plus mr-1"></i>Add New</NavLink>
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
                    
                    <div className="randomSpin">
                        <Route exact path={homeUrl} component={Home} />
                        <Route path={editAlbumUrl} component={EditAlbum} />
                    </div>

                    <footer>
                        <div className={"footer p"}>
                            <p className={"text-center"}>&copy; 2019 VINYLS N' STUFF</p>
                        </div>
                    </footer>
                </div>
            </HashRouter>
        )
    }
}

export default Main