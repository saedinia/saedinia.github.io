import About from './Cards/About';
import Resume from './Cards/Resume';

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

const Work = () => {
  return (
    <div id="card-work" className="card-inner animated">
      <h1>Card Work</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        ipsam ut, velit dignissimos nostrum labore consequatur veritatis
        similique culpa tempora dicta quis aliquam. Laudantium nam accusantium
        doloremque officia ducimus!
      </p>
    </div>
  );
};

const Blog = () => {
  return (
    <div id="card-blog" className="card-inner animated">
      <h1>Card Blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        ipsam ut, velit dignissimos nostrum labore consequatur veritatis
        similique culpa tempora dicta quis aliquam. Laudantium nam accusantium
        doloremque officia ducimus!
      </p>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="card-contact" className="card-inner animated">
      <h1>Card Contact</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        ipsam ut, velit dignissimos nostrum labore consequatur veritatis
        similique culpa tempora dicta quis aliquam. Laudantium nam accusantium
        doloremque officia ducimus!
      </p>
    </div>
  );
};
