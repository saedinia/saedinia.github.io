import React, { useEffect } from 'react';
import Avatar from './Avatar';
import Theme from './Theme';

function Navbar() {
  const fullName = 'Sadegh Saedi Nia';

  return (
    <nav className="md:grid md:gap-2">
      <div className="topbar-menu">
        <ul className="menu menu-horizontal md:menu-vertical bg-base-200 md:rounded-box w-full md:w-auto flex justify-between align-middle">
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
          <li>
            <Theme />
          </li>
        </ul>
      </div>
      <div className="divider m-0 bg-base-200 h-0"></div>
      <div className="mein-menu">
        <ul className="menu menu-horizontal md:menu-vertical bg-base-200 md:rounded-box w-full md:w-auto flex justify-between align-middle flex-nowrap px-0 gap-0 md:gap-4">
          <li>
            <a
              className="flex flex-col gap-0 p-0 md:p-2 md:tooltip mx-auto"
              data-tip="About"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <div className="menu-title md:hidden">About</div>
            </a>
          </li>
          <li>
            <a
              className="flex flex-col gap-0 p-0 md:p-2 md:tooltip mx-auto"
              data-tip="Resume"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>

              <div className="menu-title md:hidden">Resume</div>
            </a>
          </li>
          <li>
            <a
              className="flex flex-col gap-0 p-0 md:p-2 md:tooltip mx-auto"
              data-tip="Work"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
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

              <div className="menu-title  md:hidden">Work</div>
            </a>
          </li>
          <li>
            <a
              className="flex flex-col gap-0 p-0 md:p-2 md:tooltip mx-auto"
              data-tip="Blog"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                />
              </svg>

              <div className="menu-title md:hidden">Blog</div>
            </a>
          </li>
          <li>
            <a
              className="flex flex-col gap-0 p-0 md:p-2 md:tooltip mx-auto"
              data-tip="Contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>

              <div className="menu-title md:hidden">Contact</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
