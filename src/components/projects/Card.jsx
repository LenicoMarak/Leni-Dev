import React from "react";
import "./card.css";
import { FiChevronRight } from "react-icons/fi";

const Card = ({ data, handleClick }) => {
	return (
		<div onClick={() => handleClick(data)} className="card">
			<div className="title-container">
				<img src={data.img[0]} alt={data.title} className="chat-app-logo" />
				<h4>{data.title}</h4>
				<FiChevronRight className="arrow" />
			</div>
			<p>{data.shortDesc}</p>
		</div>
	);
};

export default Card;
