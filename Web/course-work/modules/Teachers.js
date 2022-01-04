const {Schema,model,Types} = require('mongoose')

const schema = new Schema({
    Name:{type:String,required:false,unique:false},
    Surname:{type:String,required:false,unique:false},
    Patronym:{type:String,required:false,unique:false},
    ImgUrl:{type:String,required:false,unique:false},
    AboutTeacher:{type:String,required:false,unique:false},

})

module.exports = model('Teachers', schema)