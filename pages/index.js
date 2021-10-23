import { Fragment } from 'react';
import Head from 'next/head';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Project from '../components/project/Project';
import { getFeatureProject } from './../utils/project';

export default function Home(props) {
  const { project } = props;
  
  return (
    <Fragment>
        <Head>
          <title>Wahyu Alfarisi | Frontend Developer</title>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
          <meta name="description" content="portofolio wahyu alfarisi, developer, react js, javascript, mongodb, full stack developer"/>
          <meta name="keywords" content="Developer, wahyu alfarisi, alfarisi, wahyu, bussiness, demo app, react js,eveloper, react js, javascript, mongodb"/>
        </Head>
        <Hero />
        <About />
        <Project items={project} isShowAll={true} />
    </Fragment>
  )
}

export const getStaticProps = () => {
  const project = getFeatureProject();

  return {
    props: {
      project: project
    },
    revalidate: 1800
  }
}
