const {Router} = require('express')
const Teachers = require('../modules/Teachers')
const Courses = require('../modules/Courses')
const router = Router()
const config = require('config')

router.post(
    '/teachers',
    async (req, res)=>{ try {
        let teach =  await Teachers.find()
        return res.set('text/array').send(teach)
    } catch (e) {
       res.status(500).json({message:'Что-то пошло не так, попробуйте снова'}) 
    }
})

router.post(
    '/course',
      async (req, res)=>{ try {
        const {category, sortPopItems}= req.body 
        let Course=[]
        if ((sortPopItems==null) &&(category==null)){ 
             Course = await Courses.find();
          }
        else if ((sortPopItems==null)){Course= await Courses.find({CategoryNum:category}) }
        else if ((category==null)) {Course=await Courses.find({SortNum:sortPopItems})}
        else{ Course=await Courses.find({SortNum:sortPopItems, CategoryNum:category})}
        return res.set('text/array').send(Course)
    } catch (e) {
       res.status(500).json({message:'Что-то пошло не так, попробуйте снова'}) 
    }
})

module.exports=router

