const PokeCard = ({ id, name, image, type, handleClick }) => {
  const style = `thumb-container ${type}`;

  const handlePokeID = (id) => {
    handleClick(id);
  };

  return (
    <>
      <div className={style}>
        <div className="number">
          <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="detail-wrapper">
          <h3>{name}</h3>
          <small>Type : {type}</small>
          <button className="pokeinfo" onClick={() => handlePokeID(id)}>
            Show Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PokeCard;
