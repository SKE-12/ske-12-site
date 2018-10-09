import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { renderRoutes } from 'react-router-config'

export default ({ routes }) => (
	<BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
)
