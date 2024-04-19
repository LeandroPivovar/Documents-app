"use client"

import Editor from "./Editor.js";
import { useState } from "react";
import "./styles.css"
import axios from "axios";

function EditorFull() {
  
  const INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: {
          text: "Projeto de documentos",
          level: 1,
        },
      },
    ],
  };
  async function saveDocument(){
    await axios.post('http://127.0.0.1:8080/content',{
            blocks: JSON.stringify(data.blocks)
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  const [data, setData] = useState(INITIAL_DATA);
  return (
    <div className="editor">
      <Editor data={data} onChange={setData} editorblock="editorjs-container" />
      <button
        className="savebtn"
        onClick={saveDocument}
      >
        Save
      </button>
    </div>
  );
}

  export default EditorFull;