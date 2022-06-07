import React, { useState, useEffect } from "react";
import { Casilla } from "./casilla/casilla.jsx";
import "./main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowRotateRight,
	faPlay,
	faPause,
} from "@fortawesome/free-solid-svg-icons";

//create your first component

const Main = () => {
	let unidades = {
		unidad: "unidad",
		decena: "decena",
		centena: "centena",
		miles: "miles",
		decenaMiles: "decenaMiles",
		centenaMiles: "centenaMiles",
	};

	let inputRef = React.useRef();
	let playOption = React.useRef();
	let inputAlert = React.useRef();

	const [counter, setCounter] = useState(0);
	const [playStatus, setPlayStatus] = useState(true);

	useEffect(() => {
		// console.log(counter);
		// console.log(playStatus);
		if (playStatus) {
			const interval = setInterval(() => {
				setCounter((counter) => counter + 1);
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [playStatus]);

	function setNumber() {
		if (inputRef.current.value && inputRef.current.value >= 0) {
			setCounter((counter) => parseInt(inputRef.current.value));
		}
	}

	function playPause() {
		if (playStatus) {
			console.log("pase");
			return setPlayStatus(false);
		} else {
			console.log("pase");
			return setPlayStatus(true);
		}
	}

	function restartCounter() {
		return setCounter(0);
	}

	return (
		<>
			<div className="contenedor">
				<Casilla />
				<Casilla unidad={unidades.centenaMiles} number={counter} />
				<Casilla unidad={unidades.decenaMiles} number={counter} />
				<Casilla unidad={unidades.miles} number={counter} />
				<Casilla unidad={unidades.centena} number={counter} />
				<Casilla unidad={unidades.decena} number={counter} />
				<Casilla unidad={unidades.unidad} number={counter} />
			</div>
			<div className="container-fluid bg-success">
				<div className="row justify-content-center m-2 p-2">
					<div className="col-auto">
						<label htmlFor="setCounter">Setup Contador: </label>
					</div>
					<div className="col-auto">
						<input
							className="form-control"
							type="number"
							name="setCounter"
							ref={inputRef}
							onChange={setNumber}></input>
					</div>
					<div className="col-auto">
						<button
							type="button"
							ref={playOption}
							className="imgButton"
							onClick={playPause}>
							{playStatus ? (
								<FontAwesomeIcon
									icon={faPause}></FontAwesomeIcon>
							) : (
								<FontAwesomeIcon
									icon={faPlay}></FontAwesomeIcon>
							)}
						</button>
					</div>
					<div className="col-auto">
						<button
							type="button"
							className="imgButton"
							onClick={restartCounter}>
							<FontAwesomeIcon icon={faArrowRotateRight} />
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Main;
