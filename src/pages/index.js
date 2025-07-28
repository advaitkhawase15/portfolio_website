import React, { useState, useEffect } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import Xarrow, { Xwrapper } from "react-xarrows";
import HomeSvg from './HomeSvg';
import AboutMeSvg from './AboutMeSvg';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sections = [
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "about_me", label: "About me" },
  { id: "projects", label: "Projects" },
  { id: "contact_me", label: "Contact Me" },
];


export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + 200; // Offset for navbar

      let current = sections[0].id;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el && el.offsetTop <= scrollPos) {
          current = section.id;
        }
      }
      setActive(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="mx-8 sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 text-sm">
        <nav className="absolute flex mt-4 w-full bg-white border border-gray-200 rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-8 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
          <div className="flex items-center">
            Portfolio
          </div>

          <div className="flex items-center gap-1 md:order-4">
            {/* <a className="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200" href="#">
            Book a call
          </a> */}

            <div className="md:hidden">
              {/* Toggle Button */}
              <button
                type="button"
                className="flex justify-center items-center size-9.5 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-expanded={!isCollapsed}
                aria-controls="navbar-collapse"
                aria-label="Toggle navigation"
                onClick={toggleCollapse}
              >
                {isCollapsed ? (
                  <svg
                    className="shrink-0 size-3.5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                ) : (
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            id="navbar-collapse"
            className={`${isCollapsed ? 'hidden' : ''} md:flex overflow-hidden transition-all duration-300 basis-full grow`}
            aria-labelledby="navbar-collapse"
          >
            {/* ------------- FLEX WRAPPER ------------- */}
            <div className="flex flex-col md:flex-row md:items-center mt-3 md:mt-0 py-2 md:py-0 w-full">

              {/* --------- LINKS (center on md+) --------- */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-3 md:mx-auto">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={`py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 font-medium transition
            ${active === section.id
                        ? "border-gray-800 text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
                        : "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400"
                      }`
                    }
                    aria-current={active === section.id ? "page" : undefined}
                  >
                    {section.label}
                  </a>
                ))}
              </div>
              {/* --------- RESUME BUTTON (right) --------- */}
            </div>
            {/* <button
              type="button"
              className="flex items-center justify-center rounded bg-neutral-100 w-full md:w-auto my-2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-600 shadow-light-3 transition duration-150 ease-in-out hover:bg-neutral-200 hover:shadow-light-2 focus:bg-neutral-200 focus:shadow-light-2 focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-light-2 motion-reduce:transition-none dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-black/30 dark:hover:bg-neutral-700 md:ml-auto"
            > */}
            <button
              type="button"
              className="flex items-center justify-center rounded bg-neutral-100 text-black font-medium px-6 py-2 md:ml-auto my-2 transition-colors duration-200 hover:bg-neutral-800 hover:text-neutral-100 border hover:border-neutral-100" >
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Resume
            </button>
          </div>
        </nav>
      </header>
      {/* HOME */}
      <div id="home" className='mx-8 px-8 flex flex-row'>
        <div className='w-[60%] flex items-center'>
          <section className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl md:text-5xl font-light text-neutral-300 tracking-tight mb-4">
              Hello!! I am <span className="text-neutral-100 font-bold decoration-white/40">Advait Khawase</span>
              <br /> a <span className='font-bold text-neutral-100 text-stroke font-outline-1'> Data Engineer</span>.
            </h1>
            <p className="text-l md:text-l font-light text-neutral-400 w-full">
              dedicated to building robust, data-driven solutions.
            </p>
          </section>
        </div>
        <div className='w-[40%] h-lvh relative'>
          <HomeSvg className='absolute -bottom-20' />
        </div>
      </div>
      {/* SKILLS */}
      <div id="skills" className='mx-8 scroll-mt-30'>
        <div className='bg-neutral-100 rounded-[24px] p-8'>
          <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-800'>
            My Skills
          </div>
          <div className='flex flex-wrap align-start justify-between gap-8'>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
            <div className='size-40 rounded border-2 border-neutral-800'></div>
          </div>
        </div>
      </div>
      <Xwrapper>
        {/* EXPERIENCE */}
        <div id="experience" className='mx-8 relative scroll-mt-30'>
          <div className='w-full p-8'>
            <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-100'>
              Experience
            </div>
            <div className="flex flex-col items-center space-y-10">
              <div id="start" className="absolute -top-1 left-10 -z-2"></div>
              <div id="node1" className="text-left text-neutral-800 relative w-2/3 bg-neutral-100 p-8 rounded-[24px] border border-neutral-400">
                <div className='flex justify-between items-baseline w-full text-xl md:text-3xl font-bold'>
                  <span>Data Engineer</span><span className='text-sm font-light'>Dec 2023 - Present</span>
                </div>
                <div className='mb-4 w-full'>Jio Platform Limited (JPL)</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
                  neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
                  risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
                  aliquet lorem, nec dignissim nulla purus vitae arcu. Nam et dolor eget felis
                  blandit auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                  per inceptos himenaeos. Donec aliquet, ante posuere finibus condimentum, nunc sapien
                  elementum ex, a sagittis lorem mauris quis quam. Nunc rhoncus justo et ex pulvinar vulputate.
                </div>
                <div id="temp1" className='absolute -right-30 bottom-10'></div>
              </div>
              {/* <div id="node2" className=" w-2/3 bg-white border border-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula aliquet lorem, nec dignissim nulla purus vitae arcu. Nam et dolor eget felis blandit auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet, ante posuere finibus condimentum, nunc sapien elementum ex, a sagittis lorem mauris quis quam. Nunc rhoncus justo et ex pulvinar vulputate. Vestibulum malesuada vitae lacus ornare volutpat. Nullam ac arcu sit amet orci consectetur blandit. Ut feugiat, ex vel tempor blandit, neque justo vehicula ligula, id tincidunt libero quam vel quam. Curabitur hendrerit ac nisi vitae dapibus. Cras blandit magna ut sem vestibulum, a bibendum dolor tincidunt. Curabitur venenatis semper diam ac consequat.
              </div> */}
              <div id="end" className="absolute bottom-0 -z-2"></div>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <Xarrow
          className="-z-1"
          start="start"
          end="node1"
          color="#f5f5f5"
          headShape="circle"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={1.7}
          startAnchor="left"
          endAnchor="left"
        />
        <Xarrow
          start="node1"
          end="temp1"
          color="#f5f5f5"
          strokeWidth={2}
          headSize={0}
          path="smooth"
          curveness={0.7}
          startAnchor="right"
          endAnchor="top"
        />
        {/* <Xarrow
          start="temp1"
          end="node2"
          color="#f5f5f5"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={0.7}
          startAnchor="bottom"
          endAnchor="right"
        /> */}
        <Xarrow
          start="temp1"
          end="end"
          color="#f5f5f5"
          strokeWidth={2}
          headSize={0}
          path="smooth"
          curveness={1.2}
          startAnchor="bottom"
          endAnchor="top"
        />
      </Xwrapper>
      {/* ABOUT ME */}
      <div id="about_me" className='flex flex-row gap-6 w-full py-8 px-16 bg-neutral-100 justify-between scroll-mt-30'>
        <div className='w-1/4'>
          <AboutMeSvg className='w-full' />
        </div>
        <div className='w-2/3 text-neutral-800'>
          <div className='mb-6 w-full text-2xl md:text-4xl text-left font-bold text-neutral-800'>
            About Me
          </div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
          neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
          risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
          aliquet lorem, nec dignissim nulla purus vitae arcu. Nam et dolor eget felis
          blandit auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Donec aliquet, ante posuere finibus condimentum, nunc sapien
          elementum ex, a sagittis lorem mauris quis quam. Nunc rhoncus justo et ex pulvinar vulputate.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
          neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
          risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
          aliquet lorem, nec dignissim nulla purus vitae arcu. Nam et dolor eget felis
          blandit auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Donec aliquet, ante posuere finibus condimentum, nunc sapien
          elementum ex, a sagittis lorem mauris quis quam. Nunc rhoncus justo et ex pulvinar vulputate.

        </div>
      </div>
      {/* PROJECTS */}
      <Xwrapper>
        <div id="projects" className='relative mx-8 scroll-mt-30'>
          <div className='w-full p-8'>
            <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-100'>
              Projects
            </div>
            <div>
              <div id="project_start" className="absolute -top-1 left-1/2 -z-2"></div>
              <div className="flex items-center">
                <div className="h-fit text-left text-neutral-800 relative w-2/5 bg-neutral-100 p-8 rounded-[24px] border border-neutral-400">
                  <div className='flex justify-between items-baseline w-full text-xl md:text-3xl font-bold'>
                    <span>Data Engineer</span><span className='text-sm font-light'>Dec 2023 - Present</span>
                  </div>
                  <div className='mb-4 w-full'>Jio Platform Limited (JPL)</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
                    neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
                    risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
                  </div>
                </div>
                <div id="project_node1" className="ml-2"></div>
              </div>
              <div className="flex justify-end items-center">
                <div id="project_node2" className="mr-2"></div>
                <div className="h-fit text-left text-neutral-800 relative w-2/5 bg-neutral-100 p-8 rounded-[24px] border border-neutral-400">
                  <div className='flex justify-between items-baseline w-full text-xl md:text-3xl font-bold'>
                    <span>Data Engineer</span><span className='text-sm font-light'>Dec 2023 - Present</span>
                  </div>
                  <div className='mb-4 w-full'>Jio Platform Limited (JPL)</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
                    neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
                    risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
                  </div>
                  {/* <div id="temp1" className='absolute -right-40 bottom-10'></div> */}
                </div>
              </div>
              <div className="flex items-center">
                <div className=" h-fit text-left text-neutral-800 w-2/5 bg-neutral-100 p-8 rounded-[24px] border border-neutral-400">
                  <div className='flex justify-between items-baseline w-full text-xl md:text-3xl font-bold'>
                    <span>Data Engineer</span><span className='text-sm font-light'>Dec 2023 - Present</span>
                  </div>
                  <div className='mb-4 w-full'>Jio Platform Limited (JPL)</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
                    neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
                    risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
                  </div>
                  {/* <div id="temp1" className='absolute -right-40 bottom-10'></div> */}
                </div>
                <div id="project_node3" className="ml-2"></div>
              </div>
              <div className="flex justify-end items-center">
                <div id="project_node4" className="mr-2"></div>
                <div className="h-fit text-left text-neutral-800 w-2/5 bg-neutral-100 p-8 rounded-[24px] border border-neutral-400">
                  <div className='flex justify-between items-baseline w-full text-xl md:text-3xl font-bold'>
                    <span>Data Engineer</span><span className='text-sm font-light'>Dec 2023 - Present</span>
                  </div>
                  <div className='mb-4 w-full'>Jio Platform Limited (JPL)</div>
                  <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate,
                    neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna
                    risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula
                  </div>
                  {/* <div id="temp1" className='absolute -right-40 bottom-10'></div> */}
                </div>
              </div>
              {/* <div id="node2" className=" w-2/3 bg-white border border-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, neque nec lacinia auctor, magna velit iaculis velit, sit amet porttitor urna risus sit amet purus. In imperdiet, nibh a rhoncus tincidunt, purus ligula aliquet lorem, nec dignissim nulla purus vitae arcu. Nam et dolor eget felis blandit auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquet, ante posuere finibus condimentum, nunc sapien elementum ex, a sagittis lorem mauris quis quam. Nunc rhoncus justo et ex pulvinar vulputate. Vestibulum malesuada vitae lacus ornare volutpat. Nullam ac arcu sit amet orci consectetur blandit. Ut feugiat, ex vel tempor blandit, neque justo vehicula ligula, id tincidunt libero quam vel quam. Curabitur hendrerit ac nisi vitae dapibus. Cras blandit magna ut sem vestibulum, a bibendum dolor tincidunt. Curabitur venenatis semper diam ac consequat.
              </div> */}
              <div id="project_end" className="absolute bottom-0 left-1/2 -z-2"></div>
            </div>
          </div>
        </div>
        {/* Arrows */}
        <Xarrow
          className="-z-1"
          start="project_start"
          end="project_node1"
          color="#f5f5f5"
          headShape="circle"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={0.7}
          startAnchor="bottom"
          endAnchor="top"
        />
        <Xarrow
          start="project_node1"
          end="project_node2"
          color="#f5f5f5"
          headShape="circle"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={0.7}
          startAnchor="bottom"
          endAnchor="top"
        />
        <Xarrow
          start="project_node2"
          end="project_node3"
          color="#f5f5f5"
          headShape="circle"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={0.7}
          startAnchor="bottom"
          endAnchor="top"
        />
        <Xarrow
          start="project_node3"
          end="project_node4"
          color="#f5f5f5"
          headShape="circle"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={0.7}
          startAnchor="bottom"
          endAnchor="top"
        />
        <Xarrow
          start="project_node4"
          end="project_end"
          color="#f5f5f5"
          strokeWidth={2}
          headSize={6}
          path="smooth"
          curveness={0.7}
          startAnchor="bottom"
          endAnchor="top"
        />
      </Xwrapper >
      {/* Contact me */}
      < div id="contact_me" className='bg-neutral-100 p-8 scroll-mt-30' >
        {/* <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-800'>
          Contact Me
        </div> */}
        <div className='flex flex-column text-neutral-800 items-center'>
          <div className='w-1/2 h-80 content-center m-8'>
            <h3 className="text-2xl md:text-4xl font-light text-neutral-600 tracking-tight mb-4">
              Want to start a <span className="text-neutral-800 font-bold decoration-black/40">Conversation</span>
              <br /> Let's get <span className='font-bold text-neutral-800 text-stroke font-outline-1' style={{ WebkitTextStroke: '1px black' }}>Connected</span>..
            </h3>
          </div>
          <div className='border-1 border-neutral-400 rounded h-70'></div>
          <div className='w-1/2 h-80 m-8'>
            <p className="text-l md:text-l font-light text-neutral-400 w-full">
              Here are my socials..
            </p>
          </div>
        </div>
      </div >
      {/* FOOTER */}
      < div className='w-full h-20 bg-neutral-900 border-t border-neutral-700' >
      </div >
    </>
  );
}
