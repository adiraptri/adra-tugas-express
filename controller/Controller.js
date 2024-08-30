import db from "../connection.js";

export const getLaptop = (req,res) => {
    const sql = "SELECT * FROM laptop";
    db.query(sql, (error, result) => {
        res.send(result);
    });
};

export const getLaptopById = (req,res) => {
    const sql = `SELECT * FROM laptop WHERE id = ${req.params.id}`;
    db.query(sql, (error, result) => {
        if(error){
            req.status(400);
            res.send(error);
        }
        res.status(200);
        res.json(result)
    });
};

export const postLaptop = (req, res) => {
    const {merk_laptop, harga_laptop} = req.body
    const sql = "INSERT INTO laptop (merk_laptop, harga_laptop) VALUES (?,?)"
    db.query(sql, [merk_laptop, harga_laptop], (error, result) => {
        if(error){
            req.status(400);
            res.send(error);
        }
        res.status(200);
        res.json(result)
    });
};

export const creatLaptop = (req, res) => {
    const data = req.body
    const sql = "INSERT INTO laptop SET ?"
    db.query(sql, data, (error, result) => {
        if(error){
            req.status(400);
            res.send(error);
        }
        res.status(200);
        res.json(result)
    });
};

export const putLaptop = (req, res) => {
    const data = { ...req.body };
  const querySearch = `SELECT * FROM laptop WHERE id = ${req.params.id}`;
  const queryUpdate = `UPDATE laptop SET ? WHERE id = ${req.params.id}`;

  db.query(querySearch, req.params.id, (err, rows, field) => {
    if (err) {
      return res.status(500).json({ message: "Ada kesalahan", error: err });
    }

    if (rows.length) {
      db.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
        if (err) {
          return res.status(500).json({ message: "Ada kesalahan", error: err });
        }

        res
          .status(200)
          .json({ success: true, message: "Berhasil update data!" });
      });
    } else {
      return res
        .status(404)
        .json({ message: "Data tidak ditemukan!", success: false });
    }
  });
};

export const deleteLaptop = (req, res) => {
    const id = req.query.id
    const sql = `DELETE FROM laptop WHERE id = ${req.params.id}`
    db.query(sql, [id], (error, result) => {
        if(error){
            req.status(400);
            res.send(error);
        }
        res.status(200);
        res.json("data berhasil di hapus");})
    }
    
