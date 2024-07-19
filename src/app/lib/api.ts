
import Database from "better-sqlite3"



 export interface ILecturer{
    id:number
    name:string
    surname:string
    salary:number
    profession:string
    cover:string
}


 export type InputLecturer=Omit<ILecturer,"id">
 export type WithoutLec=Omit<ILecturer,"cover">
 
 const db = new Database("lecturers.db")

 export const addLecturer=(lecturer:InputLecturer)=>{
    db.prepare(`
        INSERT INTO lecturers (name, surname, salary, profession, cover)
        VALUES  (@name, @surname, @salary, @profession, @cover) 
        `).run(lecturer)
 }


 export const getAllLecturers=():ILecturer[]=>{
    return db.prepare(`
        SELECT * FROM lecturers
        `).all() as ILecturer[]

 }

 export  const getLecturerById=(id:number):ILecturer=>{
    return db.prepare(`
        SELECT * FROM lecturers WHERE id=?
        
        `).get(id) as ILecturer

 }
 export const updateLec=(id: number,  lecturer:WithoutLec)=>{
    return db.prepare(`
        UPDATE lecturers set name=?, surname=?, salary=?, profession=? WHERE id=?
        `).run(lecturer.name, lecturer.surname,lecturer.salary, lecturer.profession,id)
 }