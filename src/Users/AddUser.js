import React,{useState} from 'react'
import styles from './AddUser.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {

    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [error,setError] = useState();

    const handleSubmit = (event) =>
    {
       event.preventDefault();
       if(name.trim().length === 0 || age.trim().length === 0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
        }
        )
        return;
       }
       if(+age < 1){
        setError(
            {
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
            }
        )
        return;
       }
       props.onAddUser(name,age);
       setName("");
       setAge("");
    }
   
    const nameChangeHandler = (event) =>{
       setName(event.target.value);
    }
    const ageChangeHandler = (event) =>{
        setAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }

  return (
    <div>
         {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
    <Card className={styles.input}>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" placeholder='Enter Your Name' value={name} onChange={nameChangeHandler}/>
        <label htmlFor='age'>Age</label>
        <input type="text" placeholder='Enter Your Age' value={age} onChange={ageChangeHandler}/>
         <Button type="submit"
         >ADD</Button>
    </form>
    </Card>
</div>
  )
}

export default AddUser