import "./Header.css"

import { HeaderTag } from "./HeaderTag"

export const Header = ({ tags }: { tags: Array<string> }) => {
	return (
		<header className="header">
			<ul className="header__tag-list">
				{tags.map(tagName => (
					<HeaderTag {...{ tagName }} key={tagName}></HeaderTag>
				))}
			</ul>

			<button className="header__button">Clear</button>
		</header>
	)
}
