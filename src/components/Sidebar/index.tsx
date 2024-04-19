"use client"
import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import { useForm } from "react-hook-form";

export function Sidebar() {

    const {register, handleSubmit, reset} = useForm()
    const [projects, setProjects] = useState([]);
    

    useEffect(()=>{
        fetchDataDocuments()
    },[])

    function fetchDataDocuments(){
        axios.get('http://127.0.0.1:8080/document')
        .then(function (response) {
            setProjects(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    async function handleCreateNewDocument(data: any){
        event.preventDefault()
        await axios.post('http://127.0.0.1:8080/document',{
            data: data.title
        })
        .then(function (response) {
        })
        .catch(function (error) {
            console.log(error);
        })
        reset()
        fetchDataDocuments()
    }

    return (
        <div className="sidebar">
            <strong>Projetos</strong>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>{project.title}</li>
                ))}
            </ul>
            <hr />
            <div>
                New document
                <form action="" onSubmit={handleSubmit(handleCreateNewDocument)}>
                    <input type="text" {...register('title')}/>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    );
}
