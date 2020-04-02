import React , {useState} from 'react';
import {Link , useHistory} from 'react-router-dom';
import {FiArrowDownLeft} from 'react-icons/fi';

import LogoImg from '../../assets/logo.svg'

import api from '../../services/api';
import './styles.css';

export default function Register(){
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [whatsapp, setwhatsapp] = useState('');
    const [city, setcity] = useState('');
    const [uf, setuf] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    async function handleRegister(e){
        e.preventDefault();
       const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
            password
       };
       
        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso : ${response.data.id}`);
            history.push('/')
        } catch(err){
            alert('Erro no cadastro, tente novamente')
        }
    }
    return (
        <div className="register-conteiner">
            <div className="content">
                <section>
                   <img src={LogoImg} alt="Be de Hero"/> 
                    <h1>
                        cadastro
                    </h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG
                    </p>
                    <Link to="/" className=".black-link" >
                        <FiArrowDownLeft size= {16} color ="#E02041"/>
                        Não tenho cadastro
                    </Link> 
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder= "Nome da ONG" 
                    value={name} 
                    onChange= {e => setname(e.target.value)} />


                    <input type= "email" placeholder = "E-mail"
                    value={email} 
                    onChange= {e => setemail(e.target.value)}/>
                     <input type= "password" placeholder = "Senha"
                    value={password} 
                    onChange= {e => setPassword(e.target.value)}/>


                    <input placeholder="whatsApp" 
                    value={whatsapp} 
                    onChange= {e => setwhatsapp(e.target.value)}
                    />


                    <div className="input-group">
                        <input placeholder="Cidade" 
                        value={city} 
                        onChange= {e => setcity(e.target.value)}/>


                        <input placeholder= "UF" 
                        style={{width: 80}} 
                        value={uf} 
                        onChange= {e => setuf(e.target.value)}/>

                    </div>
                    <button className = "button" type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    );
}