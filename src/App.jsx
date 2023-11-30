import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './hooks/useCrud.js'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'


function App() {

  const [infoUpdate, setInfoUpdate]= useState()
  const [isDisable, setIsDisable] = useState(false)


  const url = 'https://users-crud.academlo.tech'
  const [ users , getUsers , createUser , deleteUser , updateUser ]= useCrud(url)
  
    useEffect(()=>{
      getUsers('/users')
    },[])

    console.log(users);

    const handleNewUser = () =>{
      setIsDisable(false)
    }

   console.log(isDisable)
    return (
      
      <div>
        <h1>users</h1>
        <button onClick={handleNewUser} className='form__btn'>Create new user</button>
       <FormUser
       createUser={createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       isDisable={isDisable}
       setIsDisable={setIsDisable}
       />
       <div>
        {
          users?.map(user =>(
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setInfoUpdate={setInfoUpdate}
            setIsDisable={setIsDisable}
            />
          ))
        }
       </div>
      </div>
      
    )
  }


export default App
