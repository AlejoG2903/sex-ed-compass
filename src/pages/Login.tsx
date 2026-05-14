import Header from "@/components/Header";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 px-6 lg:px-12 py-10">
          <div className="flex-1 flex justify-center lg:pr-8">
            <img
              src={loginBg}
              alt="Educación Sexual Integral - ESI"
              className="w-full max-w-xs lg:max-w-sm h-auto object-contain"
            />
          </div>
          <div className="hidden lg:block w-px bg-foreground/15 h-80" />
          <div className="flex-1 flex justify-center lg:pl-8">
            <AccessForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
