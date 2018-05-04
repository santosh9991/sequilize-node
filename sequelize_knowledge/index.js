const Sequelize = require('sequelize');//use the third part module


const Process = require('process');
// console.log(Process.env)
const sequelize = new Sequelize(Process.env.localdb,{define: {
    timestamps: false, // true by default
    freezeTableName: true
  }});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const User = sequelize.define('User',{
  firstName:{
    type: Sequelize.STRING
  },
  lastName:{
    type: Sequelize.STRING
  }
})
const Employee = sequelize.define('employee',{
  departmentId: {
    type: Sequelize.INTEGER
  },
  employeeId:{
    type: Sequelize.INTEGER
  },
  firstName:{
    type: Sequelize.STRING
  },
  lastName:{
    type: Sequelize.STRING
  }
})
const Department = sequelize.define('department',{
  department_id: {
    type: Sequelize.INTEGER,
     primaryKey: true
  },
  department_name:{
    type: Sequelize.STRING
  }
})

Department.findAll().then(users =>{
  console.log("Employees:::::",users)
})
// Employee.findAll().then(users =>{
//   console.log("Employees:::::",users)
// })

// User.sync({force:true}).then(()=>{
//   return User.create({
//     firstName: 'santosh',
//     lastName: 'kesireddy'
//   }
//   )
// })
function createUsers(userObj){
  User.create({firstName:"krishna",lastName:"Kesireddy"}).then(user=>{
    console.log(user)
  })
}
function distroyUsers(userId){
  User.destroy({where:{id:userId}}).then(status=>{
    if(status){
      console.log("user successfully deleted");
    }
    else if(!status){
      console.log("user does not exist or error")
    }
  })
}
// distroyUsers(2);
// User.findAll().then(users =>{
//   console.log(users)
// })
