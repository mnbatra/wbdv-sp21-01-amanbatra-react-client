import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";
import widgetService from "../../services/widget-service";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";

const WidgetList = ({
                        widgets,
                        setWidgetToEmpty,
                        findWidgetsForTopic,
                        updateWidget,
                        deleteWidget,
                        createWidgetForTopic
                    }) => {
    const {layout,courseId,moduleId, lessonId ,topicId} = useParams();
    const [editingWidget] = useState({})
    const [editing] = useState(false)
    useEffect(() => {
        if (topicId != "undefined" && typeof topicId != "undefined" && moduleId != "undefined" && typeof moduleId != "undefined" && lessonId != "undefined" && typeof lessonId != "undefined") {
            findWidgetsForTopic(topicId)
        }
        else {
            setWidgetToEmpty();
        }

    }, [topicId, lessonId, moduleId, findWidgetsForTopic, setWidgetToEmpty])
    return(
        <div>
            <i onClick={() => createWidgetForTopic(topicId, lessonId, moduleId)} className="fas fa-plus fa-2x float-right text-danger"/>
            <h2 className="text-white">Widget List ({widgets.length}
                )</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                            }

                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                               editing={editingWidget.id === widget.id}
                                               widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm =(state) => ({
    widgets: state.widgetReducer.widgets
})

const dtpm = (dispatch) => {
    return {
        deleteWidget: (wid) => widgetService.deleteWidget(wid).then(
            status => dispatch({
                type: "DELETE_WIDGET",
                wid: wid
            })
        ),
        updateWidget: (wid, widget) => widgetService.updateWidget(wid, widget).then(
            status => dispatch({
                type: "UPDATE_WIDGET",
                widget: widget
            })
        ),
        createWidgetForTopic: (tid, lessonId, moduleId) => {
            if (!(lessonId != "undefined" &&
                typeof lessonId != "undefined" && moduleId != "undefined" && typeof moduleId != "undefined" && tid != "undefined" &&
                typeof tid != "undefined") )
            {
                alert("Invalid operation. You have to select topic first!")
            } else {
                widgetService.createWidget(tid,{type: "HEADING", size: 1, text: "New Widget"}).then(
                    theActualWidget => dispatch({
                        type: "CREATE_WIDGET",
                        widget: theActualWidget
                    })
                )
            }
        },
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId).then(

                widgets => {
                    console.log(widgets);
                    console.log("1");
                    dispatch({
                        type:"FIND_WIDGETS_FOR_TOPIC",
                        widgets: widgets
                    })
                }
            )
        },
        setWidgetToEmpty: () => dispatch({
            type: "CLEAN_WIDGET"
        })
    }
}

export default connect(stpm, dtpm)(WidgetList);