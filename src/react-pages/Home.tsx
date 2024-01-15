import { useEffect } from 'react';
import Profile from '../components/Profile';
import Card from '../components/Card';
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
      <div className="cards">
        <Card id="about" />
        <Card id="resume" />
        <Card id="work" />
        <Card id="blog" />
        <Card id="contact" />
      </div>
    </>
  );
}

export default Home;
