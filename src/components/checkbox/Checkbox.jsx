const Checkbox = ({
  disabled = false,
  checked = false,
  label,
  onChange,
  ...restProps
}) => {
  return (
    <label style={{fontSize : 16}}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        {...restProps}
      />
      {label}
    </label>
  );
};

export default Checkbox;
