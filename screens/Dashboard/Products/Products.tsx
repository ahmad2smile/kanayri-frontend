import * as React from "react"
import injectSheet from "react-jss"

import { IProps } from "./__types/IProps"

import Product from "./Product/Product"

import { Images } from "../../../theme/Images"

import { styles } from "./styles"

const Products: React.SFC<IProps> = ({ classes }: IProps): JSX.Element => {
	return (
		<div className={classes.container}>
			<Product src={Images.silk} alt="Silk Product" />
			<Product src={Images.furniture} alt="Furniture Product" />
		</div>
	)
}

export default injectSheet(styles)(Products)
