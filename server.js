const express = require('express')
const app = express()
const port = 6000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const ProductRoutes=require("./routes/ProductRoutes")
const CategoryRoute=require("./routes/CategoryRoute")
const UserRoute=require("./routes/UserRoute")
const OrderRoute=require("./routes/OrderRoute")

// database link
require("./config/database")
app.use("/api/product",ProductRoutes)
app.use("/api/category",CategoryRoute)
app.use("/api/user",UserRoute)
app.use("/api/order",OrderRoute)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))