import React, {useState} from "react"
import {BrowserRouter, useParams, Link, Route} from "react-router-dom";
const EditableItem = (
    {
        to="/somewhere/to/go",
        deleteItem,
        updateItem,
        item={
            title: "Some title",
            _id:"1321"
        },
        active
    }) => {
    const [editing,setEditing] = useState(false)
    const [cachedItem, setCachedItem] =useState(item)
    return (
        <>
            {!editing &&
            <>
                <Link className={`nav-link ${active?'active':''}`} to={to}>
                    {item.title}
                </Link>
                <i onClick={() => setEditing(true)} className="fas fa-edit float-right text-dark"/>
            </>
            }
            {editing &&
            <>
                <input
                    onChange={
                        (e) => setCachedItem({
                            ...cachedItem,
                            title: e.target.value
                        })
                    }
                    value={cachedItem.title}/>
                <i onClick={() => {
                    setEditing(false)
                    updateItem(cachedItem)
                }} className="fas fa-check text-success"/>
                <i onClick={() => {
                    deleteItem(item)
                    setEditing(false)
                }} className="fas fa-times text-danger"/>
            </>
            }
        </>
    )
}

export default EditableItem;