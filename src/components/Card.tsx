interface Props {
  id: string;
}

export default function Card({ id }: Props) {
  switch (id) {
    case 'about':
      return About();
      break;
    case 'resume':
      return Resume();
      break;
    case 'work':
      return Work();
      break;
    case 'blog':
      return Blog();
      break;
    case 'contact':
      return Contact();
      break;
  }
}

const About = () => {
  return (
    <div id="card-about" className="card-inner animated active">
      <section>
        <h1>
          <span>A</span>bout Me
        </h1>
        <div className="title">Greetings! I'm Sadegh Saedi Nia.</div>
        <p>
          I am a skilled Back-end & Front-end developer based in Stuttgart,
          Germany. My journey in web development has been diverse, with a strong
          foundation in back-end technologies and a creative touch in front-end
          design. I thrive on building seamless, efficient systems that elevate
          user experiences. Let's embark on a collaborative journey to turn your
          digital ideas into reality!
        </p>
      </section>

      <section className="services">
        <h1 className="text-2xl">
          <span>M</span>y Services
        </h1>
        <div className="services-inner flex flex-row justify-center">
          <div className="service">
            <div className="brand">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 18.178l4.62-1.256l.623-6.778H9.026L8.822 7.89h8.626l.227-2.211H6.325l.636 6.678h7.82l-.261 2.866l-2.52.667l-2.52-.667l-.158-1.844h-2.27l.329 3.544zM3 2h18l-1.623 18L12 22l-7.377-2z"
                />
              </svg>
            </div>
          </div>
          <div className="service">
            <div className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 18.08c-6.63 0-12-2.72-12-6.08s5.37-6.08 12-6.08S24 8.64 24 12s-5.37 6.08-12 6.08m-5.19-7.95c.54 0 .91.1 1.09.31c.18.2.22.56.13 1.03c-.1.53-.29.87-.58 1.09c-.28.22-.71.33-1.29.33h-.87l.53-2.76zm-3.5 5.55h1.44l.34-1.75h1.23c.54 0 .98-.06 1.33-.17c.35-.12.67-.31.96-.58c.24-.22.43-.46.58-.73c.15-.26.26-.56.31-.88c.16-.78.05-1.39-.33-1.82c-.39-.44-.99-.65-1.82-.65H4.59zm7.25-8.33l-1.28 6.58h1.42l.74-3.77h1.14c.36 0 .6.06.71.18c.11.12.13.34.07.66l-.57 2.93h1.45l.59-3.07c.13-.62.03-1.07-.27-1.36c-.3-.27-.85-.4-1.65-.4h-1.27L12 7.35zM18 10.13c.55 0 .91.1 1.09.31c.18.2.22.56.13 1.03c-.1.53-.29.87-.57 1.09c-.29.22-.72.33-1.3.33h-.85l.5-2.76zm-3.5 5.55h1.44l.34-1.75h1.22c.55 0 1-.06 1.35-.17c.35-.12.65-.31.95-.58c.24-.22.44-.46.58-.73c.15-.26.26-.56.32-.88c.15-.78.04-1.39-.34-1.82c-.36-.44-.99-.65-1.82-.65h-2.75z"
                />
              </svg>
            </div>
          </div>
          <div className="service">
            <div className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538a15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564c-.44-.02-.89-.034-1.345-.034c-.46 0-.915.01-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093c.406.582.802 1.203 1.183 1.86c.372.64.71 1.29 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005a26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16c-.225.39-.435.782-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387c-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474c0-.768 1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175c.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034c.46 0 .915-.01 1.36-.034c-.44.572-.895 1.095-1.345 1.565c-.455-.47-.91-.993-1.36-1.565"
                />
              </svg>
            </div>
          </div>
          <div className="service">
            <div className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M24 12c0 6.628-5.372 12-12 12S0 18.628 0 12S5.372 0 12 0s12 5.372 12 12m-6.753-7.561c-1.22.042-2.283.715-3.075 1.644c-.878 1.02-1.461 2.229-1.881 3.461c-.753-.614-1.332-1.414-2.539-1.761a3.101 3.101 0 0 0-2.813.514c-.41.319-.71.757-.861 1.254c-.36 1.176.381 2.225.719 2.6l.737.79c.15.154.519.56.339 1.138c-.193.631-.951 1.037-1.732.799c-.348-.106-.848-.366-.734-.73c.045-.15.152-.263.21-.391c.052-.11.077-.194.095-.242c.141-.465-.053-1.07-.551-1.223c-.465-.143-.939-.03-1.125.566c-.209.68.117 1.913 1.86 2.449c2.04.628 3.765-.484 4.009-1.932c.153-.907-.255-1.582-1.006-2.447l-.612-.677c-.371-.37-.497-1.002-.114-1.485c.324-.409.785-.584 1.539-.379c1.103.3 1.594 1.063 2.412 1.68c-.338 1.11-.56 2.223-.759 3.222l-.123.746c-.585 3.07-1.033 4.757-2.194 5.726c-.234.166-.57.416-1.073.434c-.266.005-.352-.176-.355-.257c-.006-.184.15-.271.255-.353c.154-.083.39-.224.372-.674c-.016-.532-.456-.994-1.094-.973c-.477.017-1.203.465-1.176 1.286c.028.85.819 1.485 2.012 1.444c.638-.021 2.062-.281 3.464-1.949c1.633-1.911 2.09-4.101 2.434-5.706l.383-2.116c.213.024.441.042.69.048c2.032.044 3.049-1.01 3.064-1.776c.01-.464-.304-.921-.744-.91a.848.848 0 0 0-.806.654c-.094.428.646.813.068 1.189c-.41.266-1.146.452-2.184.3l.188-1.042c.386-1.976.859-4.407 2.661-4.467c.132-.007.612.006.623.323c.003.105-.022.134-.147.375a.858.858 0 0 0-.168.537c.017.504.4.836.957.816c.743-.023.955-.748.945-1.119c-.032-.874-.952-1.424-2.17-1.386"
                />
              </svg>
            </div>
          </div>

          <div className="service">
            <div className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438zm17.09 4.413L5.41 4.41l.213 2.622l10.125.002l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523l-2.91.804l-2.956-.81l-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53z"
                />
              </svg>
            </div>
          </div>

          <div className="service">
            <div className="brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M10.174 12.594h3.652L12 8.095z" />
                <path
                  fill="currentColor"
                  d="M12 1L2 4.652l1.525 13.541L12 23l8.475-4.807L22 4.652zm6.24 16.786h-2.33l-1.257-3.212H9.347L8.09 17.786H5.76L12 3.431z"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Resume = () => {
  return (
    <div id="card-resume" className="card-inner animated">
      <h1>Card Resume</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam
        ipsam ut, velit dignissimos nostrum labore consequatur veritatis
        similique culpa tempora dicta quis aliquam. Laudantium nam accusantium
        doloremque officia ducimus!
      </p>
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
