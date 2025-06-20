import mongoose from'mongoose'
const locationSchema = new mongoose.Schema({
userId:{
    type:String,
    required: true,
},
city:{
    type: String,
    required: true,
},
state:{
    type: String,
    required: true,
    
},
country:{
    type: String,
    required: true,
    
}
})
export default mongoose.model('Location', locationSchema)

