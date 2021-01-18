import React,{useEffect,useState} from "react";
import MasterDetail from '../../components/MasterDetail';
import api from '../../sevices/api'
import CardDetail from '../../components/CardDetail'

const Ativos = () => {

    const [sampleOrders, setSampleOrders] = useState([]);
    const [currentSampleOrder, setCurrentSampleOrder] = useState({});
    const [warningMessage, setWarningMessage] = useState({
        warningMessageOpen: false,
        warningMessageText: "",
    });

    const closeWarningMessage = () => {
        setWarningMessage({ warningMessageOpen: false, warningMessageText: "" });
    };

    useEffect(() => {
        api.get('/tipos').then(response=>{
            const res = response.data.items;
            setSampleOrders(res);
            setCurrentSampleOrder(res[0]);
            

        }).catch(error=>{
            setWarningMessage({
                warningMessageOpen: true,
                warningMessageText: `Erro ao trazer os ativos`,
            });
        })
        
    },[]); // Or [] if effect doesn't need props or state

    const CardRender = () =>{
        return (
            <CardDetail />
        )
    }

    return (
    <MasterDetail sampleOrders = {sampleOrders}
        currentSampleOrder = {currentSampleOrder}
        setCurrentSampleOrder = {setCurrentSampleOrder}
        warningMessage = {warningMessage}
        onWarningClose = {closeWarningMessage}
        ComponentRender = {CardRender()}
    />
    );
};

export default Ativos;
