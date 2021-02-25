import React from 'react'
import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
  <h1>
      <Link to="/courses/table">
        <i className="fas fa-arrow-left"></i>
      </Link>
      Course Editor
      <i className="fas fa-times float-right"
         onClick={() => history.goBack()}></i>

      <div className="container-fluid mt-5 mb-5">
          <div className="row margin-add-10">
              <div className="min-vh-100 col-xs col-3 wbdv-blue-bgk pt-5">
                  <button className="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                      <span>Module 1 - jQuery</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <button className="btn rounded btn-block text-left btn-primary text-light p-2 mb-2">
                      <span>Module 2 - React</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <button className="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                      <span>Module 3 - Redux</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <button className="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                      <span>Module 4 - Native</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <button className="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                      <span>Module 5 - Angular</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <button className="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                      <span>Module 6 - Node</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <button className="btn rounded btn-block text-left btn-secondary text-light p-2 mb-2">
                      <span>Module 7 - Mongo</span>
                      <i className="fa fa-close pull-right align-bottom"></i>
                  </button>
                  <div>
                      <button className=" btn btn-dark pull-right">
                          <i className="fa fa-plus"></i>
                          Add a module
                      </button>
                  </div>
              </div>
              <div className="col-xs col-9 pr-4">
                  <div className="mb-3 d-flex flex-column d-sm-flex flex-sm-row">
                      <button className="font-weight-bold py-2 px-5 border-0 btn-secondary mr-2 text-light">
                          Render Props
                      </button>
                      <button className="font-weight-bold py-2 px-5 border-0 btn-dark mr-2 text-light">
                          Context API
                      </button>
                      <button className="font-weight-bold py-2 px-5 border-0 btn-secondary mr-2 text-light">
                          Redux
                      </button>
                      <button className="py-2 px-3 border-0 btn-primary mr-2 text-light font-weight-bold ml-auto">
                          <i className="fa fa-plus text-light"></i>
                          Add a topic
                      </button>
                  </div>
                  <div
                      className="mb-3 d-flex flex-column d-sm-flex flex-sm-row align-items-baseline justify-content-end">
                      <button className="btn btn-success btn-sm">Save</button>
                      <label className="mx-2">Preview</label>
                      <i className="fa fa-2x fa-toggle-off align-self-center"></i>
                  </div>
                  <div className="mb-3 ml-1 border rounded py-2 px-3">
                      <form className="mb-3">
                          <h4 className="pull-left">Heading widget</h4>
                          <div
                              className="d-flex flex-column d-sm-flex flex-sm-row justify-content-end align-items-center mb-3">
                              <button className="btn btn-warning m-1">
                                  <i className="fa fa-arrow-down"></i>
                              </button>
                              <button className="btn btn-warning m-1">
                                  <i className="fa fa-arrow-up"></i>
                              </button>
                              <select aria-label="Widget type" className="form-control d-inline w-auto"
                                      id="widget-input m-1">
                                  <option>Heading</option>
                              </select>
                              <button className="btn btn-danger m-1">
                                  <i className="fa fa-times"></i>
                              </button>
                          </div>
                          <input className="form-control mb-2" id="widget-text" aria-label="Heading text"
                                 placeholder="Heading text"/>
                          <select className="form-control mb-2" id="heading-type" aria-label="Heading type">
                              <option>Heading 1</option>
                              <option>Heading 2</option>
                              <option>Heading 3</option>
                              <option>Heading 4</option>
                              <option>Heading 5</option>
                              <option>Heading 6</option>
                          </select>
                          <input className="form-control" id="widget-name" aria-label="Widget name"
                                 placeholder="Widget name"/>
                      </form>
                      <h4>Preview</h4>
                      <div>
                          <h1>Heading text</h1>
                      </div>
                  </div>
                  <div className="col-md-2 col-sm-4 col-xs-12 text-center">
                      <button className="btn btn-success pull-right">
                          <i className="fa fa-plus-circle"></i>
                          Add a Widget
                      </button>
                  </div>
              </div>
          </div>
      </div>

  </h1>

export default CourseEditor
