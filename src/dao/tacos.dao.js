import Taco from "../models/tacos.model.js"

const tacoDAO = {};

tacoDAO.getAll = async () => {
    
    const Tacos = await Taco.find();
    return Tacos;
}

tacoDAO.getOne = async (no_orden) => {
    const taco = await Taco.findOne({no_orden: no_orden});
    return taco;
}

tacoDAO.insertOne = async (taco) => {
    return await Taco.create(taco);
}

tacoDAO.updateOne = async (no_orden, taco) => {
    return await Taco.findOneAndUpdate({no_orden: no_orden}, taco)
}

tacoDAO.deleteOne = async (no_orden) => {
    return await Taco.findOneAndDelete({no_orden: no_orden})
}

export default tacoDAO;