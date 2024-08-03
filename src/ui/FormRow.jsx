/* eslint-disable react/prop-types */
import styles from "./FormRow.module.css";

function FormRow({ type, id, register, title }) {
  return (
    <div className={styles.formrow}>
      <label htmlFor={id}>{title}</label>
      <input type={type} id={id} {...register(id)} />
    </div>
  );
}

export default FormRow;
