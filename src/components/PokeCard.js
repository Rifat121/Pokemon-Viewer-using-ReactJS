const PokeCard = ({ id, name, image, type, handleClick }) => {
  const style = `thumb-container ${type}`;

  const handlePokeID = () => {
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
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
          <small>Type : {type}</small>
          <button className="pokeinfo" onClick={handlePokeID}>
            Show Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PokeCard;
