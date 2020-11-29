const express = require("express");
const app = express();
const bodyParser = require("body-parser");
let halls = [];
let customers = []
let orders = []

app.use(bodyParser.json());

//create a get for all halls
app.get("/halls", (req, res) => {
    res.json(halls);
});

//create a get for all customers
app.get("/customers", (req, res) => {
    res.json(customers);
});

//create a get for all orders
app.get("/orders", (req, res) => {
    res.json(orders);
});


//post hall
app.post("/hall", (req, res) => {
    console.log(req.body);

    req.body.id = halls.length + 1;
    halls.push(req.body);
    res.json({
        message: "hall created",
    });
});

//get hall from halls
app.get("/hall/:id", (req, res) => {
    let hallDetails = halls.find((obj) => obj.id == req.params.id);
    if (hallDetails) {
        res.json(hallDetails)
    } else {
        res.status(404).json({
            message: "Hall not found"
        })
    }
});

//edit halls using id

app.put("/hall/:id", (req, res) => {
    let hallId = halls.findIndex((obj) => obj.id == req.params.id);
    console.log(hallId)
    if (hallId !== -1) {

        req.body.id = parseInt(req.params.id)
        if (req.body.name) {
            halls[hallId].name = req.body.name
          
        }
        if (req.body.sqft) {
            halls[hallId].sqft = req.body.sqft
          
        }
        if (req.body.numberOfSeats) {
            halls[hallId].numberOfSeats = req.body.numberOfSeats
         
        }
        if (req.body.pricePerHour) {
            halls[hallId].pricePerHour = req.body.pricePerHour
          
        }

        res.json({
            message: "Hall details updated"
        })

    } else {
        res.status(404).json({
            message: "Hall not found"
        })
    }

});


//delete halls using id
app.delete("/hall/:id", (req, res) => {
    let hallId = halls.findIndex((obj) => obj.id == req.params.id);
    if (hallId !== -1) {
        halls.splice(hallId, 1)
        res.json({
            message: "Hall removed"
        })
    } else {
        res.status(404).json({
            message: "Hall not found"
        })
    }
});


//post customer data 
app.post("/customer", (req, res) => {
    req.body.id = customers.length + 1
    customers.push(req.body)
    res.json({
        message: "customer created"
    })
})


//get customer from customer list

app.get("/customer/:id", (req, res) => {
    let customerDetails = customers.find((obj) => obj.id == req.params.id)
    if (customerDetails) {
        res.json(customerDetails)
    } else {
        res.status(404).json({
            message: "customer not found"
        })
    }
})


//edit customer using id

app.put("/customer/:id", (req, res) => {
    let customerIndex = customers.findIndex((obj) => obj.id == req.params.id)
    console.log(customerIndex)
    if (customerIndex !== -1) {
        req.body.id = parseInt(req.params.id)

        if (req.body.name) {
            customers[customerIndex].name = req.body.name
            res.json({
                message: "Customer details edited"
            })
        }

        if (req.body.email) {
            customers[customerIndex].email = req.body.email
            res.json({
                message: "Customer details edited"
            })
        }

        if (req.body.phone) {
            customers[customerIndex].phone = req.body.phone
            res.json({
                message: "Customer details edited"
            })
        }


    } else {
        res.status(404).json({
            message: "Hall not found"
        })
    }
})

//delete customer using id
app.delete("/customer/:id", (req, res) => {
    let customerIndex = customers.findIndex((obj) => obj.id == req.params.id)
    if (customerIndex !== -1) {
        customers.splice(customerIndex, 1)
        res.json({
            message: "customer removed"
        })
    } else {
        res.status(404).json({
            message: "customer not found"
        })
    }
})



//post an order

app.post("/order",(req,res)=>{
    req.body.id = orders.length+1
    orders.push(req.body)
    res.json({
        message: "order created",
    });
})


//get order from orders

app.get("/order/:id", (req, res) => {
    let orderDetails = orders.find((obj) => obj.id == req.params.id);
    if (orderDetails) {
        res.json(orderDetails)
    } else {
        res.status(404).json({
            message: "Order not found"
        })
    }


    
});

//edit order using id
app.put("/order/:id", (req, res) => {
    let orderId = orders.findIndex((obj) => obj.id == req.params.id);
    console.log(orderId)

    if(orderId!==-1){
        req.body.id = parseInt(req.params.id)
        if (req.body.hId) {
            orders[orderId].hId = req.body.hId
          
        }
        if (req.body.cusId) {
            orders[orderId].cusId = req.body.cusId
          
        }
        if (req.body.startDate) {
            orders[orderId].startDate = req.body.startDate
         
        }
        if (req.body.endDate) {
            orders[orderId].endDate = req.body.endDate
          
        }
        if (req.body.totalAmnt) {
            orders[orderId].totalAmnt = req.body.totalAmnt
          
        }

        res.json({
            message: "order details updated"
        })
    }else {
        res.status(404).json({
            message: "order not found"
        })
    }

})

app.delete("/order/:id", (req, res) => {
    let orderIndex = orders.findIndex((obj) => obj.id == req.params.id)
    if (orderIndex !== -1) {
        orders.splice(orderIndex, 1)
        res.json({
            message: "order removed"
        })
    } else {
        res.status(404).json({
            message: "order not found"
        })
    }
})



app.listen(3001, () => {
    console.log("Server initiated");
});