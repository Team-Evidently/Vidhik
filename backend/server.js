import express from 'express';
import router from './routes';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import sequelize_db from './utils/sequelize.util';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
global.appRoot = path.resolve(__dirname);
app.use(express.json());
app.use('/', router);

(async () => {
  try {
    // Connecting to Database
    await sequelize_db.authenticate();
    await sequelize_db.sync({ alter: false });
    console.log("Connection has been established successfully with PostgreSQL Sequelize Database");
  } catch (e) {
    console.log(e);
  }
})();

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App Running at Port ${PORT}`);
});
