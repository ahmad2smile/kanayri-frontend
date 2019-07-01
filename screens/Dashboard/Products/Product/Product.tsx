import * as React from "react"
import injectSheet from "react-jss"

import { Image } from "../../../../conduits/components"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const Product: React.SFC<IProps> = ({ src, alt, classes }: IProps): JSX.Element => (
	<div className={classes.container}>
		<Image src={src} alt={alt} />
	</div>
)

export default injectSheet(styles)(Product)
