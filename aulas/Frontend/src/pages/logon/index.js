import React, {useState} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';


import api from '../../services/api';
import './styles.css'


import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'


export default function Logon(){
    const  History = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState('');
    
    async function handlelogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session',{email,password});
            console.log(response);
            localStorage.setItem('ongId',response.data.id);
            localStorage.setItem('ongName',response.data.name);
            History.push('/profile');
        
        }catch (err){
            alert('falha no login, tente novamente.');
        }


    }
    return (
        <div className="logon-container">
            <section className="form">
                <img src= {LogoImg} alt="Be The Hero"/>

                <form onSubmit={handlelogin}>
                    <h1>Faça seu logon</h1>

                    <input placeholder= "Seu E-mail"
                    value ={email}
                    onChange ={e => setEmail(e.target.value)}
                    />
                    <input placeholder= "Sua senha"
                    value ={password}
                    type = "password"
                    onChange ={e => setPassword(e.target.value)}
                    />
                    <button type="submit" className="button">Entrar</button>
                    <Link to="/register" className=".black-link" >
                        <FiLogIn size= {16} color ="#E02041"/>
                        Não tenho cadastro
                    </Link>         
                </form>

            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
}