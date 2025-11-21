export const portfolioData = {
    about: {
        name: "Ramlakshmi Chandrasekar",
        role: "Full Stack Developer | Member Technical Staff",
        intro: "I’m a Product Engineer at Zoho with a strong focus on building scalable systems, architecting complex backend flows, and delivering high-impact features across large user bases. I specialize in end-to-end product engineering—from system design and backend architecture to performance optimization and seamless integrations.",
        // You can add a photo URL here if you have one, or use a placeholder
        photoUrl: "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
    },
    skills: [
        "JavaScript (ES6+)", "React.js", "Node.js", "SQL",
        "HTML5/CSS3", "Tailwind CSS", "Bash/Shell", "Git",
        "System Design", "Performance Optimization"
    ],
    profiles: [
        { name: "GeeksForGeeks Profile 1", url: "https://www.geeksforgeeks.org/user/ramlakshmi0000/" },
        { name: "GeeksForGeeks Profile 2", url: "https://www.geeksforgeeks.org/user/ramss/" },
        { name: "LeetCode Profile 1", url: "https://leetcode.com/u/user6791Xh/" },
        { name: "LeetCode Profile 2", url: "https://leetcode.com/u/ramlakshmi0000/" },
        { name: "TakeUForward", url: "https://takeuforward.org/profile/your_profile" },
        { name: "Github", url: "https://github.com/ramiramudu26" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/ramlakshmi-chandrasekar-0b5a261a2/" },

    ],
    experience: [
        {
            company: "Zoho",
            role: "Member Technical Staff",
            period: "Present",
            description: [
                "Engineered a scalable manager dashboard serving **78,000+ managers** overseeing **234,000+ users**, implementing lazy-loading with infinite scroll for performance optimization and complex **7-table SQL joins** to aggregate hierarchical reportee data, course enrollments, and learning progress with role-based permissions.",
                "Built end-to-end email notification system integrating with **Zoho TransMail API**, handling **700-800 daily notifications** for course assignments, enrollments, completions, and manager actions with support for HTML templates, inline images, and file attachments.",
                "Architected real-time data synchronization between LMS and Zoho Analytics using **event-driven architecture**, implementing change data capture with **Mickey framework** to intercept database operations and push data across **50+ organizations (15,000+ users)**, handling differential sync logic for form-based and non-form tables with data transformation and column mapping.",
                "Architected and implemented a complete **SCORM 1.2/2004-compliant engine** from scratch over **8 months**, including JavaScript API bridge (API_1484_11), **100+ CMI data model elements** with persistent storage, complex sequencing and navigation logic with prerequisite/completion/rollup rules, and iframe-based content player - enabling cross-LMS content compatibility and expanding UK market presence."
            ]
        },
        {
            company: "Zoho",
            role: "Project Trainee",
            period: "May 2022 - May 2023",
            description: [
                "Developed REST APIs for the LMS module, increasing integration eﬃciency by **20%**.",
                "Contributed to an integration with **Zoho Analytics**, resulting in a **5% increase** in customer base.",
                "Identified and reported **60+ security and product bugs**, contributing to a smoother product experience andenhanced security."
            ]
        },
        {
            company: "Ericsson",
            role: "Chatbot Developer",
            period: "September 2021 - February 2022",
            description: [
                "Developed an **LSTM-based chatbot** with **sequence-to-sequence model and multi-headed attention.**",
                "Deployed for **8k+ internal and external stakeholders, reducing support ticket volume by 30%.**",
                "**Improved Stakeholder satisfaction by 20%** through providing automated updates on the submitted usecases and painpoints."
            ]
        },
        {
            company: "ScienceUtsav",
            role: "Coding Mentor",
            period: "September 2021 - February 2022",
            description: [
                "**Mentored 40+ students** in web development, entrepreneurship and python **increasing student engagement by 20%.**",
                "Coordinated a national Science Festival event with over **6k+ participants** and **increased company sales by 23% through lead generation and marketing.**"
            ]
        },
    ]
};
