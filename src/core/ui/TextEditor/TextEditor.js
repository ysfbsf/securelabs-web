import React, { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from './index.module.scss'
import { convertToHTML } from 'draft-convert';
import { EditorState } from 'draft-js';
import {SvgSprite} from '../SvgSprite'
import {useDropzone} from 'react-dropzone';

export const TextEditor = ({setDocuments, data}) => {  
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const [convertedContent, setConvertedContent] = useState(null);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  
  const handelClick = () =>{
    console.log(convertedContent);
    console.log(acceptedFiles)
    const doc = {
          id: 1+data.length,
          name : "Hamza Maarouf",
          activity: 'John Test',
          size: '18 MB',
          dataCreated : "Sep 13, 2019",
          lastUpdated : "Sep 13, 2019",
    }
    
    data && setDocuments([...data, doc])
  }

  return (
    <>
      <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbarClassName={styles.toolbarClassName}
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          wrapperStyle={{ width: "100%"}}
          placeholder={"test"}
          toolbar={{
            options: ['inline', 'list', 'textAlign', 'link']
          }}
      />
       <section className={styles.fileContainer}>
          <div {...getRootProps({className: styles.dropzone})}>
            <input {...getInputProps()} />
            <p>{acceptedFiles.length>0 ? 'File uploaded successfully' :  'Drag & drop some files here, or click to select files'}</p>
          </div>
        </section>
      <div className={styles.send}>
        <SvgSprite className={styles.sendIcon} spriteID={'send'} onClick={handelClick}/>
      </div>
      
    </>
  )
}
