import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import optimizely from "../docs/optimizly.png";
import diesel from "../docs/Diesel.png";
import modesens from "../docs/Modesens.png";
import freshly from "../docs/Freshly.png";

export default function Project() {
    const Project = [
        {
            id: 1,
            src: optimizely,
            name: "Optimizely-Clone",
            desc: "Optimizely is an American company that provides digital experience platform software as a service.",
            stack: "HTML | CSS | JavaScript",
            github: "https://github.com/Neerav-Khatri/Optimizely.com-clone",
            deploy: "https://funny-kataifi-02e4e4.netlify.app/index.html"
        },
        {
            id: 2,
            src: diesel,
            name: "Vogue Fashion",
            desc: "Vogue fashion is a clone of Diesel an online clothing brand. Diesel is an Italian retail clothing company, located in Breganze, Italy. It sells denim and other clothing, footwear, and fashion accessories.",
            stack: "JavaScript | ReactJs | Chakra-Ui | JSON server",
            github: "https://github.com/Neerav-Khatri/Diesel.com-Clone",
            deploy: "https://vogue-fashion.netlify.app/",
        },
        {
            id: 3,
            src: modesens,
            name: "Modesens-Clone",
            desc: "Modesens is a fashion technology company which provides shopping assistance by comparing products through various retail dealears.",
            stack: "HTML | CSS | JavaScript",
            github: "https://github.com/Neerav-Khatri/Modesens.com-Clone",
            deploy: "https://shop-modesens.netlify.app/",
        },
        {
            id: 4,
            src: freshly,
            name: "Hunger Saviour",
            desc: "Hunger Saviour is a clone of Freshly.com an online meal delivery website. Freshly was a company that provides meal services on daily, weekly and monthly basis.",
            stack: "CSS | ReactJs | Chakra-Ui",
            github: "https://github.com/Neerav-Khatri/Freshly.com_clone",
            deploy: "https://hunger-saviour.netlify.app/",
        }
    ]

    return (
        <div>
            <Box id="projects" w={{base: "95%", md: "80%"}} m="auto" mt="5%" p="30px">
                <Heading textDecoration="underline" color="#EDF5E1" mb="5%">Projects</Heading>
                {Project.map((e) => <ProjectCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}