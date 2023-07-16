import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import checkPermissions from "../utils/checkPermissions.js";
import { BadRequestError, NotFoundError } from "../errors/index.js";
import mongoose from "mongoose";
import moment from "moment";
const getJobs = async (req, res) => {
  const { status, sort, search, jobType } = req.query;
  const queryObject = {};
  if (status && status != "all") {
    queryObject.status = status;
  }
  if (jobType && jobType != "all") {
    queryObject.jobType = jobType;
  }
  if (search) {
    queryObject.position = { $regex: search, $options: "i" };
  }

  let result = Job.find(queryObject);

  if (sort === "latest") {
    result = result.sort("-createdAt");
  }
  if (sort === "oldest") {
    result = result.sort("createdAt");
  }
  if (sort === "a-z") {
    result = result.sort("position");
  }
  if (sort === "z-a") {
    result = result.sort("-position");
  }
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  result = result.skip(skip).limit(limit);
  const jobs = await result;
  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);
  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};
const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOneAndDelete({ _id: jobId });

  if (!job) {
    throw new NotFoundError(`job with this id: ${jobId} not found`);
  }

  checkPermissions(req.user, job.createdBy);

  res.status(StatusCodes.OK).json({ msg: "Success deleted" });
};

const updateJobs = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  const job = await Job.findOne({ _id: jobId });
  if (!job) {
    throw new NotFoundError(`job with this id: ${jobId} not found`);
  }

  checkPermissions(req.user, job.createdBy);

  const updatedJob = await Job.findOneAndUpdate({ _id: jobId }, req.body, {
    new: true,
    runValidator: true,
  });
  res.status(StatusCodes.OK).json({ updatedJob });
};

const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $group: { _id: "$status", count: { $sum: 1 } } },
  ]);
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  const defaultStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: -1 } },
    { $limit: 6 },
  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;
      const date = moment()
        .month(month - 1)
        .year(year - 1)
        .format("MMM Y");
      return { date, count };
    })
    .reverse();
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};

const createJob = async (req, res) => {
  const { position, company } = req.body;
  if (!position || !company) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export { getJobs, deleteJob, updateJobs, showStats, createJob };
