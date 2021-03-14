import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";
import moduleService from "../../services/module-service"
import '../../App.css';

const ModuleList = (
    {
        myModules,
        createModule= () => alert("!!!"),
        deleteModule= (item) => alert("Module Deleted!"),
        updateModule=(module) => alert("Updated"),
        findModulesForCourse=(courseId) => console.log(courseId)
    }) => {
    const {layout,courseId, moduleId} = useParams();

    useEffect(() => {
        findModulesForCourse(courseId)
    }, [])
    return(
        <div className="p-2 mb-3 bg-dark text-white">
            <h3>Modules</h3>
            <ul className="list-group">
                {myModules.map(module =>
                    <li className= {`list-group-item ${module._id === moduleId ? 'active': ""}`} key={`${module._id}`}>
                        <EditableItem to={`/courses/${layout}/editor/${courseId}/${module._id}`}
                                      deleteItem={deleteModule}
                                      updateItem={updateModule}
                                      item={module}/>
                    </li>
                )}
                <li className="list-group-item">
                    <i onClick={() => createModule(courseId)}
                       className="fas fa-plus fa-2x text-dark float-right"/>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return{
        myModules: state.moduleReducer.modules
    }
}
const dtpm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModuleForCourse(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))},
        deleteModule: (item) => moduleService.deleteModule(item._id)
            .then(status => dispatch({
                type: "DELETE_MODULE",
                moduleToDelete: item
            })),
        updateModule: (module) =>
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module: module
                })),
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(theModules => dispatch({
                    type: "FIND_MODULES_FOR_COURSE",
                    modules: theModules})
                )
        }
    }

}
export default connect(stpm,dtpm)(ModuleList)