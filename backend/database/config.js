import mongoose from 'mongoose';

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('✅ Base de datos online - Colegio San José');
    } catch (error) {
        console.error('❌ Error al iniciar la base de datos:', error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }
};
