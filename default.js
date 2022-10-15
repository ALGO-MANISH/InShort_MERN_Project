import {data} from './constants/Data.js'
import News from './constants/model/new-schema.js';

const DefaultData=async() => {
    try{
        await News.insertMany(data);
        console.log('data imported successfully');

    }catch(error){
        console.log('Error',error.message);
    }
}

export default DefaultData;