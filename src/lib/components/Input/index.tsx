interface IInput {
  placeholder?: string;
  children?: any;
  onChange?: (e: any) => void;
}

function Input(props: IInput) {
  const placeholder = props.placeholder || "请输入";
  const handleChange = (e: any) => {
    props.onChange && props.onChange(e.target.value);
  };
  return (
    <div className="wl-input">
      <input
        className="wl-input-inner"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {props.children}
    </div>
  );
}

export default Input;
