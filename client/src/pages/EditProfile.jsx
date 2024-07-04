import Button from "../comps/Button";
import Heading from "../comps/Heading";
import InputBox from "../comps/InputBox";
import Subheading from "../comps/Subheading";

export default function Edit() {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center">
      <div className="shadow p-8 bg-white h-full rounded-lg">
        <Heading>Edit Profile</Heading>
        <div className="mx-4">
          <Subheading>Edit your profile Here, optionally</Subheading>
        </div>
        <InputBox title={"First Name"} placeholder={"John"} type={"text"} />
        <InputBox title={"Last Name"} placeholder={"Doe"} type={"text"} />
        <InputBox
          title={"Password"}
          placeholder={"********"}
          type={"password"}
        />
        <div className="flex justify-center mt-8">
          <Button>Update</Button>
        </div>
      </div>
    </div>
  );
}
