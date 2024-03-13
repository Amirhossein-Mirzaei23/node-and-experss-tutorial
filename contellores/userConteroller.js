let conteroller=require('./conteroller')
const UserData = require('../models/user')
class userConteroller extends conteroller{
    async getAllUsers(req,res){ 
        let user=await UserData.find({});
        res.render('users', {user,title:'همه کاربران',}
    )}
    //////////  showing only one user 
    async oneUser(req,res){

        let user = await UserData.findById(req.params.id)
            
         res.render('user',{user:user})
    }
    ///////// create user
    async createUser(req,res){
        const result = validationResult(req);
        if (result.isEmpty()) {
          return res.redirect('/user')
        }  
    let newUser= new UserData({
        name:req.body.name
    })
    await newUser.save()
    /// req.flash('massage','کاربر با موفقیت اضافه شد')
    res.redirect('/user')
    }
    ////// update a user
    async updateUser(req,res) {
   
        await UserData.updateMany({_id:req.params.id} , {$set:req.body})
        res.redirect('/user')
    }
    /////// delete a user
    async deleteOneuser(req,res){
    await UserData.deleteOne({_id:req.params.id})
     return res.redirect('/user')
    }            
            
}

module.exports=new userConteroller