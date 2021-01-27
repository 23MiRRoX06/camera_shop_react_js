import { React, useState }from 'react';
import { Carousel } from 'antd';
import { CarouselImage, NewsWrapper, ShowMoreButton, ShowMoreContainer } from './Home.styled';
import ShopByBrand from './shop_by_brand/ShopByBrand';
import canon from '../../../assets/images/carousel/canon.jpg';
import new_site from '../../../assets/images/carousel/new_site.jpg';
import sony from '../../../assets/images/carousel/sony.jpg';
import holiday from '../../../assets/images/carousel/holiday.jpg';
import hasselblad from '../../../assets/images/carousel/hasselblad.jpg';
import books from '../../../assets/images/best/books.jpg';
import sales from '../../../assets/images/best/sales.jpg';
import tv from '../../../assets/images/best/tv.jpg';

const Home = () => {
    const [showMore, setShowMore] = useState(false);
    const onShowMore = () => {
        setShowMore(!showMore);
    }

    return (
        <section>
            <Carousel autoplay>
                <CarouselImage src={new_site} alt="new site"/>
                <CarouselImage src={hasselblad} alt="hasselblad"/>
                <CarouselImage src={canon} alt="canon camera"/>
                <CarouselImage src={holiday} alt="holiday present"/>
                <CarouselImage src={sony} alt="sony camera"/>
            </Carousel>
            <ShopByBrand />
            <ShowMoreContainer><ShowMoreButton onClick={onShowMore} type="primary" danger>Show more</ShowMoreButton></ShowMoreContainer>
            {showMore ? 
                <NewsWrapper>
                    <a><img src={books} /></a>
                    <a><img src={sales} /></a>
                    <a><img src={tv} /></a>
                </NewsWrapper> :
            null}
        </section>
    );
};

export default Home;