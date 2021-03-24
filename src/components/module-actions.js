import moduleService from "../services/module-service";

export const CREATE_MODULE = "CREATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const FIND_MODULES_FOR_COURSE = "FIND_MODULES_FOR_COURSE";

export const createModule =  (dispatch,courseId) => {
    moduleService.createModuleForCourse(courseId, {title: "New Module"})
        .then(theActualModule => dispatch({
            type: "CREATE_MODULE",
            module: theActualModule
        }))}

export const deleteModule =  (dispatch,item) => moduleService.deleteModule(item._id)
    .then(status => dispatch({
        type: "DELETE_MODULE",
        moduleToDelete: item
    }))

export const updateModule =  (dispatch,module) =>
    moduleService.updateModule(module._id, module)
        .then(status => dispatch({
            type: "UPDATE_MODULE",
            module: module
        }))

export const findModulesForCourse =  (dispatch,courseId) => {
    moduleService.findModulesForCourse(courseId)
        .then(theModules => dispatch({
            type: "FIND_MODULES_FOR_COURSE",
            modules: theModules})
        )
}

const moduleActions = {
    createModule, findModulesForCourse, updateModule, deleteModule
}

export default moduleActions;