import styled from 'styled-components';

const S = {
  Textarea: styled.textarea`
    width: 100%;
    min-height: 160px;
    padding: 8px 12px;
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray};
    }

    &:focus {
      outline: none;
    }
  `,
};

interface TextareaProps {
  value: string;
  placeholder: string;
  rows?: number;
  cols?: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea(textareaOptions: TextareaProps) {
  return <S.Textarea {...textareaOptions} />;
}

export default Textarea;
