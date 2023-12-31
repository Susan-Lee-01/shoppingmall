const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors());

const pingRouter = require('./routes/PingRouter');
const orderRouter = require('./routes/OrderRouter');
const itemsRouter = require('./routes/ItemsRouter');
const userRouter = require('./routes/UserRouter');
const viewsRouter = require('./routes/viewsRouter');
const adminRouter = require('./routes/AdminRouter');

// const { User } = require('./models/User');
// const Item = require('./models/Item');

// const dummy = require('./dummy/dummy.json');
// const dummyItems = require('./dummy/dummyItems.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/views', express.static('views'));
// app.use('/dummy', express.static('dummy'));

// dotenv
console.log(`어플리케이션 서버를 다음 환경으로 시작합니다: ${process.env.NODE_ENV}`);
if (process.env.NODE_ENV === 'dev') {
  dotenv.config({ path: '.env' });
}
if (process.env.NODE_ENV === 'prod') {
  dotenv.config({ path: '.env.prod' });
}

// mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB_NAME,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

// router
app.use('/api/v1/ping', pingRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/items', itemsRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/admins', adminRouter);
app.use(viewsRouter);

// error handling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong.';
  res.status(statusCode);
  res.json({ message });
});

// port
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Connecting to PORT ${port}`);
});
