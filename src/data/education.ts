interface Education {
    title: string;
    startDate: string;
    endDate?: string;
    school: string;
    location: string;
    description: string;
    currentUni: boolean;
}

const  education: Education[] = [
    {
        title: "Aalto University's online learning",
        startDate: "2024-09-01",
        endDate: "",
        school: "Aalto University",
        location: "Global",
        description:"I'm currently exploring Aalto University's open learning resources, especially in art and design. Their free online courses, podcasts, and lectures offer fresh perspectives on creativity, sustainability, and visual thinking—perfect for expanding my design practice.",
        currentUni: true,
    },
    {
        title: "Bachelor of Science in Computer Science",
        startDate: "2012-09-01",
        endDate: "2016-06-30",
        school: "China Women's University",
        location: "China, Beijing",
        description: "Studied various aspects of design, including visual communication, user experience, and design thinking.",
        currentUni: false,
    }
];

export default education;