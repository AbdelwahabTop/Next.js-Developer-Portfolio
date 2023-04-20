import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  size = "",
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <a
          href={companyLink}
          target="_blank"
          className={`text-primary dark:text-primaryDark capitalize ${size} hover:underline underline-offset-2`}
        >
          <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
            {position}&nbsp;
          </h3>
        </a>

        {/* <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time}  {address}
        </span>*/}
        <p className="font-medium w-full md:text-sm mt-2">{work}</p>
      </motion.div>
    </li>
  );
};

const Certification = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Certification
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark  origin-top  dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="AWS Certified Cloud Practitioner"
            company=""
            time=""
            address=""
            companyLink="https://www.credly.com/badges/57c8aa95-e1c7-43b9-b437-8e2faccedcab/linked_in?t=rt5hdz"
            work="I have gained a basic understanding of the AWS Cloud, including its architecture, services, 
            and deployment models. 
            I have learned about cloud computing concepts such as elasticity, scalability, 
            and fault tolerance, and how they can be applied to AWS Cloud services.
            I have gained knowledge of the core AWS services, including compute, storage, database, and network services.
            also I have learned about AWS security and compliance concepts, 
            including identity and access management, encryption, and auditing."
            size="!text-2xl"
          />

          <Details
            position="Complete React Developer"
            company=""
            time=""
            address=""
            companyLink="https://www.udemy.com/certificate/UC-614a5a39-a6ff-4321-b616-0ad45895fa82/"
            work="The topics i have learned in this course:
            React Basics- React Router
            - Redux - Redux Saga - Asynchronous Redux - React Hooks
            - Context API - React Suspense + React Lazy
            - Firebase - Stripe API - Styled-Components - GraphQL - Apollo
            - PWAs - React Performance
            - React Design Patterns
            - Testing with Jest and Snapshot testing
            - React Best Practices - Persistance + Session Storage - State Normalization
            "
            size="!text-2xl"
          />
        </ul>
      </div>
    </div>
  );
};

export default Certification;
