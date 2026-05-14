import Header from "@/components/Header";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="w-full grid lg:grid-cols-[1fr_auto_1fr] items-center min-h-[60vh]">
          <div className="flex justify-center py-10 lg:pr-12">
            <img
              src={loginBg}
              alt="Educación Sexual Integral - ESI"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
          <div className="hidden lg:block w-px bg-foreground/15 h-full" />
          <div className="flex justify-center py-10 lg:pl-12">
            <AccessForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
