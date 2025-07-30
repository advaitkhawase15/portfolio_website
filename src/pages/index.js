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
      <header className="mx-4 sm:mx-8 sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 text-sm">
        <nav className="w-full flex mt-4 bg-white border border-gray-200 rounded-[35px] sm:rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-4 md:p-8 md:py-0 sm:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
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
      <div id="home" className='mx-4 sm:mx-8 px-8 flex flex-col sm:flex-row'>
        <div className='w-full sm:w-[60%] sm:h-auto flex items-center z-2'>
          <section className="flex flex-col items-center justify-start mt-40 sm:mt-0 sm:justify-center min-h-screen">
            <h1 className="text-3xl md:text-5xl font-light text-neutral-300 tracking-tight mb-4">
              Hello!! I am <span className="text-neutral-100 font-bold decoration-white/40">Advait Khawase</span>
              <br /> a <span className='font-bold text-neutral-100 text-stroke font-outline-1'> Data Engineer</span>.
            </h1>
            <p className="text-l md:text-l font-light text-neutral-400 w-full">
              dedicated to building robust, data-driven solutions.
            </p>
          </section>
        </div>
        <div className='w-full sm:w-1/2 md:w-2/5 sm:h-auto relative'>
          <HomeSvg className='absolute bottom-0 lg:-bottom-15 xl:-bottom-20' />
        </div>
      </div>
      {/* SKILLS */}
      <div id="skills" className='mx-4 sm:mx-8 scroll-mt-30'>
        <div className='bg-neutral-100 rounded-[24px] p-4 sm:p-8'>
          <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-800'>
            My Skills
          </div>
          <div className='flex flex-wrap justify-center justify-between gap-8'>
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
        <div id="experience" className='mx-4 sm:mx-8 relative scroll-mt-30'>
          <div className='w-full p-4 sm:p-8'>
            <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-100'>
              Experience
            </div>
            <div className="flex flex-col items-center space-y-10">
              <div id="start" className="absolute -top-1 left-5 sm:left-10 -z-2"></div>
              <div id="node1" className="text-left text-neutral-800 relative w-5/6 md:w-2/3 bg-neutral-100 p-8 rounded-[24px] border border-neutral-400">
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
                <div id="temp1" className='absolute -right-10 sm:-right-30 bottom-10'></div>
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
      <div id="about_me" className='flex flex-col md:flex-row gap-6 w-full py-8 px-8 sm:px-16 bg-neutral-100 justify-between scroll-mt-30'>
        <div className='1/3 lg:w-1/4 content-center m-auto'>
          <AboutMeSvg className='w-full' />
        </div>
        <div className='w-full md:w-2/3 text-neutral-800'>
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
        <div id="projects" className='relative mx-4 sm:mx-8 scroll-mt-30'>
          <div className='w-full p-4 sm:p-8'>
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
      <div id="contact_me" className='bg-neutral-100 p-8 scroll-mt-30' >
        {/* <div className='mb-6 w-full text-2xl md:text-4xl text-center font-bold text-neutral-800'>
          Contact Me
        </div> */}
        <div className='flex flex-col lg:flex-row text-neutral-800 items-center'>
          <div className='w-full lg:w-2/3 lg:h-90 content-center text-center lg:text-left m-4 sm:m-8'>
            <h3 className="text-2xl md:text-4xl font-light text-neutral-600 tracking-tight lg:mb-4">
              Want to start a <span className="text-neutral-800 font-bold decoration-black/40">Conversation</span>
              <br /> Let's get <span className='font-bold text-neutral-800 text-stroke font-outline-1' style={{ WebkitTextStroke: '1px black' }}>Connected</span>..
            </h3>
          </div>
          <div className='border-1 border-neutral-400 rounded w-2/3 h-0 lg:w-0 lg:h-70'></div>
          <div className='lg:content-center w-4/5 lg:1/2'>
            <div className=' text-sm md:text-md lg:h-90 m-4 sm:m-8 text-neutral-400 flex flex-row lg:flex-col justify-center gap-5'>
              <a className='flex gap-5'  href='mailto:advaitkhawase15@gmail.com'>
                <svg className='w-7' viewBox="0 0 84 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.3333 59H67V22.5417L42 38.1667L17 22.5417V59H8.66665V9.00002H13.6666L42 26.7083L70.3333 9.00002H75.3333M75.3333 0.666687H8.66665C4.04165 0.666687 0.333313 4.37502 0.333313 9.00002V59C0.333313 61.2101 1.21129 63.3298 2.77409 64.8925C4.33689 66.4554 6.45651 67.3333 8.66665 67.3333H75.3333C77.5434 67.3333 79.6631 66.4554 81.2259 64.8925C82.7887 63.3298 83.6666 61.2101 83.6666 59V9.00002C83.6666 6.78988 82.7887 4.67027 81.2259 3.10746C79.6631 1.54466 77.5434 0.666687 75.3333 0.666687Z" fill="black" />
                </svg>
                <span className='underline hidden lg:block' >
                  advaitkhawase15@gmail.com
                </span>
              </a>
              <a className='flex gap-5' href='https://www.linkedin.com/in/advait-khawase/'>
                <svg className='w-7' viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M67.1667 0.5C69.3768 0.5 71.4964 1.37797 73.0592 2.94078C74.622 4.50358 75.5 6.6232 75.5 8.83333V67.1667C75.5 69.3768 74.622 71.4964 73.0592 73.0592C71.4964 74.622 69.3768 75.5 67.1667 75.5H8.83333C6.6232 75.5 4.50358 74.622 2.94078 73.0592C1.37797 71.4964 0.5 69.3768 0.5 67.1667V8.83333C0.5 6.6232 1.37797 4.50358 2.94078 2.94078C4.50358 1.37797 6.6232 0.5 8.83333 0.5H67.1667ZM65.0833 65.0833V43C65.0833 39.3975 63.6522 35.9425 61.1049 33.3951C58.5575 30.8478 55.1025 29.4167 51.5 29.4167C47.9583 29.4167 43.8333 31.5833 41.8333 34.8333V30.2083H30.2083V65.0833H41.8333V44.5417C41.8333 41.3333 44.4167 38.7083 47.625 38.7083C49.1721 38.7083 50.6558 39.3229 51.7498 40.4169C52.8438 41.5108 53.4583 42.9946 53.4583 44.5417V65.0833H65.0833ZM16.6667 23.6667C18.5232 23.6667 20.3037 22.9292 21.6164 21.6164C22.9292 20.3037 23.6667 18.5232 23.6667 16.6667C23.6667 12.7917 20.5417 9.625 16.6667 9.625C14.7991 9.625 13.008 10.3669 11.6875 11.6875C10.3669 13.008 9.625 14.7991 9.625 16.6667C9.625 20.5417 12.7917 23.6667 16.6667 23.6667ZM22.4583 65.0833V30.2083H10.9167V65.0833H22.4583Z" fill="black" />
                </svg>
                <span className='underline hidden lg:block'>
                  https://www.linkedin.com/in/advait-khawase
                </span>
              </a>
              <a className='flex gap-5' href='https://github.com/advaitkhawase15'>
                <svg className='w-7' viewBox="0 0 84 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42 0.333313C36.5282 0.333313 31.1101 1.41105 26.0548 3.505C20.9996 5.59895 16.4063 8.66809 12.5372 12.5372C4.72318 20.3512 0.333313 30.9493 0.333313 42C0.333313 60.4166 12.2916 76.0416 28.8333 81.5833C30.9166 81.9166 31.5833 80.625 31.5833 79.5V72.4583C20.0416 74.9583 17.5833 66.875 17.5833 66.875C15.6666 62.0416 12.9583 60.75 12.9583 60.75C9.16665 58.1666 13.25 58.25 13.25 58.25C17.4166 58.5416 19.625 62.5416 19.625 62.5416C23.25 68.875 29.375 67 31.75 66C32.125 63.2916 33.2083 61.4583 34.375 60.4166C25.125 59.375 15.4166 55.7916 15.4166 39.9166C15.4166 35.2916 17 31.5833 19.7083 28.625C19.2916 27.5833 17.8333 23.25 20.125 17.625C20.125 17.625 23.625 16.5 31.5833 21.875C34.875 20.9583 38.4583 20.5 42 20.5C45.5416 20.5 49.125 20.9583 52.4166 21.875C60.375 16.5 63.875 17.625 63.875 17.625C66.1666 23.25 64.7083 27.5833 64.2917 28.625C67 31.5833 68.5833 35.2916 68.5833 39.9166C68.5833 55.8333 58.8333 59.3333 49.5417 60.375C51.0417 61.6666 52.4166 64.2083 52.4166 68.0833V79.5C52.4166 80.625 53.0833 81.9583 55.2083 81.5833C71.75 76 83.6667 60.4166 83.6667 42C83.6667 36.5282 82.5889 31.1101 80.495 26.0548C78.401 20.9996 75.3319 16.4063 71.4628 12.5372C67.5937 8.66809 63.0004 5.59895 57.9451 3.505C52.8899 1.41105 47.4717 0.333313 42 0.333313Z" fill="black" />
                </svg>
                <span className='underline hidden lg:block'>
                  https://github.com/advaitkhawase15
                </span>
              </a>
              <a className='flex gap-5'  href='https://leetcode.com/u/advaitkhawase15/'>
                <svg className='w-6' viewBox="0 0 84 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.0906 74.7094L47.8562 85.5625C45.9062 87.5156 43.2187 88.3281 40.2562 88.3281C37.2937 88.3281 34.6093 87.5156 32.6562 85.5625L14.6062 67.4C12.6687 65.4469 11.6781 62.5969 11.6781 59.6344C11.6781 56.6594 12.6687 53.9719 14.6062 52.0344L32.6062 33.7719C34.5437 31.8375 37.2937 31.0875 40.2562 31.0875C43.2187 31.0875 45.9062 31.9 47.8562 33.8531L59.0906 44.7063C61.2375 46.8563 64.7875 46.7781 67.0156 44.5438C69.2281 42.3156 69.3125 38.7688 67.1625 36.6188L56.3093 25.6469C53.4973 22.8748 49.9684 20.941 46.1187 20.0625L56.3906 9.64688C58.5406 7.5 58.475 3.95 56.2437 1.72188C54.0125 -0.506248 50.4656 -0.574998 48.3187 1.55938L6.22808 43.65C2.1437 47.75 0.0124512 53.3781 0.0124512 59.6281C0.0124512 65.8656 2.14683 71.6906 6.22808 75.7781L24.3437 93.9406C28.4281 98.025 34.0781 99.9937 40.3281 99.9937C46.5625 99.9937 52.2062 97.8594 56.2937 93.7781L67.1656 82.775C69.3156 80.6406 69.2312 77.0969 67.0031 74.8656C64.775 72.6344 61.225 72.5531 59.0937 74.7031L59.0906 74.7094ZM78.7156 54.2156H36.4312C33.5187 54.2156 31.1437 56.7187 31.1437 59.8125C31.1437 62.9094 33.5187 65.4281 36.4312 65.4281H78.7156C81.6312 65.4281 84.0062 62.9062 84.0062 59.8125C84.0062 56.7187 81.6312 54.2156 78.7156 54.2156Z" fill="black" />
                </svg>
                <span className='underline hidden lg:block'>
                  https://leetcode.com/u/advaitkhawase15
                </span>
              </a>
              <a className='flex gap-5' href='https://www.geeksforgeeks.org/user/advaitkhawase/'>
                <svg className='w-7' viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89.375 35.6458C88.7791 36.8125 87.9833 37.8625 87.0208 38.75C85.6711 39.9801 84.1135 40.9606 82.4208 41.6458C78.2232 43.1705 73.6192 43.1469 69.4375 41.5791C67.4479 40.8096 65.6343 39.646 64.1056 38.1581C62.5769 36.6703 61.3647 34.8888 60.5416 32.9208C60.3381 32.4393 60.1573 31.9485 60 31.45H90.9083C90.5746 32.9085 90.0594 34.3195 89.375 35.65V35.6458ZM39.4166 32.9208C38.594 34.8885 37.3824 36.6696 35.8545 38.1575C34.3265 39.6453 32.5138 40.8092 30.525 41.5791C26.342 43.1479 21.7363 43.1715 17.5375 41.6458C15.8447 40.9606 14.2872 39.9801 12.9375 38.75C11.9797 37.8597 11.1844 36.8092 10.5875 35.6458C9.89953 34.3198 9.38423 32.9111 9.05412 31.4541H39.9583C39.8027 31.9541 39.6222 32.443 39.4166 32.9208ZM99.8375 25.5958C99.7635 24.9298 99.6494 24.2689 99.4958 23.6166L59.3541 23.5833C59.7801 19.8747 61.4604 16.4229 64.1166 13.8C65.6291 12.3416 67.4083 11.1958 69.3666 10.4291C72.5108 9.07997 75.996 8.73896 79.3421 9.4531C82.6882 10.1672 85.7305 11.9014 88.05 14.4166L94.3875 8.20831C92.1403 5.78717 89.4127 3.86143 86.3791 2.55414C83.0254 1.14658 79.4157 0.451325 75.7791 0.512473C72.3474 0.496494 68.9449 1.14304 65.7583 2.41664C62.7092 3.63457 59.9299 5.44118 57.5791 7.73331C55.2325 10.0446 53.3574 12.7899 52.0583 15.8166C50.991 18.282 50.3351 20.9057 50.1166 23.5833H49.8541C49.6348 20.9041 48.9774 18.2789 47.9083 15.8125C46.6087 12.7872 44.7337 10.0433 42.3875 7.73331C40.0367 5.44118 37.2574 3.63457 34.2083 2.41664C27.5701 -0.173586 20.1927 -0.127376 13.5875 2.54581C10.5546 3.85605 7.82846 5.78464 5.58329 8.20831L11.9166 14.4166C14.3002 11.9986 17.34 10.3318 20.6604 9.62242C23.9808 8.91302 27.4364 9.19203 30.6 10.425C32.5583 11.1916 34.3416 12.3416 35.85 13.8C37.3833 15.3 38.6 17.1 39.4291 19.0833C40.0375 20.5166 40.4375 22.0333 40.6166 23.5833L0.470789 23.6166C0.156454 25.0241 -0.00144791 26.462 -4.48398e-05 27.9041C-0.0172897 30.9177 0.468551 33.913 1.43746 36.7666C2.38724 39.5371 3.92196 42.0708 5.93746 44.1958C8.13746 46.5291 10.8125 48.3625 13.7708 49.5833C17.0891 50.8994 20.6348 51.5465 24.2041 51.4875C27.6375 51.5083 31.0375 50.8625 34.2208 49.5833C37.2717 48.3646 40.0525 46.5565 42.4041 44.2625C45.9501 40.7702 48.3928 36.3137 49.4291 31.4458H50.5666C51.6091 36.3126 54.0508 40.7688 57.5916 44.2666C59.9437 46.5592 62.7244 48.3659 65.775 49.5833C68.9616 50.8569 72.3641 51.5035 75.7958 51.4875C79.3623 51.5454 82.9051 50.8983 86.2208 49.5833C89.1888 48.367 91.8625 46.5301 94.0625 44.1958C96.078 42.0708 97.6127 39.5371 98.5625 36.7666C99.5314 33.913 100.017 30.9177 100 27.9041C99.9886 27.1323 99.9344 26.3616 99.8375 25.5958Z" fill="black" />
                </svg>
                <span className='underline hidden lg:block'>
                  https://www.geeksforgeeks.org/user/advaitkhawase
                </span>
              </a>
            </div>
          </div>
        </div>
      </div >
      {/* FOOTER */}
      < div className='w-full h-20 bg-neutral-900 border-t border-neutral-700 text-s text-neutral-600 flex justify-center items-center' >
        © 2025 Advait Khawase. All rights reserved.
      </div >
    </>
  );
}
