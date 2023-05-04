export const JobCard = () => {
	return (
		<li className="card">
			<div className="card__info">
				<div className="card__header">
					<p className="card__company">Photoshop</p>
				</div>

				<p className="card__heading">Senior Frontend Developer</p>

				<div className="card__details">
					<p className="card__posted-at">1d ago</p>
					<p className="card__contract">Full Time</p>
					<p className="card__location">USA only</p>
				</div>
			</div>

			<ul className="tags">
				<li className="tags__item">Frontend</li>
				<li className="tags__item">Senior</li>
				<li className="tags__item">HTML</li>
				<li className="tags__item">CSS</li>
				<li className="tags__item">JavaScript</li>
			</ul>
		</li>
	)
}
