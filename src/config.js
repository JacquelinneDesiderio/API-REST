// environment variable (SO)
import {config} from 'dotenv'
config();

export default {
    // si la var de entorno no está definida, opta por el puerto 3000
   port: process.env.PORT || 3000
};