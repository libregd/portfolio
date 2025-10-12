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
        title: "Bachelor",
        startDate: "2012-09-01",
        endDate: "2016-06-30",
        school: "Computer Science & Technology",
        location: "China, Beijing",
        description: "Although I hold a bachelor’s degree in computer science, I discovered in my sophomore year that I was more talented in art and design. Around that time, I began earning pocket money by freelancing on projects such as PPT design, logo creation, and article layout. This experience sparked my interest in design, leading me to pursue a career in this field after graduation.",
        currentUni: false,
    }
];

export default education;