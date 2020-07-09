module.exports = (app)=>{
    const StudentService = require("../services/students");
    const usersInfo = new StudentService()

  app.get('/data', async(req, res) => {
    await usersInfo.getAll().then((data)=>{
      res.send(data);

    }).catch((err)=>{
      res.send(err.message);
    })
  })
  app.post('/create',async(req,res)=>{
    await usersInfo.createUser(req.body).then((data)=>{
      res.send(data)
    }).catch((err)=>{
      res.send(err.message)
    })
  })    
  app.get('/user_id',async(req,res )=>{
    await usersInfo.getById(req.body.user_id).then((data)=>{
      res.send(data)
    }).catch((err=>{  
      res.send(err.message);
    }))
   })

   app.put('/update/:user_id',async(req,res)=>[
    await usersInfo.StudentUpdate(req.params.user_id,req.body).then((data)=>{
      res.send(data)
    }).catch((err)=>{
      res.send(err.message)
    })
  ])
}   