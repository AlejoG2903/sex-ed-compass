import Header from "@/components/Header";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="container py-10 lg:py-16 w-full">
          <div className="grid lg:grid-cols-[1fr_auto_1fr] items-stretch min-h-[60vh]">
            <div className="flex justify-center items-center">
              <img
                src={loginBg}
                alt="Educación Sexual Integral - ESI"
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
            <div className="hidden lg:block w-px bg-foreground/15 mx-8" />
            <div className="flex justify-center items-center">
              <AccessForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
