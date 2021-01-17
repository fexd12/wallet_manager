import React, { useState,useEffect } from "react";
import MasterDetail from '../../components/MasterDetail'
import { ERROR_MESSAGE, ENDPOINT } from "../../constants";

const Sugestao = () => {
  const [sampleOrders, setSampleOrders] = useState([]);
  const [currentSampleOrder, setCurrentSampleOrder] = useState({});
  const [warningMessage, setWarningMessage] = useState({
    warningMessageOpen: false,
    warningMessageText: "",
  });


  const getSampleOrders = () => {
    let promiseSampleOrders = fetch(ENDPOINT.MASTERDETAIL).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    });

    return promiseSampleOrders;
  };

  const closeWarningMessage = () => {
    setWarningMessage({ warningMessageOpen: false, warningMessageText: "" });
  };

  useEffect(() => {
    getSampleOrders()
      .then((listSampleOrders) => {
        setSampleOrders(listSampleOrders);
        setCurrentSampleOrder(listSampleOrders[0]);
      })
      .catch((error) => {
        setWarningMessage({
          warningMessageOpen: true,
          warningMessageText: `${ERROR_MESSAGE.MASTERDETAIL_GET} ${error}`,
        });
      });
  }, []);

  return (
    <MasterDetail sampleOrders = {sampleOrders}
        currentSampleOrder = {currentSampleOrder}
        setCurrentSampleOrder = {setCurrentSampleOrder}
        warningMessage = {warningMessage}
        onWarningClose = {closeWarningMessage}
    />
  );
};

export default Sugestao;
