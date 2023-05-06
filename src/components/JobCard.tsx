import logo from "../assets/images/photosnap.svg"

import "./JobCard.css"

export const JobCard = (props: {
	id: number
	company: string
	logo: string
	new: boolean
	featured: boolean
	position: string
	role: string
	level: string
	postedAt: string
	contract: string
	location: string
	languages: Array<string>
	tools: Array<string>
}) => {
	const languagesList = props.languages.map(item => (
		<li className="tags__item" key={item}>
			<button className="tags__button">{item}</button>
		</li>
	))

	const toolsList = props.tools.map(item => (
		<li className="tags__item" key={item}>
			<button className="tags__button">{item}</button>
		</li>
	))

	return (
		<div className="card card--new">
			<img src={props.logo} alt="" className="card__logo" />

			<div className="card__info">
				<div className="card__header">
					<p className="card__company">{props.company}</p>

					<div className="card__cathegories">
						{props.new ? (
							<p className="card__cathegory card__cathegory--new">
								New!
							</p>
						) : (
							""
						)}

						{props.featured ? (
							<p className="card__cathegory card__cathegory--featured">
								Featured
							</p>
						) : (
							""
						)}
					</div>
				</div>

				<h2 className="card__heading">Senior Frontend Developer</h2>

				<div className="card__details">
					<p className="card__detail">{props.postedAt}</p>
					<p className="card__detail">{props.contract}</p>
					<p className="card__detail">{props.location}</p>
				</div>
			</div>

			<ul className="tags">
				<li className="tags__item">
					<button className="tags__button">{props.role}</button>
				</li>

				<li className="tags__item">
					<button className="tags__button">{props.level}</button>
				</li>

				{languagesList}
				{toolsList}
			</ul>
		</div>
	)
}
