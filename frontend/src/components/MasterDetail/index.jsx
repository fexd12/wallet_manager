import React from "react";
import classnames from "classnames";
import WarningMessage from "../WarningMessage";
import Detail from "../Detail";
import MasterList from "../MasterList";
import styles from "./styles.module.css";
import PropTypes from "prop-types";
import CardDetail from '../../components/CardDetail'

const MasterDetail = ({sampleOrders,currentSampleOrder,setCurrentSampleOrder,warningMessage,onWarningClose,ativo}) => {

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

//   const bussinesDetails = () => {
//     return currentSampleOrder ? (
//       <Detail textSampleData={currentSampleOrder} />
//     ) : null;
//   };

  const separaAtivo = ()=>{
    let separa = ativo.filter(x=>currentSampleOrder.id_tipo_ativo === x.tipo_ativo);
    console.log(separa)
    return (
    <CardDetail ativo={separa}/>
    )
  }

  return (
    <main id="mainContent">
      <div className="container-fluid">
        <div className="row">
          <div className={sidebarStyle}>
            <div className="list-group list-group-flush border-bottom">
              {sampleOrders.length > 0 ? (sampleOrders.map((x) => bussines(x))) : null}
            </div>
          </div>
          {separaAtivo() }
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
    setCurrentSampleOrder:PropTypes.func,
    warningMessage:PropTypes.object,
    onWarningClose:PropTypes.func,
    ativo:PropTypes.array
}

export default MasterDetail;