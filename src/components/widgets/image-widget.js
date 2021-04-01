import React, {useState} from 'react'

const ImageWidget = ({widget, editing}) => {

    const [cachedWidget, setCachedWidget] = useState(widget)

    return (
        <div>
            {
                editing &&
                <div>
                    URL
                    <input
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                url: e.target.value
                            })
                            widget.url = e.target.value
                        }
                        }
                        value={widget.url}
                        className="form-control"
                    />
                    width
                    <input
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                width: e.target.value
                            })
                            widget.width = e.target.value
                        }
                        }
                        value={widget.width}
                        className="form-control"
                    />
                    height
                    <input
                        onChange={(e) => {
                            setCachedWidget({
                                ...cachedWidget,
                                height: e.target.value
                            })
                            widget.height = e.target.value
                        }
                        }
                        value={widget.height}
                        className="form-control"
                    />
                </div>
            }
            {
                !editing &&
                <img src={widget.url}
                     width={widget.width}
                     height={widget.height}
                     alt={"Image not found!"}
                />
            }
        </div>
    )
}
export default ImageWidget