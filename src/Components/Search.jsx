const Search = ({ onSearch }) => {
  return (
    <input 
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => onSearch(e.target.value)}
      className="input input-bordered w-full max-w-xs"
    />
  )
}
export default Search
