import Layout from './components/Layout';
import Project from './components/Project';
import Activity from './components/Activity';
import About from './components/About';
import Contact from './components/Contact';
import Information from './components/Information';
import React, { useState } from 'react';
import _Profile from './data/profile';

const portfolio = {
  name: _Profile.profile.name,
  email: _Profile.profile.email,
  photo: _Profile.profile.photo,
  introduce: _Profile.profile.introduce,
  introText: _Profile.introText,
}

function App(props) {
  const [state, setState] = useState(false);
  const [root, setRoot] = useState(null);

  return (
    <div className={state ? 'app '+ root : 'app'}>
      <Layout
        email={portfolio.email}
        active={state}
        setActive={setState}
        root={root}
        setRoot={setRoot}
      ></Layout>
      <Project
        active={state}
        setActive={setState}
      ></Project>
      <Activity
        active={state}
        setActive={setState}
      ></Activity>
      <About
        active={state}
        setActive={setState}
        name={portfolio.name}
        photo={portfolio.photo}
      ></About>
      <Contact
        active={state}
        setActive={setState}
      ></Contact>
      <Information
        active={state}
        setActive={setState}
      ></Information>
    </div>
  );
}

export default App;
