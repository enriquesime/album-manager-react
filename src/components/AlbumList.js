import React from "react";
import {Button} from "reactstrap";
import {Link} from "react-router-dom";

const AlbumList = (props) =>{

   const addAlbumHandler=()=>{
     props.history.push('/add');
   } ;

    return (
        <div>
        <h2 className="text-center "> Album List</h2>
         <Button style={{ marginBottom:"4px"}} className="btn btn-primary" onClick={addAlbumHandler}> Add Album</Button>
           <div>
            <table className="table table-bordered table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th>Id</th>
                        <th>Album Id</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                        {props.albums.length>0 ? 
                             props.albums.map(album=>
                                <tr key={album.id}>
                                    <td>{album.id}</td>
                                    <td>{album.albumId}</td>
                                    <td>{album.title}</td>
                                    <td>{album.url}</td>
                                    <td>{album.thumbnailUrl}</td>
                                    <td>
                                   <Link className="btn btn-primary" to={{ pathname: `/edit`, state: { album: album } }}>UPDATE</Link>
                                    </td>
                                    <td><button onClick={()=>props.removeContactHandler(album.id)} className="btn btn-danger">DELETE</button>
                                    </td>
                                </tr>
                            ):<h1 className="text-center ">No Albums added</h1>
                        }

                </tbody>
            </table>
        </div>
    </div>
    )
}

export default AlbumList;





