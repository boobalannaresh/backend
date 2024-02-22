import mongoose from 'mongoose';


// Connect to MongoDB
export const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb+srv://username:passwordenter@databases.lyvnjh1.mongodb.net/shersha?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
};