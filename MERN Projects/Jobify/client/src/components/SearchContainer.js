import { useAppContext } from "../context/appContext";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormRowSelect } from ".";
const SearchContainer = () => {
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    jobTypeOptions,
    statusOptions,
    clearFilters,
    handleChange,
  } = useAppContext();
  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    clearFilters();
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Search</h4>
        <div className="form-center">
          <FormRow
            type="text"
            value={search}
            name="search"
            inputHandler={handleSearch}
          />
          <FormRowSelect
            labelText="Status"
            name="searchStatus"
            value={searchStatus}
            inputHandler={handleSearch}
            list={["all", ...statusOptions]}
          />
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            inputHandler={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          <FormRowSelect
            name="sort"
            value={sort}
            inputHandler={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={submitHandler}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
