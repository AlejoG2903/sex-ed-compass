import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center" style={{ backgroundColor: "hsl(325 60% 92%)" }}>
        <div className="container py-10 lg:py-16">
          <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-10 lg:gap-16 items-center">
            <div className="flex justify-center w-full">
              <img
                src={loginBg}
                alt="Educación Sexual Integral - ESI"
                className="w-full max-w-none h-auto object-contain"
              />
            </div>
            <div className="flex justify-center">
              <AccessForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;