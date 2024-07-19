import { handleAdd } from "@/app/lib/actions/lec-actions";
import { PickedImage } from "@/app/lib/components/picked-image";

export default function AddPage() {
    return <>
        <p className="is-size-1">ADD LECTURERS</p>
        <div className="columns">
            <div className="column is-two-fifths" >
                <form action={handleAdd} className="box my-5">
                    <div className="field my-4">
                        <label className="label" >Name</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="name"
                            placeholder="enter a name"
                        />
                    </div>
                    <div className="field my-4">
                        <label className="label" >Surname</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="surname"
                            placeholder="enter a surname"
                        />
                    </div>
                    <div className="field my-4">
                        <label className="label" >Salary</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="salary"
                            placeholder="enter a salary"
                        />
                    </div>
                    <div className="field my-4">
                        <label className="label" >Profession</label>
                        <input
                            className="input is-link"
                            type="text"
                            name="profession"
                            placeholder="enter a profession"
                        />
                    </div>
                    <div className="field my-4">
                        <PickedImage/>
                    
                    </div>
                    <div className="field my-4">
                    <button className="button is-link">Submit</button>
                          </div>
                </form>
            </div>


        </div>

    </>
}