import React, {useEffect,useState} from 'react'
import {BrowserRouter,useParams,Link,Route} from "react-router-dom";
import moduleReducer from "../../reducers/module-reducer";
import ModuleList from "./module-list";
import topicReducer from "../../reducers/topic-reducer";
import TopicPills from "./topic-pills";
import lessonReducer from "../../reducers/lesson-reducer";
import LessonTabs from "./lesson-tabs";
import widgetReducer from "../../reducers/widget-reducer";
import WidgetList from "../widgets/widget-list";
import {createStore,combineReducers} from "redux";
import courseService from "../../services/course-service"
import {Provider} from "react-redux";
import "../../App.css";


const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer)

const CourseEditor = ({history}) => {
    console.log(history.location.pathname)
    const {layout,courseId, moduleId} = useParams();
    const [courseName, setCourseName] = useState({title: ""})
    useEffect( () => {
        courseService.findCourseById(courseId)
            .then(course => {setCourseName({title: course.title})})
    }, [courseId]);

    console.log("edit layout")
    return(
        <Provider store={store}>
            <div className="container-fluid pt-3 bg-dark p-3">
                <div>
                    <h2 className={"text-white"}>
                        <a href={`/courses/${layout}`}  className="fa fa-arrow-left"> Back to Courses &nbsp;</a>
                        Selected Course - {courseName.title}
                    </h2>
                </div>
                <br/>
                <div className="row">
                    <div className="col-3">
                        <ModuleList/>
                    </div>
                    <div className='col-9'>
                        <LessonTabs/>
                        <TopicPills/>
                        <WidgetList/>

                    </div>
                </div>
            </div>
        </Provider>
    )}

export default CourseEditor;
