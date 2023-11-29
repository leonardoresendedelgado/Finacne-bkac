import mongoose from 'mongoose';
const Senha = "Fanu311015!"
async function conectDataBase() {
    try {
        await mongoose.connect(process.env.HOST_DBCONECT);
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
export default conectDataBase;