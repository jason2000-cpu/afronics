import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import usersData from "../../../userData";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Silas",
    isSeller: true,
  };

  const [userJobs, setUserJobs] = useState([]);
  const [isLoading, setIsLoading]= useState(true);

  const delay = (ms) => new Promise((resolve)=> { setTimeout(resolve, ms)})

  useEffect(()=> {
    try{
      delay(2000).then(()=>{
        setUserJobs(usersData[0].jobs)
        setIsLoading(false);
        console.log(userJobs)
      })
    } catch(err){
      console.log("An Error Occured", err)
    }

  }, [userJobs])

  if(isLoading === true) {
     return <h1 style={{height: "20rem", display: "flex", justifyContent: "center", alignItems: "center"}}>LOADING......</h1>
  }

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Jobs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Job</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          { userJobs.map((job)=> {
            return (
              <tr key={job.id}>
                <td>
                  <img 
                    src={job.image}
                    alt={job.title}
                    />
                </td>
                <td>{job.title}</td>
                <td>{job.price}</td>
                <td>{job.sales}</td>
                <td>
                  <img className="delete" src="./img/delete.png" alt="delete"/>
                </td>
              </tr>
            )
          })}
        </table>
      </div>
    </div>
  );
}

export default MyGigs;