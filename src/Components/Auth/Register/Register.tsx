import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  re_password: string;
};

export default function Register() {
  const navigate = useNavigate();
  const schema = z
    .object({
      username: z
        .string()
        .min(2, "name is required")
        .max(10, "max length is 15"),
      email: z.email("invalid email"),
      password: z.string().regex(/^[A-Z][a-z0-9]{3,8}$/, "Invalid password"),
      re_password: z.string(),
    })
    .refine((obj) => obj.password === obj.re_password, {
      message: "Passwords do not match",
      path: ["re_password"],
    });

  const form = useForm<RegisterFormData>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      re_password: "",
    },
    resolver: zodResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const mutation = useMutation({
    mutationFn: async (newUser: RegisterFormData) => {
      const res = await axios.get(
        "https://68e4e1228e116898997d6e79.mockapi.io/signup"
      );
      const users: RegisterFormData[] = res.data;

      const emailExists = users.some((u) => u.email === newUser.email);
      if (emailExists) {
        throw new Error("This email is already registered");
      }

      const postRes = await axios.post(
        "https://68e4e1228e116898997d6e79.mockapi.io/signup",
        newUser
      );
      return postRes.data;
    },
    onSuccess: () => {
      navigate("/login");
    },
  });

  const handleRegister: SubmitHandler<RegisterFormData> = (value) => {
    mutation.mutate(value);
    console.log(mutation);
  };

  return (
    <>
      <div id="backgroun_home">
        <section>
          
          <Helmet>
            <meta charSet="utf-8" />
            <title>Register</title>
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
                    src="/sign-concept-illustration_114360-125.jpg"
                    className="img-fluid w-100 h-100"
                    alt="bg"
                  />
                </div>

                <div className="col-md-6 d-flex justify-content-center align-items-center h-100">
                  <div className="border p-4 rounded w-75 shadow-sm">
                    <h2 className="text-center mb-4 text-danger fw-bold">
                      Sign Up
                    </h2>

                    <form onSubmit={handleSubmit(handleRegister)}>
                      {mutation.isError ? (
                        <p className="alert alert-danger p-1 mt-1 text-center">
                          {(mutation.error as Error).message}
                        </p>
                      ) : (
                        ""
                      )}

                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          {...register("username")}
                          className="form-control"
                          id="floatingNameInput"
                          placeholder="iti"
                        />
                        <label htmlFor="floatingNameInput">Username</label>
                        {formState.errors.username && (
                          <p className="alert alert-danger p-1 mt-1 text-center">
                            {formState.errors.username.message}
                          </p>
                        )}
                      </div>

                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          {...register("email")}
                          className="form-control"
                          id="floatingEmailInput"
                          placeholder="name@example.com"
                        />
                        <label htmlFor="floatingEmailInput">
                          Email address
                        </label>
                        {formState.errors.email && (
                          <p className="alert alert-danger p-1 mt-1 text-center">
                            {formState.errors.email.message}
                          </p>
                        )}
                      </div>

                      <div className="form-floating mb-3">
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

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          {...register("re_password")}
                          className="form-control"
                          id="floatingRePassword"
                          placeholder="RePassword"
                        />
                        <label htmlFor="floatingRePassword">Re-Password</label>
                        {formState.errors.re_password && (
                          <p className="alert alert-danger p-1 mt-1 text-center">
                            {formState.errors.re_password.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={mutation.isPending}
                        className="btn btn-danger w-100 d-flex justify-content-center align-items-center"
                      >
                        {mutation.isPending ? (
                          <div
                            className="spinner-border text-light"
                            role="status"
                          >
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        ) : (
                          "Register"
                        )}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
