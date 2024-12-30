import Banner from './Banner';
import Category from './Category';
import Featured from './featued/Featured';
import PopularMenu from './PopularMenu';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;