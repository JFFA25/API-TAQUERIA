import { Schema, model } from "mongoose";

const tacoSchema = new Schema({
    no_orden: {
        type: Number,
        unique: true,
        required: true
    },
    cantidad: Number,
    descripcion: String,
    cilantro: Number,
    cebolla: Number,
    salsa: Number,
    total: Number,
},
{
    versionKey: false,
    timestamps: true
});

export default model ('tacos', tacoSchema);