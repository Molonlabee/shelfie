//FUNCTIONS

//GET
function searchProduct(req, res){
  const db = req.app.get('db')

  db.searchProduct().then(response => {
      res.status(200).json(response)
  })
}
//ADD
function addProduct(req, res){
  const db = req.app.get('db')
  const {name, price, url} = req.body

  db.addProduct(name, price, url).then(response => {
      res.status(200).json(response)
  })
}

//PUT
function updateProduct(req, res){
  const db = req.app.get('db')
  const {name, price, url} = req.body
  const user_id = +req.params.user_id

  db.updateProduct(name, price, url).then(response => {
      res.status(200).json(response)
  })
}

//DELETE
function deleteProduct(req, res){
  const db = req.app.get('db')
  const user_id = +req.params.user_id

  db.deleteProduct(user_id).then(response => {
      res.status(200).json(response)
  })
}

 module.exports = {
     searchProduct,
     addProduct,
     updateProduct,
    deleteProduct
 }