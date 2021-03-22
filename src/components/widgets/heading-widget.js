import React, {useState} from 'react'

const HeadingWidget = ({widget, editing}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    return (
        <>
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
                    </select>
                    <input
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                text: e.target.value
                            })
                            widget.text = e.target.value
                        }}
                        value={cachedWidget.text}
                        className="form-control"/>
                    <select
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                size: e.target.value
                            })
                            widget.size = e.target.value
                        }}
                        value={cachedWidget.size}
                        className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </>
            }
            {
                !editing &&
                <>
                    {parseInt(widget.size) === 1 && <h1>{widget.text}</h1>}
                    {parseInt(widget.size) === 2 && <h2>{widget.text}</h2>}
                    {parseInt(widget.size) === 3 && <h3>{widget.text}</h3>}
                    {parseInt(widget.size) === 4 && <h4>{widget.text}</h4>}
                    {parseInt(widget.size) === 5 && <h5>{widget.text}</h5>}
                    {parseInt(widget.size) === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget