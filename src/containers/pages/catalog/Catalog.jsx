import { React, useState } from 'react';
import { Input, Menu, Dropdown, Spin } from 'antd';
import { CameraOutlined } from '@ant-design/icons';
import CardItem from '../../../components/card_item/CardItem';
import { CatalogWrapper, CatalogManagerContainer } from './Catalog.styled';
import { getAllCameras, getCamerasByFactoryManufacturer } from '../../../utils/cameraApi';

const { Search } = Input;

const Catalog = () => {
    const [fetching, setFetching] = useState(true);
    const cameras = getAllCameras(setFetching);
    const [cameraItems, setCameraItems] = useState(cameras);
    
    const onSearch = (value) => {
        if(value === "") {
            setCameraItems(cameras);
        } else {    
            const foundCameras = cameraItems.filter((camera) => camera.modelName.includes(value));
            setCameraItems(foundCameras);
        }
    }

    const getCamerasByDefault = () => {
        setCameraItems(cameras);
    }

    const getCanonCameras = () => {
        const canonCameras = cameraItems.filter((camera) => camera.factoryManufacturer === 'Canon');
        setCameraItems(canonCameras);
    }

    const getNikonCameras = () => {
        const nikonCameras = cameraItems.filter((camera) => camera.factoryManufacturer === 'Nikon');
        setCameraItems(nikonCameras);
    }

    const getSonyCameras = () => {
        const sonyCameras = cameraItems.filter((camera) => camera.factoryManufacturer === 'Sony');
        setCameraItems(sonyCameras);
    }

    return (
        <CatalogWrapper>
            <CatalogManagerContainer>
                <Dropdown.Button size="large" overlay={
                    <Menu>
                        <Menu.Item key="1" icon={<CameraOutlined />} onClick={getCamerasByDefault}>
                            All cameras
                        </Menu.Item>
                        <Menu.Item key="2" icon={<CameraOutlined />} onClick={getCanonCameras}>
                            Canon
                        </Menu.Item>
                        <Menu.Item key="3" icon={<CameraOutlined />} onClick={getNikonCameras}>
                            Nikon
                        </Menu.Item>
                        <Menu.Item key="4" icon={<CameraOutlined />} onClick={getSonyCameras}>
                            Sony
                        </Menu.Item>
                    </Menu>
                } placement="bottomCenter" icon={<CameraOutlined color="white" style={{fontSize: "20px"}}/>}>
                    Filter by company name
                </Dropdown.Button>
                <Search addonBefore="ModelName" defaultValue="" placeholder="Search by modelName" 
                allowClear enterButton="Search" color="red" style={{width: "550px"}} size="large" onSearch={onSearch} />
            </CatalogManagerContainer>
            {fetching ? 
                <Spin /> : 
                <>
                    {cameraItems.map(({ id, modelName, factoryManufacturer, productionYear, warrantyWorkPeriodInMonths, countryManufacturer, 
                    material, color, batteryLifeInHours, weightInGrams, isWaterproof, recordFormat, videoResolutionStandart, 
                    videoFrapsPerSecond, viewingAngleInDegrees, videoRecordingSpeedInMbps, hasLcdMonitor, price, image }) => (
                        <CardItem id={id} modelName={modelName} videoResolutionStandart={videoResolutionStandart}
                        factoryManufacturer={factoryManufacturer} productionYear={productionYear} 
                        warrantyWorkPeriodInMonths={warrantyWorkPeriodInMonths} material={material}
                        color={color} countryManufacturer={countryManufacturer} recordFormat={recordFormat}
                        image={image} batteryLifeInHours={batteryLifeInHours} weightInGrams = {weightInGrams}
                        price={price} isWaterproof={isWaterproof} videoFrapsPerSecond={videoFrapsPerSecond} 
                        viewingAngleInDegrees={viewingAngleInDegrees} videoRecordingSpeedInMbps={videoRecordingSpeedInMbps}
                        hasLcdMonitor={hasLcdMonitor} />
                    ))}
                </>
            }
        </CatalogWrapper>
    );
}

export default Catalog;
