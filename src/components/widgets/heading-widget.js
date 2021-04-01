import React, {useState} from "react"

const HeadingWidget = ({widget, editing, updateWidget,deleteWidget}) => {
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
                    <input
                        onChange={
                            (e) => setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                        }
                        value={cachedWidget.text} className="form-control"/>
                    <select value={cachedWidget.size}
                            onChange={
                                (e) => setCachedWidget({
                                    ...cachedWidget,
                                    size: e.target.value
                                })
                            }
                            className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                    <br/>
                    <i onClick={() => {
                            setIsEditing(false)
                            updateWidget(widget.id, cachedWidget)
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
                    <div>
                        {(widget.size === 1 || widget.size === "1") && <h1>{widget.text}</h1>}
                        {(widget.size === 2 || widget.size === "2") && <h2>{widget.text}</h2>}
                        {(widget.size === 3 || widget.size === "3") && <h3>{widget.text}</h3>}
                        {(widget.size === 4 || widget.size === "4") && <h4>{widget.text}</h4>}
                        {(widget.size === 5 || widget.size === "5") && <h5>{widget.text}</h5>}
                        {(widget.size === 6 || widget.size === "6") && <h6>{widget.text}</h6>}
                    </div>
                </>
            }
        </>
    )
}

export default HeadingWidget