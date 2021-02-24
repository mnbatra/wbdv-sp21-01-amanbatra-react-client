import React from 'react'
import b from "../images/bootstrap.png"
import j from "../images/js.jpg"
import h from "../images/htmlcss.png"
import n from "../images/node.png"
import r from "../images/react.png"
import m from "../images/mysql.png"

const CourseTableComponent = () => {
  const courses = [
    {title: "Bootstrap", image: b},
    {title: "JavaScript", image: j},
    {title: "HTML", image: h, editing: true},
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
      <div style={{marginTop: "0px", padding: "15px"}}>
        <div className="row" style={{fontSize: "1.7em", borderBottom: "1px solid #aaaaaa", borderTop: "1px solid #aaaaaa", padding: "5px"}}>
          <div className="col-8 col-md-7 col-lg-6">Title</div>
          <div className="col-2 d-none d-md-block">Owned by</div>
          <div className="col-2 d-none d-lg-block">Last modified</div>
          <div className="col-4 col-md-3 col-lg-2">
            <i className="fas fa-th float-right" style={{marginLeft: "20px"}}></i>
            <i className="fas fa-sort-alpha-up-alt float-right" style={{marginLeft: "20px"}}></i>
            <i className="fas fa-folder float-right" style={{marginLeft: "20px"}}></i>
          </div>
        </div>
        <div>
        {
          courses.map(course =>
            <div className="row" style={{fontSize: "1.7em", borderBottom: "1px solid #cccccc", padding: "5px"}}>
              <div className="col-8 col-md-7 col-lg-6">
                {
                  course.editing &&
                  <input value={course.title} className="form-control" style={{fontSize: "0.9em", padding: "0px", paddingLeft: "15px"}}/>
                }
                {
                  !course.editing &&
                  <span className="">
                    <i className="fas fa-file" style={{marginRight: "10px", color: "blue"}}></i>
                    <span>{course.title}</span>
                  </span>
                }
              </div>
              <div className="col-2 d-none d-md-block">me</div>
              <div className="col-2 d-none d-lg-block">1/1/2021</div>
              <div className="col-4 col-md-3 col-lg-2">
                {
                  course.editing &&
                  <span className="float-right">
                      <i style={{color: "green", marginLeft: "5px"}} className="fas fa-check"></i>
                      <i style={{color: "red", marginLeft: "5px"}} className="fas fa-times"></i>
                  </span>
                }
                {
                  !course.editing &&
                  <i style={{color: "blue"}}
                     className="fas fa-edit float-right"></i>
                }
              </div>
            </div>
          )
        }
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

export default CourseTableComponent
