const renderComponent = require('../lib/renderComponent');

function ssr(req, res, next) {
  res.render = (reactComponent, props) => {
    renderComponent(reactComponent, { ...props, user: req.session?.user }, res);
  };
  next();
}

module.exports = ssr;
