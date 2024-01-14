import React, { useEffect } from 'react';
import Profile from '../components/Profile';
import Typed from 'typed.js';

function Home() {
  const fullName = 'Sadegh Saedi Nia';
  const subtitle = [
    'Web Developer',
    'Front-end Developer',
    'Back-end Developer',
    'Freelancer',
    'Programmer',
  ];

  useEffect(() => {
    const rTyped = document.querySelectorAll('.r-typed');
    var typed: Typed;
    rTyped.forEach((item) => {
      const $this = item;

      typed = new Typed($this, {
        strings: subtitle,
        backDelay: 3500,
        typeSpeed: 80,
        backSpeed: 20,
        loop: true,
      });
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <Profile />
      <div className="cards"></div>
    </>
  );
}

export default Home;
