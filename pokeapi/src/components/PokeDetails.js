import ProgressBar from "./ProgressBar";

const PokeDetails = ({
  name,
  image,
  type,
  baseExp,
  ability,
  height,
  weight,
  stat1,
  stat2,
  stat3,
  stat4,
  stat5,
  stat6,
  bs1,
  bs2,
  bs3,
  bs4,
  bs5,
  bs6,
}) => {
  const style = `thumb-container ${type}`;
  // const pokemon = pokemons.find((item) => item.id === id);
  // console.log(pokemon);
  // const name = pokemon.name;
  // const image = pokemon.sprites.other.dream_world.front_default;
  // const type = pokemon.types[0].type.name;
  // const height = pokemon.height;
  // const weight = pokemon.weight;
  // const stat1 = pokemon.stats[0].stat.name;
  // const stat2 = pokemon.stats[1].stat.name;
  // const stat3 = pokemon.stats[2].stat.name;
  // const stat4 = pokemon.stats[3].stat.name;
  // const stat5 = pokemon.stats[4].stat.name;
  // const stat6 = pokemon.stats[5].stat.name;
  // const bs1 = pokemon.stats[0].base_stat;
  // const bs2 = pokemon.stats[1].base_stat;
  // const bs3 = pokemon.stats[2].base_stat;
  // const bs4 = pokemon.stats[3].base_stat;
  // const bs5 = pokemon.stats[4].base_stat;
  // const bs6 = pokemon.stats[5].base_stat;
  return (
    <>
      <div className="pokemonDetails">
        <h2 className="title">Pokemon Details</h2>
      </div>
      <div className={style}>
        <img className="right-img" src={image} alt="Right-Content" />
        <div className="card-title">{name.toUpperCase()}</div>
        <div className="description">
          <div>Base Exp: {baseExp}</div>
          <div>Ability: {ability.toUpperCase()}</div>
          <div>Height: {height * 10}cm.</div>
          <div>Weight: {weight * 0.1} kg</div>
          <div className="card-strength">
            {stat1.toUpperCase()} <ProgressBar progress={bs1} />
          </div>
          <div className="card-strength">
            {stat2.toUpperCase()} <ProgressBar progress={bs2} />
          </div>
          <div className="card-strength">
            {stat3.toUpperCase()} <ProgressBar progress={bs3} />
          </div>
          <div className="card-strength">
            {stat4.toUpperCase()} <ProgressBar progress={bs4} />
          </div>
          <div className="card-strength">
            {stat5.toUpperCase()} <ProgressBar progress={bs5} />
          </div>
          <div className="card-strength">
            {stat6.toUpperCase()} <ProgressBar progress={bs6} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PokeDetails;
