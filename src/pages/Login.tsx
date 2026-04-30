import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AccessForm from "@/components/AccessForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 gradient-hero py-16">
        <div className="container">
          <AccessForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;