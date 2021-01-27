import React from 'react';
import { Link } from 'react-router-dom';
import { ItemWrapper, FlexContainer, ItemImage, ItemButton } from './Item.styled';
import { addToCart } from '../../../redux/actions/actions';
import { useDispatch } from 'react-redux';

const Item = (props) => {
    const dispatch = useDispatch();

    const { id, modelName, factoryManufacturer, productionYear, warrantyWorkPeriodInMonths, countryManufacturer, 
        material, color, batteryLifeInHours, weightInGrams, isWaterproof, recordFormat, videoResolutionStandart, 
        videoFrapsPerSecond, viewingAngleInDegrees, videoRecordingSpeedInMbps, hasLcdMonitor, price, image } = props.location.state;
    
    const addToCartHandler = (item) => {
        dispatch(addToCart(item));
    };

    return (
        <ItemWrapper>
            <FlexContainer>
                <ItemImage src={image} />
                <div style={{width: "40%"}}>
                    <h1>{modelName}</h1>
                    <h6>{factoryManufacturer}, {productionYear}, {countryManufacturer}</h6>
                </div>
            </FlexContainer>
            <FlexContainer>
                <div><h2>Price: ${price}</h2></div>
                <div><Link to="/catalog"><ItemButton>Go back</ItemButton></Link></div>
                <div><ItemButton onClick={
                    () => addToCartHandler({ id, modelName, price, image })
                }>
                    Add to cart
                </ItemButton></div>
            </FlexContainer>
        </ItemWrapper>
    );
}

export default Item;