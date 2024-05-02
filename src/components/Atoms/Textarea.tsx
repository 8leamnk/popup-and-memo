interface TextareaProps {
  value: string;
  placeholder: string;
  rows: number;
  cols: number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea(textareaOptions: TextareaProps) {
  return <textarea {...textareaOptions} />;
}

export default Textarea;
