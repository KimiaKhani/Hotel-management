import { useState } from "react";


function SearchBar() {
    const [query, setQuery] = useState("");

    const handleclick=()=>{
    console.log(query);
    }
    return (
        <div className="App">
        <label onClick={handleclick}>Search</label>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>
    );
    }
export default SearchBar