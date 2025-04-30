export default function SearchBar( {updateSearchText: } ){
    return(<>
        <input placeholder="Pesquisar..." className="search-bar" onChange={(event) => updateSearchText(event.target.value)}></input>
    </>)
}