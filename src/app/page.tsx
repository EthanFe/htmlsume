import Image from "next/image"

const flexColumn = { 
  display: "flex",
  flexDirection: "column"
}

const fancyBorder = {
  borderBottom: "1px solid transparent",
  borderImage: "linear-gradient(to right, #00000050, transparent)",
  borderImageSlice: 1,
}

const styles = {
  container: {
    width: "672px",
    margin: "32px auto 24px auto",
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  },
  leftColumn: {
    flex: 1,
    ...flexColumn,
    gap: "8px"
  },
  rightColumn: {
    flex: 3,
    ...flexColumn,
    gap: "8px"
  },
  justifyApart: {
    display: "flex",
    "justify-content": "space-between"
  },
  skills: {
    "padding-bottom": "16px",
    ...flexColumn,
    gap: "16px"
  },
  experience: {
    ...flexColumn,
    gap: "16px"
  },
  name: {
    fontFamily: "Raleway",
    fontSize: "24pt",
    fontWeight: "bold"
  },
  list: {
    marginTop: "0px",
    marginBottom: "0px",
    marginLeft: "25px",
    paddingLeft: "0px"
  }
}

const Text = ({ children, style = {} }) => (
  <div style={{ fontSize: "10pt", fontFamily: "Lato", ...style }}>{children}</div>
)

const HeaderText =  ({ children, style = {} }) => (
  <div style={{ fontSize: "14pt", fontFamily: "Raleway", fontWeight: "bold", ...style }}>{children}</div>
)

