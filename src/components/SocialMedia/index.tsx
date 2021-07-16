import React from 'react';
import * as S from './styles';
import {
  GrInstagram as InstaIcon,
  GrLinkedin as LinkedinIcon,
  GrGithub as GithubIcon,
} from 'react-icons/gr';
import useTheme from '../../hooks/useTheme';

const SocialMedia: React.FC = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <>
      <S.SocialMediaContainer>
        <InstaIcon size={26} color={theme.text} />
        <LinkedinIcon size={26} color={theme.text} />
        <GithubIcon size={26} color={theme.text} />
      </S.SocialMediaContainer>
    </>
  );
};

export default SocialMedia;
