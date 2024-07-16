import "./global.scss";

function App() {
  return (
    <div className="main_container">
      <section className="info_section">
        <div className="imgInfo">
          <h1>Dmytro Kurdelchuk</h1>
          <img src="assets/photo.jpg" alt="profile-photo" />
        </div>

        <h3>Fullstack Web Developer</h3>

        <div className="contacts">
          <div>
            <a href="mailto:dmytro.kurdelchuk.@gmail.com">
              dmytro.kurdelchuk.@gmail.com
            </a>
          </div>
          <div>
            <a href="tel:+380988702388">+380988702388</a>
          </div>
          <div>
            <a href="https://t.me/mmjustme">Telegram:@mmjustme</a>
          </div>

          <p>Lutsk, Ukraine</p>
        </div>
      </section>
      <section className="profile_section">
        <h2 className="section_header">Profile</h2>
        <p className="section_text">
          Enthusiastic and detail-oriented Full-Stack Developer with a good
          foundation in React.js, Node.js, and MongoDB or MySQL. Willing to
          apply knowledge and hands-on skills to contribute effectively to
          software development projects. Can`t waiting to committed and writing
          clean, maintainable code and passionate about learning new
          technologies and best practices with the strong team.
        </p>
      </section>
      <section className="skills_section">
        <h2 className="section_header">Skills</h2>
        <div className="skills_block">
          <div className="tech_skills">
            <p>Tech</p>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>PHP</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Postman (requests)</li>
            </ul>
          </div>
          <div className="soft_skills">
            <p>Soft</p>
            <ul>                        
              <li>Team building</li>            
              <li>Motivated</li>            
              <li>Friendliness</li>            
              <li>Adaptability</li>            
              <li>Self-managment</li>
            </ul>
          </div>

        </div>
      </section>
      <section className="expirience_section">
        <h2 className="section_header">Expirience</h2>

        <p className="section_sub_title">
          Industrial Engineer at Kromberg and Schubert Lu, Lutsk
        </p>
        <p className="section_text">
          Best electrick harness for BMW cars like the F45/F48/U25/F67/F55 etc.
          Hard teamwork brought 95% succesfull implementation and 98% timely
          successfull effective of thousands changes for BMW. Quartely
          improvement targets made it possible to implement measures that have
          been relevant for years and reduce costs by 15-20%.
        </p>
        <p className="section_sub_title">2018 - present</p>
      </section>
      <section className="education_section">
        <h2 className="section_header">Education</h2>
        <p className="section_text">
          Master`s Degree in Machine Building, Lutsk National Technical
          University
        </p>
        <p className="section_sub_title">2016 - 2018</p>
      </section>
      <section className="project_section">
        <h2 className="section_header">Projects</h2>
        <div>
          <p className="section_sub_title">Snapgram</p>
          <p className="section_text">
            Snapgram allows you to create, edit, save and like posts, and search
            new one by preference. There is also a login and registration
            system. The project is based on React.js(tailwindcss, typescript,
            vite) and an open-source platform for building applications -
            appwrite.
          </p>

          <ul>
            <li>
              <a href="https://snapgram-six-pi.vercel.app" target="_blank">
                Snapgram
              </a>
            </li>
            <li>
              <a href="https://github.com/mmjustme/snapgram" target="_blank">
                GitHub
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <div>
          <p className="section_sub_title">E-commerce</p>
          <p className="section_text">
            E-commerce project is a simple online clothing store where you can
            sort, add to your cart and buy what you choose, and with the help of
            the admin panel you can view some statistics and manipulate data.
            The project is based on React.js, Node.js, MongoDB.
          </p>

          <ul>
            <li>
              <a
                href="https://dmkur.github.io/ecommerce-client/"
                target="_blank"
              >
                DM. shop
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dmkur/ecommerce-client"
                target="_blank"
              >
                GitHub - client
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dmkur/ecommerce-admin"
                target="_blank"
              >
                GitHub - admin
              </a>
            </li>
            <li>
              <a href="https://github.com/dmkur/ecommerce-api" target="_blank">
                GitHub - server
              </a>
            </li>
          </ul>
          <hr />
        </div>
        <div>
          <p className="section_sub_title">Rick&Morty</p>
          <p className="section_text">
            The first project based on the Rick&Morty API. You can search for
            any character and find out which episodes they played in, and vice
            versa, find an episode and find out all the characters.
          </p>

          <ul>
            <li>
              <a
                href="https://rick-morty-api-react-ox3lcv6bi-mmjustmes-projects.vercel.app"
                target="_blank"
              >
                Rick&Morty
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mmjustme/rick-morty-API_react"
                target="_blank"
              >
                GitHub
              </a>
            </li>
          </ul>
          <hr />
        </div>
      </section>
    </div>
  );
}

export default App;
