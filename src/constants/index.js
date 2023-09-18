import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Engineer",
    icon: web,
  },
  {
    title: "Researcher",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "AI and ML Solutions",
    company_name: "",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "As an AI and machine learning enthusiast, I possess the expertise to design, develop, and deploy advanced artificial intelligence and machine learning solutions. I specialize in leveraging data-driven insights to create predictive models, automate complex processes, and unveil valuable patterns and trends. Whether it's natural language processing, image recognition, or predictive analytics, I can craft customized AI and ML solutions tailored to your specific requirements, harnessing the potential of cutting-edge technology to drive innovation and efficiency in your projects.",

    ],
  },
  {
    title: "Research and Analysis",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "With a strong background in research methodologies and data analysis, I excel at gathering, analyzing, and interpreting data to extract valuable insights. Whether it's market research, academic studies, or data-driven decision-making, I can provide in-depth research services to support informed decision-making.",
      
    ],
  },
  {
    title: "Web Development Services",
    company_name: "",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "I specialize in creating dynamic and visually appealing websites and web applications. From crafting responsive and user-friendly interfaces to optimizing performance, I can transform your web ideas into fully functional online experiences. Whether it's a personal blog, a business website, or an e-commerce platform, I can bring your vision to life on the web.",

    ],
  },
  {
    title: "Software Development",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      " I specialize in software development, creating custom solutions that meet specific requirements. From designing software architecture to coding, testing, and deployment, I can handle the entire software development lifecycle. Whether you need a desktop application, a mobile app, or a backend system, I can develop software that aligns with your goals and delivers results.",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sharon came through when we needed it most. With only one day left before our project presentation, he stepped in and helped create an impressive machine learning sentiment analysis project. his expertise, dedication, and cool under pressure were remarkable. Thanks to Sharon, we not only met our deadline but delivered a project that wowed everyone. he's not just a friend but an incredible collaborator",
    name: "Harshita",
    designation: "Student",
    company: "VIT Vellore",
    
  },
  {
    testimonial:
      "Sharon built a fantastic website for me. His skills are top-notch, and she delivered exactly what I needed",
    name: "Roshan",
    designation: "Student",
    company: "M-Dit ",
    
  },
  {
    testimonial:
      "I had the pleasure of working with Sharon on a research project, and I must say that his contributions were invaluable. Sharon's expertise in analysing, coupled with his dedication and efficiency, played a crucial role in our success",
    name: "Ritika",
    designation: "Student",
    company: "IIFT",
    
  },
];

const projects = [
  {
    name: "Drowsiness Detection",
    description:
      "The drowsiness detection system typically works by capturing a video stream from a camera, and then processing each frame using OpenCV to extract the relevant facial features. These features are then passed to a deep neural network model built with TensorFlow, which predicts whether the person is alert or drowsy based on these features. If the person is detected to be drowsy, the system can trigger an alarm or alert the driver to take a break.",
    tags: [
      {
        name: "computer vision",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/sharonkv48/Drowsiness-Detection",
  },
  {
    name: "Analyzing Sentiments in Amazon Food Reviews",
    description:
      "By utilizing advanced natural language processing techniques, the project extracts sentiments expressed by customers in their reviews of food products. With a user-friendly interface, FlavorFeel offers quick insights into the sentiment (positive, negative, or neutral) and provides a sentiment score, aiding consumers, food manufacturers, and researchers in making informed decisions and understanding market trends.",
    tags: [
      {
        name: "sklearn",
        color: "blue-text-gradient",
      },
      {
        name: "scikit learn",
        color: "green-text-gradient",
      },
      {
        name: "python",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/sharonkv48/Amazon-food-sentiment-analysis",
  },
  {
    name: "ExitFlow: Employee Attrition Prediction System",
    description:
      "The ”ExitFlow” project predicted employee attrition using decision tree, KNN, and CNN algorithms. It aimed to aid organizations in retaining employees by forecasting turnover likelihood. Comparing the methods, KNN proved most accurate, making it the preferred choice for attrition prediction in ”ExitFlow.",
    tags: [
      {
        name: "Decision Tree",
        color: "blue-text-gradient",
      },
      {
        name: "CNN",
        color: "green-text-gradient",
      },
      {
        name: "KNN",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/sharonkv48/Predicting-which-of-your-Employee-will-leave-your-Company",
  },




];

export { services, technologies, experiences, testimonials, projects };
