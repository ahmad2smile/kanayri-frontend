import { Styles } from "react-jss"

import { breakPointSmallUp } from "../../../../../conduits/utils"

export const styles: Styles = {
	container: {
		width: "100%",
		display: "flex",
		flexWrap: "wrap"
	},
	...breakPointSmallUp({
		container: {
			flexBasis: "50%"
		}
	})
}
