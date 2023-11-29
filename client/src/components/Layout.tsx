import { Button, Overlay, useSidebar } from '@rewind-ui/core';
import { useState } from 'react';

import SideBar from './SideBar';
import NavBar from './NavBar';

const Layout = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobile, setMobile] = useState(false);
  const sidebar = useSidebar();

  const handleExpand = (value: boolean) => {
    setExpanded(value);
  };

  const handleMobile = (value: boolean) => {
    setMobile(value);
  };
  return (
    <div className='className="relative flex flex-row w-full h-full min-h-[35rem]"'>
      <SideBar onExpand={handleExpand} onMobile={handleMobile} />
      <main
        className={`transition-all transform duration-100 text-slate-700 flex w-full flex-col items-center ${
          expanded ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        {mobile && (
          <Overlay
            blur="none"
            onClick={() => {
              sidebar.toggleMobile();
            }}
            className="md:hidden z-40"
          />
        )}
        <header className="flex flex-row sticky top-0 px-8 items-center bg-white border-b border-b-gray-100 w-full shadow-sm min-h-[4rem]">
          <NavBar />

          <Button
            onClick={() => {
              sidebar.toggleMobile();
            }}
            size="sm"
            color="white"
            icon
            className="ml-auto flex md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M448 96c0-17.7-14.3-32-32-32H32C14.3 64 0 78.3 0 96s14.3 32 32 32H416c17.7 0 32-14.3 32-32zm0 320c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32z" />
              <path
                className="opacity-50"
                d="M0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"
              />
            </svg>
          </Button>
        </header>

        <div className="w-full h-full p-8">
          <p>Dashboard</p>
        </div>

        <div className="flex sticky bottom-0 items-center bg-white w-full min-h-[4rem] px-8">
          <span>Footer</span>
        </div>
      </main>
    </div>
  );
};

export default Layout;
