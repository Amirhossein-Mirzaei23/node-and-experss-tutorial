const { query, validationResult } = require('express-validator');
let userInfo=require('../user');
const experess =require('express');
const router=experess.Router()


// api for see all user

router.get('/',(req,res)=> {
    res.render('users',{userInfo})
//res.json({
//    data: userInfo,
//    success: true
//})

})

// api for see only one user

router.get('/:id',(req,res)=> {

    let user = userInfo.find(user=>{
    if ( user.id == req.params.id) {
    return user
    }})





 //  res.json({
 //   data:user,
 //   success:true
 //  })
 res.render('user',{user:user})
})

///
router.post('/',[
    query('id','ای دی معتبر نیست').isLength({min:2}),

    query('name','نام معتبر نیست').isLength({ min:3 })
],(req,res)=> {
    const result = validationResult(req);
    if (result.isEmpty()) {
      return res.redirect('/user')
    }  

userInfo.push(req.body)


/// req.flash('massage','کاربر با موفقیت اضافه شد')
res.redirect('/user')
})


router.put('/:id',(req,res)=> {
   
    userInfo = userInfo.filter(user =>{
        if ( user.id == req.params.id) {
            return req.body.name
        }else{
            return user
        }
    })
   
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
   
   res.redirect('/user')
})
   

router.delete('/:id',(req,res)=>{
    userInfo = userInfo.filter(user =>{
        if (user.id == req.params.id) {
            return null
        }else{
            return user
        }
    })

 ///   res.json({
 ///       data:'delete successfully',
 ///       success:true
 ///   })
 res.redirect('/user')
})

module.exports = router