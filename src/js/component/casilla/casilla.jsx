import PropTypes from "prop-types";
import React from "react";
import "./casilla.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
export const Casilla = (props) => {
	let show = 0;
	switch (props.unidad) {
		case "unidad":
			show = <h1>{props.number % 10}</h1>;
			break;
		case "decena":
			show = <h1>{Math.trunc(props.number / 10) % 10}</h1>;
			break;
		case "centena":
			show = <h1>{Math.trunc(props.number / 100) % 10}</h1>;
			break;
		case "miles":
			show = <h1>{Math.trunc(props.number / 1000) % 10}</h1>;
			break;
		case "decenaMiles":
			show = <h1>{Math.trunc(props.number / 10000) % 10}</h1>;
			break;
		case "centenaMiles":
			show = <h1>{Math.trunc(props.number / 100000) % 10}</h1>;
			break;
		default:
			show = <FontAwesomeIcon icon={faClock} />;
			break;
	}
	return <div className="rectangulo">{show}</div>;
};

Casilla.propsTypes = {
	number: PropTypes.text,
};
