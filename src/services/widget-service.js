import React from "react";
//const TOPIC_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/topics";
const WIDGET_URL = "http://localhost:8080/api"; //my personal server for mysql on aws

export const findAllWidgets = () => {}

    // fetch(`${WIDGET_URL}/widgets`)
    // .then(response => response.json())

export const findWidgetById = (id) => {}
    //
    // fetch(`$${WIDGET_URL}/widgets/{id}`)
    // .then(response => response.json())

export const createWidget = (tid, widget) =>
        fetch(`${WIDGET_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${WIDGET_URL}/topics/${topicId}/widgets`)
    .then(response => response.json())


export const updateWidget = (id, widget) =>
    fetch(`${WIDGET_URL}/widgets/${id}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {'content-type': 'application/json'}
    }
).then(response => response.json())

export const deleteWidget = (id) =>
    fetch(`${WIDGET_URL}/widgets/${id}`, {
        method: "DELETE",
    }).then(response => response.json())

const api = {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget
}

export default api