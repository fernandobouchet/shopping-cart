function Cards(props) {
  return (
    <div className="card">
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Cards;
