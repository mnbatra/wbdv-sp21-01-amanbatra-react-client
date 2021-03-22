import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {connect} from "react-redux";
import ParagraphWidget from "./paragraph-widget";
import HeadingWidget from "./heading-widget";
import widgetService from "../../services/widget-service"



const WidgetList = ({
                        widgets = [],
                        findWidgetsForTopic = (topicId) => console.log(topicId),
                        findAllWidgets,
                        createWidgetForTopic,
                        updateWidget,
                        deleteWidget
                    }) => {
    const {moduleId, lessonId, topicId} = useParams()

    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [moduleId, lessonId, topicId])

    const [editingWidget, setEditingWidget] = useState({})

    return (
        <div className={"widget-list"}>
            <button
                onClick={() => createWidgetForTopic(topicId)}
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
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(fetchedWidgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets: fetchedWidgets
                }))
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
        createWidgetForTopic: (topicId) => {
            widgetService.createWidget(topicId, {
                type: "HEADING",
                size: 1,
                text: "New Widget"
            })
                .then(createdWidget => dispatch({
                    type: "CREATE_WIDGET",
                    widget: createdWidget
                }))
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