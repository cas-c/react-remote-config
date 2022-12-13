import * as React from 'react'
import * as Server from 'react-dom/server'

const Hi = () => <h1>hi</h1>
console.log(Server.renderToString(<Hi />))