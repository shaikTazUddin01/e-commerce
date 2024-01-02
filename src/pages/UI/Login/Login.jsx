import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/auth/useAuth';
import Swal from 'sweetalert2';
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const { signIn, googleSignIn } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()

    //from submit
    const onSubmit = async (data) => {
        console.log(data)
        const userEmail = data?.email;
        const userPass = data?.password;

        signIn(userEmail, userPass)
            .then(res => {
                reset({
                    email: '',
                    password: ''
                })
                // console.log(res)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuccessFully you create a account",
                    showConfirmButton: false,
                    timer: 1500
                });
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
    }
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SuccessFully you create a account",
                    showConfirmButton: false,
                    timer: 1500
                });
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
    }
    return (
        <div>
            <div className=" flex justify-center my-20">
                {/* <div className=""> */}

                <div className="card w-full max-w-sm shadow-2xl shadow-black border border-yellow-300">

                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-3xl text-center font-bold">Sign In</h1>

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
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">sign in</button>
                        </div>
                        <div className='flex justify-center'>
                        <div className="divider divider-neutral w-[50%] text-xl">OR</div>
                        </div>
                        <div onClick={handleGoogleLogin} className='border flex py-2 gap-2 justify-center items-center rounded-md'>
                           <span className='text-2xl'><FcGoogle></FcGoogle></span>
                           <span>Sign In With Google</span>
                           {/* <p>Sign In With Google</p> */}
                        </div>
                    </form>
                </div>
                {/* </div> */}
            </div>
        </div>
    );
};

export default Login;