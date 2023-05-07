import "./Header.css"

import { HeaderTag } from "./HeaderTag"

export const Header = ({
	tags,
	handleRemoveTag,
}: {
	tags: Array<string>
	handleRemoveTag: (id: string) => void
}) => {
	return (
		<header className="header">
			<ul className="header__tag-list">
				{tags.map(tagName => (
					<HeaderTag
						{...{ tagName, handleRemoveTag }}
						key={tagName}></HeaderTag>
				))}
			</ul>

			<button className="header__button">Clear</button>
		</header>
	)
}
