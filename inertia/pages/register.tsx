import { useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  function submit(e) {
    e.preventDefault();
    post("/register");
  }

  return (
    <>
      <form onSubmit={submit}>
        <label>Email</label>
        <input
          type="text"
          value={data.email}
          onChange={(e) => setData("email", e.target.value)}
        />
        {errors.email && <div>{errors.email}</div>}
        <label>Password</label>
        <input
          type="password"
          value={data.password}
          onChange={(e) => setData("password", e.target.value)}
        />
        {errors.password && <div>{errors.password}</div>}
        <button type="submit" disabled={processing}>
          Login
        </button>
      </form>
    </>
  );
}
