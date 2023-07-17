import { Box, TextField } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { API } from "../global";

const AddMovie = ({ setMovieList, movieList }) => {
  const [movieName, setMovieName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();

  const addMovie = () => {
    const movie = {
      name: movieName,
      poster,
      rating,
      summary,
      trailer,
    };
    console.log("Movie Added", movie);

    // POST METHOD
    //header: Content-type:"application/json"
    //string=>JSON.stringify(movie)
    //fetch always returns an promise=> access the value of it=> .then() method

    fetch(`${API}`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => navigate("/"));
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <TextField
          sx={{ width: "50%", margin: "3% 25% 2% 25%" }}
          id="outlined-basic"
          label="MovieName"
          variant="outlined"
          value={movieName}
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />

        <TextField
          sx={{ width: "50%", margin: "0% 25% 2% 25%" }}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          value={poster}
          onChange={(e) => {
            setPoster(e.target.value);
          }}
        />

        <TextField
          sx={{ width: "50%", margin: "0% 25% 2% 25%" }}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          value={rating}
          onChange={(e) => {
            setRating(e.target.value);
          }}
        />

        <TextField
          sx={{ width: "50%", margin: "0% 25% 2% 25%" }}
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          value={summary}
          onChange={(e) => {
            setSummary(e.target.value);
          }}
        />

        <TextField
          sx={{ width: "50%", margin: "0% 25% 2% 25%" }}
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
          value={trailer}
          onChange={(e) => {
            setTrailer(e.target.value);
          }}
        />
      </Box>

      <Stack direction="row" spacing={2}>
        <Button
          sx={{ marginLeft: "40%" }}
          variant="contained"
          onClick={() => addMovie()}
        >
          Add Movie
        </Button>

        <Button
          sx={{ marginLeft: "30%", width: "8.5%" }}
          variant="contained"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </Button>
      </Stack>
    </>
  );
};
export default AddMovie;
// https://www.youtube.com/embed/X7lRGozX8KQ
