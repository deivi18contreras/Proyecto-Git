import { Schema, model } from 'mongoose';
import bcryptjs from 'bcryptjs';

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    documento: {
        type: String,
        required: [true, 'El documento es obligatorio'],
        unique: true,
        trim: true
    },
    correo: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/@sanjose\.edu\.co$/, 'El correo debe pertenecer al dominio @sanjose.edu.co']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
        // [HUS-02-T3] Política de Seguridad: mín 8 carac, una mayúscula, un número y un carácter especial
        match: [/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/, 'La contraseña debe tener mínimo 8 caracteres, una mayúscula, un número y un carácter especial']
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

// Hashing the password before saving (HUS-02-T3)
UsuarioSchema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    
    try {
        const salt = bcryptjs.genSaltSync();
        this.password = bcryptjs.hashSync(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

// Ocultar password en la respuesta JSON
UsuarioSchema.methods.toJSON = function() {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
};

export default model('Usuario', UsuarioSchema);
