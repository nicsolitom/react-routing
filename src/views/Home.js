import React from 'react';

import rockStar from '../images/musician-664432_1920.jpg';
import '../styles/Home.scss'

export default function Home() {
    return (
      <div className="HomeContainer">
        <h5>Welcome to a React-router page</h5><br />
        <img src={rockStar} className="RockstarImage" alt="Rockstar"/>


      </div>
    );
}
