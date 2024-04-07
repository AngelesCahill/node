import app from './app.js';
import { sequelize } from '../database/database.js';


async function main() {
    try {
        await sequelize.sync(); // crea las tablas creadas en Project.js y Task.js de carpeta models e importadas a index.js y force: true creada la tabla y borra la versión anterior. Con alter: true mantiene la tabla anterior y la actualiza solamente.
        app.listen(3000);
        console.log(`Server listening on port 3000`);
    } catch (error) {
        console.log('Unable to connect to the database');
    }

}
main();
