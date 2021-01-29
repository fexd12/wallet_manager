import React,{useEffect,useState} from "react";
import MasterDetail from '../../components/MasterDetail';
import api from '../../sevices/api'

const Ativos = () => {

    const [tipoAtivos, setTipoAtivos] = useState([]);
    const [currentTipoAtivos, setCurrentTipoAtivos] = useState({});
    const [warningMessage, setWarningMessage] = useState({
        warningMessageOpen: false,
        warningMessageText: "",
    });

    const [ativos,setAtivos] = useState([]);


    useEffect(() => {
        api.get('/tipos').then(response=>{
            const res = response.data.items;
            setTipoAtivos(res);
            setCurrentTipoAtivos(res[0]);
            
        }).catch(()=>{
            setWarningMessage({
                warningMessageOpen: true,
                warningMessageText: `Erro ao trazer os tipos de ativos`,
            });
        })
        
    },[]);

    useEffect(()=>{
        api.get('/ativos').then(response=>{
            const res = response.data.items;
            setAtivos(res);

        }).catch(()=>{
            setWarningMessage({
                warningMessageOpen: true,
                warningMessageText: `Erro ao trazer os ativos`,
            });
        })
    },[]);

    return (
        <MasterDetail sampleOrders = {tipoAtivos}
            currentSampleOrder = {currentTipoAtivos}
            setCurrentSampleOrder = {setCurrentTipoAtivos}
            warningMessage = {warningMessage}
            onWarningClose = {() => setWarningMessage({ warningMessageOpen: false, warningMessageText: "" })}
            ativo = {ativos}
        />
    );
};

export default Ativos;
