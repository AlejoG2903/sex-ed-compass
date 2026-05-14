import Header from "@/components/Header";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="w-full h-full flex items-center justify-center px-4 lg:px-12">
          <div className="flex flex-col lg:flex-row items-stretch justify-center w-full h-full gap-10 lg:gap-0">
            <div className="flex-1 flex items-center justify-center lg:pr-12">
              <img
                src={loginBg}
                alt="Educación Sexual Integral - ESI"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div className="hidden lg:block w-px bg-foreground/15" />
            <div className="flex-1 flex items-center justify-center lg:pl-12">
              <AccessForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;