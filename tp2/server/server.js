var express = require("express")
var app = express()

// tableau de produit vide
var products = []


// 1. Ajouter un produit (POST /products)
// curl -X POST "http://localhost:3000/products?name=Produit1&price=100"

app.post("/products", function (req, res) {
    product = {
        name: req.query.name,
        price: req.query.price
    }

    products[products.length] = product

    res.status(201).json(product)
})

// 2. Récupérer tous les produits (GET /products)
// curl -X GET "http://localhost:3000/products"

app.get("/products", function (req, res) {
    res.json(products)
})


// 3. Récupérer un produit par ID (GET /products/:id)
// curl -X GET "http://localhost:3000/products/0"

app.get("/products/:id", function (req, res) {
    res.json(products[req.params.id])
})


// 4. Mettre à jour un produit (PATCH /products/:id)
// curl -X PATCH "http://localhost:3000/products/0?name=NouveauNom&price=150"

app.patch("/products/:id", function (req, res) {
    if (req.query.name) {
        products[req.params.id]["name"] = req.query.name
    }

    if (req.query.price) {
        products[req.params.id]["price"] = req.query.price
    }

    res.json(products[req.params.id])
})

// 5. Supprimer un produit (DELETE /products/:id)
// curl -X DELETE "http://localhost:3000/products/0"

app.delete("/products/:id", function (req, res) {
    // products[req.params.id] = {}
    products.splice(req.params.id, 1);
    res.json(req.params.id)
})

// lance le serveur
app.listen(3000, () => {
    console.log("En attente de requêtes...")
})

