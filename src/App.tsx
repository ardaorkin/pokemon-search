import { useEffect, useRef } from "react";
import "./App.css";
import { PokemonProvider, usePokemon } from "./store";

const SearchBox = () => {
  const { search, setSearch } = usePokemon();
  const inputRef = useRef({} as HTMLInputElement);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <input
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
      ref={inputRef}
      type={"text"}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

const PokemonList = () => {
  const { pokemon } = usePokemon();
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-3">
      {pokemon.map((p) => (
        <li
          key={p.id}
          className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img
              className="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png`}
              alt=""
            />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{p.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <PokemonProvider>
      <div className="mx-auto max-w-3xl">
        <SearchBox />
        <PokemonList />
      </div>
    </PokemonProvider>
  );
}

export default App;
