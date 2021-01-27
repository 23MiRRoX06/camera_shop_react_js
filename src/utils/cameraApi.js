import axios from 'axios';
import eos_r6 from '../assets/images/item_covers/eos_r6.jpg';
import eos_1dx from '../assets/images/item_covers/eos_1d_x_mark_iii.jpg';
import nikon_d5600 from '../assets/images/item_covers/nikon_d5600.jpg';
import sony_a5100 from '../assets/images/item_covers/sony_a5100.jpg';

const cameraCovers = [eos_r6, nikon_d5600, eos_1dx, sony_a5100];
const cameraPrices = [1390, 3099, 7449, 489];

const setCameraImageAndPrice = (camera) => {
    switch(camera.factoryManufacturer) {
        case 'Canon':
            if(camera.modelName === 'EOS R6') {                      
                camera.image = cameraCovers[0];
                camera.price = cameraPrices[0];
            } else {
                camera.image = cameraCovers[2];
                camera.price = cameraPrices[2];
            }
            break;
        case 'Nikon':
            camera.image = cameraCovers[1];
            camera.price = cameraPrices[1];
            break;
        case 'Sony':
            camera.image = cameraCovers[3];
            camera.price = cameraPrices[3];
            break;
    }
}

export const getAllCameras = (setFetching) => {
    const cameras = [];
    axios.get("http://localhost:8083/cameras")
    .then(response => {
        response.data.forEach(camera => {
            setCameraImageAndPrice(camera);
            cameras.push(camera);
        });
    })
    .then(() => setFetching(false))
    .catch(error => console.log(error));

    return cameras;
}

export const getCamerasByFactoryManufacturer = factoryManufacturer => {
    const filteredCameras = [];
    axios.get("http://localhost:8083/cameras", {
        params: {
            factoryManufacturer: factoryManufacturer
        }
    })
    .then(response => {
        response.data.forEach(camera => {
            setCameraImageAndPrice(camera);
            filteredCameras.push(camera);
        });
    })
    .catch(error => console.log(error));

    return filteredCameras;
}
