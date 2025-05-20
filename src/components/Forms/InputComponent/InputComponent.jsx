import style from './InputComponent.module.css';

const InputComponent = ({
  register,
  type = 'text',
  placeholder = '',
  label = '',
  maxlength,
  minlength,
  autocomplete = 'off',
  disabled = false,
  onChange,
  className = '',
  defaultValue = ''
}) => {
  const inputId = label.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-input';

  return (
    <div className={`${style.formInput} ${className}`}>
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type={type}
        {...(register || {})}
        placeholder={placeholder}
        maxLength={maxlength}
        minLength={minlength}
        autoComplete={autocomplete}
        disabled={disabled}
        onChange={onChange}
        className={className}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default InputComponent;
