import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessForm from "@/components/AccessForm";
import loginBg from "@/assets/login-bg.png";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="flex-1 py-16 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
        <div className="container relative">
          <AccessForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;