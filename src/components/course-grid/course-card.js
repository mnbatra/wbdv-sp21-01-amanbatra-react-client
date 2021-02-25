import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseCard = ({course, deleteCourse, updateCourse, title}) => {

    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const deleteTitle = () => {
        setEditing(false)
        deleteCourse(course)
    }

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card">

                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top" alt="..."/>

                <div className="card-body">


                    {
                        !editing &&

                        <h5 className="card-title">{title}</h5>
                    }

                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }

                    <p className="card-text">Some description</p>

                    <img src={``}/>
                    {
                        <Link to="/courses/editor" className="btn btn-primary">
                            {course.title}
                        </Link>
                    }
                    <span className="float-right">
                        {editing && <i onClick={() => deleteTitle()}
                                       className="fas fa-2x fa-trash my-controls-at-top-right">

                        </i>
                        }
                        {!editing && <i onClick={() => setEditing(true)} className="fas fa-2x fa-edit">

                        </i>
                        }
                        {editing && <i onClick={() => saveTitle()}
                                       className="fas fa-2x fa-check my-controls-at-top-right2">

                        </i>
                        }
        </span>
                </div>
            </div>
        </div> )
}
export default CourseCard