import About from './Cards/About';

interface Props {
  id: string;
}

export default function Card({ id }: Props) {
  switch (id) {
    case 'about':
      return <About />;
    case 'resume':
      return Resume();
    case 'work':
      return Work();
    case 'blog':
      return Blog();
    case 'contact':
      return Contact();
  }
}

const Resume = () => {
  return (
    <div id="card-resume" className="card-inner animated">
      <section>
        <h1>Card Resume</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
          ipsam ut, velit dignissimos nostrum labore consequatur veritatis
          similique culpa tempora dicta quis aliquam. Laudantium nam accusantium
          doloremque officia ducimus!
        </p>
      </section>
    </div>
  );
};

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
