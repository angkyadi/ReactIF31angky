import { useState } from "react";
import Input from "@components/basic/ui/Input";
import http from "../../../../api/apiClient";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const[spots,setSpots] = useState([])

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", form);
  };

  const handleLogin = async (event) => {
    event.preventDefault()
    const response = await http.post("/login",form)
        console.log(response);
    
        if(response.status ==200){
          sessionStorage.setItem("token-bebas", response.data.data.token)

          fetchSpots()
        }
  }
  const fetchSpots = async()=>{
    const response = await http.get('/spot')
    console.log(response)
  }

  return (
    <div>
    <form onSubmit={handleLogin}>
      {JSON.stringify(form)}

      <Input
        type="email"
        name="email"
        value={form.email}
        onChange={handleFormChange}
        placeholder="Email"
      />

      <Input
        type="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
    </div>
  );
}
