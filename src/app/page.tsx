import { DancingPaypalButton } from "./DancingPaypalButton"
import { experience } from "./experience"

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

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={{ display: "flex"}}>
        <div style={styles.leftColumn}>
          <div style={{ position: 'relative' }}>
            <div style={styles.name}>Ethan Feinberg</div>
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
              <Text><strong>Frameworks</strong>: React, React Native, Next.js, Redux, Express, Angular, .NET, Ruby on Rails</Text>
              <Text><strong>Other Tools</strong>: Socket.io, Postgres, MongoDB, AWS (SQS, Lambda functions), Docker</Text>
              <Text><strong>Integrations</strong>: Stripe, Google Calendar, Retool, Customer.io, Segment, Amplitude, Google Analytics, Twilio, Sentry, Fullstory, Highlight</Text>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.experience}>
        <HeaderText style={{ ...fancyBorder, paddingBottom: "4px" }}>Selected Experience</HeaderText>
        {experience.map(entry => <ExperienceEntry info={entry} />)}
      </div>
    </div>
  );
}

const ExperienceEntry = ({ info }) => {
  const { company, title, period, descriptions, skipCompany = false, pageBreak = false } = info

  return (
    <div style={{ ...flexColumn, gap: "4px", breakAfter: pageBreak ? 'page' : undefined }}>
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
