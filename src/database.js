const server = process.env.DATABASE_SERVER
const database = "T2203E"  //if use online mongodb
let mongoose = require("mongoose")

class Database{
    constructor() {
        this.__connect();
    }
    __connect(){
        mongoose.connect(`${server}/${database}`)
            .then(()=>{
                console.log("Connected database!")
            })
            .catch((err)=>{
                console.log(err)
            })
    }
}
module.exports = new Database();