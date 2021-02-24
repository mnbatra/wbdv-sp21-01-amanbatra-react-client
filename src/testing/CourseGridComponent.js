import React from 'react'
import b from "../images/bootstrap.png"
import j from "../images/js.jpg"
import h from "../images/htmlcss.png"
import n from "../images/node.png"
import r from "../images/react.png"
import m from "../images/mysql.png"


const CourseGridComponent = () => {
  const courses = [
    {title: "Bootstrap", image: b, editing: true},
    {title: "JavaScript", image: j},
    {title: "HTML", image: h},
    {title: "Node.js", image: n},
    {title: "React.js", image: r},
    {title: "MySQL", image: m},
    {title: "Bootstrap", image: b},
    {title: "JavaScript", image: j},
    {title: "HTML", image: h},
    {title: "Node.js", image: n},
    {title: "React.js", image: r},
    {title: "MySQL", image: m},
    {title: "Bootstrap", image: b},
    {title: "JavaScript", image: j},
    {title: "HTML", image: h},
    {title: "Node.js", image: n},
    {title: "React.js", image: r},
    {title: "MySQL", image: m},
  ]
  return(
    <>
      <div className="sticky-top">
        <div className="row" style={{paddingTop: "10px"}}>
          <div className="col-1">
            <i className="fas fa-bars fa-2x"></i>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <h3>Course Manager</h3>
          </div>
          <div className="col-10 col-lg-7">
            <input className="form-control"/>
          </div>
          <div className="col-1">
            <i style={{color: "red"}}
               className="float-right fas fa-plus-circle fa-2x"></i>
          </div>
        </div>
      </div>

      <div className="row" style={{fontSize: "1.5em", fontWeight: "bold", marginTop: "10px"}}>
        <div className="col-5 d-none d-md-block">
          Recent Documents
        </div>
        <div className="col-4 d-none d-md-block">
          Owned by me
          <i className="fas fa-caret-down"></i>
        </div>
        <div className="col-12 col-md-3">
          <i className="fas fa-list float-right" style={{marginLeft: "20px"}}></i>
          <i className="fas fa-sort-alpha-up-alt float-right" style={{marginLeft: "20px"}}></i>
          <i className="fas fa-folder float-right" style={{marginLeft: "20px"}}></i>
        </div>
      </div>
      <div className="row">
        {
          courses.map(course =>
            <div style={{marginTop: "30px"}}
                 className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
              <div className="card" style={{height: "420px"}}>
                {
                  course.editing &&
                    <span style={{position: "absolute", right: "10px", top: "0px", index: 1000, color: "red"}}>
                      <i style={{color: "green", marginLeft: "5px"}} className="fas fa-check fa-2x"></i>
                      <i style={{color: "red", marginLeft: "5px"}} className="fas fa-times fa-2x"></i>
                  </span>
                }
                <img src={course.image}
                     className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">
                      {
                        course.editing &&
                        <input value={course.title} className="form-control"/>
                      }
                      {
                        !course.editing &&
                        <span>
                          {course.title}
                        </span>
                      }
                    </h5>
                    <p className="card-text">
                      Some description
                    </p>
                    <a href="#" className="btn btn-primary">{course.title}</a>
                  {
                    !course.editing &&
                    <i style={{color: "blue", position: "absolute", bottom: "10px", right:"5px"}}
                       className="fas fa-edit float-right fa-2x"></i>
                  }
                  </div>
              </div>
            </div>
          )
        }
      </div>
      <i className="fas fa-plus-circle fa-5x"
         style={{backgroundColor: "white", color: "red", position: "fixed", right: "10px", bottom: "10px"}}></i>
    </>
  )
}

export default CourseGridComponent
