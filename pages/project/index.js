import Project from "../../components/project/Project";
import Head from 'next/head';
import { getAllProject } from "../../utils/project";
import { Fragment } from "react";

const ProjectPage = ({ project }) => {
    return (
        <Fragment>
            <Head>
                <title>Wahyu Alfarisi | Projects Application</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
                <meta name="description" content="portofolio wahyu alfarisi, developer, react js, javascript, mongodb, full stack developer"/>
                <meta name="keywords" content="Developer, wahyu alfarisi, alfarisi, wahyu, bussiness, demo app, react js,eveloper, react js, javascript, mongodb"/>
                <meta name="keywords" content="Wahyu Alfarisi, List All Project, Daftar Aplikasi"/>
            </Head>
        
            <Project 
                items={project} 
            />
        </Fragment>
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