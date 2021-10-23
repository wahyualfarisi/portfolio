import Project from "../../components/project/Project";
import { getAllProject } from "../../utils/project";
import { useRouter } from 'next/router';

const ProjectPage = ({ project }) => {
    const params = useRouter();

    console.log(params);

    return (
        <Project 
            items={project} 
        />
    )
}


export const getStaticProps = () => {
    return {
        props: {
            project: getAllProject()
        }
    }
}

export default ProjectPage;