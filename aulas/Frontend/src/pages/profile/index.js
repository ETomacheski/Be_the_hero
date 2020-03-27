import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';


import './styles.css';
import api from '../../services/api'

import LogoImg from '../../assets/logo.svg'
import {FiPower, FiTrash2} from 'react-icons/fi'




export default function Profile() {
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const History = useHistory();
    const [incidentes, setIncidentes] = useState([])
    useEffect(()=>{
        api.get('profile',{
            headers:{
                Authorization: ongId,
            }
        }).then(Response => {
            setIncidentes(Response.data);
        })
    },[ongId]);


    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers:{
                    Authorization : ongId,
                }
            });
            setIncidentes(incidentes.filter(incident => incident.id !== id));
        } catch(err) {
            //alert('Erro ao deletar caso, tente novamente');
        }
    }

    function handleLogout(){
        localStorage.clear();

        History.push('/')
    }
    return (
        <div className="profile-container">
            <header>
                <img src={LogoImg} alt="Be the hero"/>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to= "/incidents/new">
                    Cadastrar novo caso
                </Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size= {18} color= '#e02841' />
                </button>
            </header>
            <h1>Casos cadastrados</h1>

            <ul>
                {incidentes.map(incident => (
                    <li key = {incident.id}>
                    <strong>Caso:</strong>
                    <p>{incident.title}</p>
                    <strong>DESCRIÇÃO:</strong>
                    <p>{incident.description}</p>
                    <strong>Valor:</strong>
                    <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</p>


                    <button type= "button" onClick ={()=> handleDeleteIncident(incident.id)} >
                        <FiTrash2 size={20} color= "#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}