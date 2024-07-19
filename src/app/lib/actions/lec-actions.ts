"use server"
import { updateLec, WithoutLec } from "../api"

import { createWriteStream } from "fs"
import {  InputLecturer, addLecturer, } from "../api"
import { redirect } from "next/navigation"


export const handleAdd = async (data:FormData) => {

   const photo = data.get('cover') as File
   if(photo){
     let extension = photo.type.split("/").at(-1)
     const filename =  Date.now() + "." + extension
    
     const stream = createWriteStream("public/images/" + filename)

     const bufferedImage = await photo.arrayBuffer()

     stream.write(Buffer.from(bufferedImage))


     let lecturer:InputLecturer = {
        name: data.get('name') as string,
        surname: data.get('surname') as string,
        salary: +(data.get('salary') as string),
        profession: data.get('profession') as string,
        cover: 'images/' + filename
     }

     addLecturer(lecturer)
     redirect("/")

   }
}
export const handleUpdate=async (data:FormData)=>{
   let items:WithoutLec={
      name: data.get('name') as string,
      surname: data.get('surname') as string,
      salary: +(data.get('salary') as string),
      profession: data.get('profession') as string,
   
   }
      let id=+(data.get("id") as string)
      updateLec(id,items)
      redirect("/lecturers")
      
   
}