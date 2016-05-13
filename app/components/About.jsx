var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <hr />

      <section>

        <p>This is my first React web app. I am following a course on
          <a href="http://www.Udemy.com"> Udemy</a> <em> called The Complete React
          Web App Developer Course</em> by Andrew Mead,
          A Full-stack Developer & Teacher.
        </p>

        <p>
           The functionality for returning the temperature of any given location is based on
           <a href="http://openWeatherMap.org"> OpenWeatherMap.org</a> API.
        </p>

        <p>
          The styling is based on a solid <a href="http://foundation.zurb.com"> Foundation</a>.
        </p>

        <p>
          Here is a complete list of all the tools I've used for this project:
        </p>
        <dl>

          <dt><a href="https://facebook.github.io/react">React</a></dt>
          <dd>This is the JavaScript framework used.</dd>

          <dt><a href="https://nodejs.org">Node.js</a></dt>
          <dd> A JavaScript runtime built on Chrome's V8 JavaScript engine.</dd>

          <dt><a href="https://www.npmjs.com">Npm</a></dt>
          <dd>Node.js&#39;s package manager used in the terminal.</dd>

          <dt><a href="https://webpack.github.io">Webpack</a></dt>
          <dd>A module bundler that takes modules with dependencies and emits
            static assets representing those modules.</dd>

          <dt><a href="https://github.com">GitHub</a></dt>
          <dd>The greatest web-based
              Git repository hosting service in the world. It offers all of
              the distributed version control and source code management (SCM)
              functionality of Git as well as adding its own features.
          </dd>

          <dt><a href="https://git-scm.com">Git</a></dt>
          <dd>A free and open source
            distributed version control system designed to handle everything
            from small to very large projects with speed and efficiency.
          </dd>

        </dl>

        <cite className="text-right">Matt Black</cite>

      </section>

      <hr />
      <h6>A Funny Quote</h6>
      <blockquote>
        The best thing about a boolean is even if you are wrong, you are only off by a bit.
        <cite>Anonymous</cite>
      </blockquote>
    </div>
  );
};

module.exports = About;
