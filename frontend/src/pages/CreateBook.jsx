import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  cosnt[(publishYear, setPublishYear)] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  return <div>CreateBook</div>;
};

export default CreateBook;
