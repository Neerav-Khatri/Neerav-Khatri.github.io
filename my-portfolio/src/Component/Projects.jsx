import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import optimizely from "../docs/optimizly.png";
import diesel from "../docs/Diesel.png";
import modesens from "../docs/Modesens.png";
import healthyWay from "../docs/HealthyWay.png";
import crystara from "../docs/Crystara.png";

export default function Project() {
    const Project = [
        {
            id: 1,
            src: healthyWay,
            name: "Healthy Way",
            desc: "HealthyWay is a website that functions as a nutrition tracking tool to help users reach their health goals by monitoring their daily caloric intake and other relevant factors.",
            stack: "React.js | Redux | Redux-Thunk | Chakra-UI | Node.js | Express.js | Mongoose | MongoDB Atlas",
            github: "https://github.com/somesh9870/Healthy-way",
            deploy: "https://healty-way.vercel.app/",
        },
        {
            id: 2,
            src: crystara,
            name: "Crystara",
            desc: "Crystara: Your exquisite online jewelry destination. Discover stunning handpicked pieces, certified quality, and personalized assistance. Seamlessly browse, customize, and indulge in fine jewelry with secure transactions and reliable shipping.",
            stack: "CSS | Next.js | React | Redux | Redux-Thunk | Chakra-UI | JSON server",
            github: "https://github.com/Neerav-Khatri/Crystara",
            deploy: "https://crystara-swart.vercel.app/",
        },
        {
            id: 3,
            src: diesel,
            name: "Vogue Fashion",
            desc: "Vogue fashion is a clone of Diesel an online clothing brand. Diesel is an Italian retail clothing company, located in Breganze, Italy. It sells denim and other clothing, footwear, and fashion accessories.",
            stack: "JavaScript | React.js | Chakra-UI | JSON server",
            github: "https://github.com/Neerav-Khatri/Diesel.com-Clone",
            deploy: "https://vogue-fashion.netlify.app/",
        },
        {
            id: 4,
            src: optimizely,
            name: "Optimizely-Clone",
            desc: "Optimizely provides digital experience platform software as a service. Optimizely provides A/B testing and multivariate testing tools, website personalization, and feature toggle capabilities, as well as web content management and digital commerce.",
            stack: "HTML | CSS | JavaScript",
            github: "https://github.com/BhavikDholu/optimizely.com-clone",
            deploy: "https://optimizely-com-clone-eight.vercel.app/"
        },
        {
            id: 5,
            src: modesens,
            name: "Modesens-Clone",
            desc: "Modesens is a fashion technology company which provides shopping assistance by comparing products through various retail dealears.",
            stack: "HTML | CSS | JavaScript",
            github: "https://github.com/Neerav-Khatri/Modesens.com-Clone",
            deploy: "https://shop-modesens.netlify.app/",
        }
        // {
        //     id: 6,
        //     src: freshly,
        //     name: "Hunger Saviour",
        //     desc: "Hunger Saviour is a clone of Freshly.com an online meal delivery website. Freshly was a company that provides meal services on daily, weekly and monthly basis.",
        //     stack: "CSS | ReactJs | Chakra-Ui",
        //     github: "https://github.com/Neerav-Khatri/Freshly.com_clone",
        //     deploy: "https://hunger-saviour.netlify.app/",
        // }
    ]

    return (
        <div>
            <Box id="projects" w={{ base:"100%", sm: "80%", lg: "80%"}} m="auto" mt="5%" p="20px">
                <Heading textDecoration="underline" color="#86C232" mb="5%">Projects</Heading>
                {Project.map((e) => <ProjectCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}