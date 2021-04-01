import React, {useState} from 'react'

const ListWidget = ({widget, editing}) => {

    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <div>
            {
                editing &&
                <>
                    <select
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                type: e.target.value
                            })
                            widget.type = e.target.value
                        }}
                        value={cachedWidget.type}


                        className="form-control">
                        <option value={"HEADING"}>Heading</option>
                        <option value={"PARAGRAPH"}>Paragraph</option>
                        <option value={"LIST"}>List</option>
                        <option value={"IMAGE"}>Image</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    {
                        widget.ordered &&
                        <ol>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !widget.ordered &&
                        <ul>
                            {
                                widget.text.split("\n").map(item => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
            {
                editing &&
                <div>
                    <input onChange={(e) => {
                        setCachedWidget({
                            ...cachedWidget,
                            ordered: e.target.checked
                        })
                        widget.ordered = e.target.checked
                    }}
                        // value={widget.ordered}
                           checked={widget.ordered}
                           type="checkbox"/> Ordered
                    <br/>
                    List Items
                    <textarea
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                            widget.text = e.target.value
                        }}
                        rows={10}
                        value={widget.text}
                        placeholder={"One item per line!"}
                        className="form-control">

                     </textarea>
                </div>
            }
        </div>
    )
}

export default ListWidget