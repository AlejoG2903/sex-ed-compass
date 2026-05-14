import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1" style={{ backgroundColor: "hsl(340 75% 92%)" }}>
        <div className="container py-10 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
            <div className="flex justify-start lg:pr-12">
              <img
                src={loginBg}
                alt="Educación Sexual Integral - ESI"
                className="w-full max-w-xl h-auto object-contain"
              />
            </div>
            <div className="flex justify-center lg:justify-start lg:pl-16 lg:border-l lg:border-foreground/15">
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