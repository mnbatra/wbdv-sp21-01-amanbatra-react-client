const LESSONS_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/lessons";
const MODULES_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/modules";

export const createLessonForModule = (moduleId, lesson) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findLessonsForModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}/lessons`)
        .then(response => response.json())

export const findLessonById = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`)
        .then(response => response.json())

export const updateLesson = (lessonId, lesson) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "PUT",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteLesson = (lessonId) =>
    fetch(`${LESSONS_URL}/${lessonId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createLessonForModule,
    findLessonsForModule,
    findLessonById,
    updateLesson,
    deleteLesson
}

export default api;