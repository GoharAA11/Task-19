import Image from "next/image"
import { ILecturer } from "../api"
import Link from "next/link"

interface IProps{
    lecturers:ILecturer[]
}
export const AddLecturer =({lecturers}:IProps)=>{
return <>
<div className="columns">
    { 
    lecturers.map(lec=>{
    return <div key={lec.id} className="column">
    <Image
    src={"/"+ lec.cover}
    width={200}
    height={200}
    alt="photo"

    />
    <p>{lec.name}    {lec.surname}</p>
    <p>{lec.profession}</p>
    <p>{lec.salary} AMD</p>
    <Link  href={'/lecturers/edit/'+ lec.id}>Edit</Link>
</div>
})
}
  </div>
</>
}