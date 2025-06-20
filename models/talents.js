import mongoose from'mongoose'
const talentSchema = new mongoose.Schema({
userId:{
    type:String,
    required: true,
},
skill:{
    type: String,
    required: true,
    
}
})
export default  mongoose.model('Talent', talentSchema)

