import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import useHttp, { HttpMethods } from '../../hooks/useHttp';
import { config } from '../../config';

type ResponseProps = {
  id: number;
  name: string;
  description: string;
  svn_url: string;
  stargazers_count: number;
};

const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<ResponseProps[]>([]);

  useEffect(() => {
    useHttp<ResponseProps[]>(config.apiUrl, HttpMethods.GET)
      .then(res => {
        setProjects(res.data);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <>
      <ProjectCard />
    </>
  );
};

export default Projects;
