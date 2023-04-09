import React from "react";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  size = "",
}) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className={`text-primary capitalize ${size}`}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top" />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Software Engineer Intern"
            company="Kalbonyan Almarsos"
            time="4/2022-10/2022"
            address="Cairo, Egypt"
            companyLink="https://www.linkedin.com/company/%D9%83%D8%A7%D9%84%D8%A8%D9%86%D9%8A%D8%A7%D9%86-%D8%A7%D9%84%D9%85%D8%B1%D8%B5%D9%88%D8%B5/"
            work="I have learned the basics of software engineering and  full stack development
                  In a team, and under the supervision of a group of mentors.
                  Throughout the course, I have gained a deep understanding of the fundamentals of software engineering
                  , as well as the tools and technologies required for full stack development.
                  I have also had the opportunity to work collaboratively with your team
                  , learn from experienced instructors and mentors, and apply my newfound knowledge to real-world projects. 
                "
            size="!text-xl"
          />

          <Details
            position="Front End Developer"
            company="Upwork"
            time="10/2022-4/2023"
            address=""
            companyLink="https://www.upwork.com/"
            work="During this time, I have likely gained valuable experience in managing client relationships
                  , delivering high-quality work, and meeting project deadlines. 
                  , and expanding my skills and knowledge. 
                "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
