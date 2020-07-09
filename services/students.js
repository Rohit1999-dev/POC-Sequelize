const { students, users } = require('../models');
// console.log(students);



const student = require('../models/student');

module.exports = class StudentService{
    constructor(db) {
        this.db = db || students
}
// Get the all data from student table
async getAll() {
    const studentData = await this.db.findAll()
    return studentData;
  }
//Create student details
  async createUser(details) {
    const students = await this.db.create(details)
    return students;
  }

  // Get only one data
  async getById(user_id) {  
    this.db.belongsTo(users,{foreignKey:"user_id"});
    users.hasMany(this.db,{foreignKey:"id"})  
    const student = await this.db.findOne({ where: {
      user_id
    }, include:[users]
  }) 
    return student;
  }

  async StudentUpdate(user_id, details) {
    await this.db.update(
        details, {
            where: { user_id }
    })
    return this.getById(user_id)
}

}