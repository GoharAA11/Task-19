import { getLecturerById } from "@/app/lib/api";
 import { handleUpdate } from "@/app/lib/actions/lec-actions";
 import { PickedImage } from "@/app/lib/components/picked-image";
interface IProps{
    params:{id:number}
}

export default function EditPage({params}:IProps){

    const edit=getLecturerById(params.id)

    return <>
    <p className="is-size-1"> EDIT LECTURERS</p>
    <div className="columns">
            <div className="column is-two-fifths" >
                <form action={handleUpdate} className="box my-5">
                    <div className="field my-4">
                    <input
                        type="hidden"
                        name="id"
                        defaultValue={params.id} />
                        <label className="label" >Name</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="name"
                            placeholder="enter a name"
                            defaultValue={edit.name}
                        />
                    </div>
                    <div className="field my-4">
                        <label className="label" >Surname</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="surname"
                            placeholder="enter a surname"
                            defaultValue={edit.surname}
                        />
                    </div>
                    <div className="field my-4">
                        <label className="label" >Salary</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="salary"
                            placeholder="enter a salary"
                            defaultValue={edit.salary}
                        />
                    </div>
                    <div className="field my-4">
                        <label className="label" >Profession</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="profession"
                            placeholder="enter a profession"
                            defaultValue={edit.profession}
                        />
                    </div>
                    
                    <div className="field my-4">
                    <button className="button is-link">Submit</button>
                          </div>
                </form>
            </div>


        </div>

    </>



}