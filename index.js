const http = require('http')

const menProducts = [
    {
        "id": "1",
        "name": "Men's T-shirt",
        "brand": "spark",
        "price": 1500,
        "color": "black-yellow",
        "size":  "M",
        "categoty" : "clothing"
    }
];
const womenProducts = [
    {
        "id": "1",
        "name": "lehenga",
        "brand": "ABC",
        "price": 15000,
        "color": "red",
        "size":  "XL",
        "categoty" : "clothing"
    }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')

    if(req.url === '/'){
        res.statusCode = 200
        res.end(JSON.stringify({message:"Welcome to men & women dummy data"}))
    }
    else if(req.url === '/men'){
        req.statusCode = 200
        res.end(JSON.stringify(menProducts))
    }
    else if(req.url === '/women'){
        req.statusCode = 200
        res.end(JSON.stringify(womenProducts))
    }
    else{
        res.statusCode = 404
        res.end(JSON.stringify({error: "Page not found"}))
    }
})
const PORT = 8080

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})