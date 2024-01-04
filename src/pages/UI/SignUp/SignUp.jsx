
import axios from "axios";
import { useForm } from "react-hook-form"
import useAuth from "../../../Hooks/auth/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useAxiospublic from '../../../Hooks/axiosPublic/useAxiosPublic'

const SignUp = () => {
    const { signUp, auth } = useAuth()
    // define axios public
    const axiosPublic = useAxiospublic()
    // define imgbb hostiong key
    const imgHostionKey = import.meta.env.VITE_IMAGE_HOSTING_KEY
    // define hosting api
    const imgHostionApi = `https://api.imgbb.com/1/upload?key=${imgHostionKey}`
    //react hook form
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    //from submit
    const onSubmit = async (data) => {
        const imageFile = { image: data.image[0] }
        // console.log(imageurl)

        const imgurl = await axios.post(imgHostionApi, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            }
        })
        // console.log(imgurl?.data?.data?.url_viewer)
        //get signup info
        const userName = data?.name;
        const userEmail = data?.email;
        const userPass = data?.password;
        const userImg = imgurl?.data?.data?.url_viewer;
        //signup userr
        const userInFo = { userName, userEmail, userPass, userImg }
        signUp(userEmail, userPass)
            .then(res => {
                //update user profile

                console.log(res)
                updateProfile(auth.currentUser, {
                    displayName: `${userName}`, photoURL: `${userImg}`
                })
                    .then(res => {
                        // post user data
                        axiosPublic.post('/users', userInFo)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    Swal.fire({
                                        position: "center",
                                        icon: "success",
                                        title: "SuccessFully you create a account",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            }
                            )
                            .catch(error => {
                                Swal.fire({
                                    position: "center",
                                    icon: "error",
                                    title: "something is wrong please try again",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            })


                        reset({
                            name: null,
                            email: null,
                            password: null,
                            image: null

                        })

                    }).catch(error => {
                        const errorMessage = error.message;
                        // console.log(errorMessage)
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: `${errorMessage}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })

            })
            .catch(error => {
                const errorMessage = error.message;
                // console.log(errorMessage)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: `${errorMessage}`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
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