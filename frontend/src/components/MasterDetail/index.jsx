import React,{useState} from "react";
import classnames from "classnames";
import WarningMessage from "../WarningMessage";
import MasterList from "../MasterList";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import CardDetail from "../../components/CardDetail";
import Button from "react-bootstrap/Button";
import FormAtivos from "../Modals/FormAtivos";

const MasterDetail = ({
  sampleOrders,
  currentSampleOrder,
  setCurrentSampleOrder,
  warningMessage,
  onWarningClose,
  ativo

}) => {

  const [show,setShow ] = useState(false)

  const sidebarStyle = classnames(
    "col-2",
    "p-0",
    "border-right",
    styles.sidebar
  );

  const bussines = (sampleOrder) => {
    return (
      <MasterList
        selectSampleOrder={setCurrentSampleOrder}
        sampleOrder={sampleOrder}
        key={sampleOrder.id_tipo_ativo}
        isActive={sampleOrder === currentSampleOrder}
      />
    );
  };

  const separaAtivo = () => {
    let separa = ativo.filter(
      (x) => currentSampleOrder.id_tipo_ativo === x.tipo_ativo
    );
    return (
        separa.length > 0 ? (separa.map((x) => <CardDetail key={x.ativo_id} ativo={x} />)) : null
    );
  };

  const complemento = {
    nome_ativo:'',
    ticker:'',
    preco:0.00,
    quantidade:0,
    data:'',
    taxas: '',
    tipo:''
  }
  
  const ativos = { 
    ...currentSampleOrder
  }

  const onHideModal = () =>{
    setShow(false)
  }

  const onShowModal = () => {
    setShow(true)
  }

  return (
    <main id="mainContent">
      <div className="container-fluid">
        <div className="row">
          <div className={sidebarStyle}>
            <div className="list-group list-group-flush border-bottom">
              {sampleOrders.length > 0
                ? sampleOrders.map((x) => bussines(x))
                : null}
            </div>
          </div>
          <div className="text-center">
            <Button style={{ marginTop: "10px" }} onClick={onShowModal}>
              Adicionar ativo
            </Button>
            <FormAtivos showModal={show} onHide = {onHideModal} ativo = {ativos}/>
          </div>
          {separaAtivo()}
        </div>
      </div>
      <WarningMessage
        open={warningMessage.warningMessageOpen}
        text={warningMessage.warningMessageText}
        onClick={onWarningClose}
      />
    </main>
  );
};

MasterDetail.propTypes = {
  sampleOrders: PropTypes.any,
  currentSampleOrder: PropTypes.object,
  setCurrentSampleOrder: PropTypes.func,
  warningMessage: PropTypes.object,
  onWarningClose: PropTypes.func,
  ativo: PropTypes.array
};

export default MasterDetail;
