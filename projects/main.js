import { renderProject } from "./projectRenderHelper.js";
const PROJECTS = [];
PROJECTS.push(
    {
        title: "ERP Data Visualizer",
        desc: `Erp Data Visualizer is an open source tool to plot the absent summary data from ERP of 
               ncuindia into beautiful and informative graphs and tables.
               <br />
               The tool takes userid to fetch data from the erp website and then
               processes and plots the data in tables and graphs using js`,
        liveDemoLink: "https://pushpendersaini0.github.io/erp-data-visualizer/",
        sourceCodeLink: "https://github.com/PushpenderSaini0/erp-data-visualizer",
        learnMoreLink: "#",
        imgSrc: "../img/edv-thumb.png"

    }
)
PROJECTS.push(
    {
        title: "GPA Calculator",
        desc: `GPA calculator is an open source calculator made using react and materialUI`,
        liveDemoLink: "https://pushpendersaini0.github.io/gpa-calculator/",
        sourceCodeLink: "https://github.com/PushpenderSaini0/gpa-calculator",
        learnMoreLink: "#",
        imgSrc: "../img/gpa-calculator-thumb.png"

    }
)
PROJECTS.forEach(renderProject);