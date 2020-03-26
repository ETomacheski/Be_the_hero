import React, { useEffect, useState } from 'react';
import {View,Image,FlatList,Text, TouchableOpacity}   from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import LogoImg from '../../assets/logo.png'
import Styles from './styles';


import api from '../../services/api';

export default function Incidents (){
    const [incidents,setInsidents]  =useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading,setLoading]= useState(false);
    const navigation = useNavigation();

    


    function navigationToDetail(incident){
        navigation.navigate('Detail', {incident});
    }

    async function loadIncidents(){
        if (loading){
            return;
        }

        if(total > 0 && incidents.length == total){
            return;
        }
        setLoading(true);

        const response = await api.get('incidents',{
            params: {page}
        });

        setLoading(false);
        setInsidents([...incidents,...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }


    useEffect(()=> {
        loadIncidents();
    },[]);
    
    
    return (

        <View  style={Styles.container}>

           <View style={Styles.header}>
            <Image source={LogoImg} />
                <Text style={Styles.headerText}>
                    Total de <Text style={Styles.headerTextBold}>{total} Casos.</Text>
                </Text>
                
           </View>
           <Text style={Styles.title}>
                    Bem Vindo!
            </Text>
            <Text style={Styles.description}>
                Escolha um dos casos abaixo e salve o dia!
            </Text>
            <FlatList 
                data={incidents}
                style={Styles.incidentList}
                keyExtractor={incident => String(incident.id)}
                //showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}
                renderItem={({item: incident}) =>(
                    <View style={Styles.incidents}>
                        <Text style={Styles.incidentProperty}>Ong</Text>
                        <Text style={Styles.incidentValue}>{incident.name}</Text>
                        
                        <Text style={Styles.incidentProperty}>Caso:</Text>
                        <Text style={Styles.incidentValue}>{incident.title}</Text>

                        <Text style={Styles.incidentProperty}>Valor</Text>
                        <Text style={Styles.incidentValue}>{Intl
                        .NumberFormat('pt-BR',{style: 'currency',currency: 'BRL'})
                        .format(incident.value)}</Text>

                        <TouchableOpacity 
                            style={Styles.detailsButton} 
                            onPress={() => navigationToDetail(incident)}
                        >
                        <Text style={Styles.detailsButtonText}>Ver mais detalhes</Text>
                        <Feather name="arrow-right"  size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}

            />
            

        </View>

    );
}
