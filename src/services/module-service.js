const MODULES_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/modules";
const COURSES_URL = "http://ec2-3-133-235-23.us-east-2.compute.amazonaws.com:8080/api/mnbatra/courses";

export const createModuleForCourse = (courseId, module) =>
    fetch(`${COURSES_URL}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findModulesForCourse = (courseId) =>
    fetch(`${COURSES_URL}/${courseId}/modules`)
        .then(response => response.json())

export const findModuleById = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`)
        .then(response => response.json())

export const updateModule = (moduleId, module) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "PUT",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteModule = (moduleId) =>
    fetch(`${MODULES_URL}/${moduleId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const api = {
    createModuleForCourse,
    findModulesForCourse,
    findModuleById,
    updateModule,
    deleteModule
}

export default api;