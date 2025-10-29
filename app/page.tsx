"use client"

import { useState, useEffect  } from "react"
import { useRef } from "react";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiEjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiGithub,
  SiPostman,
  SiVisualstudiocode, // <-- correct import for VS Code
} from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Copy,
  Check,
  Code,
  Trophy,
  User,
  Briefcase,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from "@emailjs/browser"
import 'animate.css';


export function useOnScreen(options) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      options
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [ref, options])

  return [ref, isVisible]
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [emailCopied, setEmailCopied] = useState(false)
  const [skillsRef, skillsVisible] = useOnScreen({ threshold: 0.3 })
  const [projectsRef, projectsVisible] = useOnScreen({ threshold: 0.3 })
  const [achievementsRef, achievementsVisible] = useOnScreen({ threshold: 0.1 })
  const [contactRef, contactVisible] = useOnScreen({ threshold: 0.3 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "skills", "achievements", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText("your.email@gmail.com")
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 2000)
  }

  type Project = {
  title: string;
  description: string[]; // Updated to an array of strings
  tech: string[];
  github: string;
  demo: string;
  video?: string; // Video is optional
};

  const projects = [
    {
  title: "T&P Website -PCTE",
 description: [
  "College TNP portal to view posts, search jobs, top recruiters, and TPO team info.",
  "Real-time guest lectures, highest packages, and announcements managed by admin.",
  "Secure, scalable system with protected routes, admin controls, and responsive design.",
],

  tech: ["MERN"],
  github: "https://github.com/1234bk/tnpFrontend.git",
  demo: "https://tnp-frontend-pi.vercel.app/",
   video: "https://youtu.be/zeodpqahO5M",
},

{
      title: "Measuring Tapes Business Website",
      description:
        "A professional, responsive website built for a construction tape and measuring tools business. Showcases product catalog, business info, and contact section—designed for usability and trust-building with clients.",
      tech: ["WordPress"],
      github: "#",
      demo: "#",
      video: "https://youtu.be/4ZF1saRchWo",
    },

{
  title: "Project-Koshish App",
  description: [
    "Comprehensive event management platform built for the Koshish event.",
    "Enables user registration, participation tracking, and result management with high reliability.",
    "Includes a powerful and secure admin panel for managing participants, results, and event data.",
    "Implements fully authenticated and protected routes ensuring data integrity and system security.",
    "Developed on the MERN stack for a seamless, responsive, and scalable experience.",
  ],

  tech: ["MERN"],
  github: "https://github.com/1234bk/PROJECT-HD.git",
  demo: "https://pctekoshish2.netlify.app/",
  video: "https://youtu.be/5h3bknkJ-OY",
},

    {
  title: "Interactive Quiz App",
 description: [
  "API-driven quiz with category-based real-time questions.",
  "MCQs with timer and instant answer feedback.",
  "Responsive design with light/dark theme switcher.",
],
  tech: [ "JavaScript"],
  github: "https://github.com/1234bk/quiz",
  demo: "https://bk-quiz.netlify.app/",
  video: "https://youtu.be/Kos6RF69cis",
},
//     {
//   title: "LinkSphere – Let's Connect",
// description: [
//   "LinkedIn-like social platform with post creation, likes, comments, and user discovery.",
//   "Real-time chat and video calls powered by Socket.io for seamless communication.",
//   "Admin dashboard to manage users and posts, with secure authentication and responsive design.",
// ],
//   tech: ["MERN"],
//   github: "https://github.com/1234bk/linksphere-assignment.git",
//   demo: "https://linksphere-link.vercel.app/",
//   video: "https://youtu.be/FdItmda2Udc",
// }
,

  
  
  
// {
//   title: "Project-HD Glow",
//   description: [
//   "AI-driven skincare solution suggesting routines, creams, and diets based on user input.",
//   "Secure OTP-based login/signup via email.",
//   "Integrated with Grok API and ChatGPT in a responsive interface.",
// ],

//   tech: ["MERN"],
//   github: "https://github.com/1234bk/PROJECT-HD.git",
//   demo: "https://project-hd-1.onrender.com/",
  
//       video: "https://youtu.be/4ca7b5mcaBI",
// }
,
    
    


  ]

