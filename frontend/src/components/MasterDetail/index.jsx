import React from "react";
import classnames from "classnames";
import WarningMessage from "../WarningMessage";
import Detail from "../Detail";
import MasterList from "../MasterList";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const MasterDetail = ({sampleOrders,currentSampleOrder,setCurrentSampleOrder,warningMessage,onWarningClose,ComponentRender}) => {

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
  const bussinesDetails = () => {
    return currentSampleOrder ? (
      <Detail textSampleData={currentSampleOrder} />
    ) : null;
  };

  return (
    <main id="mainContent">
      <div className="container-fluid">
        <div className="row">
          <div className={sidebarStyle}>
            <div className="list-group list-group-flush border-bottom">
              {sampleOrders.length > 0 ? (sampleOrders.map((x) => bussines(x))) : null}
            </div>
          </div>
          {ComponentRender ? ComponentRender : bussinesDetails()}
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
    ComponentRender:PropTypes.node
}

export default MasterDetail;