import React, { useState } from "react";
import styles from './ColumnForm.module.scss';
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

const ColumnForm = (props) => {

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = e => { 
		e.preventDefault();
		props.action({ title: title, icon: icon});
    setTitle('');
    setIcon('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <label>
        <span className={styles.column}>Title:</span>
        <TextInput type='text' value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        <span className={styles.column}>Icon:</span>
        <TextInput type='text' value={icon} onChange={e => setIcon(e.target.value)}  />
      </label>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;