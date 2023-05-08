import "./Header.css"

import { HeaderTag } from "./HeaderTag"

export const Header = ({
	tags,
	handleRemoveTag,
	handleClear,
}: {
	tags: Array<string>
	handleRemoveTag: (id: string) => void
	handleClear: () => void
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

			<button className="header__button" onClick={handleClear}>
				Clear
			</button>
		</header>
	)
}
