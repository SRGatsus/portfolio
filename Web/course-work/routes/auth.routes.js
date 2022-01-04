const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt= require('jsonwebtoken')
const {check,validationResult} = require('express-validator')
const User = require('../modules/User')
const Teachers = require('../modules/Teachers')
const Courses = require('../modules/Courses')
const router = Router()


const itemsTeachers=[{
    Name:'Наташа',
    Surname:'МУСИХИНА ',
    Patronym:'Сергеевна',
    ImgUrl:'https://placehold.it/335px435',
    CourseTeacher:[{
        CourseName:'Творческий курс',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },
    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },    {
        CourseName:'Летняя туника',
        CourseId:'',
    },
    {
        CourseName:'Платье-рубашка из шитья',
        CourseId:'',
    },],
    AboutTeacher:'С другой стороны рамки и место обучения кадров требуют от нас анализа форм развития. Задача организации, в особенности же дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений. Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции играет важную роль в формировании существенных финансовых и административных условий.'
},
{
    Name:'Алена',
    Surname:'ПОДКОВЫРИНА',
    Patronym:'Дмитриевна',
    ImgUrl:'https://placehold.it/335px435',
    CourseTeacher:[{
        CourseName:'Платье из фатина',
        CourseId:'',
    },
    {
        CourseName:'3 вида обработки шлицы в изделии',
        CourseId:'',
    },
    {
        CourseName:'КЕЙП. Тренд сезона!',
        CourseId:'',
    }],
    AboutTeacher:'Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации модели развития. Равным образом постоянный количественный рост и сфера нашей активности способствует подготовки и реализации направлений прогрессивного развития.'
},
{
    Name:'Инесса',
    Surname:'Изосимова',
    Patronym:'Сергеевна',
    ImgUrl:'https://placehold.it/335x437',
    CourseTeacher:[{
        CourseName:'Парка: женская куртка с капюшоном',
        CourseId:'',
    },
    {
        CourseName:'Пошив из тканей дабл',
        CourseId:'',
    },
    {
        CourseName:'Обтачная петля',
        CourseId:'',
    }],
    AboutTeacher:'Повседневная практика показывает, что консультация с широким активом требуют определения и уточнения соответствующий условий активизации. Не следует, однако забывать, что начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение систем массового участия. Идейные соображения высшего порядка, а также консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.'
}
];

const OneCourseItem=[
    {name:'Корректировка выкроек плечевых изделий. Часть 2',
    difficulty:'Сложное',
    ClassFil:'hard',
    category:'Конструирование',
    price:1999,
    Classes:20,
    imgUrl:'img/fit_390_300_false_q90_35362_612d0db4211249a069ec41588.webp'
    },
    {name:'Корректировка выкроек поясных изделий: юбка',
    difficulty:'Легкий',
    ClassFil:'easy',
    category:'Конструирование',
    price:1999,
    Classes:7,
    imgUrl:'img/fit_390_300_false_q90_23842_5abf8a3700c61a8c39641d066.webp'
    },
    {name:'Корректировка выкроек поясных изделий: брюки',
    difficulty:'Легкий',
    ClassFil:'easy',
    category:'Конструирование',
    price:1999,
    Classes:7,
    imgUrl:'img/fit_390_300_false_q90_23632_03b61758bcb696fb55afcd825.webp'
    },
    {name:'Сарафан по мотивам Dolce&Gabbana',
    difficulty:'Средний',
    ClassFil:'middle',
    category:'Шитье',
    price:1999,
    Classes:13,
    imgUrl:'img/fit_390_300_false_q90_13222_d1df9a9530.webp'
    }
]

// /api/auth/register
router.post(
    '/register',
    [
        check('email','Некорректный данные').isEmail(),
        check('password','Минимальная длина пароля 6 символов').isLength({min:6})
    ],
    async (req , res)=>{
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'Некорректный данные при регистрации'
            })
        }

       const {Name,Surname, email , password}= req.body

       const  candidate = await User.findOne({email})

       if (candidate) {
          return res.status(400).json({message:'Такой пользователь уже существует'})
       }
      
       const hashedPassword = await bcrypt.hash(password,12)
       const user = new User ({Name,Surname,email,password:hashedPassword})

       await user.save()
       res.status(201).json({message:'Пользователь создан'})
       return res.redirect('/')

    } catch (e) {
       res.status(500).json({message:'Что-то пошло не так, попробуйте снова'}) 
    }
})


// /api/auth/login
router.post(
    '/login',
    [
        check('email','Некорректный данные').normalizeEmail().isEmail(),
        check('password','Минимальная длина пароля 6 символов').exists()
    ],
    async (req , res)=>{
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors:errors.array(),
                message:'Некорректный данные при входе в систему'
            })
        }

       const { email , password}= req.body

       const  user = await User.findOne({email})

       if (!user) {
          return res.status(400).json({message:'Такой пользователь не существует'})
       }
      
       const isMatch = await bcrypt.compare(password,user.password)
      if (!isMatch){
        return res.status(400).json({message:'Некорректный данные'})
      }
      const token = jwt.sign({
          userId:user.id,
          course:user.course,
          Name:user.Name
      },
      config.get('jwtSecret'),
      {expiresIn:'1h'}
      )

      res.json({token,userId:user.id}) 

    } catch (e) {
       res.status(500).json({message:'Что-то пошло не так, попробуйте снова'}) 
    }
})




module.exports=router