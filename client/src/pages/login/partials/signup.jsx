/* eslint-disable react/prop-types */
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/button'
import Input from '../../../components/atoms/input'
import styles from './partials.module.scss'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Signup(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    // const navigate = useNavigate();

    const handleSignup = () => {
        if(!email.length || !password.length || !name.length){
            toast.error('Please fill out all fields');
            return;

        }
        fetch("http://localhost:3001/api/users/signup",{
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                email,
                password,
            }),
            method:"POST"
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.success===201){

                toast.success('Signup successful!');
                props.handleSwitch();
            }
            else{
                toast.error(data.message);
            }
        })
        .catch((error)=>{
            console.log(error);
            toast.error('Signup failed');
        })


        
    }
    return (
        <div className={styles.form}>
                <Button
                    text="Join with Google"
                    icon="bi:google"
                    className={styles.google}
                    isDisabled={true}
                />
                <div className={styles.option}>
                    <span>
                        or join with email address
                    </span>
                </div>
                <article className={styles.details}>
                    <Input type="name" placeholder={'Full Name'} value={name} onChange={(e) => setName(e.target.value)} />

                    <Input type="email" placeholder={'Type your email'} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Input type="password" placeholder={'Type your password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Button
                    text="Join with email"
                    icon="material-symbols:login"
                    className={styles.emailBtn}
                    handleClick={handleSignup}
                />
                    
                

                </article>
            </div>
    )
}

export default Signup
