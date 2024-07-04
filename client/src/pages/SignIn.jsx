import BottomWarning from "../comps/BottomWarning";
import Button from "../comps/Button";
import Heading from "../comps/Heading";
import InputBox from "../comps/InputBox";
import Subheading from "../comps/Subheading";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Heading>Sign In</Heading>
        <Subheading>Enter your credentials to access your account</Subheading>
        <InputBox
          title={"Email"}
          placeholder={"nZUeh@example.com"}
          type={"text"}
        />
        <InputBox title="Password" placeholder={"********"} type={"password"} />
        <div className="flex justify-center">
          <Button>Sign In</Button>
        </div>
        <BottomWarning
          label={"Don't have an account? "}
          buttonText={"Sign Up"}
          to={"/signup"}
        />
      </div>
    </div>
  );
}
