import { FaFacebookF } from "react-icons/fa";


const PageHeader = () => {
    return (
        <div className='grid grid-cols-3 px-10 '>
            <div className="">Email: tazuddin@homesheba.com </div>
            <div>
                <h1 className=" border-l border-red-600 flex justify-center"> Free Shipping for all Order of $99</h1>
            </div>
            <div className="flex justify-end gap-2">
                <FaFacebookF></FaFacebookF>
                <FaFacebookF></FaFacebookF>
                <FaFacebookF></FaFacebookF>
                <FaFacebookF></FaFacebookF>
            </div>
        </div>
    );
};

export default PageHeader;