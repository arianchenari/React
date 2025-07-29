const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="searchItem">Search Item</label>
        <input 
            type="text" 
            id="searchItem"
            placeholder="Search Items"
            role="searchbox"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchItem