import React, {useState} from "react"

const ListWidget = ({widget, editing,updateWidget,deleteWidget}) => {
    const [cachedWidget, setCachedWidget] =useState(widget)
    const [isEditing,setIsEditing] = useState(false)
    return(
        <div>
            {!isEditing &&
            <>
                <i onClick={() => setIsEditing(true)} className="fas fa-2x fa-cog float-right"/>
            </>
            }
            {
                isEditing &&
                <>
                    <input checked={cachedWidget.ordered}
                           onChange={
                               (e) => setCachedWidget({
                                   ...cachedWidget,
                                   ordered: !cachedWidget.ordered
                               })
                           }
                           type="checkbox"/> Ordered
                    <br/>
                    Item list
                    <textarea value={cachedWidget.text}
                        onChange={
                            (e) => setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                        }
                        rows={10} className="form-control"/>
                    <select value={cachedWidget.type}
                            onChange={
                                (e) => setCachedWidget({
                                    ...cachedWidget,
                                    type: e.target.value
                                })
                            }
                            className="form-control">
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        <option value={"HEADING"}>HEADING</option>
                        <option value={"IMAGE"}>IMAGE</option>
                        <option value={"LIST"}>LIST</option>
                    </select>

                    {/*{JSON.stringify(widget)}*/}
                    <i onClick={() => {
                            updateWidget(widget.id, cachedWidget)
                            setIsEditing(false)
                        }} className="fas fa-check float-right"/>
                    <i onClick={() => {
                            deleteWidget(widget.id)
                            setIsEditing(false)
                        }} className="fas fa-trash float-right"/>
                </>
            }
            {
                !isEditing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget