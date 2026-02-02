import { FiArrowLeft } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import "./project_view.css";
import { FaGithub } from "react-icons/fa";
const ProjectView = () => {
	const { state } = useLocation();
	const { data } = state || {};
	const navigate = useNavigate();
	console.log(data.title);
	const { keyFeatures, techUsed } = data;
	console.log(keyFeatures, techUsed);
	return (
		<div className="project-view-container">
			<div className="project-header">
				<FiArrowLeft className="back-arrow" onClick={() => navigate(-1)} />
				<h1 className="project-name">{data?.title || "Project Details"}</h1>
				<div className="code-link">
					<FaGithub className="github-ic" />
					<a href={data.link} target="_blank" rel="noopener noreferrer">
						See code on Github
					</a>
				</div>
			</div>
			<img
				src={data?.img[0]}
				alt={data?.title}
				className="project-main-img"
				loading="lazy"
			/>
			<div className="project-details-card">
				<section className="project-section">
					<h2> Project Overview</h2>
					<p>{data.fullDesc} </p>
				</section>

				<section className="project-section">
					<h2> Key Features</h2>
					<ul>
						{keyFeatures.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>

				<section className="project-section">
					<h2> Technologies Used</h2>
					<ul>
						{techUsed?.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</section>
			</div>
			<div className="project-section image-container">
				<h2>Screenshots</h2>
				<div className="image-gallery">
					{data?.img?.slice(1).map((src, index) => (
						<img
							key={index}
							src={src}
							alt={`Screenshot ${index + 1}`}
							loading="lazy"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectView;
