import React from 'react'
import {Link} from "react-router-dom";

export default () =>
    <>
        <div className="list-group container-fluid m-3">
            <h2>Student Name: Aman Batra</h2>
            <h2>Email : <a href="mailto:batra.am@northeastern.edu">
                batra.am@northeastern.edu
            </a>
            </h2>
            <Link to="/" className="list-group-item">
                Home
            </Link>
            <Link to="/courses/table" className="list-group-item">
                Courses Table
            </Link>
            <Link to="/courses/grid" className="list-group-item">
                Courses Grid
            </Link>
            <Link to="/editor" className="list-group-item">
                Courses Editor(Unreferenced)
            </Link>
            <a href="https://amanbatra-java-server.herokuapp.com/api/widgets" className="list-group-item">
                Widgets Server
            </a>

        </div>
    </>
