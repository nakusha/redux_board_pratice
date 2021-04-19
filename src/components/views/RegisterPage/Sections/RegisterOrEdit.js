import React from 'react'

const RegisterOrEdit = (props) => {
  return (
    <div>
      <from onSubmit>
        <br/>
        <label>Title: </label>
        <input onChange={props.handleTitleChange} value={props.titleValue} type="text" name="title"/>
        <hr></hr>
        <div>
          <textarea onChange={props.handleContentChange} value={props.contentValue} name="content"/>
        </div>
        <button onClick={props.handleSubmit}>{props.updateRequest ? "수정" : "등록"}</button>
      </from> 
    </div>
  )
}

export default RegisterOrEdit
