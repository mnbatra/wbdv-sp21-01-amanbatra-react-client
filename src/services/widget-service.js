import React from "react";

const TOPIC_URL = "https://wbdv-generic-server.herokuapp.com/api/mnbatra/topics";
//const LESSON_URL = "https://wbdv-generic-server.herokuapp.com/api/mnbatra/lessons";
const WIDGET_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/widgets/"; //my personal server for mysql on aws

export const findAllWidgets = () => {}


export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())


export const findWidgetById = (widgetId) => {}


export const createWidget = (topicId, widget) =>
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())


export const updateWidget = (widgetId, widget) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(status => status.json())

export const deleteWidget = (widgetId) =>
    fetch(`${WIDGET_URL}/${widgetId}`, {
        method: "DELETE"
    })
        .then(status => status.json())


const api = {
    createWidget,
    findAllWidgets,
    findWidgetById,
    findWidgetsForTopic,
    updateWidget,
    deleteWidget
}

export default api