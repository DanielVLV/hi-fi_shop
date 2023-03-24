const ReactDOMServer = require('react-dom/server');
const React = require('react');

// eslint-disable-next-line default-param-last
const renderComponent = (reactComponent, props = {}, res) => {
  const reactElement = React.createElement(
    reactComponent,
    { ...props, ...res.locals, ...res.app.locals },
  );
  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  res.send(`<!DOCTYPE html>${html}`);
};

module.exports = renderComponent;
