import React from "react";
import "./App.css";
import logo from "./round-200x200-shadow.png";

function App() {
  return (
    <div className="Container">
        <img src={logo} width="200px" height="200px"></img>

        <div className="Content">
          <div className="Header">
            <div className="Headline">
              <h1>Lidor Batino</h1>
              <h4>Junior Front-end Developer</h4>
            </div>
            <table className="Icons">
              <thead>
                <tr>
                  <td>
                    <a href="http://www.facebook.com" target="_blank">
                      <p className="Facebook"></p>
                    </a>
                  </td>
                  <td>
                    <a href="https://github.com/lidorb94" target="_blank">
                      <p className="Github"></p>
                    </a>
                  </td>
                  <td>
                    <a
                      href="https://www.linkedin.com/in/lidor-batino-574789172/"
                      target="_blank"
                    >
                      <p className="Linkedin"></p>
                    </a>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <p>
            I'm an extremely passionate developer <br></br>
            who always love to learn new things and evolve. <br></br>
            <br></br>
            Specialize in HTML5, CSS3, JavaScript and ReactJS<br></br>
            Love what i do, and love to do it &#128578;
          </p>
          <p>
            Contact me anytime:
            <a href="mailto:lidorb28@gmail.com"> lidorb28@gmail.com</a>
          </p>
        </div>

    </div>
  );
}

export default App;
