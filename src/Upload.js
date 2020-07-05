import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import db from "./firebase";

const useStyles = makeStyles(theme => ({
  form: {
    width: "50%",
  },
  input: {
    width: "100%",
  },
  button: {
    margin: theme.spacing(2, 0, 0),
    width: "50%",
  },
}));

const Upload = () => {
  const classes = useStyles();
  const [url, setUrl] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);
  const [description, setDescription] = useState([]);
  
  const handleSubmit = e => {
    e.preventDefault();
    db.collection("posts")
      .add({
        url: url,
        title: title,
        price: price,
        description: description,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        setUrl('');
        setTitle('');
        setPrice('');
        setDescription('');
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
    alert("Thanks for posting on Ebay!");
  };
  
  return (
    <Grid
      item
      container
      xs={12}
      sm={12}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <h2>Make a post on Ebay!</h2>
      <table className={classes.form}>
        <tbody>
          <tr>
            <td>
              <label> Title</label>
            </td>
            <td>
              <TextField
                id="title"
                label="Title"
                value={title}
                onChange={event => {
                  setTitle(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Description</label>
            </td>
            <td>
              <TextField
                id="description"
                label="Description"
                value={description}
                onChange={event => {
                  setDescription(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Price ($) </label>
            </td>
            <td>
              <TextField
                id="standard-number"
                label="Price"
                value={price}
                onChange={event => {
                  setPrice(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> Image file</label>
            </td>
            <td>
              <TextField
                id="image-url"
                label="Image Url"
                value={url}
                onChange={event => {
                  setUrl(event.target.value);
                }}
                className={classes.input}
              />
            </td>
          </tr>
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        className={classes.button}
      >
        Submit
      </Button>
    </Grid>
  );
};

export default Upload;