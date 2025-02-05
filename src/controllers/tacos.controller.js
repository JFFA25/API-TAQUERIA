import tacoDAO from "../dao/tacos.dao.js";

export const getAll = (req, res) => {
    tacoDAO.getAll()
        .then(tacos => res.render('../src/views/index',{ tacos }))
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
}
    
export const getOne = (req, res) => {
    const no_orden = req.params.no_orden;
    tacoDAO.getOne(no_orden)
        .then(taco => {
            !taco ? res.json({
                 message: "not found" 
                }) : res.render('../src/views/edit', {taco});
        })
        .catch(err => res.json({
            status: "Server Unavailable"
        }));
};


export const insertOne = (req, res) => {
    tacoDAO.insertOne(req.body)
        .then(result => res.redirect('/'))
        .catch(err => {
            console.error(err);
            res.status(500).json({ status: 'Error en el servidor' });
        });
  };


  export const updateOne = (req, res) => {
    tacoDAO
      .updateOne(req.params.no_orden, req.body)
      .then((taco) => {
        !taco
          ? res.console({
              message: "not found",
            })
          : res.redirect("/");
      })
      .catch((err) => res.console({ status: "Server unavaliable"}));
  };

export const deleteOne = (req, res) => {
    tacoDAO
        .deleteOne(req.params.no_orden)
        .then((taco) => {
            !taco
                ? res.json({
                    message: "not found"
                })
            : res.redirect("/");
        })
    .catch(err=>res.json({status: "Servidor no responde"}));
}
