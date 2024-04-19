import axios from "axios";

export async function getDocuments(){

  const res = await axios('http://127.0.0.1:8080/content')

  return res
}