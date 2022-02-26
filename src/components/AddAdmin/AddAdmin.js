import { useForm } from "react-hook-form";
import Sidebar from "../Sidebar/Sidebar";

const AddAdmin = () => {
const { register, handleSubmit, reset, watch, errors } = useForm();
const onSubmit = (data) => {
    const adminData = {
      name: data.name,
      email: data.email,
      phone: data.phone
    };
    const url = `https://lychee-pudding-73705.herokuapp.com/addAAdmin`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(adminData),
    }).then((res) => console.log("server side response", res));
    reset();
  };
  const submitArea = {
    margin: "30px",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "2px 2px 5px grey",
  };

  return (
    <section className="container-fluid row background-image mt-4">
      <div className="col-md-3">
        <Sidebar></Sidebar>
      </div>
      <div className="col-md-7">
        <h5 className="mt-5 pt-5 ms-5 text-secondary">
          Add a Admin
        </h5>
        <form style={submitArea} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            placeholder="Enter Name"
            ref={register}
            className="form-control"
          /> <br />
           <label htmlFor="email">Email</label>
          <input
            name="email"
            placeholder="Enter Email"
            ref={register}
            className="form-control"
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <input
            name="phone"
            placeholder="Enter Phone"
            ref={register}
            className="form-control"
          />
          <br />
          <input
            type="submit"
            value="Save"
            className="btn btn-danger form-control"
          />
        </form>
      </div>
    </section>
  );
};

export default AddAdmin;
