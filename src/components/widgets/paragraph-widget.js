import React, {useState} from "react"

const ParagraphWidget = ({widget, editing, updateWidget,deleteWidget}) => {
    const [cachedWidget, setCachedWidget] =useState(widget)
    const [isEditing,setIsEditing] = useState(false)
    return(
        <>
            {!isEditing &&
            <>
                <i onClick={() => setIsEditing(true)} className="fas fa-2x fa-cog float-right"/>
            </>
            }
            {
                isEditing &&
                <>
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
                    <textarea value={widget.text}
                        onChange={
                            (e) => setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                        }
                        value={cachedWidget.text} className="form-control"
                        className="form-control"/>
                    <br/>
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
                <p>
                    {widget.text}
                </p>
            }
        </>

    )
}

export default ParagraphWidget