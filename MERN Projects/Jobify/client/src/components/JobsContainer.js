import { useAppContext } from "../context/appContext";
import Job from "./Job";
import Alert from "./Alert";
import Loading from "./Loading";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useEffect } from "react";
const JobsContainer = () => {
  const {
    getJobs,
    isLoading,
    jobs,
    page,
    totalJobs,
    search,
    searchType,
    sort,
    searchStatus,
    showAlert,
  } = useAppContext();
  useEffect(() => {
    const fetchData = async () => {
      await getJobs();
    };

    fetchData();
    // eslint-disable-next-line
  }, [page, search, searchType, sort, searchStatus]);
  if (isLoading) {
    return <Loading center />;
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      <PageBtnContainer />
    </Wrapper>
  );
};
export default JobsContainer;
