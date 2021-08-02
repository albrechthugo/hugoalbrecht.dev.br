import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard';
import useHttp, { HttpMethods } from '../../hooks/useHttp';
import { config } from '../../config';
import * as S from './styles';
import Loading from '../Loading';

export type CardResponseProps = {
  id: number;
  name: string;
  description: string;
  svn_url: string;
  stargazers_count: number;
  updated_at: string;
};

const ProjectsContainer = (): JSX.Element => {
  const [projects, setProjects] = useState<CardResponseProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    useHttp<CardResponseProps[]>(config.apiUrl, HttpMethods.GET)
      .then(res => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <>
      <S.ProjectsCardWrapper>
        {loading ? (
          <Loading isFullscreenLoading={false} />
        ) : (
          projects?.map(project => (
            <ProjectCard
              key={project?.id}
              id={project?.id}
              stargazers_count={project?.stargazers_count}
              description={project?.description}
              name={project?.name}
              svn_url={project?.svn_url}
              updated_at={project?.updated_at}
            />
          ))
        )}
      </S.ProjectsCardWrapper>
    </>
  );
};

export default ProjectsContainer;
