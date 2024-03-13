const { query, validationResult } = require('express-validator');
let userInfo=require('../user');
const experess =require('express');
const router=experess.Router()
const UserData=require('../models/user')
const userConteroller= require('../contellores/userConteroller.js')
// api for see all user

router.get('/', userConteroller.getAllUsers.bind(userConteroller)
//res.json({
//    data: userInfo,
//    success: true
//})
)

// api for see only one user

router.get('/:id',userConteroller.oneUser.bind(userConteroller)



 //  res.json({
 //   data:user,
 //   success:true
 //  })
)

///
router.post('/',[
    query('id','ای دی معتبر نیست').isLength({min:2}),

    query('name','نام معتبر نیست').isLength({ min:3 })
],userConteroller.createUser.bind(userConteroller))


router.put('/:id',userConteroller.updateUser.bind(userConteroller)
    
   
   //  userInfo = userInfo.map(user =>{
   //      if (user.id == req.params.id) {
   //      return req.body
   //  }else{
   //      return user
   //  }
   // res.json({
   //  data:`با موفقیت بروزرسانی شد `,
   //  success: true
   //          })
   
)
   

router.delete('/:id',userConteroller.deleteOneuser.bind(userConteroller))

module.exports = router