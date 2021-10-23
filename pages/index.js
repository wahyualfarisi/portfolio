import { Fragment } from 'react';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Project from '../components/project/Project';
import { getFeatureProject } from './../utils/project';

export default function Home(props) {
  const { project } = props;
  
  return (
    <Fragment>
        <Hero />
        <About />
        <Project items={project} />
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
