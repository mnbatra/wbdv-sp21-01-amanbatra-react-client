import React from "react";
import {Link} from "react-router-dom";

export default class CourseHeader extends React.Component {


    state = {
        title: "New Course"
    }
render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <h3 className="site-title">
                    <a className="navbar-brand" href="#">
                        {<img src="images/icon.png" alt=""/>}
                            Learning Management System</a>
                </h3>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home<span
                                className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../courses/table">Course Table</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../courses/grid">Course Grid</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="../editor">Course Editor</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 margin-add-10">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                        <Link to="/">
                            <i className="fas fa-2x fa-home float-right ml-2 text-light"></i>
                        </Link>
                    </form>
                </div>
            </nav>)
    }
}