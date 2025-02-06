import React, { useState } from "react"
import { topLinks } from "../data";

const Header = () => {
  const [respMenu, setRespMenu] = useState(false);
  return (
    <>
      <nav className="px-4 ">
        <div className="mx-auto container flex justify-between py-4 border-b-[1px] border-qablack relative">
            <div id="Logo">
                <a href="/">
                    <img src="./LOGO-QA.png" alt="Logo QA" width={'47px'}/>
                </a>
            </div>

            <div id="NavLinks" className="text-qablack self-center lg:block hidden">
              <ul className="flex xl:gap-16 md:gap-8">
                {topLinks.map(data => {
                  return(
                  <li className="text-qablack" key={data.link}>
                    <a href={data.link}>{data.name}</a>
                  </li>
                  )
                })}
              </ul>
            </div>

            <div className="flex items-center lg:hidden block">
              <button onClick={() => setRespMenu(!respMenu)} aria-label="Header Menu">
                {respMenu ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                  </svg>
                )}
              </button>
            </div>
            {respMenu && (
              <div id="NavLinks" className="text-qablack self-center w-full absolute top-[70px] bg-white left-0 py-2 z-50">
                <ul className="xl:gap-16 md:gap-8">
                  {topLinks.map(data => {
                    return(
                    <li className="text-qablack py-2 ps-4" key={data.link}>
                      <a href={data.link}>{data.name}</a>
                    </li>
                    )
                  })}
                </ul>
              </div>
            )
            }

            <div id="Phone Button" className="self-center btn-grow-box qablack">
                <a href="tel:+12405936567" className="animated-button rounded-lg text-qablack font-bold px-4 py-1 text-[16px] ">240-593-6567</a>
            </div>
        </div>
      </nav>
    </>
  )
};

export default Header;
