import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
    const { register, handleSubmit, reset  } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const [axiosSecure] = useAxiosSecure();
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0])

        fetch(image_hosting_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())

            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    console.log(imgURL);
                    const { name, price, category, recipe } = data
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL }
                    console.log(newItem);
                    axiosSecure.post('/menu',newItem)
                    .then(data=>{
                       if(data.data.insertedId){
                        reset();
                        Swal.fire("New Item added");
                       }
                    })
                }
            })
    }

    return (
        <div >
            <h2 className="text-4xl text-center underline">Add an New Item</h2>

            <div className=" mx-auto mt-3 border-4 w-1/3  border-red-300">
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className=" my-2 form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Item Name*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Dish Item Name" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <select {...register("category", { required: true })} className="select max-w-xs w-full border-red-300 my-2">

                        <option disabled selected>Category*</option>
                        <option>salad</option>
                        <option>pizza</option>
                        <option>soup</option>
                        <option>dessert</option>
                        <option>drink</option>
                    </select>
                    <div className="form-control w-full max-w-xs my-2">

                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div>
                        <textarea type='text'{...register("recipe", { required: true })} className="textarea w-full border-lime-300 my-2" placeholder="recipe details"></textarea>
                    </div>
                    <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" /> <br />
                    <button type="submit" className=" mt-4 btn md:btn-wide my-2">Add Now</button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;