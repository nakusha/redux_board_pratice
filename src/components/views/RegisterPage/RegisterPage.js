import React, { useState } from 'react'
import RegisterOrEdit from './Sections/RegisterOrEdit'

const RegisterPage = () => {
  const [titleValue, setTitleValue] = useState("")
  const [contentValue, setContentValue] = useState("")
  const [isForUpdate, setisForUpdate] = useState(false)

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  }

  const onContentChange = (event) => {
    setContentValue(event.currentTarget.value)
  }
  
  const onSubmitArticle = (event) => {
    event.preventDefault();
    const article = {title:titleValue, content:contentValue};
    console.log(article)
  }
  return (
    <RegisterOrEdit
      titleValue={titleValue}
      contentValue={contentValue}
      handleTitleChange={onTitleChange}
      handleContentChange={onContentChange}
      handleSubmit={onSubmitArticle}
      updateRequest={isForUpdate}
    />
  )
}

export default RegisterPage
