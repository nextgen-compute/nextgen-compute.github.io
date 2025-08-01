/*
 * MANUAL PROJECT ENTRY GUIDE:
 * 
 * To add a new project, simply add a new object to this array.
 * Each project should have:
 * - title: The name/title of the project
 * - briefDescription: A short summary of the project
 * - fullDescription: Detailed description of the project
 * - links: Array of links to papers, venues, or related resources
 * - images: Array of image URLs (can be single image for now)
 * 
 * Template:
 * {
 *   "title": "Your Project Title",
 *   "briefDescription": "Short summary of the project",
 *   "fullDescription": "Detailed description of the project including methodology, results, and impact",
 *   "links": [
 *     {
 *       "label": "Paper",
 *       "url": "https://doi.org/your-paper-link"
 *     },
 *     {
 *       "label": "GitHub",
 *       "url": "https://github.com/your-repo"
 *     }
 *   ],
 *   "images": ["/images/projects/project1.jpg"]
 * }
 */

const projects = [
    {
        "title": "Design Automation of In-Memory Computing",
        "briefDescription": "Design and optimization of in-memory computing systems for efficient execution of data-intensive workloads.",
        "fullDescription": "This research focuses on developing a fully automated synthesis framework that maps computational tasks efficiently onto in-memory architectures. By eliminating manual, sub-optimal design choices and introducing end-to-end automation and optimization strategies, the framework significantly improves performance and energy efficiency. This work contributes to the broader goal of enabling scalable, high-performance computing for next-generation data-driven applications.",
        "links": [
             {
                "label": "Paper1",
                "url": "https://dl.acm.org/doi/10.1145/3649329.3657348"
            },
            {
                "label": "Paper2",
                "url": "https://dl.acm.org/doi/10.1145/3711848"
            },
            {
                "label": "Paper3",
                "url": "https://ieeexplore.ieee.org/document/10323667"
            },
            {
                "label": "Paper4",
                "url": "https://dl.acm.org/doi/10.1145/3508352.3549348"
            }
        ],
        "images": ["/images/projects/Computer-Aided-Design.jpg"]
    },
    {
        "title": "Resilient and Robust AI Systems",
        "briefDescription": "Bridging the software-hardware gap to boost AI system performance and precision.",
        "fullDescription": "This research enhances the performance and reliability of AI systems by addressing the gap between software models and physical implementations. The work introduces two key strategies: first, optimizing the physical layout of data at compile-time to mitigate hardware-induced precision errors; and second, a novel data- and location-aware memory controller architecture that resolves performance inconsistencies in emerging memory technologies. Together, these approaches significantly improve both the computational precision and overall speed of AI hardware.",
        "links": [
            {
                "label": "Paper1",
                "url": "https://dl.acm.org/doi/10.1145/3489517.3530532"
            },
            {          
                "label": "Paper2",
                "url": "https://ieeexplore.ieee.org/abstract/document/10247692"
            },
            {
                "label": "Paper3",
                "url": "https://dl.acm.org/doi/10.1145/3466752.3480054"
            }
        ],
        "images": ["/images/projects/Resilient-and-Robust-AI-Systems.png"]
    },
    {
        "title": "Hybrid Computing",
        "briefDescription": "Combining analog and digital computing paradigms for optimal performance.",
        "fullDescription": "This project explores the synergy between analog and digital in-memory computing by developing hybrid architectures that leverage the strengths of both approaches. Analog computing provides high energy efficiency for certain operations, while digital computing offers precision and programmability. Our hybrid system dynamically switches between analog and digital modes based on the computational requirements. The project includes novel circuit designs, control algorithms, and system-level optimization techniques.",
        "links": [
            {
                "label": "Paper1",
                "url": "https://ieeexplore.ieee.org/abstract/document/9643526"
            },
            {
                "label": "Paper2",
                "url": "https://ieeexplore.ieee.org/abstract/document/9774722"
            }
        ],
        "images": ["/images/projects/Hybrid-Computing.png"]
    },
    {
        "title": "Novel Architecture Design",
        "briefDescription": "Accelerating AI with novel, efficient hardware architecture designs.",
        "fullDescription": "This research focuses on designing and optimizing novel hardware architectures to accelerate artificial intelligence models. Key contributions include the development of new hardware frameworks designed for massive parallelism, which directly accelerate the core computational tasks within AI applications. Furthermore, the work introduces innovative hardware accelerators that leverage highly efficient, low-power functionalities. By embedding computational logic directly within the data pathways, these systems require only a one-time configuration, eliminating the need for frequent, power-intensive reprogramming during use.",
        "links": [
            {
                "label": "Paper1",
                "url": "https://ieeexplore.ieee.org/abstract/document/10323622"
            },
            {
                "label": "Paper2",
                "url": "https://ieeexplore.ieee.org/abstract/document/10089867"
            },
            {
                "label": "Paper3",
                "url": "https://ieeexplore.ieee.org/abstract/document/9712569"
            }
        ],
        "images": ["/images/projects/Novel-Architecture-Design.png"]
    },
    {
        "title": "AI-Aided Synthesis and Verification",
        "briefDescription": "Deployment of AI to explore new frontiers of EDA solutions",
        "fullDescription": "This project aims to create new algorithms and synthesis flows using AI. Many synthesis and verification problems within emerging computing systems are limited by sub-optimal solutions. AI-aided design explorations can lead to new and improved solutions to these problems. This research direction promises breakthroughs for many sub-optimal solutions where we today rely on human expertise to perform design.",
        "links": [
            {
                "label": "Paper",
                "url": "https://ieeexplore.ieee.org/document/10670630"
            },
        ],
        "images": ["/images/projects/AI-Aided-Synthesis-and-Verification1.jpg"]
    }
];

export default projects;

// EXAMPLE: How to add a new project (uncomment and modify as needed):
// {
//   "title": "Your New Project Title",
//   "briefDescription": "Short summary of your project",
//   "fullDescription": "Detailed description of your project including methodology, results, and impact",
//   "links": [
//     {
//       "label": "Paper",
//       "url": "https://doi.org/your-paper-link"
//     },
//     {
//       "label": "GitHub",
//       "url": "https://github.com/your-repo"
//     },
//     {
//       "label": "Demo",
//       "url": "https://your-demo-link"
//     }
//   ],
//   "images": ["/images/projects/your-project-image.jpg"]
// } 
