import iconRemove from "../../public/images/icon-remove.svg"
import "./HeaderTag.css"

export const HeaderTag = ({ tagName }: { tagName: string }) => {
	return (
		<li className="header-tag">
			<p className="header-tag__name">{tagName}</p>

			<button className="header-tag__button">
				<img src={iconRemove} alt="" className="button__icon" />
			</button>
		</li>
	)
}
