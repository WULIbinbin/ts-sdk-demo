import { FormContext } from "./context";
import Field from "./field";

interface IForm {
  children?: any;
  onSubmit?: (e: any) => void;
}

const FormBody = (props: IForm) => {
  const { children } = props;
  const formSubmit = () => {
    console.log(FormContext);
  };
  return (
    <div>
      <FormContext.Provider value={{}}>
        <form onSubmit={formSubmit}>
          <div className="wl-form">{children}</div>
        </form>
      </FormContext.Provider>
    </div>
  );
};

FormBody.item = Field;

export default FormBody;
