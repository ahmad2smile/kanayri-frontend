import { Styles } from "react-jss"
import { Colors } from "../../../conduits/theme"

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
		flexBasis: "60%",
		justifyContent: "space-around",
		height: "100%",
		backgroundColor: Colors.primary
	},
	item: {
		padding: "0 10px"
	}
}
