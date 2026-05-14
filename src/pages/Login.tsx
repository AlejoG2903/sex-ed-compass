import Header from "@/components/Header";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8 px-6 lg:px-16 py-10 lg:py-16 min-h-[60vh]">
          <div className="flex-1 flex items-center justify-center lg:pr-8">
            <img
              src={loginBg}
              alt="Educación Sexual Integral - ESI"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
          <div className="hidden lg:block w-px bg-foreground/15" />
          <div className="flex-1 flex items-center justify-center lg:pl-8">
            <AccessForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
