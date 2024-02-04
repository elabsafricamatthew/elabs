import { useEffect, useState, useRef } from "react";
import {
  Betking,
  ParcelBoy,
  Ngage,
  OrangeCurve,
  WhiteCurve,
  PayJobs,
} from "../../public/assets/svgImgs";
import { useHorizontalScroll } from "./hooks";
import {
  BetkingGif,
  ParcelBoyGif,
  Web,
  Mobile,
  Design,
  MypayjobsGif,
  VidyoupGif,
} from "../../public/assets/gifs";
import {
  CTO,
  LeadContent,
  LeadDesign,
  BusinessDev,
  Cofounder,
  Man,
  Frontend,
} from "../../public/assets/pngs";
import { IoChevronForward } from "react-icons/io5";
import { MdCheck } from "react-icons/md";
import { Header, Footer } from "@/Nav";
import { ContactForm } from "@/components";

export default function Home() {
  const teamsContainerRef = useRef(null);
  const clientsContainerRef = useRef(null);
  const [animateHeroSection, setAnimateHeroSection] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-enter");

  const items = [
    "are intuitive.",
    "are scalable.",
    "are user-friendly.",
    "generate sales.",
  ];

  useEffect(() => {
    setFadeClass("fade-enter fade-enter-active");
    const timeoutId = setTimeout(() => {
      setFadeClass("fade-exit fade-exit-active");
    }, 5000 - 500);
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      setFadeClass("fade-enter");
      setTimeout(() => {
        setFadeClass("fade-enter fade-enter-active");
      }, 100);
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [activeIndex, items.length]);

  useEffect(() => {
    setTimeout(() => {
      setAnimateHeroSection(false);
    }, 150);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const teamMembers = [
    {
      name: "Okechukwu Matthew",
      role: "Co-founder, Project lead",
      imageSrc: Cofounder,
    },
    {
      name: "Ozemede Kadiri",
      role: "Co-founder, Business Developer",
      imageSrc: BusinessDev,
    },
    { name: "Uche Chiamaka", role: "Content Lead", imageSrc: LeadContent },
    { name: "Shalom Mathew", role: "Chief Technical Officer", imageSrc: CTO },
    { name: "Shalom Idagu", role: "Lead Designer", imageSrc: LeadDesign },
    {
      name: "Shaibu Abdulsalam",
      role: "Frontend Engineer",
      imageSrc: Frontend,
    },
  ];

  const projects = [
    {
      name: "Mypayjobs",
      imageSrc: MypayjobsGif,
      description:
        "MyPayJobs is a versatile freelance app connecting skilled professionals with diverse job opportunities. Offering a user-friendly interface, it streamlines the process of finding, bidding on, and completing tasks across various industries. With robust features, users can create detailed profiles highlighting their expertise, track projects, and receive payments securely. Employers can post projects, review bids, and communicate seamlessly with freelancers. The app facilitates transparent transactions, ensuring fair compensation for services rendered. MypayJobs fosters a dynamic marketplace where freelancers can showcase their talents and clients can access a pool of qualified professionals. Whether seeking short-term gigs or long-term collaborations, MyPayJobs empowers both freelancers and employers to thrive in today's gig economy.",
    },
    {
      name: "Betkingconnect",
      imageSrc: BetkingGif,
      description:
        "Betking Connect is a dynamic online platform designed for aspiring betting agents seeking to join the thriving wagering industry. With an intuitive interface, Betking Connect offers seamless sign-up processes for individuals keen on becoming authorized agents. The website provides a comprehensive array of resources and support, guiding prospective agents through registration, verification, and activation procedures with ease. Through Betking Connect, agents gain access to a plethora of betting options, robust management tools, and real-time analytics, empowering them to efficiently serve their clientele while maximizing their earning potential. Built on a foundation of reliability and innovation, Betking Connect stands as a premier destination for individuals looking to venture into the exciting world of sports betting.",
    },
    {
      name: "Vidyoup",
      imageSrc: VidyoupGif,
      description:
        "Introducing VidYoup, the revolutionary video streaming app designed to redefine your entertainment experience. With VidYoup, immerse yourself in a world of limitless content, ranging from blockbuster movies to trending series and captivating documentaries. Seamlessly navigate through an extensive library curated to cater to every taste and preference. Personalization is at the core of VidYoup, as it intelligently suggests tailored recommendations based on your viewing history and preferences, ensuring you never miss a moment of excitement. Enjoy high-definition streaming across multiple devices, whether at home or on the go. With user-friendly interfaces and intuitive controls, VidYoup offers unparalleled convenience and accessibility, making it your ultimate destination for endless entertainment. Experience the future of streaming with VidYoup today.",
    },
    {
      name: "ParcelBoy",
      imageSrc: ParcelBoyGif,
      description:
        "Introducing Parcelboy the ultimate delivery e-hailing app transforming how you send and receive goods. With Parcelboy, convenience is at your fingertips. Need groceries, documents, or parcels delivered swiftly? Just tap, and our network of reliable drivers is at your service. Parcelboy ensures seamless transactions with secure payment options and real-time tracking, keeping you informed every step of the way. Customize your delivery preferences, whether it's express delivery or scheduled pickups. Parcelboy user-friendly interface makes ordering effortless, while our dedicated support team ensures your queries are addressed promptly.Experience efficiency, reliability, and peace of mind with Parcelboy go-to solution for all delivery needs.",
    },
  ];

  const services = [
    {
      name: "Product Design",
      imageSrc: Design,
      features: [
        "Brand Identity Design",
        "UI/UX Design",
        "Front-end Development",
      ],
    },
    {
      name: "Web Development",
      imageSrc: Web,
      features: ["Customized Website", "Solution oriented", "SEO optimized"],
    },
    {
      name: "App Development",
      imageSrc: Mobile,
      features: ["Conceptualization", "Design and Development", "Maintenance"],
    },
  ];

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 50) setScrollPosition(true);
  };

  useHorizontalScroll(teamsContainerRef, true);
  useHorizontalScroll(clientsContainerRef, false, 992);

  return (
    <>
      <Header />
      <main>
        <section
          id="home"
          className={`container-fluid ${animateHeroSection ? "animate" : null}`}
        >
          <div>
            <h1>
              We have helped businesses design and build products that <br />
              <span className="heroDynamicTexts">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className={index === activeIndex ? fadeClass : "hidden"}
                  >
                    {item}
                  </span>
                ))}
              </span>
            </h1>
            <a className="primaryBtn">
              <span>
                <IoChevronForward />
              </span>
              <span>get started</span>
            </a>
          </div>
          <div className="heroImageWrapper">
            <img src={Man.src} alt="man" />
          </div>
        </section>
        <section id="services" className={scrollPosition ? "position" : null}>
          <div className="curve orangeCurve">
            <OrangeCurve />
          </div>
          <div className="servicesContent">
            <div className="container-fluid">
              <h2>Take your business to the next level</h2>
              <p>with our range of digital services</p>
              <div className="servicesCardsWrapper">
                {services.map(({ name, imageSrc, features }) => (
                  <div key={name} className="serviceCard">
                    <div>
                      <img src={imageSrc.src} alt={name} />
                    </div>
                    <div>
                      <h3>{name}</h3>
                      <ul>
                        {features.map((feature) => (
                          <li key={feature}>
                            <MdCheck />
                            <p>{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="curve whiteCurve">
              <WhiteCurve />
            </div>
          </div>
        </section>
        <section id="projects" className="container-fluid">
          <h2>Here are some projects we have worked on</h2>
          <div className="projectsCardsWrapper">
            {projects.map(({ name, description, imageSrc }) => (
              <div key={name} className="projectCard">
                <div className="leftContent">
                  <div className="imgWrapper">
                    <img src={imageSrc.src} alt={name} />
                  </div>
                </div>
                <div className="rightContent">
                  <h3>{name}</h3>
                  {description}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="about" className="container-fluid">
          <h3 className="yellowBg">about us</h3>
          <p>
            Elabsafrica is a digital agency of experts focused on connecting
            product design and web development to creativity and innovation to
            provide value for businesses and users. We design and build from the
            bottom up and offer beautiful and functional solutions. We are keen
            to learn about your business to help you achieve your goal. We take
            a holistic approach to your business, putting all the pieces in
            place to create a realistic branding experience for your business
            and its target audience.
          </p>
        </section>
        <section id="team" className="container-fluid">
          <h3 className="yellowBg">meet the team</h3>
          <div className="teamsWrapper">
            <div ref={teamsContainerRef} className="content">
              {teamMembers.map(({ name, role, imageSrc }) => (
                <div key={name} className="teamMemberCard">
                  <img src={imageSrc.src} alt={name} />
                  <h4>{name}</h4>
                  <p>{role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="clients" className="container-fluid">
          <h3 className="yellowBg">our clients</h3>
          <div className="clientsWrapper">
            <div className="clientContent" ref={clientsContainerRef}>
              <div>
                <Betking />
              </div>
              <div>
                <PayJobs />
              </div>
              <div>
                <ParcelBoy />
              </div>
              <div>
                <Ngage />
              </div>
            </div>
          </div>
        </section>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
