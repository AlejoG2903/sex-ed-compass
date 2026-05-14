import Header from "@/components/Header";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="container h-full flex items-center justify-center py-10 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full gap-10 lg:gap-0">
            <div className="flex-1 flex justify-center lg:pr-16">
              <img
                src={loginBg}
                alt="Educación Sexual Integral - ESI"
                className="w-full max-w-2xl h-auto object-contain"
              />
            </div>
            <div className="hidden lg:block w-px bg-foreground/15 self-stretch" />
            <div className="flex-1 flex justify-center lg:pl-16">
              <AccessForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;