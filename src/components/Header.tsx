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
	const headerCard =
		tags.length > 0 ? (
			<div className="header__card">
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
			</div>
		) : (
			""
		)

	return <header className="header">{headerCard}</header>
}
