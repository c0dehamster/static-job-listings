import "./Header.css"

import { HeaderTag } from "./HeaderTag"

export const Header = () => {
	return (
		<header className="header">
			<ul className="header__tag-list">
				<HeaderTag></HeaderTag>
				<HeaderTag></HeaderTag>
				<HeaderTag></HeaderTag>
			</ul>

			<button className="button">Clear</button>
		</header>
	)
}
