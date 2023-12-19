import bannerImg from '../../../assets/banner/banner.jpg.webp'

const Banner = () => {
    return (
        <div className='flex h-[500px]'>
            <div className='bg-blue-300 w-[20%]'>

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