const experience = [
  {
    title: "Lead Full-Stack Developer",
    company: "Zapxy",
    period: "Feb 2025 – June 2025",
    descriptions: [
      "Developed from scratch and launched a webapp, backend and mobile app to launch a new local business marketing product.",
      "Primarily used React, React Native & Node, with Postgres for persistence, with the website and backend hosted on Google Compute Engine.",
    ],
    skipCompany: false
  },
  {
    title: "Software Engineer",
    company: "Independent Consulting",
    period: "Aug 2023 – June 2025",
    descriptions: [
      "Worked on a contract basis for different companies in order to focus on composing music; among others:",
      "Created a prototype web view integrating with an existing music practice aid mobile app using React, using Firebase to support real-time features.",
    ],
    skipCompany: false
  },
  {
    company: "Flow Club",
    title: "Lead Full-Stack Developer",
    period: "Jan 2022 – June 2023",
    descriptions: [
      "Led construction of the company’s frontend, using a React/serverless Node/Firestore stack hosted on Firebase.",
      "Established devops infrastructure, building automated deployment and tests via Github. Set up Sentry, Highlight, and Slack integrations.",
      "Standardized and optimized company-wide API structures, authorization rules, data access and synchronization patterns for greater developer efficiency.",
      "Developed management tools and data visualizations for internal users using a combination of Amplitude, Retool and in-app admin features.",
      "Worked with the design team to develop and iterate on a consistent design system and language for the product UI/UX.",
      "Worked with the CTO to prioritize, design and implement growth initiatives.",
    ]
  },
  {
    company: "Formative Education",
    title: "Lead Developer",
    period: "June 2021 – Dec 2021",
    descriptions: [
      "Led a team of two other developers in creating an online tool which enables programming educators to easily write, present and provide real-time guidance to students in completing coding exercises.",
      "Used React and our own custom-built Javascript (Node-based) framework for managing real-time data synchronization and display to multiple clients. Worked with Postgres for data persistence.",
      "Created mechanisms for programming instructors to seamlessly teach and evaluate students in a variety of different contexts and languages, from React & JSX to Python (using WebAssembly).",
    ]
  },
  {
    company: "Independent Consulting",
    title: "Software Engineer",
    period: "April 2021 – June 2021",
    descriptions: [
      "Modernized client’s website and backend, while integrating 3rd-party web APIs and custom CMS to allow easy maintenance and extension of content.",
    ],
    skipCompany: false
  },
  {
    company: "Slalom Build",
    title: "Software Engineer",
    period: "July 2019 – April 2020",
    descriptions: [
      "Built and updated UIs and backend systems for a scalable billing and invoicing system, using .NET Core, Angular, MySQL and AWS Lambdas.",
    ]
  },
  {
    company: "Flatiron School",
    title: "Software Engineering Coach",
    period: "May 2019 – July 2019",
    descriptions: [
      "Instructed 40+ students in programming fundamentals and web development technologies, including Ruby on Rails, Express.js, Flask and React.",
    ]
  }
]

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={{ display: "flex"}}>
        <div style={styles.leftColumn}>
          <div style={{ position: 'relative' }}>
            <div style={styles.name}>Ethan Feinberg</div>
            <div style={{ position: "absolute", right: 32, top: 6, borderRadius: '8px', overflow: 'clip' }}>
              <Image
                src="/myFinch.jpg"
                width={50.4}
                height={42}
                alt="Picture of the author"
              />
            </div>
          </div>
          <Text style={{ fontWeight: "bold", fontSize: "11pt" }}>
            Github: <a style={{color: '#2424c9'}} href="https://github.com/EthanFe">EthanFe</a>
          </Text>
          <div>
            <Text style={{ fontSize: "8pt" }}>408-439-7836</Text>
            <Text style={{ fontSize: "8pt" }}>ethan.b.feinberg@gmail.com</Text>
          </div>
        </div>
        <div style={styles.rightColumn}>
          <div style={styles.skills}>
            <HeaderText style={{ ...fancyBorder, paddingBottom: "4px" }}>Skills</HeaderText>
            <div style={{ ...flexColumn, gap: "2px" }}>
              <Text><strong>Languages</strong>: JavaScript/Typescript, C#, Python, Ruby, Lua, SQL, HTML/CSS</Text>
              <Text><strong>Web Frameworks</strong>: React, Next.js, Redux, Express, Angular, .NET, Ruby on Rails</Text>
              <Text><strong>Other Tools</strong>: Socket.io, Postgres, MongoDB, AWS (SQS, Lambda functions), Docker</Text>
              <Text><strong>Integrations</strong>: Stripe, Google Calendar, Retool, Customer.io, Segment, Amplitude, Google Analytics, Twilio, Sentry, Fullstory, Highlight</Text>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.experience}>
        <HeaderText style={{ ...fancyBorder, paddingBottom: "4px" }}>Selected Experience</HeaderText>
        {experience.map(experience => <ExperienceEntry info={experience} />)}
      </div>
    </div>
  );
}

const ExperienceEntry = ({ info }) => {
  const { company, title, period, descriptions, skipCompany = false } = info

  return (
    <div style={{ ...flexColumn, gap: "4px" }}>
      <div>
        {!skipCompany ?
          (
            <>
              <div style={{ fontFamily: "Raleway", fontSize: "12pt", fontWeight: "bold", marginBottom: "3px" }}>{title}</div>
              <div style={styles.justifyApart}>
                <Text style={{ fontSize: "9pt", opacity: 0.8 }}>{company}</Text>
                <Text style={{ fontSize: "9pt", opacity: 0.8 }}>{period}</Text>
              </div>
            </>) :
          (
            <div style={styles.justifyApart}>
              <div style={{ fontFamily: "Raleway", fontSize: "12pt", fontWeight: "bold", marginBottom: "3px" }}>{title}</div>
              <Text style={{ fontSize: "9pt", opacity: 0.8 }}>{period}</Text>
            </div>
          )
        }
      </div>
      {skipCompany ? (
        descriptions.map(description => <Text>{description}</Text>)
      ) :
        (
          <ul style={styles.list}>
            {descriptions.map(description => (
              <li><Text>{description}</Text></li>
            ))}
          </ul>
        )
      }
    </div>
  )
}
