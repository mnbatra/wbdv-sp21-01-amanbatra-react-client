const TOPICS_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/topics";
const LESSONS_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/lessons";

export const createTopicForLesson = (lessonId, topic) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }}
    ).then(response => response.json())

export const findTopicsForLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}/topics`)
        .then(response => response.json())

export const findTopicById = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`)
        .then(response => response.json())

export const updateTopic = (topicId,topic) =>
    fetch(`${TOPICS_URL}/${topicId}`, {
        method: "PUT",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())

export const deleteTopic = (topicId) =>
    fetch(`${TOPICS_URL}/${topicId}`,{
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createTopicForLesson,
    findTopicsForLesson,
    findTopicById,
    updateTopic,
    deleteTopic
}

export default api;