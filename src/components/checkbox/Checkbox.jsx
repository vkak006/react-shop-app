const Checkbox = ({
  disabled = false,
  checked = false,
  label,
  onChage,
  ...restProps
}) => {
  return (
    <label style={{fontSize : 16}}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChage}
        {...restProps}
      />
      {label}
    </label>
  );
};

export default Checkbox;
