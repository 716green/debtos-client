import React, { useState } from "react";
import { Bars4Icon, ArrowRightIcon } from "@heroicons/react/24/outline";
import "@/index.css";

interface Props {
  children: React.ReactNode;
}

interface SidebarItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  current: boolean;
}

const CLOSED_WIDTH = 64;
const OPEN_WIDTH = 200;
const TOP_HEIGHT = 64;

const Layout = ({ children }: Props) => {
  const [sidebarWidth, setSidebarWidth] = useState(OPEN_WIDTH);
  const [firstLoad, setFirstLoad] = useState(true);

  const toggleSidebarWidth = () => {
    setFirstLoad(false);
    setSidebarWidth((s) => (s === OPEN_WIDTH ? CLOSED_WIDTH : OPEN_WIDTH));
  };

  const arrowIcon = (
    <ArrowRightIcon
      className={[
        "w-6 my-auto text-gray-500 relative left-0",
        sidebarWidth === CLOSED_WIDTH && "mx-auto",
      ].join(" ")}
    />
  );

  const sidebarItems = [
    {
      name: "Side 1",
      icon: arrowIcon,
      href: "#",
      current: true,
    },
    {
      name: "Side 2",
      icon: arrowIcon,
      href: "#",
      current: false,
    },
    {
      name: "Side 3",
      icon: arrowIcon,
      href: "#",
      current: false,
    },
  ];

  return (
    <div className="flex text-gray-300">
      <section
        id="sidebar"
        style={{ width: `${sidebarWidth}px` }}
        onClick={toggleSidebarWidth}
        className="bg-gray-800 h-full transition-all fixed"
      >
        <div
          id="logo"
          style={{
            width: `${sidebarWidth}px`,
            height: `${TOP_HEIGHT}px`,
          }}
          className="flex items-center justify-center transition-all bg-gray-900 text-sm"
        >
          DebtOS
        </div>
        <ul className="mt-4">
          {sidebarItems.map((item: SidebarItem, i: number) => (
            <li key={i} className="flex m-auto w-full">
              <button
                className={[
                  "w-full p-2 my-1 mx-2 rounded-xl transition-all",
                  item.current ? "bg-gray-900" : "hover:bg-gray-700",
                ].join(" ")}
              >
                <div className="my-auto flex justify-start">
                  {item.icon}
                  {sidebarWidth === OPEN_WIDTH && (
                    <span
                      style={{
                        animation: (!firstLoad && "fadein 0.5s cubic-bezier(0.4, 0, 0.6, 1)") || "",
                      }}
                      className="whitespace-nowrap ml-4 transition-all"
                    >
                      {item.name}
                    </span>
                  )}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section
        id="topbar"
        style={{
          left: `${sidebarWidth}px`,
          height: `${TOP_HEIGHT}px`,
          width: `calc(100% - ${sidebarWidth}px)`,
        }}
        className="absolute transition-all bg-gray-100 text-gray-500 flex px-4 shadow-xl"
      >
        <ul className="flex justify-between w-full my-auto">
          <li>TOP 1</li>
          <li>TOP 2</li>
          <li>
            <button onClick={toggleSidebarWidth}>
              <Bars4Icon className="w-4" />
            </button>
          </li>
        </ul>
      </section>
      <section
        id="body"
        style={{
          left: `${sidebarWidth}px`,
          top: `${TOP_HEIGHT}px`,
          height: `calc(100% - ${TOP_HEIGHT}px)`,
          width: `calc(100% - ${sidebarWidth}px)`,
        }}
        className="bg-gray-300 flex-grow absolute transition-all h-full text-gray-800 py-0"
      >
        <main className="mx-auto px-6 h-full overflow-y-auto py-6">{children}</main>
      </section>
    </div>
  );
};

export default Layout;
