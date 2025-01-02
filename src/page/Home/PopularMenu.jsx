
import SectionTitle from '../../components/SectionTitle';
import MenuItem from '../../shared/MenuItem';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
   
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')

    return (
        <div>
            <SectionTitle
             heading={"from our menu"}
             subHeading={"check it out "}>
            </SectionTitle>
            <div className='px-3 grid md:grid-cols-2 gap-12 my-12'>
                {
                    popular.map(item => <MenuItem key={item._id} item={item}></MenuItem> )
                }
            </div>
        </div>
    );
};

export default PopularMenu;