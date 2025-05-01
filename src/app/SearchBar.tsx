
type SearchBarProps = {
    setSearchText: React.Dispatch<React.SetStateAction<string>> | null;
}



export default function SearchBar( {setSearchText} : SearchBarProps){
    return(<>
        <input placeholder="Pesquisar..." className="px-4 py-2 rounded-full bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full max-w-md" onChange={(event) => setSearchText(event.target.value)}></input>
    </>)
}