


const UserCard = ({user, deleteUser ,setInfoUpdate , setIsDisable}) => {

     const handleDelete = () => {
        deleteUser('/users', user.id)
     }

     const handleEdit = () =>{
        setInfoUpdate(user)
        setIsDisable(false)
     }


return(
    <article>
        <h3>{user.first_name}{user.last_name}</h3>
        <ul>
            <li><span>email</span><span> {user.email}</span></li>
            <li><span>birthday</span><span> {user.birthday}</span></li>
        </ul>
        <button onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button onClick={handleEdit}><i className='bx bx-edit-alt'></i></button>
    </article>
)


}

export default UserCard