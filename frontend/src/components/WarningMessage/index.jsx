import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const WarningMessageStyled = styled.div.attrs(props =>({
    className:" alert alert-warning ml-3"
}))`
    position: fixed !important;
    bottom: 0;
    left: 0;
    z-index: 1030;
    
`;

// A pop up message used to warn users about failed API calls to the back end

const WarningMessage = ({ open, text, onWarningClose }) => {
    
    const warning = <WarningMessageStyled role ='alert'>
        {text}
        <button
        onClick={onWarningClose}
        className="close ml-2"
        aria-label="Close"
        >
        <span aria-hidden="true">&times;</span>
        </button>
    </WarningMessageStyled>

  return (
    <React.Fragment>
      {open && (
        warning
      )}
    </React.Fragment>
  );
}

WarningMessage.propTypes = {
  open: PropTypes.bool,
  text: PropTypes.string,
  onWarningClose:PropTypes.func
}

export default WarningMessage;