import React, {useState} from 'react'

const ImageWidget = ({widget, editing}) => {
    return (
        <div>
            <h2> Image Widget</h2>
            {
                editing&&
                    <div>
                        URL
                    <input value={widget.url} className="form-control"/>
                    width
                    <input value={widget.width} className="form-control"/>
                    height
                    <input value={widget.height} className="form-control"/>
                    </div>
            }
        </div>
    )
}
export default ImageWidget