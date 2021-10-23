import data from './../mock/project';

export const getAllProject = () => data;

export const getFeatureProject = () => data.filter(item => item.isFeature === true);