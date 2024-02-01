import loginPhoto from "../assets/login-photo.jpg";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <LoginForm />
      </div>

      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={loginPhoto}
          alt=""
        />
        <p className="z-10 absolute text-gray-100 bottom-0 inset-x-0 text-center bg-black bg-opacity-75">
          Photo by{" "}
          <a href="https://unsplash.com/@densiq?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Dennis Siqueira
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/photos/white-metal-shelf-with-food-packs-QnMeRW36-zY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
