interface IField {
  label?: string | number | JSX.Element;
  name: string;
  className?: string;
  children: any;
}

function Field(props: IField) {
  const label = <div className="wl-form-item-label">{props.label}</div>;
  return (
    <div className="wl-form-item">
      {label}
      <div>{props.children}</div>
    </div>
  );
}

export default Field;
