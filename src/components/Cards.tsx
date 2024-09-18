import About from './Cards/About';
import Contact from './Cards/Contact';
import Resume from './Cards/Resume';
import Work from './Cards/Work';

interface Props {}

export default function Cards() {
  return (
    <>
      <About />
      <Resume />
      <Work />
      <Blog />
      <Contact />
    </>
  );
}

const Blog = () => {
  return (
    <div id="card-blog" className="card-inner animated">
      <section>
        <h1>
          <span>B</span>log
        </h1>
      </section>

      <p>We will come soon ...</p>
    </div>
  );
};
