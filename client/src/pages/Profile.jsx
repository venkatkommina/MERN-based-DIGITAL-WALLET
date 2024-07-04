import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Info from "../comps/Info";
import Button from "../comps/Button";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div className="min-h-screen bg-primary flex justify-center items-center">
      <div className="shadow p-14 bg-white h-full rounded-lg">
        <div className="flex justify-center items-center mb-16">
          <div className="rounded-full h-16 w-16 bg-primary flex justify-center items-center mt-1 mr-2">
            <FontAwesomeIcon icon={faUser} size="2x" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Info type="First Name" label="Venkat"></Info>
          <Info type="Last Name" label="Kommina"></Info>
          <Info type="Email" label="nZUeh@example.com"></Info>
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/editprofile">
            <Button>Edit Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
