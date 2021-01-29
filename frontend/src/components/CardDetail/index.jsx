import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import CardGroup from "react-bootstrap/CardGroup";
import FormExtrato from "../Modals/FormExtrato";

const CardDetail = ({ ativo }) => {
  const [show, setShow] = useState(false);

  const onHideModal = () => {
    setShow(false);
  };

  const onshowModal = () => {
    setShow(true);
  };

  const CardRender = () => {
	
	return (
      <div
        style={{ marginTop: "30px", marginLeft: "30px" }}
        key={ativo.ativo_id}
      >
        <Card
          className="text-center"
          style={{ width: "18rem", padding: "auto", margin: "auto" }}
        >
          <Card.Header>{ativo.ticker}</Card.Header>
          <Card.Body>
            <Card.Title>Empresa: {ativo.nome}</Card.Title>
            <Card.Text>{ativo.descricao}</Card.Text>
            <Button onClick={onshowModal}>Ver Extrato</Button>
            <FormExtrato ativo={ativo} showModal={show} onHide={onHideModal} />
          </Card.Body>
          <Card.Footer className="text-muted">
            Preço Médio : {ativo.preco_medio}
          </Card.Footer>
        </Card>
      </div>
    );
  };

  return (
    <CardGroup>
      {CardRender()}
    </CardGroup>
  );
};

CardDetail.propTypes = {
  ativo: PropTypes.any,
  ativoAtual: PropTypes.func
};

export default CardDetail;
