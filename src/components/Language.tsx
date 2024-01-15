function Language() {
  return (
    <div className="dropdown dropdown-bottom bg-primary hover:bg-primary">
      <div
        tabIndex={0}
        role="button"
        className="bg-primary mt-4 md:mt-0 hover:text-secondary hover:bg-primary px-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-1 shadow bg-primary rounded-lg w-fit"
      >
        <li>
          <a
            href="./?lang=en"
            className="hover:bg-primary hover:text-secondary active"
          >
            English
          </a>
        </li>
        <li>
          <a
            href="./?lang=de"
            className="hover:bg-primary hover:text-secondary"
          >
            Deutsch
          </a>
        </li>
        <li>
          <a
            href="./?lang=fa"
            className="hover:bg-primary hover:text-secondary"
          >
            Persian
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Language;
