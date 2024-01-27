import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import crwn from "../../public/images/projects/eccomerce.png";
import github from "../../public/images/projects/github.png";
// import gym from "../../public/images/projects/gym.png";
import hosting from "../../public/images/projects/hosting.png";
// import kemet from "../../public/images/projects/kemete.png";
import travel from "../../public/images/projects/travel.png";
import forkify from "../../public/images/projects/forkify.png";
import bankistFictional from "../../public/images/projects/bankF.png";
import bankistMarkiting from "../../public/images/projects/bankM.png";
import mapty from "../../public/images/projects/Mapty.png";
import pigGame from "../../public/images/projects/pig-game.png";
import netNinja from "../../public/images/projects/net-ninja.png";
import leon from "../../public/images/projects/leon.png";
import cms from "../../public/images/projects/cms.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
      dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark sm:px-4 sm:text-base">
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid 
    border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div
        className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark 
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg">
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="w-full flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base">
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Abdelwahab | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="My Projects"
            className="mb-16 xl:text-6xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl !leading-tight"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Crwn Clothing"
                summary="This project involved developing a fully functional e-commerce clothing store using a modern technology 
                stack that includes React, TypeScript, Firebase, Stripe, Redux, and GraphQL. 
                The website allows users to browse through clothing items, add them to their shopping cart, 
                and complete the purchase process with an integrated payment system."
                link="https://crwn-clothing-abdelwa7ab.netlify.app/"
                type="React, Context API, Redux[Thunk, Saga], GraphQL,
                TypeScript, Firebase, Styled components, Stripe."
                img={crwn}
                github="https://github.com/AbdelwahabTop/crwn-clothing-v2"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Github Users"
                link="https://abdo-github-users.netlify.app/login"
                type="React, Context API, Auth0"
                img={github}
                github="https://github.com/AbdelwahabTop/Github-Users"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Kemet Travel"
                link="https://kemet-travel-abdelwahab.netlify.app/en/"
                type="Featured Project"
                img={travel}
                github="https://github.com/AbdelwahabTop/Kemettraveluae.git"
              />
            </div>
            {/* <div className="col-span-6 sm:colnpm run -span-12">
              <Project
                title="Evo Gym"
                link="https://evogym-abdelwa7ab.netlify.app/"
                type="React, TypeScript, Tailwind css"
                img={gym}
                github="https://github.com/AbdelwahabTop/gym-typescript-tailwind"
              />
            </div> */}
            <div className="col-span-12">
              <FeaturedProject
                title="Content Management System"
                summary="The project is a Content Management System (CMS) built using PHP, following the Model-View-Controller (MVC) and Object-Oriented Programming (OOP) design patterns."
                link="https://cms-abdo.000webhostapp.com/"
                type="PHP, SQL, MySql, MVC, OOP, PDO"
                img={cms}
                github="https://github.com/AbdelwahabTop/cms-php-mvc"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Forkify"
                summary="recipe food application using JavaScript, incorporating various important concepts such as OOP, 
                MVC architecture, APIs, asynchronous programming, and modules."
                link="https://forkify-abdelwa7ab.netlify.app/"
                type="JavaScript, APIs, MVC architecture, OOP, async JavaScript."
                img={forkify}
                github="https://github.com/AbdelwahabTop/Forkify"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Eco Hosting"
                link="https://eco-hosting-abdelwahab.netlify.app/"
                type="Featured Project"
                img={hosting}
                github="https://github.com/AbdelwahabTop/eco-hosting.git"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Bankist (Fictional Bank)"
                link="https://bankist-fictional.netlify.app/"
                type="JavaScript, OOP"
                img={bankistFictional}
                github="https://github.com/AbdelwahabTop/Bankist-fictional-bank"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Bankist (Marketing Website)"
                link="https://bankist-marketing-abdelwa7ab.netlify.app/"
                type="JavaScript"
                img={bankistMarkiting}
                github="https://github.com/AbdelwahabTop/Bankist-marketing-website"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Mapty"
                link="https://mapty-abdelwa7ab.netlify.app/"
                type="JavaScript, OOP"
                img={mapty}
                github="https://github.com/AbdelwahabTop/Mapty"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pig Game"
                link="https://pig-game-abdelwa7ab.netlify.app/"
                type="JavaScript"
                img={pigGame}
                github="https://github.com/AbdelwahabTop/Pig-game"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Net Ninja Pro"
                link="https://net-ninja-pro.netlify.app/"
                type="Bootstrap"
                img={netNinja}
                github="https://github.com/AbdelwahabTop/net-ninja-bootstrap"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Leon"
                link="https://leon-abdelwa7ab.netlify.app/"
                type="Html, CSS"
                img={leon}
                github="https://github.com/AbdelwahabTop/Leon"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
