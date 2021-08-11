import React from 'react';
import { CardResponseProps } from '../ProjectsContainer';
import transformDate from '../../helpers/date/transformDate';
import * as S from './styles';
import useLanguage from '../../hooks/language/useLanguage';

const ProjectCard = ({
  svn_url,
  description,
  name,
  updated_at,
}: CardResponseProps): JSX.Element => {
  const { language } = useLanguage();
  const shieldUrl = `https://img.shields.io/github/stars/albrechthugo/${'albrechthugo'}?style=social`;

  return (
    <>
      <S.Link href={svn_url} target="_blank" rel="noreferrer">
        <S.CardContainer>
          <S.CardInfos>
            <S.Title>{name}</S.Title>

            <S.Description>
              {description || language.descriptionWasNotInformed}
            </S.Description>
          </S.CardInfos>

          <S.CardStargazers>
            <span>{language.lastUpdate + transformDate(updated_at)}</span>
            <img alt="GitHub Repo Stars" src={shieldUrl} />
          </S.CardStargazers>
        </S.CardContainer>
      </S.Link>
    </>
  );
};

export default ProjectCard;
