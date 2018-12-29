import React from "react"
import PropTypes from "prop-types"

export default class HTML extends React.Component {
  render() {
    return <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {this.props.headComponents}
          <script type="text/javascript" src="https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpC3KmDoPqFJ5y79oz34mC2PeFJ4mC30m9cyUeJUtjP0dDxkJEvwPapWUep2sERAJDXwPW?v=ODsBaSX3fAjL7cvyixcwprnB9ZVEv464jkmDIZyhErX#" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
