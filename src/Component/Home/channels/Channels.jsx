import wholeSale from '../../../assets/offer/wholesale.png'
import beauti from '../../../assets/offer/beauti.png'
import below from '../../../assets/offer/below-499.png'
import bestPrice from '../../../assets/offer/best price.png'
import darazCard from '../../../assets/offer/daraz-card.png'
import fashone from '../../../assets/offer/fashone.png'
import free from '../../../assets/offer/free.png'
import homemadeMaker from '../../../assets/offer/homemadeMaker.png'
import mart from '../../../assets/offer/mart.png'
const Channels = () => {
    return (
        <div className="bg-white m-10  grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9  p-5">
            <div className='border-r p-5 flex flex-col justify-center items-center'>
                <img src={wholeSale} alt="" />
                <p className='text-center'>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={beauti} alt="" />
                <p>Beauti</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={below} alt="" />
                <p>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={bestPrice} alt="" />
                <p>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={darazCard} alt="" />
                <p>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={fashone} alt="" />
                <p>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={free} alt="" />
                <p>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={homemadeMaker} alt="" />
                <p>Wholesale price</p>
            </div>
            <div className='border-r p-5 flex flex-col items-center justify-center'>
                <img src={mart} alt="" />
                <p>Wholesale price</p>
            </div>
        </div>
    );
};

export default Channels;