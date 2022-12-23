import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from './index.module.scss'

export const TextEditor = () => {  
  const  [value, setValue] = useState()

  useEffect(()=>{
    console.log(value)
  }, [value])

  return (
      <Editor
          toolbarClassName={styles.toolbarClassName}
          onChange={setValue}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ width: "100%"}}
          toolbar={{
            options: ['inline', 'list', 'textAlign', 'image', 'link']
          }}
      />
  )
}
