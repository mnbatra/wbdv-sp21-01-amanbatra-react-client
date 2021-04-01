import React, {useState} from "react"

const ImageWidget = ({widget, editing,updateWidget,deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [isEditing, setIsEditing] = useState(false)
    return (

        <div>
            {!isEditing &&
            <>
                <i onClick={() => setIsEditing(true)} className="fas fa-2x fa-cog float-right"/>
            </>
            }
            {
                !isEditing &&
                <img width={widget.width}
                     height={widget.height}
                     src={widget.src}
                     alt={"Link Missing"}
                />
            }
            {
                isEditing &&
                <>
                    <>Image URL</>
                    <input value={cachedWidget.src} onChange={
                        (e) => setCachedWidget({
                            ...cachedWidget,
                            src: e.target.value
                        })
                    } className="form-control"/>
                    <>Image Width</>
                    <input value={cachedWidget.width} onChange={
                        (e) => setCachedWidget({
                            ...cachedWidget,
                            width: e.target.value
                        })
                    } className="form-control"/>
                    <>Image Height</>
                    <input value={cachedWidget.height} onChange={
                        (e) => setCachedWidget({
                            ...cachedWidget,
                            height: e.target.value
                        })
                    } className="form-control"/>
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
                    <i onClick={() => {
                        if (widget.src!=="" || cachedWidget.src !=="") {
                            updateWidget(widget.id, cachedWidget)
                            setIsEditing(false)
                        } else {
                            alert("Need to specify Image URL!!!")
                        }
                    }} className="fas fa-check float-right"/>
                    <i onClick={() => {
                        deleteWidget(widget.id)
                        setIsEditing(false)
                    }} className="fas fa-trash float-right"/>
                </>
            }
            {/*{JSON.stringify(widget)}*/}

        </div>
    )
}
export default ImageWidget