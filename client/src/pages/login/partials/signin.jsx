import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/atoms/button'
import Input from '../../../components/atoms/input'
import styles from './partials.module.scss'
import { toast } from 'react-toastify';
import utils from '../../../utils/localStorage';


function Signin() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if(!email.length || !password.length ){
            toast.error('Please fill out all fields');
            return;

        }
        fetch("http://localhost:3001/api/users/signin",{
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                email,
                password,
            }),
            method:"POST"
        }).then((res)=>res.json())
        .then((data)=>{
            console.log(data);
            if(data.success===200){

                toast.success('User logged in successfully!');
                utils.addToLocalStorage('auth_key',data.token);
                navigate('/notes');
                
                
            }
            else{
                toast.error(data.message);
            }
        })
        .catch((error)=>{
            console.log(error);
            toast.error('User login failed');
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
                    <Input type="email" placeholder={'Type your email'} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <Input type="password" placeholder={'Type your password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <Button
                    text="Join with email"
                    icon="material-symbols:login"
                    className={styles.emailBtn}
                    handleClick={handleLogin}
                />
                    
                

                </article>
            </div>
    )
}

export default Signin
