import React from 'react';
import Link  from "react-router-dom/Link";
import { Button } from 'antd';
import { CameraCard, CardImage } from './CardItem.styled';

const { Meta } = CameraCard;

const CardItem = ({ id, modelName, factoryManufacturer, productionYear, warrantyWorkPeriodInMonths, countryManufacturer, 
    material, color, batteryLifeInHours, weightInGrams, isWaterproof, recordFormat, videoResolutionStandart, 
    videoFrapsPerSecond, viewingAngleInDegrees, videoRecordingSpeedInMbps, hasLcdMonitor, price, image }) => {
    const description = `${factoryManufacturer}, ${countryManufacturer}, ${productionYear}`;

    return (
        <CameraCard
        hoverable
        cover={
            <CardImage src={image} />
        } actions={[
            <h3>${price}</h3>,
            <Link 
            to={{
                pathname: "/item", 
                state: { id, modelName, factoryManufacturer, productionYear, warrantyWorkPeriodInMonths, countryManufacturer, 
                    material, color, batteryLifeInHours, weightInGrams, isWaterproof, recordFormat, videoResolutionStandart, 
                    videoFrapsPerSecond, viewingAngleInDegrees, videoRecordingSpeedInMbps, hasLcdMonitor, price, image }
            }}>
                <Button danger >View more</Button>
            </Link>
        ]} >
            <Meta title={modelName} description={description} />
        </CameraCard>
    );
}

export default CardItem;