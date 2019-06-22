import React from "react"

import MainRoute from "./routes/MainRoute"

import { styles } from "./MainStyles"

import injectSheet from "react-jss"

const MainComponent = () => <MainRoute />

export default injectSheet(styles)(MainComponent)
