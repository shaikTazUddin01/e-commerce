
import axios from "axios";
import { useForm } from "react-hook-form"

const SignUp = () => {
    const imgHostionKey = import.meta.env.VITE_IMAGE_HOSTING_KEY
    console.log(imgHostionKey)
    const imgHostionApi = `https://api.imgbb.com/1/upload?key=${imgHostionKey}`
    const {
        register,
        handleSubmit
    } = useForm()


    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        // console.log(imageurl)

        const imgurl = await axios.post(imgHostionApi, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        console.log(imgurl?.data?.data?.url_viewer)
    }
    return (
        <div>
            <div className=" flex justify-center my-20">
                {/* <div className=""> */}

                <div className="card w-full max-w-lg shadow-2xl shadow-black border border-yellow-300">

                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered border-yellow-500" {...register("name")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered border-yellow-500" {...register('email')} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered border-yellow-500" {...register('password')} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="file" placeholder="photo" {...register('image')} className="" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">sign up</button>
                        </div>
                    </form>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default SignUp;