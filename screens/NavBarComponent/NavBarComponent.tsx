import React from "react"
import injectSheet from "react-jss"
import { Link } from "react-router-dom"

import { Container } from "../../conduits/components"

import { IProps } from "./__types/IProps"

import { styles } from "./styles"

const NavBarComponent = ({ classes }: IProps) => (
	<Container fullTablet>
		<div className={classes.container}>
			<div className={classes.logo}>Kanayri</div>
			<div className={classes.linksContainer}>
				<Link to="/">
					<p className={classes.item}>Home</p>
				</Link>
				<Link to="/about">
					<p className={classes.item}>About</p>
				</Link>
				<Link to="/cart">
					<p className={classes.item}>Cart</p>
				</Link>
			</div>
		</div>
	</Container>
)

export default injectSheet(styles)(NavBarComponent)
