    const {Schema,model,Types} = require('mongoose')

    const schema = new Schema({
        Name:{type:String,required:false,unique:false},
        difficulty:{type:String,required:false,unique:false},
        ClassFil:{type:String,required:false,unique:false},
        category:{type:String,required:false,unique:false},
        price:{type:Number,required:false,unique:false},
        Classes:{type:Number,required:false,unique:false},
        imgUrl:{type:String,required:false,unique:false},
        CategoryNum:{type:Number},
        SortNum:{type:Number},
    })
    
    module.exports = model('Courses', schema)