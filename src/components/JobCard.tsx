import Logo from "../assets/images/photosnap.svg"

import "./JobCard.css"

export const JobCard = () => {
	return (
		<li className="card card--new">
			<img src={Logo} alt="" className="card__logo" />

			<div className="card__info">
				<div className="card__header">
					<p className="card__company">Photosnap</p>

					<div className="card__cathegories">
						<p className="card__cathegory card__cathegory--new">
							New!
						</p>
						<p className="card__cathegory card__cathegory--featured">
							Featured
						</p>
					</div>
				</div>

				<h2 className="card__heading">Senior Frontend Developer</h2>

				<div className="card__details">
					<p className="card__detail">1d ago</p>
					<p className="card__detail">Full Time</p>
					<p className="card__detail">USA only</p>
				</div>
			</div>

			<ul className="tags">
				<li className="tags__item">
					<button className="tags__button">Frontend</button>
				</li>

				<li className="tags__item">
					<button className="tags__button">Senior</button>
				</li>

				<li className="tags__item">
					<button className="tags__button">HTML</button>
				</li>

				<li className="tags__item">
					<button className="tags__button">CSS</button>
				</li>

				<li className="tags__item">
					<button className="tags__button">JavaScript</button>
				</li>
			</ul>
		</li>
	)
}
