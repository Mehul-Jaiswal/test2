import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "HTML5_skill", content: "PYTHON", porcentage: "90%", value: "90" },
        { id: "CSS3_skill", content: "JAVA", porcentage: "90%", value: "90" },
        {
          id: "JavaScript_skill",
          content: "JavaScript",
          porcentage: "90%",
          value: "90"
        },
        { id: "PHP_skill", content: "HTML/CSS3", porcentage: "90%", value: "90" },
        {
          id: "ReactJS_skill",
          content: "ReactJS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "Python_skill",
          content: "Machine Learning",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "VanillaJS_skill",
          content: "Artificial Intelligence",
          porcentage: "75%",
          value: "75"
        },
        {
          id: "Wordpress_skill",
          content: "Databases: MongoDB, MySQL, PostgreSQL",
          porcentage: "80%",
          value: "80"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
          "👋 𝗛𝗘𝗬 𝗧𝗛𝗘𝗥𝗘! I'm a tech enthusiast deeply immersed in the world of programming languages and cutting-edge technologies. My name is Mehul Jaiswal, and I'm deeply passionate about Software Engineering, Technical Product/Project Management, and a wide array of technologies including Machine Learning, Artificial Intelligence, Java, Python, React, JavaScript, MongoDB, Pytorch, and SQL."
        },
        {
          id: "second-p-about",
          content:
          "✨ I thrive at the intersection of people and technology, constantly seeking ways to create value and purpose. With a wealth of experience in web development, programming, and leadership roles, I've honed my skills in teamwork and mentorship, guiding peers through both college life and intricate technical challenges."
        }, 
        {
          id: "third-p-about",
          content:
          "🎓 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻: Currently pursuing a Bachelor of Arts in Computer Science at UC Berkeley, with an anticipated graduation in May 2025. Proud recipient of the VIDA and DASG Student Leadership Award 2023, as well as the DASG Scholarship and recognition on the Dean's List."
        },
        {
          id: "forth-p-about",
          content:
          "🏆 𝗔𝗰𝗵𝗶𝗲𝘃𝗲𝗺𝗲𝗻𝘁𝘀: Served as a Software Engineering Intern at Blue-I-Tek, contributing to significant improvements in product stability and data processing speed. Recognized for achievements in various projects, including the Emotional AI Therapy Chatbot and the Stock Analyzer and Predictor."
        },
        {
          id: "fifth-p-about",
          content:
          "❤️ 𝗟𝗼𝘃𝗲𝘀: Immersing myself in Sci-fi literature and movies, Going on road trips and hikes, Listening to music and playing guitar, Talking about the stock market and current economic trends, Volunteering in social services, particularly through food drives, and Eagerly collaborating on intriguing projects in the tech realm."
        },
        {
          id: "sixth-p-about",
          content:
          ""
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      <p className="title-s">Skill</p>
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
