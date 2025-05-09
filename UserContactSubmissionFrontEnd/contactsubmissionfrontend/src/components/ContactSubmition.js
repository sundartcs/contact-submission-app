import axios from "axios";
import { useEffect, useState } from "react";

function ContactSubmition() {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [users, setUsers] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);

  async function Load() {
      
    const result = await axios.get("http://localhost:5159/api/Contacts");
    setUsers(result.data);
    console.log(result.data);
  }
   
  async function save(event) {
   
    event.preventDefault();
    try {
      await axios.post("http://localhost:5159/api/Contacts", {
        
        name: name,
        email: email,
        phone:phone,
       
      });
      alert("User Submition Successfully");
          setName("");
          setEmail("");
          setPhone("");

      Load();
         
    } catch (err) {
      alert(err);
    }
  }  

    return (
      <div align="center">
        <h1>User Details</h1>
      <div class="container mt-4">
        <form class="form-inline">
          <div class="form-group">
           
            
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              id="stname"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              id="course"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              id="course"
              value={phone}
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Submition
            </button>            
          </div>
        </form>
      </div>
      <br></br> 

      <table class="table table-dark" border='1' align="center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        {users.map(function fn(users) {
          return (
            <tbody>
              <tr>
                <th scope="row">{users.id} </th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>{users.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>    
        
      </div>
    );
  }
  
  export default ContactSubmition;