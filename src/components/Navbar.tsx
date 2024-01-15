import { useEffect } from 'react';
import Avatar from './Avatar';
import Theme from './Theme';
import Language from './Language';

function Navbar() {
  const fullName = 'Sadegh Saedi Nia';

  useEffect(() => {
    const menuItems = document.querySelectorAll('.main-menu li a');
    menuItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        if (window.innerWidth >= 760) {
          menuItems.forEach((item) => {
            item.classList.remove('active');
          });

          const cards = document.querySelectorAll('.cards .card-inner');
          cards.forEach((card) => {
            card.classList.remove('active');
            card.classList.add('fadeOutUp');
            card.classList.remove('fadeInUp');
          });

          const cardTergetName = item
            .getAttribute('href')
            ?.replace('#', '')
            .toLowerCase();
          const cardTarget = document.querySelector(
            `.cards .card-inner[id="card-${cardTergetName}"]`,
          );

          item.classList.add('active');

          cardTarget?.classList.remove('fadeOutUp');
          cardTarget?.classList.add('active');
          cardTarget?.classList.add('fadeInUp');
        } else {
          menuItems.forEach((item) => {
            item.classList.remove('active');
          });

          const cardTergetName = item
            .getAttribute('href')
            ?.replace('#', '')
            .toLowerCase();

          const cardTarget: HTMLElement | null = document.querySelector(
            `.cards .card-inner[id="card-${cardTergetName}"]`,
          );

          const header: HTMLElement | null = document.querySelector('header');

          if (cardTarget && header) {
            window.scrollTo({
              top: cardTarget.offsetTop - header.offsetHeight,
              behavior: 'smooth',
            });
          }
        }
      });
    });
    return () => {
      menuItems.forEach((item) => {
        item.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <nav className="md:grid md:gap-2">
      <div className="topbar-menu">
        <ul className="menu menu-horizontal md:menu-vertical bg-primary w-full md:w-auto flex justify-between align-middle md:rounded-lg">
          <li className="flex flex-row align-middle md:hidden">
            <Avatar
              src="/images/profile.jpg"
              alt={fullName}
              className="rounded-full"
              widthClass="w-12"
            />

            <div className="full-name">
              <div className="title">{fullName}</div>
              <div className="subtitle r-typed"></div>
            </div>
          </li>
          <li className="flex flex-row">
            <Language />
            <Theme />
          </li>
        </ul>
      </div>
      <div className="divider m-0 bg-primary h-0 md:hidden"></div>
      <div className="main-menu">
        <ul className="menu menu-horizontal md:menu-vertical bg-primary md:rounded-lg w-full md:w-auto flex justify-between align-middle flex-nowrap px-0 gap-0 md:gap-4 uppercase">
          <li>
            <a
              href="#about"
              className="flex flex-col gap-0 p-0 mx-auto hover:text-secondary hover:bg-primary active:bg-primary active"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <div className="font-light p-2">About</div>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="flex flex-col gap-0 p-0 mx-auto hover:text-secondary hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <div className="font-light p-2">Resume</div>
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="flex flex-col gap-0 p-0 mx-auto hover:text-secondary hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <div className="font-light p-2">Work</div>
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="flex flex-col gap-0 p-0 mx-auto hover:text-secondary hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                />
              </svg>

              <div className="font-light p-2">Blog</div>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="flex flex-col gap-0 p-0 mx-auto hover:text-secondary hover:bg-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="w-8 h-8 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>

              <div className="font-light p-2">Contact</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
