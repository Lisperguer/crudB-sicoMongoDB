const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://lisperguer:asdf123@cluster0.s7crzzu.mongodb.net/?retryWrites=true&w=majority')


//Estamos definiendo las tablas, el objeto y las características del objeto
const User = mongoose.model('User', {
  username: String,
  edad: Number,
})

const crear = async () => {
  const user = new User({ username: 'chanchito feliz', edad: 15})
  const savedUser = await user.save()
  console.log(savedUser)
}

// crear()

const buscarTodo = async () => {
  const user = await User.find()
  console.log(user)
}

// buscarTodo()

const buscar = async () => {
  const user = await User.find({username: 'chanchito feliz'})
  console.log(user)
}

//  buscar()

const buscarUno = async () => {
  const user = await User.findOne({username:'chanchito feliz'})
  console.log(user)
}

// buscarUno()

const actualizar = async () => {
  const user = await User.findOne({username: 'chanchito feliz'})
  user.edad = 30
  await user.save()
  console.log(user)
}

// actualizar()

const eliminar = async () => {
  const user = await User.findOne({username:'chanchito feliz'})
  console.log(user)
  if (user){
    await user.remove()
  }
}

eliminar();