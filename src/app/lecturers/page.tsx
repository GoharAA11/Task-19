import { getAllLecturers } from "../lib/api"
import { AddLecturer } from "../lib/components/lecturers-page"

export default function Page(){
    const list =getAllLecturers()
    //console.log(list)
    return<>
    <h1 className="is-size-1">Lecturers</h1>
 
    <AddLecturer lecturers={list}/>
    </>
}