type Props = {};

const cardStyles =
  "bg-gray-900 p-4 rounded-md text-white border border-transparent transition-color duration-200 hover:border-teal-500/50 flex-1 shadow-teal-500/20 shadow-lg/30 hover:shadow-lg/50";

function GridPlatform({}: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 lg:gap-4 mt-12">
        <div className="flex flex-col md:gap-y-4 gap-y-2">
          <article className={`${cardStyles}`} data-reveal="">
            <div className="h-8 w-8">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667V15.8333C2.5 16.7538 3.24619 17.5 4.16667 17.5H15.8333C16.7538 17.5 17.5 16.7538 17.5 15.8333V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5Z"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
                <path
                  d="M2.5 7.5H17.5M7.5 17.5V7.5"
                  stroke="#fff"
                  stroke-width="1.25"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <h3>Multi-Gate Synchronization</h3>
            <p>
              All gates share a closed-loop local network. A ticket scanned at
              Gate 1 is instantly invalidated at Gates 2–10, even with zero
              internet.
            </p>
          </article>
          <article className={`${cardStyles}`} data-reveal="">
            <div className="h-8 w-8">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M1.66667 5.83333C1.66667 5.39131 1.84226 4.96738 2.15482 4.65482C2.46738 4.34226 2.89131 4.16667 3.33333 4.16667H16.6667C17.1087 4.16667 17.5326 4.34226 17.8452 4.65482C18.1577 4.96738 18.3333 5.39131 18.3333 5.83333V14.1667C18.3333 14.6087 18.1577 15.0326 17.8452 15.3452C17.5326 15.6577 17.1087 15.8333 16.6667 15.8333H3.33333C2.89131 15.8333 2.46738 15.6577 2.15482 15.3452C1.84226 15.0326 1.66667 14.6087 1.66667 14.1667V5.83333Z"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
                <path
                  d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
                <path
                  d="M5 10H5.00833M15 10H15.0083"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
              </svg>
            </div>
            <h3>Multi-Vendor Cash Management</h3>
            <p>
              Digitize vendor contracts, track real-time sales per booth, and
              auto-calculate commission splits the moment gates close.
            </p>
          </article>
        </div>
        <article className={`${cardStyles}`} data-reveal="">
          <div className="w-48">
            <svg
              viewBox="0 0 333 95"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Evinra"
              style={{ color: "#fff" }}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M87.7968 48.8132C86.4453 35.347 84.4704 24.0335 74.0183 17.2985C67.6133 13.1712 60.3052 11.681 52.7482 11.9484C45.19 12.2158 38.0076 14.2187 31.913 18.7888C15.0842 31.4049 15.7507 64.0468 32.4588 76.4851C42.8714 84.2355 57.8511 85.0659 69.5401 79.9513C76.3381 76.9781 86.7175 74.6354 94.1328 75.1236C91.1724 79.6287 87.4272 83.4408 82.9674 86.5733C74.9004 92.2399 65.4807 94.6133 55.7111 94.9592C49.0264 95.1946 42.3528 94.4281 36.0179 92.2362C30.2966 90.2566 25.094 87.281 20.6539 83.1636C16.2139 79.0461 12.8629 74.0909 10.4741 68.5494C7.82905 62.413 6.58598 55.8412 6.34821 49.186C6.11044 42.5308 6.88289 35.8879 9.0832 29.5799C11.0704 23.8838 14.0604 18.7042 18.1961 14.2837C22.3319 9.86328 27.3091 6.5271 32.8752 4.14885C39.0388 1.51425 45.6397 0.277898 52.3244 0.0411761C59.0091 -0.195545 65.6815 0.572267 72.0176 2.76409C77.7389 4.74249 82.9415 7.71929 87.3816 11.8368C91.8204 15.953 95.1726 20.9107 97.5614 26.451C102.608 38.1582 100.506 52.5541 98.1392 64.4564C71.0837 57.7436 59.0609 73.7965 26.7892 62.4486C57.3632 65.4462 73.1744 47.399 87.7992 48.8119L87.7968 48.8132Z"
                fill="#3A4B70"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.05448 25.1929C4.05448 25.1929 4.51893 32.9103 14.9452 37.1737C17.7294 38.312 21.2246 39.2049 25.6104 39.6391C51.1321 42.1633 61.541 20.5603 86.9297 19.0222C95.641 18.4948 103.002 19.6257 105.981 24.7796C108.85 29.7446 110.029 40.0769 108.481 47.132C102.727 39.498 95.9613 37.4546 88.4893 38.361C72.497 40.3002 53.2683 55.7447 33.7957 58.7718C27.1208 59.8095 19.9076 59.6709 13.9202 57.6986C11.2 56.8032 8.73107 55.5276 6.68106 53.8141C-0.486593 47.8201 -2.67951 36.7518 4.05202 25.1917L4.05448 25.1929Z"
                fill="#209991"
              ></path>
              <path
                d="M158.795 37.1645C157.213 31.5048 152.545 28.2365 146.374 28.2365C140.203 28.2365 135.535 31.5048 133.953 37.1645H158.795ZM133.557 44.7374C134.665 51.4333 139.649 55.3393 146.374 55.3393C150.804 55.3393 154.523 53.6653 156.817 50.5565H165.758C162.751 58.209 155.71 62.9122 146.374 62.9122C133.873 62.9122 125.408 54.3828 125.408 41.7879C125.408 29.1931 133.873 20.6637 146.374 20.6637C158.874 20.6637 167.34 29.1931 167.34 41.7879C167.34 42.8242 167.261 43.7808 167.182 44.7374H133.557Z"
                fill="currentColor"
              ></path>
              <path
                d="M182.454 61.7165L166.552 21.8594H175.096L187.201 52.5493L199.069 21.8594H207.613L191.711 61.7165H182.454Z"
                fill="currentColor"
              ></path>
              <path
                d="M210.11 9.50373C210.11 6.71374 212.088 4.8006 214.936 4.8006C217.784 4.8006 219.762 6.71374 219.762 9.50373C219.762 12.3734 217.784 14.3663 214.936 14.3663C212.088 14.3663 210.11 12.3734 210.11 9.50373ZM210.743 61.7165V21.8594H219.05V61.7165H210.743Z"
                fill="currentColor"
              ></path>
              <path
                d="M233.257 41.7879V61.7165H224.95V21.8594H233.257V26.722C236.184 23.0551 240.536 20.6637 246.549 20.6637C257.388 20.6637 264.113 28.5554 264.113 39.1574V61.7165H255.805V38.9979C255.805 32.4614 252.483 28.2365 245.837 28.2365C238.558 28.2365 233.257 33.2585 233.257 41.7879Z"
                fill="currentColor"
              ></path>
              <path
                d="M277.924 61.7165H269.617V21.8594H277.924V24.8088C281.247 21.0623 286.073 19.6274 292.244 21.2217L290.82 28.396C281.801 26.8814 277.924 32.1425 277.924 41.7879V61.7165Z"
                fill="currentColor"
              ></path>
              <path
                d="M324.693 61.7165V57.2525C321.686 60.6802 317.177 62.9122 311.085 62.9122C299.138 62.9122 290.673 54.3828 290.673 41.7879C290.673 29.1931 299.138 20.6637 311.085 20.6637C317.177 20.6637 321.686 22.8957 324.693 26.3234V21.8594H333V61.7165H324.693ZM298.584 41.7879C298.584 50.3173 303.964 55.3393 311.638 55.3393C319.392 55.3393 324.693 50.3173 324.693 41.7879C324.693 33.2585 319.392 28.2365 311.638 28.2365C303.964 28.2365 298.584 33.2585 298.584 41.7879Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="w-full border-b border-zinc-50/10 py-2"></div>
          <div className="mt-2 text-gray-400">One connected ecosystem</div>
          <div className="flex flex-col mt-3 gap-2 *:p-2 *:bg-teal-500/20 *:rounded-md *:text-xs *:font-semibold *:text-teal-500">
            <span className="eco-chip">Ticketing</span>
            <span className="eco-chip">POS</span>
            <span className="eco-chip">Vendors</span>
            <span className="eco-chip">Reports</span>
          </div>
        </article>
        <div className="flex flex-col md:gap-y-4 gap-y-2">
          <article className={`${cardStyles}`} data-reveal="">
            <div className="h-8 w-8">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M14.1667 17.5V15.8333C14.1667 14.9493 13.8155 14.1014 13.1904 13.4763C12.5652 12.8512 11.7174 12.5 10.8333 12.5H4.16667C3.28261 12.5 2.43477 12.8512 1.80964 13.4763C1.18452 14.1014 0.833334 14.9493 0.833334 15.8333V17.5"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
                <path
                  d="M7.5 9.16667C9.34095 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34095 2.5 7.5 2.5C5.65905 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65905 9.16667 7.5 9.16667Z"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
                <path
                  d="M19.1667 17.5V15.8333C19.1661 15.0948 18.9203 14.3773 18.4678 13.7936C18.0153 13.2099 17.3818 12.793 16.6667 12.6083M13.3333 2.60833C14.0503 2.79192 14.6859 3.20892 15.1397 3.79359C15.5935 4.37827 15.8399 5.09736 15.8399 5.8375C15.8399 6.57764 15.5935 7.29673 15.1397 7.88141C14.6859 8.46608 14.0503 8.88308 13.3333 9.06667"
                  stroke="#fff"
                  stroke-width="1.25"
                ></path>
              </svg>
            </div>
            <h3>Granular Team Permissions</h3>
            <p>
              Give each staff member exactly the access they need. Gate staff
              scan. Admins see everything.
            </p>
          </article>
          <article className={`${cardStyles}`} data-reveal="">
            <div className="h-8 w-8">
              <svg viewBox="0 0 20 20" fill="none">
                <path
                  d="M2.5 2.5V17.5H17.5"
                  stroke="#fff"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M15.8333 7.5L11.6667 11.6667L8.33333 8.33333L5.83333 10.8333"
                  stroke="#fff"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <h3>Unified Financial Reporting</h3>
            <p>
              One dashboard: ticketing revenue, POS sales, vendor commissions,
              cash reconciliation. Close your books in minutes.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default GridPlatform;
