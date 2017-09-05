let users = {
  phil:{
    displayName: 'Phil',
    age:30,
    hair: 'brown',
    height: "5'11"
  },
  danny: {
    displayName: 'Danny',
    age: 31,
    hair: 'black',
    height: "5'8"
  },
  erik: {
    displayName: 'Erik',
    age: 30,
    hair: 'black',
    height: "5'10"
  },
  bob: {
    displayName: 'Bob',
    age: 'd3',
    hair: 'black',
    height: "5'10"
  }
}

const testRoute = (req, res, next)=> {
  res.json({
    test: 'test complete'
  })
}

const getUsers = (req, res, next)=>{
  res.json(users)
}

const getUser = (req, res, next)=>{
  const name = req.params.name
  res.json(users[name] || 'user not found')
}

const addUser =(req, res, next) =>{
  console.log(req.body)
  res.json({}).status(200)
}

module.exports = {
  testRoute,
  getUsers,
  getUser,
  addUser
}