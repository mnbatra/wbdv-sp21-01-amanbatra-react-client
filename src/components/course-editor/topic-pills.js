import React,{useEffect} from 'react';
import {connect} from "react-redux";
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import topicService from "../../services/topic-service";

const TopicPills = ({
                        topics = [],
                        findTopicsForLesson,
                        createTopicForLesson,
                        deleteTopic,
                        updateTopic,
                        setTopicToEmpty
                    }) => {
    const {layout,courseId, moduleId, lessonId, topicId} = useParams();
    useEffect( () => {
        if (lessonId != "undefined" &&
            typeof lessonId != "undefined" &&
            moduleId != "undefined" &&
            typeof moduleId != "undefined" ) {
            findTopicsForLesson(lessonId)
        } else {
            setTopicToEmpty(topicId)
        }
    }, [lessonId, moduleId])
    return(
        <div className="p-2 bg-dark text-white">
            <h3> Topics</h3>
            <ul className="p-2 nav nav-pills bg-white">
                {
                    topics.map(topic =>
                        <li className="nav-item active" key={`${topic._id}`}>
                            <EditableItem
                                to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                item={topic}
                                active={topic._id === topicId}/>
                        </li>
                    )
                }
                <li>
                    <i onClick={() => createTopicForLesson(lessonId, moduleId)}
                       className="fas fa-plus-circle fa-2x text-danger"/>
                </li>
            </ul>
            <div className="mt-3 d-flex align-items-center">
                <button className="btn btn-success">Save</button>
                <span className="ml-3 mr-1">Preview</span>
                <a href="#"><i className="fa fa-toggle-on fa-2x"/></a>
            </div>

            <form className="form-inline my-3">
                <span className="font-weight-bold h3">Widgets</span>
                <div className="form-group ml-auto">
                    <select className="form-control" aria-label="widget-dropdown">
                        <option>Heading</option>
                        <option>Paragraph</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-up"/></button>
                <button type="submit" className="btn btn-warning ml-2"><i className="fa fa-arrow-down"/></button>
            </form>
        </div>

    )
}

const stpm =(state) => ({
    topics: state.topicReducer.topics
})

const dtpm = (dispatch) => {
    return {
        deleteTopic: (topic) => topicService.deleteTopic(topic._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topic:topic
            })),

        updateTopic: (topic) =>
            topicService.updateTopic(topic._id, topic)
                .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic: topic
                })),

        createTopicForLesson: (lessonId, moduleId) => {
            if (!(lessonId != "undefined" &&
                typeof lessonId != "undefined"
                && moduleId != "undefined"
                && typeof moduleId != "undefined"))
                {
                    alert("Please select a lesson first to add the topic to")
                }
            else {topicService.createTopicForLesson(lessonId, {title: "New Topic"})
                .then(theActualTopic => dispatch({
                    type: "CREATE_TOPIC",
                    topic: theActualTopic
                }))}},

        findTopicsForLesson: (lessonId) => {
            topicService.findTopicsForLesson(lessonId)
                .then(topics => dispatch({
                    type: "FIND_TOPIC_FOR_LESSON",
                    topics : topics})
                )
        },
        setTopicToEmpty: (topicId) => dispatch({
            type: "CLEAN_TOPIC"
        })


    }
}

export default connect(stpm, dtpm)(TopicPills)