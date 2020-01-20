import React from 'react'
import '../styles/About.scss';

export default function About() {
    return (
      <div className="AboutContainer">
        <h5>About</h5>
        <br />
        <p>Links to my pages online:</p>
        <a href="https://github.com/nicsolitom">
          <i class="fab fa-github"></i> GitHub
        </a>
        <br />
        <a href="https://www.nicsolitom.com">
          <i class="fas fa-hand-spock"></i> nicsolitom.com
        </a>
      </div>
    );
}
