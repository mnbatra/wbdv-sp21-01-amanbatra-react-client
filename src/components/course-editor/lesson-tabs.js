import React,{useEffect} from 'react'
import {connect} from "react-redux"
import EditableItem from "../editable-item"
import {useParams} from "react-router-dom"
import lessonService from "../../services/lesson-service"

const LessonTabs = ({
                        lessons=[
                        ],
                        findLessonsForModule,
                        createLessonForModule,
                        deleteLesson,
                        updateLesson,
                        setLessonsToEmpty
                    }) => {
    const {layout,courseId, moduleId,lessonId} = useParams();
    useEffect(() => {
        if(moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        } else {
            setLessonsToEmpty(moduleId)
        }
    }, [moduleId, courseId])

    return(
        <div className="p-2 mb-3 bg-dark text-white ">
            <h3>Lessons</h3>
            <ul className="p-2 nav nav-tabs bg-secondary">
                {
                    lessons.map(lesson =>
                        <li className="nav-item active" key={`${lesson._id}`}>
                            <EditableItem
                                to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lesson._id}`}
                                deleteItem={deleteLesson}
                                updateItem={updateLesson}
                                item={lesson}
                                active={lesson._id === lessonId}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createLessonForModule(moduleId)} className="fas fa-plus-circle fa-2x text-danger"></i>
                </li>
            </ul>
        </div>
    )}

const stpm =(state) => ({
    lessons: state.lessonReducer.lessons
})

const dtpm =(dispatch) => {
    return {
        findLessonsForModule: (moduleId) => {
            lessonService.findLessonsForModule(moduleId).then(lessons => dispatch({
                type: "FIND_LESSONS_FOR_MODULE",
                lessons: lessons
            }))
        },
        createLessonForModule: (moduleId) => {

            if(!(moduleId !== "undefined" && typeof moduleId !== "undefined")) {
                alert("Select the module first before adding lesson!")
            }
            else{
                lessonService.createLessonForModule(moduleId, {title: "New Lesson"}).then(
                    lesson => dispatch({
                        type: "CREATE_LESSON",
                        lesson: lesson
                    }))}
        },
        deleteLesson: (lesson) => {
            lessonService.deleteLesson(lesson._id).then( status => dispatch(
                {
                    type: "DELETE_LESSON",
                    lessonToDelete: lesson
                }
            ))
        },
        updateLesson: (lesson) => {
            lessonService.updateLesson(lesson._id, lesson).then(status => dispatch({
                    type: "UPDATE_LESSON",
                    lesson: lesson
                })
            )
        },
        setLessonsToEmpty: (lessonId) => {
            dispatch({
                type: "CLEAR_LESSON"
            })
        }
    }
}
export default connect(stpm,dtpm)(LessonTabs)