import { useState } from "react";

export default function Hero(props) {
  const sendCode = async (email) => {
    const res = await fetch(
      "https://qo4wcso4og0k8sco8swkk8go.exceptionai.com/api/send-login-code",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      },
    );
    if (res.ok) {
      setStep("code");
      console.log("Success sending code");
    } else {
      alert("Failed to send verification code.");
    }
  };

  const verifyCode = async (email, code) => {
    var body = JSON.stringify({ email, loginCode: code });
    console.log("Verification body " + body);
    const res = await fetch(
      "https://qo4wcso4og0k8sco8swkk8go.exceptionai.com/api/verify-login-code",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: body,
      },
    );
    console.log(res);
    if (res.ok) {
      //login(email);
      //navigate('/dashboard');
    } else {
      alert("Invalid code.");
    }
  };

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState("email"); // or 'code'
  //
  // const { login, isAuthenticated } = useContext(AuthContext);

  return (
    <section className="demo" {...props}>
      {step === "email" ? (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            localStorage.setItem("email", email);
            sendCode(email);
          }}
        >
          <label>
            <span>Email Address</span>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
          <input type="submit" value="Send Code" />
        </form>
      ) : (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            verifyCode(email, code);
          }}
        >
          <label>
            <span>Code</span>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter code"
              required
            />
          </label>
          <input type="submit" value="Verify Code" />
        </form>
      )}
    </section>
  );
}
