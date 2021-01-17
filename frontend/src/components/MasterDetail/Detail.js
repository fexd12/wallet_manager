import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

const Detail = ({ textSampleData }) => {
  // const {
  //   longDescription,
  //   title,
  //   status,
  //   shipTo,
  //   orderTotal,
  //   orderDate,
	// } = textSampleData;
	
	const details = (value,index) => { 
		return (
			<div>
				<p className={styles.title}>{index}</p>
				<p>{value}</p>
			</div>
		)
	}

  return (
    <div className="col">
      <div className={classnames("row", styles.heading)}>
        <div className="col">
          <h3 className="ml-3 mb-4">{'title'}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-12 ml-3 mb-5 mt-3">
          {Object.keys(textSampleData).map( (key,index) => details(key,index))}
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  textSampleData: PropTypes.any,
};

export default Detail;
