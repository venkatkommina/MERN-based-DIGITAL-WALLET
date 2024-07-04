import Heading from "../comps/Heading";
import Subheading from "../comps/Subheading";
import InputBox from "../comps/InputBox";
import Button from "../comps/Button";
import BottomWarning from "../comps/BottomWarning";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Heading>Sign Up</Heading>
        <Subheading>Enter your Information to create your account</Subheading>
        <InputBox title={"First Name"} placeholder={"John"} type={"text"} />
        <InputBox title={"Last Name"} placeholder={"Smith"} type={"text"} />
        <InputBox
          title={"Email"}
          placeholder={"nZUeh@example.com"}
          type={"text"}
        />
        <InputBox
          title={"Password"}
          placeholder={"********"}
          type={"password"}
        />
        <div className="flex justify-center">
          <Button>Sign Up</Button>
        </div>
        <BottomWarning
          label={"Already have an account? "}
          buttonText={"Sign In"}
          to={"/signin"}
        />
      </div>
    </div>
  );
}
