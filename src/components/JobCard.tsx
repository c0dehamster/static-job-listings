import "./JobCard.css"
import { Job } from "../models"

export const JobCard = (props: {
	job: Job
	handleSelectTag: (filter: string) => void
}) => {
	const {
		company,
		logo,
		isNew,
		featured,
		position,
		role,
		level,
		postedAt,
		contract,
		location,
		languages,
		tools,
	} = props.job

	/* "new" property was changet to "isNew" to prevent the name collision */

	const handleSelectTag = props.handleSelectTag
	const cardClass = `card ${featured ? "card--featured" : ""}`

	const languagesList = languages.map(item => (
		<li className="tags__item" key={item}>
			<button
				className="tags__button"
				onClick={() => handleSelectTag(item)}>
				{item}
			</button>
		</li>
	))

	const toolsList = tools.map(item => (
		<li className="tags__item" key={item}>
			<button
				className="tags__button"
				onClick={() => handleSelectTag(item)}>
				{item}
			</button>
		</li>
	))

	return (
		<li className={cardClass}>
			<img src={logo} alt="" className="card__logo" />

			<div className="card__info">
				<div className="card__header">
					<p className="card__company">{company}</p>

					<div className="card__cathegories">
						{isNew ? (
							<p className="card__cathegory card__cathegory--new">
								New!
							</p>
						) : (
							""
						)}

						{featured ? (
							<p className="card__cathegory card__cathegory--featured">
								Featured
							</p>
						) : (
							""
						)}
					</div>
				</div>

				<h2 className="card__heading">{position}</h2>

				<div className="card__details">
					<p className="card__detail">{postedAt}</p>
					<p className="card__detail">{contract}</p>
					<p className="card__detail">{location}</p>
				</div>
			</div>

			<ul className="tags">
				<li className="tags__item">
					<button
						className="tags__button"
						onClick={() => handleSelectTag(role)}>
						{role}
					</button>
				</li>

				<li className="tags__item">
					<button
						className="tags__button"
						onClick={() => handleSelectTag(level)}>
						{level}
					</button>
				</li>

				{languagesList}
				{toolsList}
			</ul>
		</li>
	)
}
