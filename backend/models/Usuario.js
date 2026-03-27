import { Schema, model } from 'mongoose';

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    documento: {
        type: String,
        required: [true, 'El documento es obligatorio'],
        unique: true
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        match: [/@sanjose\.edu\.co$/, 'El correo debe pertenecer al dominio @sanjose.edu.co']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        // Validación de contraseña: mín 8 carac, una mayúscula, un número y un carácter especial (HUS-02-T3)
        match: [/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial']
    },
    rol: {
        type: String,
        required: true,
        enum: ['Docente', 'Admin'],
        default: 'Docente'
    },
    estado: {
        type: Boolean,
        default: true
    },
    // Lógica de bloqueo tras 3 intentos fallidos (HUS-01-T4)
    loginAttempts: {
        type: Number,
        required: true,
        default: 0
    },
    lockUntil: {
        type: Number
    }
}, {
    timestamps: true
});

// Ocultar password en la respuesta JSON
UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
};

export default model('Usuario', UsuarioSchema);
