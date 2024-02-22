
import express from 'express';
import bodyParser from 'body-parser';
import DeliveryAgent from './models.js';
import {connectToDatabase} from "./connection.js"
import cors from 'cors'


const app = express();
const port = 4000;

// // Connect to MongoDB
// const connectToDatabase = async () => {
//     try {
//         await mongoose.connect('mongodb+srv://ukkasnaina99:50Y4XrsXMhHqge5d@projectk.yqods5s.mongodb.net/?retryWrites=true&w=majority&appName=ProjectK', {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });
//         console.log('Connected to MongoDB');
//     } catch (err) {
//         console.error('Error connecting to MongoDB:', err);
//     }
// };

connectToDatabase();
app.use(bodyParser.json());
app.use(cors());


// Routes
app.post('/signup', async (req, res) => {
    try {
        const { name, mobileNumber, email, password, address, pincode, city } = req.body;
        const deliveryAgent = new DeliveryAgent({
            name,
            mobileNumber,
            email,
            password,
            address,
            pincode,
            city
        });
        await deliveryAgent.save();
        res.status(201).json({ message: 'Delivery agent signed up successfully' });
    } catch (error) {
        console.error('Error signing up delivery agent:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});