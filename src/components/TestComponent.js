import React from "react";
import { useForm } from "react-hook-form";

export default function TestComponent() {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const addFriend = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeFriend = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <fieldset  key={fieldName}>
            <label>
              First Name {index}:
              <input
                type='text'
                name={`${fieldName}.firstName`}
                ref={register}
              />
            </label>

            <label>
              Last Name {index}:
              <input
                type='text'
                name={`${fieldName}.lastName`}
                ref={register}
              />
            </label>
            <button type='button' onClick={removeFriend(index)}>
              Remove
            </button>
          </fieldset> */}
      {indexes.map((index) => {
        const fieldName = `friends[${index}]`;
        return (
          <fieldset name={fieldName} key={fieldName}>
            <label>
              First Name {index}:
              <input
                type='text'
                name={`${fieldName}.firstName`}
                ref={register}
              />
            </label>

            <label>
              Last Name {index}:
              <input
                type='text'
                name={`${fieldName}.lastName`}
                ref={register}
              />
            </label>
            <button type='button' onClick={removeFriend(index)}>
              Remove
            </button>
          </fieldset>
        );
      })}

      <button type='button' onClick={addFriend}>
        Add Friend
      </button>
      <input type='submit' />
    </form>
  );
}
