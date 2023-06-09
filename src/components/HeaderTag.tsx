import iconRemove from "../assets/images/icon-remove.svg"
import "./HeaderTag.css"

export const HeaderTag = ({
	tagName,
	handleRemoveTag,
}: {
	tagName: string
	handleRemoveTag: (id: string) => void
}) => {
	return (
		<li className="header-tag">
			<p className="header-tag__name">{tagName}</p>

			<button
				className="header-tag__button"
				onClick={() => handleRemoveTag(tagName)}>
				<span className="sr-only">Remove</span>
				<img src={iconRemove} alt="" className="button__icon" />
			</button>
		</li>
	)
}
