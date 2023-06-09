import { StatusCodes } from "http-status-codes";
import Note from "../models/Note.js";

const createNote = async (req, res) => {
  try {
    const title = req.body.title;
    const userId = req.user.userId;
    const noteCreated = new Note({ title: title, userId: userId });
    noteCreated.save();
    res.status(StatusCodes.CREATED).json({ noteCreated });
  } catch (error) {
    console.log(error);
  }
};
const getNote = async (req, res) => {
  try {
    const allNotes = await Note.find({ userId: req.user.userId });
    res.status(StatusCodes.OK).json(allNotes);
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};
const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const { isCompleted } = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { isCompleted: isCompleted },
      { new: true }
    );

    res.status(StatusCodes.OK).json({ note: updatedNote });
  } catch (error) {
    console.error(error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Internal Server Error" });
  }
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  const deleteNote = await Note.findByIdAndDelete(noteId);
  res.status(StatusCodes.OK).json({ deleteNote });
};

export { createNote, getNote, updateNote, deleteNote };
