import InputBase from '@mui/material/InputBase';

interface Props {
  placeholder: string;
  value: number | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const LogInput: React.FC<Props> = ({ value, placeholder, onChange }) => {
  return (
    <InputBase
      sx={{
        '& .MuiInputBase-input': {
          textAlign: 'center',
          fontSize: 32,

          '&::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
          '&::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            margin: 0,
          },
        },
      }}
      placeholder={placeholder}
      value={!value ? '' : value}
      onChange={onChange}
      type='number'
      inputProps={{ 'aria-label': placeholder }}
    />
  );
};

export default LogInput;
