import EditorFull from "@/components/Editor/EditorFull";
import { Sidebar } from "@/components/Sidebar";
import "./styles.css"
import { getDocuments } from "@/lib/ssr/getDocument";
import Editor from "@/components/Editor/Editor";

export default async function Project(){

  const response = await getDocuments()


  console.log(response.data)

    return (
      <>
      <div className="wrapper">
          <Sidebar></Sidebar>
          <EditorFull ></EditorFull>
      </div>
      </>
    );
}