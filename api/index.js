import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import productRoutes from './routes/productRoutes';
import orderRoutes from './routes/orderRoutes';
import ordersItensRoutes from './routes/ordersItensRoutes';
import tableRoutes from './routes/tableRoutes';

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/ordersitens', ordersItensRoutes);
app.use('/api/table', tableRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app


