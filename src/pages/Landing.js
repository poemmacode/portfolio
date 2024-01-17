import { Player } from '@lottiefiles/react-lottie-player';

import { Header } from "../components/Header";
import { HeroArea } from "../components/HeroArea";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { ProjectList } from "../components/Project";
import { Contacts } from "../components/Contacts";
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { Helmet } from "react-helmet-async";
import { Footer } from '../components/Footer';
export const Landing = () =>{
  return (
    <div className="App">
      <Helmet>
        <title>Jose Estrada - Software Engineer - Porfolio</title>
        <meta
          name="title"
          content="Jose Estrada - Software Engineer - Porfolio"
        />
        <meta
          name="description"
          content="A Mexican Software Engineer with Ruby on Rails Experience. Together, we can bring your vision to life!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.joseestrada.engineer/" />
        <meta
          property="og:title"
          content="Jose Estrada - Software Engineer - Porfolio"
        />
        <meta
          property="og:description"
          content="A Mexican Software Engineer with Ruby on Rails Experience. Together, we can bring your vision to life!"
        />
        <meta
          property="og:image"
          content="https://www.joseestrada.engineer/assets/joseestradamadera.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.joseestrada.engineer/"
        />
        <meta
          property="twitter:title"
          content="Jose Estrada - Software Engineer - Porfolio"
        />
        <meta
          property="twitter:description"
          content="A Mexican Software Engineer with Ruby on Rails Experience. Together, we can bring your vision to life!"
        />
        <meta
          property="twitter:image"
          content="https://www.joseestrada.engineer/assets/joseestradamadera.jpeg"
        />
      </Helmet>
      <Player
        src="https://lottie.host/a0e48f1d-17b9-4157-94eb-cd7aeec75971/7hIoQIlJlX.json"
        className="player-bg"
        loop
        autoplay
      />
      <ScrollToTopButton />
      <Header />
      <HeroArea />
      <h2 id="projects" className="title">
        My Experience
      </h2>
      <p className="description">Steps in My Professional Path</p>
      <ProjectList />
      <h2 id="about" className="title">
        About me
      </h2>
      <p className="description">Where I have worked and my education.</p>
      <About />
      <h2 id="services" className="title">
        My services
      </h2>
      <p className="description">How can I help you</p>
      <Services />

      <h2 id="resume" className="title">
        My resume
      </h2>
      <p className="description">
        You can find my full resume{" "}
        <a
          className="link"
          href="https://resume.io/r/y92352s0L"
          target="_blank"
          rel="noreferrer"
        >
          <strong>
            <u>here</u>
          </strong>
        </a>
      </p>

      <h2 id="contact" className="title">
        Inspire Innovation: Let's Connect!
      </h2>
      <p className="description">
        I'm Here to Help. Together, we can bring your vision to life!
      </p>
      <Contacts />
      <Footer />
    </div>
  );
}
