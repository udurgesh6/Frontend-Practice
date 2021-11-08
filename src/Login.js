import React, { useState } from "react";
import "./Login.css";

function Login() {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [myImages, setMyImages] = useState([]);

  const [name, setName] = useState("");

  // const [myName, setMyName] = useState("Durgesh");

  // const onChangeOfName = () => {
  //   if (myName === "Durgesh") {
  //     setMyName("Ritesh");
  //   } else {
  //     setMyName("Durgesh");
  //   }
  // };

  // const [team, setTeam] = useState(["Durgesh", "Shivam", "Ishika"]);
  // const [currIndex, setCurrIndex] = useState(0);

  // const onTeamMemberChange = () => {
  //   if (currIndex === team.length - 1) {
  //     setCurrIndex(0);
  //   }
  //   setCurrIndex(currIndex + 1);
  // };

  const [users, setUsers] = useState([]);

  const onUserAdd = () => {
    var emptyArray = [...users];
    emptyArray.push(name);
    setUsers(emptyArray);
    setName("");
  };

  const deleteUser = (name) => {
    var emptyArray = [...users];
    for (var i = 0; i < users.length; i++) {
      if (emptyArray[i] === "name") {
      }
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(
  //       `http://localhost:8080/get_uploaded_bg_images?user_id=aac5a7cd-5f3f-4bba-9ab2-bc40c78eb6dc`
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       // local var my_images = state array var
  //       var my_images = [...myImages];
  //       // res header, data, content
  //       res.data.map((element) => {
  //         my_images.push(element);
  //       });
  //       setMyImages(my_images);
  //     });
  // }, []);

  // const onLogin = () => {
  //   if (email === "udurgesh6@gmail.com" && pass === "Aerospace@067") {
  //   } else {
  //     alert("Wrong Credentials !");
  //   }
  // };

  return (
    <div>
      {/* <p>Please Login Here</p> */}
      {/* {myName.length > 0 && <p>My current name: {myName}</p>}
      {myName === "Durgesh" ? <p>My state is Maha</p> : <p>My state is UP</p>} */}
      {/* <p>Current Team Member: {team[currIndex]}</p>
      <input
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="loginBtn" onClick={}>
        Login
      </button> */}
      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {myImages.map((image) => (
          <img
            src={image.image_url}
            style={{ height: "100px", width: "100px" }}
          />
        ))}
      </div> */}

      <input
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onUserAdd}>Add</button>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {users.map((name) => (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p>{name}</p>
            <button onClick={(e) => deleteUser(name)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
