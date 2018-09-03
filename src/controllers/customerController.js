const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM BIBLIOTECA', (err, customers) => {
     if (err) {
      res.json(err);
     }
     res.render('customers', {
        data: customers
     });
    });
  });
};

controller.save=(req, res)=>{
  req.getConnection((error, conectar)=>{
    const datos=req.body;
    conectar.query('Insert into BIBLIOTECA set ?',datos,(error, data)=>{
      if(error) throw error;
      res.redirect('/')
    })
  });

}

controller.edit = (req, res) => {
  const  id = req.params.idBiblioteca;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM BIBLIOTECA WHERE idBiblioteca = ?", [id], (err, rows) => {
      res.render('customers_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const id = req.params.idBiblioteca;
  const newCustomer = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE BIBLIOTECA set ? where idBiblioteca = ?', [newCustomer, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const  id= req.params.idBiblioteca;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM BIBLIOTECA WHERE idBiblioteca = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
