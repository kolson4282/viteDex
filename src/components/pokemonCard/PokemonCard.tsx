type Props = {};

const PokemonCard = (props: Props) => {
  return (
    <div className="col-xs-6 col-md-4 col-lg-3 col-xxl-2">
      <div className="card" style={{ height: "100%" }}>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
        <div className="card-body">
          <div className="card-title">1 - Bulbasaur</div>
        </div>
        <div className="card-subtitle mv-2 text-muted">Seed Pokemon</div>
        <ul
          className="list-group list-group-horizontal justify-content-center"
          style={{ width: "100%" }}
        >
          <li className="list-group-item .flex-fill" style={{ width: "100%" }}>
            Grass
          </li>
          <li className="list-group-item .flex-fill" style={{ width: "100%" }}>
            Poison
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
