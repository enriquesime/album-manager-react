import React from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";


class EditAlbum extends React.Component {
  constructor(props) {
    super(props);

    const { id ,albumId, title, url , thumbnailUrl} = this.props.location.state.album;
    this.state = {
        id,
      albumId,
      title,
      url,
      thumbnailUrl
    };
  }


  updateAlbum = (e) => {
    e.preventDefault();

    const noEmptyFields = this.state.albumId === "" || 
    this.state.title === "" || this.state.url === "" || 
    this.state.thumbnailUrl === "";

    if (noEmptyFields) {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.updateAlbumHandler(this.state);
    this.setState({ albumId: "", title: "" , url: "" , thumbnailUrl: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <>
      <h2 className="text-center ">Update Album</h2>  
      <Form onSubmit={this.updateAlbum}>
        <FormGroup>
          <Label>Id</Label>
          <Input type="text" value={this.state.id} disabled />
          <Label>Album Id</Label>
          <Input
            type="text"
            value={this.state.albumId}
            onChange={(e) => this.setState({ albumId: e.target.value })}
          />
          <Label>Title</Label>
          <Input
            type="text"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
          />
          <Label>Url</Label>
          <Input
            type="text"
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
          />
          <Label>thumbnail Url</Label>
          <Input
            type="text"
            value={this.state.thumbnailUrl}
            onChange={(e) => this.setState({ thumbnailUrl: e.target.value })}
          />
          <Button
            style={{ marginRight: "4px" }}
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </Button>
          <Link
            style={{ margin: "4px" }}
            to="/"
            className="btn btn-danger ml-2"
          >
            Cancel
          </Link>
        </FormGroup>
      </Form>
      </>
    );
  }
}
export default EditAlbum;
