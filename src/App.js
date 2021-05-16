import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddAlbum from "./components/AddAlbum";
import EditAlbum from "./components/EditAlbum";
import AlbumList from "./components/AlbumList";
import api from "./api/albums";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const addAlbumHandler = async (album) => {
    const request = {
      ...album,
    };

    const response = await api.post(`/albums`, request);
    const data = await response.data;

    setAlbums([...albums, data]);
  };

  const getAlbums = async () => {
    const response = await api.get(`/albums`);
    const data = await response.data;
    setAlbums(data);
  };

  const updateAlbumHandler = async (album) => {
    const response = await api.put(`/albums`, album);
    const { id } = response.data;
    setAlbums(
      albums.map((album) => {
        return album.id === id ? { ...response.data } : album;
      })
    );
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/albums/${id}`);
    const newAlbumList = albums.filter((album) => {
      return album.id !== id;
    });

    setAlbums(newAlbumList);
  };

  return (
    <div style={{ maxWidth: "90rem", margin: "4rem auto" }}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <AlbumList
                {...props}
                removeContactHandler={removeContactHandler}
                albums={albums}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddAlbum {...props} addAlbumHandler={addAlbumHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditAlbum {...props} updateAlbumHandler={updateAlbumHandler} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
