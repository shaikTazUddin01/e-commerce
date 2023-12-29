import axios from "axios";
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../Hooks/axiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateCategory = () => {
    const axiosSecure = useAxiosSecure()

    const {
        register,
        handleSubmit,
        reset
    } = useForm()

    const onSubmit = async (data) => {
        //image uplade to imgbb and then get an url
        const imgFile = { image: data.categoryImg[0] }
        // console.log(imgFile)
        const res = await axios.post(image_hosting_api, imgFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        const categoryName = data?.categoryName
        const categoryImgUrl = res?.data?.data?.display_url;

        const categoryInFo = { categoryName, categoryImgUrl }
        //  console.log(categoryInFo)
        //post category to server
        const categoryRes = await axiosSecure.post('/createCategoryCollection', categoryInFo)
        if (categoryRes.data.insertedId) {
            reset({
                categoryName: '',
                categoryImg: '',
            })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully you add a category",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "something is wrong please try again",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    // console.log(watch("example"))

    return (
        <div>
            <div className=" ">
                <div className="flex justify-center items-center pt-20">
                    <div className="card w-full max-w-sm shadow-2xl ">
                        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category Name :</span>
                                </label>
                                <input type="text" placeholder="Category Name" className="input input-bordered" {...register("categoryName")} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Category image:</span>
                                </label>
                                <input type="file"  {...register("categoryImg")} required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Category</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CreateCategory;