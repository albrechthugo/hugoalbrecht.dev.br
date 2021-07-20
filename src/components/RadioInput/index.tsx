import React from 'react';
import * as S from './styles';

type RadioInputProps = {
  name: string;
  label: string;
  value: string;
};

const RadioInput: React.FC<RadioInputProps> = ({
  name,
  label,
  value,
}: RadioInputProps): JSX.Element => {
  return (
    <>
      <S.Label>
        <input type="radio" name={name} value={value} />
        {label}
      </S.Label>
    </>
  );
};

export default RadioInput;
