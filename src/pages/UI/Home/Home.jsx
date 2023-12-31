import Banner from '../../../Component/Home/Banner/Banner';
import Categories from '../../../Component/Home/Categories/Categories';
import Channels from '../../../Component/Home/channels/Channels';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* channels */}
            <Channels></Channels>
            {/* Categories */}
            <Categories></Categories>
        </div>
    );
};

export default Home;