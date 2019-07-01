import { Styles } from "react-jss"

import { Colors } from "../../../conduits/theme"

import { breakPointMediumUp } from "../../../conduits/utils"

export const styles: Styles = {
	container: {
		flexGrow: 1,
		display: "flex",
		height: "100%",
		justifyContent: "space-between",
		alignItems: "center"
	},
	logo: {
		paddingLeft: 30
	},
	linksContainer: {
		display: "flex",
		flexBasis: "70%",
		justifyContent: "space-around",
		height: "100%",
		backgroundColor: Colors.primary
	},
	...breakPointMediumUp({
		linksContainer: {
			flexBasis: "60%"
		}
	}),
	item: {
		padding: "0 10px"
	}
}
