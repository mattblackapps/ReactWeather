var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
        <h1 className="text-center page-title">Examples</h1>
        <hr />
        <p>Here are a few example cities to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Jacksonville'>Jacksonville, FL</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brazil</Link>
          </li>
        </ol>
    </div>

  );
};

module.exports = Examples;
