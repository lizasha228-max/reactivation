import "./ComponentStyle.css";

const Letter = ({ text, counter }) => {
  console.log("THIS IS TEXT", counter);

 

  return (
    <div className="body-rambo">
      <h1>{text}</h1>
        <span>{counter?.hash}</span>
    </div>
  );
};
export default Letter;
