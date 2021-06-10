import React from 'react'
import Dropzone from 'react-dropzone';
import {Icon} from 'antd'
function FileUpload() {
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone
            onDrop
            multiple
            maxSize>
{({getRootProps, getInputProps}) =>(
    <div style={{width:'300px', height:'240px', border:'1px solid lightgray', display: 'flex', alignItems: 'center'}}
    {...getRootProps()}>
<input type="text" {...getRootProps()} />
<Icon type='plus' style={{fontSize: '3rem'}}></Icon>
    </div>
)}

            </Dropzone>
        </div>
    )
}

export default FileUpload
