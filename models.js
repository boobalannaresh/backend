import mongoose from 'mongoose';

const deliveryAgentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: Number, required: true },
    city: { type: String, required: true }
});

const DeliveryAgent = mongoose.model('DeliveryAgent', deliveryAgentSchema);

export default DeliveryAgent;