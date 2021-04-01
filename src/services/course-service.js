const COURSES_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/courses";

export const findAllCourses = () =>
    fetch(COURSES_URL)
        .then(response => response.json())

export const findCourseById = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`)
        .then(response => response.json())


export const createCourse = (course) =>
    fetch(COURSES_URL, {
        method: 'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())

export const updateCourse = (courseId,course) =>
    fetch(`${COURSES_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const api = {
    findAllCourses: findAllCourses,
    findCourseById: findCourseById,
    deleteCourse: deleteCourse,
    createCourse,
    updateCourse
}

export default api;
