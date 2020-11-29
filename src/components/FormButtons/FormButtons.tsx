import React from "react";
import "./FormButtons.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { reset } from "redux-form";

interface IProps {
  formName: string;
}

const FormButtons: React.FC<IProps> = ({ formName }) => {
  const dispatch: AppDispatch = useDispatch();
  const handleReset = () => {
    dispatch(reset(formName));
  };
  return (
    <div className={"m-t-2 flex-row-container flex-justify-space-between"}>
      <button className={"button button-primary send-button"} type="submit">
        submit
      </button>
      <button
        className={"button button-danger clear-button"}
        type="button"
        onClick={handleReset}
      >
        clear
      </button>
    </div>
  );
};

export default FormButtons;
