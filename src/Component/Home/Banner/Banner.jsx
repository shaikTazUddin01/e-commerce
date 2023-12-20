import { useState } from 'react';
import bannerImg from '../../../assets/banner/banner.jpg.webp'

const Banner = () => {
    const [openDepartment, setOpenDepartment] = useState(false);
    console.log(openDepartment)
    // const handleOpen=(value)=>{
    //     console.log(value)
    //     setOpenDepartment(value)
    // }
    return (
        <div className='flex h-[500px] border'>
            <div className=' w-[20%] bg-white'>
                <h1 className='flex justify-between items-center px-5 py-2'>
                    <span>All Department</span>
                    <span>
                        <label className=" swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" onClick={() => setOpenDepartment(!openDepartment)} />

                            {/* hamburger icon */}
                            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"

                            /></svg>

                            {/* close icon */}
                            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"

                            /></svg>

                        </label>
                    </span> </h1>

                <div className='pl-5'>
                    <ul className=''>
                        <li className='mb-1'>laptop</li>
                        <li className='mb-1'>Mobile</li>
                        <div className="dropdown dropdown-right dropdown-hover">
                            <div tabIndex={0} role="" className="mb-1">Monitor</div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        <li className='mb-1'>HeadPhone</li>
                        <li className='mb-1'>HeadPhone</li>
                        <li className='mb-1'>HeadPhone</li>
                        <li className='mb-1'>HeadPhone</li>
                        <li className='mb-1'>HeadPhone</li>
                        <li className='mb-1'>HeadPhone</li>
                    </ul>
                </div>
            </div>
            <div className=' w-[80%] z-10 '>
                <div className='bg-cover z-20 h-[500px] flex items-center ' style={{ backgroundImage: `url(${bannerImg})` }}
                >
                    <div className='w-[50%] pl-10'>
                        <h2 className='uppercase text-green-500 text-2xl font-bold'>
                            Fruit fresh
                        </h2>
                        <h1 className='text-4xl font-bold'>
                            Vegetable <br />
                            100% Organic
                        </h1>
                        <p>
                            Free Pickup and Delivery Available
                        </p>
                        <button className='btn btn-success'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;