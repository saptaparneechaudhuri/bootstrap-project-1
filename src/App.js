import "./App.css";
import Button from "react-bootstrap/Button";

const App = () => {
  return (
    <main className="container-fluid bg-light h-100 d-flex justify-content-center align-items-center">
      <div className="container-sm max-vh-50 shadow rounded main-container">
        <div className="row bg-white custom-col">
          <div className="col  title-container">
            <h1 className="text-primary mb-3 title">Join our community</h1>
            <p className="text-secondary subtitle">
              30-day, hassle-free money back guarantee
            </p>
            <p className="text-dark text">
              Gain access to our full library of tutorials along with expert
              code reviews.
              <p className="text-dark text">
                Perfect for any developers who are serious about honing their
                skills.
              </p>
            </p>
          </div>
        </div>
        <div className="row custom-col">
          <div className="col-lg-6 bg-primary  title-container ">
            <p className="text-white mb-2 subscription">Monthly Subscription</p>
            <p className="d-flex flex-row align-items-center mb-0 text-white subscription-bill">
              $29{" "}
              <span className="d-inline-flex text-light ms-3 opacity-75 monthly">
                per month
              </span>
            </p>
            <p className="text-light mb-4 subscription-content">
              Full access for less than $1 a day
            </p>
            <button
              type="button"
              className="btn btn-secondary w-100 shadow rounded custom-btn"
            >
              Sign Up
            </button>
          </div>
          <div className="col-lg-6 bg-cyan-light mh-50 title-container ">
            <p className="text-white mb-4 subscription">Why Us</p>
            <p className="text-light subscription-content">
              Tutorials by industry experts Peer & expert code review Coding
              exercises Access to our GitHub repos Community forum Flashcard
              decks New videos every week
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
