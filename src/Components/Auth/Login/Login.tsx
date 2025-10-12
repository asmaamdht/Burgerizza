import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { setuser } from "../../../Store/Userslice"; 


type ILoginForm = {
  email: string;
  password: string;
};

type IUser = {
  id: string;
  username: string;
  email: string;
  password?: string;
};

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const schema = z.object({
    email: z.email("Invalid email"),
    password: z.string().regex(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password"),
  });

  const {
    register,
    handleSubmit,
    formState
  } = useForm<ILoginForm>({
    defaultValues: { email: "", password: "" },
    resolver: zodResolver(schema),
  });


  const mutation = useMutation<IUser, Error, ILoginForm>({
    mutationFn: async ({ email, password }) => {
      const res = await axios.get<IUser[]>(
        "https://68e4e1228e116898997d6e79.mockapi.io/signup"
      );
      const users = res.data;

      const foundUser = users.find(
        (u: IUser) => u.email === email && u.password === password
      );

      if (!foundUser) {
        throw new Error("Incorrect email or password");
      }

      return {
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
      };
    },


    onSuccess: (user) => {
      // console.log(user);
      dispatch(setuser(user)); 
      localStorage.setItem("user", JSON.stringify(user)); 
      navigate("/"); 
      console.log("Signin successful", user);
    },
  });

  
  const handleLogin: SubmitHandler<ILoginForm> = (values) => {
    mutation.mutate(values);
  };

  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="min-vh-100 d-flex justify-content-center align-items-center">
        <div
          className="container bg-white p-0 rounded shadow-lg"
          style={{ minHeight: "600px" }}
        >
          <div className="row align-items-center h-100">
            
            <div className="col-md-6 h-100">
              <img
                src="/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-1592.jpg"
                className="img-fluid w-100 h-100"
                alt="bg"
              />
            </div>

            
            <div className="col-md-6 d-flex justify-content-center align-items-center h-100">
              <div className="border p-4 rounded w-75 shadow-sm">
                <h2 className="text-center mb-4 text-danger fw-bold">Sign in</h2>

                <form onSubmit={handleSubmit(handleLogin)}>
                  {mutation.isError ? (
                    <p className="alert alert-danger p-1 mt-1 text-center">
                      {(mutation.error as Error).message}
                    </p>
                  ) : (
                    ''
                  )}

                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      {...register("email")}
                      className="form-control"
                      id="floatingEmailInput"
                      placeholder="name@example.com"
                    />
                    <label htmlFor="floatingEmailInput">Email address</label>
                     {formState.errors.email && (
                      <p className="alert alert-danger p-1 mt-1 text-center">
                        {formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="form-floating mb-2">
                    <input
                      type="password"
                      {...register("password")}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                     {formState.errors.password && (
                      <p className="alert alert-danger p-1 mt-1 text-center">
                        {formState.errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="text-end mb-2">
                    <Link to="/forget">Forget Password</Link>
                  </div>

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="btn btn-danger w-100 d-flex justify-content-center align-items-center"
                  >
                    {mutation.isPending ? (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Sign in"
                    )}
                  </button>

                  <p className="text-center mt-3">
                    Don’t have an account? <Link to="/register">Sign up</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
