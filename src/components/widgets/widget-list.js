import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {connect} from "react-redux";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import widgetService from "../../services/widget-service"
import topicReducer from "../../reducers/topic-reducer";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";


const WidgetList = ({
                        widgets = [],
                        setWidgetToEmpty,
                        findWidgetsForTopic = (topicId) => console.log(topicId),
                        findAllWidgets,
                        createWidgetForTopic,
                        updateWidget,
                        deleteWidget
                    }) => {
    const  {moduleId, lessonId, topicId} = useParams()
    const [editingWidget, setEditingWidget] = useState({})

    useEffect(() => {
        if (topicId != "undefined" && typeof topicId != "undefined"
            && moduleId != "undefined" && typeof moduleId != "undefined"
            && lessonId != "undefined" && typeof lessonId != "undefined"){
            findWidgetsForTopic(topicId)
        }
        else {
            setWidgetToEmpty();
        }

    }, [topicId,lessonId, moduleId])


    return (
        <div className={"widget-list"}>
            <button
                onClick={() => createWidgetForTopic(topicId,lessonId,moduleId)}
                className="widget-list-add editor-widget-list-btn fas fa-plus fa-2x float-right"
            />
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <button
                                        onClick={() => {
                                            updateWidget(editingWidget)
                                            setEditingWidget({})
                                        }}
                                        className="fas fa-check float-right"/>
                                    <button
                                        onClick={() => deleteWidget(editingWidget)}
                                        className="fas fa-trash float-right "/>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <button onClick={() => setEditingWidget(widget)}
                                        className="fas fa-cog float-right"/>
                            }
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtpm = (dispatch) => {
    return {
        setWidgetToEmpty:() => dispatch({
            type: "CLEAN_WIDGET"
        }),
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
        findAllWidgets: () =>
                widgetService.findAllWidgets()
                .then(fetchedWidgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets: fetchedWidgets
                })),
        findWidget: (widgetId) =>
            widgetService.findWidgetById()
                .then(fetchedWidget => dispatch({
                    type: "FIND_WIDGET",
                    widget: fetchedWidget
                })),

        createWidgetForTopic: (topicId, lessonId, moduleId) => {
            if (!(lessonId != "undefined" &&
                typeof lessonId != "undefined" && moduleId != "undefined" && typeof moduleId != "undefined" && topicId != "undefined" &&
                typeof topicId != "undefined") ) {
                alert("Invalid operation. You have to select topic first!")
            } else {
                widgetService.createWidget(topicId, {
                    type: "HEADING",
                    size: 1,
                    text: "New Widget"
                })
                    .then(createdWidget => dispatch({
                        type: "CREATE_WIDGET",
                        widget: createdWidget
                    }))
            }
        },

        updateWidget: (widget) => {
            console.log("logging from update widget")
            console.log(widget.id)
            return widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widget

                }))
        },
        deleteWidget: (widget) =>
            widgetService.deleteWidget(widget.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: widget
                }))
    }
}

export default connect(stpm, dtpm)(WidgetList);