const skills = {
  
  WebDevelopment: [ 
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-[#68A063]" /> },
  ],
  Styling: [
    { name: "Bootstrap", icon: <SiBootstrap className="text-[#7952B3]" /> },
  ],
  Database: [
     { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> }, 
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
  ],
  Deployment: [
        { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
  ],
   Languages: [
    { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
    { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
 
  ],
  Tools: [
    
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "EJS", icon: <SiEjs className="text-[#B4CA65]" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Netlify", icon: <SiNetlify className="text-[#00C7B7]" /> },
  //  { name: "Visual Studio Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
  ],
};

  const achievements = [
  {
    title: "LeetCode Achiever",
    description: "Solved 550+ coding problems, earned 17 badges, and ranked in the top 121,000 globally.",
    icon: Code,
    image: "https://res.cloudinary.com/dkp9sowj0/image/upload/v1754039176/leetcode_zgjg6g.png",
    date: "2025",
  },
  {
    title: "Hackathon Champion",
    description: "2 X Winner of the 2024 PCTE Hackathon and First Runner-up in the Code Relay (DSA) challenge.",
    icon: Trophy,
    image: "https://res.cloudinary.com/dkp9sowj0/image/upload/v1754039828/hackathon_c9ard4.jpg" ,
    date: "2024",
  },
  {
    title: "Project Recognition & LOR",
    description: "Received Letter of Recommendation from PCTE for co-developing the 'PCTE Koshish' web application.",
    icon: Github,
    image: "https://res.cloudinary.com/dkp9sowj0/image/upload/v1754039793/lor_zonufl.jpg",
    date: "2025",
  },
  {
  title: "6-Week Internship at Ocean Technologies",
  date: "June – July 2024",
  description: "Completed a web development internship focusing on React, Firebase, and responsive UI design. Built real-world components and improved collaborative coding skills.",
  image: "https://res.cloudinary.com/dkp9sowj0/image/upload/v1754039828/hackathon_c9ard4.jpg", // Make sure this image is in `public/certs/`
  icon: Briefcase // or any suitable icon you’re using
},
  {
    title: "Communication Excellence",
    description: "Two-time winner of British Parliamentary Debate and Inter-College Extempore competition.",
    icon: Trophy,
    image: "https://res.cloudinary.com/dkp9sowj0/image/upload/v1754039796/debate_ydojg0.jpg",
    date: "2023–2025",
  },
];




    const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qttouqo",     // from EmailJS dashboard
        "template_t6qpi4k",    // from EmailJS dashboard
        formRef.current,
        "yXrY4pCx3rbnRvqj5"      // from EmailJS dashboard
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          alert("Message sent successfully! to Brijesh kumar ");
          formRef.current.reset();

        },
        (error) => {
          console.error("Error:", error.text);
          alert("achaa Failed to send message.");
        }
      );
  };





  return (
    <>
    <div className="min-h-screen bg-slate-1000 text-white overflow-x-hidden  scroll-smooth">
      
      {/* Floating Navigation */}
      <nav className=" animate__animated animate__fadeIn  animate__slow  fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex space-x-6">
          {[
            { id: "home", label: "Home", icon: User },
            { id: "skills", label: "Skills", icon: Code },
            { id: "projects", label: "Projects", icon: Briefcase },
            
            { id: "achievements", label: "Achievements", icon: Trophy },
            { id: "contact", label: "Contact", icon: MessageSquare },
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-100 ${activeSection === id
                ? "bg-gray-700/20 text-white shadow-lg shadow-gray-500/50"
                : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
            >
              <Icon size={16} />
              <span className="hidden md:inline text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 mb-0">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-1 items-center">
          <div className="text-center lg:text-left space-y-8">

            <div className="mt-1  pt-[1.5rem] ">
              <h1 className="animate__animated animate__shakeX animate__slow leading-relaxed text-5xl md:text-[7rem] pt-[0rem] md:pt-[2rem] pb-2 text-center font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 bg-clip-text text-transparent ">
                Brijesh Kumar
              </h1>
             
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                1500,
                'WordPress Specialist',
                1500,
                'FRONTEND Engineer',
                1500,
                'BACKEND Engineer',
                1500,
               
                 'DSA Enthusiast',
                1500,
                '550+  leetcode problems solver',
                1500,
                'LOR from PCTE College – Web Developer (T&P)',
                1500,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl animate__animated animate__zoomIn  animate__slow  text-center mb-7 md:text-4xl twxt-white"
              repeat={Infinity}
            />

           

      <h3 className="text-lg hidden lg:block text-center text-gray-400 mx-auto max-w-2xl">
  Merging creativity with code to craft interactive experiences,  
  solve real-world problems, and bring innovative ideas to life on the web.
</h3>

 <h3 className="text-lg lg:hidden text-center  text-gray-400 mx-auto max-w-2xl">
  Let's build something amazing together!!!
</h3>

            
            </div>

          
          <div className="animate__animated animate__zoomInDown  flex justify-center items-center pt-[0.8rem]   ">
             <div className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 p-1 max-w-[14rem] py-1   hover:text-black hover:shadow-lg hover:shadow-gray-500/50    transition-colors ">
              <a href="https://drive.google.com/file/d/1XHtYM_o9sTUIq7jZ1CmvH69VoqN_ozwz/view?usp=drive_link" target="_blank" rel="noopener noreferrer"  >
              <Button
                size="lg"
                // Changed button color to match new gradient or a complementary tone
                className="bg-black hover:bg-white/100 hover:text-black  text-white font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                View My Resume
              </Button>
            </a>
            </div>
          </div>
          

            <div className="mt-[9rem] max-w-lg md:max-w-full flex flex-wrap gap-6 pt-[1.5rem] md:pt-0 justify-center lg:justify-cemter  md:mt-[0rem] ">
             
            
            {/* Secondary CTAs */}
             <div className="animate__animated animate__zoomIn  animate__slow  bg-black p-1 border-2 border-white rounded-full">  
            <a href="https://github.com/1234bk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className=" rounded-full text-white border-2 border-indigo-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            </div>
              <div className="animate__animated animate__zoomIn  animate__slow bg-black p-1 rounded-full border-2 border-white">  
            <a href="https://leetcode.com/u/brijeshkumar_1234/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className=" rounded-full text-white border-2 border-indigo-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors">
             <Code className="mr-2 h-5 w-5" />
                LeetCode
               
              </Button>
            </a>
            
            </div>

              <div className="animate__animated animate__zoomIn  animate__slow  bg-black p-1 border-2 border-white rounded-full">  
            <a href="https://www.linkedin.com/in/brijesh-kumar123/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-full text-white border-2 border-indigo-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
         
            </div>
          </div>

            {/* Availability Status */}
            <div className="flex justify-center pt-5 lg:justify-start items-center gap-2 animate-pulse ">
                <div className="w-3 h-3 bg-green-500 rounded-full "></div>
                <p className="text-sm text-green-400">
                    Actively seeking new opportunities
                </p>
            </div>
          </div>

      
        </div>

       
      </section>

     
{/* Skills Section */}
{/* <section id="skills"    ref={skillsRef} className="relative py-24 px-6 bg-black"> */}
    <section
       
        id="skills"
        className="relative py-24 px-6 bg-black"
      >
  <div className="max-w-6xl mx-auto">
   
    <div  ref={skillsRef}  className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
        Technical Skills
      </h2>
       <p className="text-gray-400 text-lg md:hidden block  mx-auto">
        My go-to stack of modern technologies 
      </p>
      <p className="text-gray-400 text-lg hidden md:block  mx-auto">
        My go-to stack of modern technologies for building scalable, responsive, and eye-catching applications.
      </p>
    </div>

    <div
  
    className={`grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8
  ${skillsVisible ? "animate__animated animate__bounceIn animate__slow opacity-100" : "opacity-0"}`}

        >
  {Object.entries(skills)
    .flatMap(([category, skillList]) => skillList)
    .slice(0, 12)  // Show first 12 skills by default
    .map((skill, index) => (
      <div
        key={skill.name + index}
        className="flex flex-col items-center justify-center hover:shadow-lg hover:shadow-gray-500/50 rounded-xl hover:scale-105 transform transition-all p-2 duration-300 group cursor-pointer"
      >
        <div className="w-20  border-blue-400 h-20 flex items-center justify-center rounded-full  mb-4 group-hover:border-white duration-300  border-2 border-blue- hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors ">
          <span className="text-3xl text-white group-hover:text-black">{skill.icon}</span>
        </div>

        <span className="text-white font-medium text-center ">
          {skill.name}
        </span>
      </div>
    ))}


  {Object.entries(skills)
    .flatMap(([category, skillList]) => skillList)
    .slice(12)
    .map((skill, index) => (
      <div
        key={skill.name + index}
        className="hidden sm:hidden md:flex  hover:shadow-lg hover:shadow-gray-500/50 flex-col items-center justify-center backdrop-blur-sm rounded-xl hover:scale-105 transform transition-all duration-300 group cursor-pointer"
      >
        <div className="w-20 h-20 flex items-center justify-center rounded-full  mb-4 group-hover:border-white duration-300  border-2 border-blue-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors">
          <span className="text-3xl text-white" >{skill.icon}</span>
        </div>

        <span className="text-white font-medium text-center group-hover:text-blue-400">
          {skill.name}
        </span>
      </div>
    ))}
</div>




  </div>
</section>

    {/* project section */}
    <section id="projects" className="relative py-20 px-4 sm:px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        A selection of my work, showcasing my skills in building modern, responsive web applications.
      </p>
    </div>

    <div className="space-y-16">
      {projects.map((project, index) => (
        <ProjectItem project={project} key={index} index={index} />
      ))}
    </div>

  </div>
</section>


      

      {/* Achievements Section */}
      <section id="achievements" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Achievements
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A journey of accomplishments that demonstrate my pursuit of excellence and lifelong learning. </p>
          </div>

          <div ref={achievementsRef} className="space-y-8">
           {achievements.map((achievement, index) => (
  <div
   
   key={index} className={`flex items-start space-x-6 group relative 
     ${achievementsVisible ? "animate__animated animate__zoomIn animate__slow opacity-100" : "opacity-0"}
   `}>
    
    <div className="flex-shrink-0 z-10 mt-[3rem] hidden md:block ">
      <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
        <achievement.icon className="w-6 h-6 text-white" />
      </div>
    </div>

     <div
      className="flex-1 backdrop-blur-sm border border-white/50 rounded-lg p-6 group-hover:border-blue-400/50 transition-all duration-300 relative z-10 bg-black/60 text-white"
    >
      <div className="z-10flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
          {achievement.title}
        </h3>
        <span className="text-sm text-purple-400 font-medium">{achievement.date}</span>
      </div>
      <p className="text-gray-300">{achievement.description}</p>
             
    <div
      className="absolute inset-0 rounded-lg bg-cover bg-center opacity-30 filter blur-[2px] z-0"
      style={{
        backgroundImage: `url(${achievement.image})`,
      }}
    ></div>
    </div>

   
  </div>
))}

          </div>
        </div>

        </section>

      {/* Contact Section */}
      <section id="contact" 
      ref={contactRef}
      className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              Let's Connect
            </h2>
            <p className="text-gray-400 hidden md:block text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Get in Touch</h3>
                <p className="text-gray-400">
                  I'm always open to discussing new opportunities, interesting projects, or just having a chat about
                  technology.
                </p>
              </div>


              <div className="flex space-x-4">
                  <a href="https://github.com/1234bk" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className={` rounded-full text-white border-2 border-blue-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors 
                            ${contactVisible ? "animate__animated animate__zoomIn animate__slow opacity-100" : "opacity-0"}
              `}>
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/brijesh-kumar123/" target="_blank" rel="noopener noreferrer">
               <Button variant="outline" size="lg" className={` rounded-full text-white border-2 border-blue-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white  hover:border-white hover:text-white transition-colors 
                            ${contactVisible ? "animate__animated animate__zoomIn animate__slow opacity-100" : "opacity-0"}
              `}>
               <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </a>
         
              </div>
            </div>

            <Card className={`bg-black/40 backdrop-blur-sm border border-white/100
              ${contactVisible ? "animate__animated animate__backInDown animate__slow opacity-100" : "opacity-0"}
              `}>
              <CardContent className="p-6">
                <form ref={formRef} onSubmit={handleSubmit}  className="space-y-6">
                  <div>
                    <Input
                    name="name"
                      placeholder="Your Name"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Input
                    name="email" 
                      type="email"
                      placeholder="Your Email"
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                    />
                  </div>
                  <div>
                    <Textarea
                    name="message" 
                      placeholder="Your Message"
                      rows={5}
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none"
                    />
                  </div>
                  <Button  type="submit" className="w-full border-2 border-blue-400 hover:shadow-md hover:shadow-white bg-black text-white font-medium">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Brijesh Kumar</p>
        </div>
      </footer>
    </div>
    </>
  )
}





const ProjectItem = ({ project, index }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) setHasAnimated(true);
  }, [isVisible]);

  const animationClass = hasAnimated
    ? index % 2 === 0
      ? "animate__animated animate__fadeInLeft animate__slow opacity-100"
      : "animate__animated animate__fadeInRight animate__slow opacity-100"
    : "opacity-0";

  return (
    <div ref={ref} className={`group grid grid-cols-1 md:grid-cols-5 gap-8 items-center ${animationClass}`}>
      <div className="md:col-span-2 border-2 border-white hover:border-blue-400 overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
        {project.video ? (
          <iframe
            src={`https://www.youtube.com/embed/${project.video.split("https://youtu.be/")[1]}?autoplay=1&mute=1&loop=1&playlist=${project.video.split("https://youtu.be/")[1]}`}
            title={`${project.title} Video`}
            className="h-full w-full min-h-[250px] object-cover rounded-xl"
            frameBorder="0"
            loading="lazy"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div className="flex items-center justify-center h-[250px] w-full bg-gray-900/50 border border-gray-800 rounded-xl">
            <p className="text-gray-500">No video preview available</p>
          </div>
        )}
      </div>

      <div className="md:col-span-3 p-5">
        <h3 className="text-2xl text-center md:text-start font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        <ul className="list-disc hidden md:block list-inside space-y-2 text-gray-300 mb-2 min-h-[7rem]">
          {Array.isArray(project.description)
            ? project.description.map((point, i) => <li key={i}>{point}</li>)
            : <li>{project.description}</li>}
        </ul>

        <div className="flex flex-wrap gap-3 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech} className="bg-slate-1200 hover:bg-black hover:scale-105 border-white text-blue-300">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-nowrap gap-4 overflow-x-auto">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="text-white border-2 border-blue-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white hover:border-white hover:text-white transition-colors whitespace-nowrap">
              <Github className="mr-2 h-5 w-5" /> View Code
            </Button>
          </a>

          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="text-white border-2 border-blue-400 hover:bg-gray-700/20 hover:shadow-md hover:shadow-white hover:border-white hover:text-white transition-colors whitespace-nowrap">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
