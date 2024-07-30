import Link from "next/link";

export const metadata = {
  title: "Rayca Register",
  description: "Create a new account",
};

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-hidden block sm:flex">
      <div className="sm:w-2/5">
        <div className="flex justify-between h-[5%] sm:px-5 xl:px-20 p-7  items-center">
          <span className="font-bold">Rayca</span>
          <div>
            <Link className="text-sm underline text-blue-600" href="/">
              Log in
            </Link>
            <Link className="text-sm underline text-blue-600 ml-3" href="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="sm:h-[95%] h-[60vh]  flex items-center sm:justify-center xl:justify-start xl:pl-20">
          <form className="w-full xl:w-2/3 p-7">
            <div className="mb-5">
              <h1 className="text-3xl font-bold mb-2">Register</h1>
              <span className="font-light">
                Please enter your email and password
              </span>
            </div>
            <div className="mb-5">
              <div>Email</div>
              <input
                className="placeholder:text-sm border border-[#E8E8EA] p-3 rounded w-full mt-2"
                type="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
              />
            </div>
            <div className="mb-5">
              <div>New Password</div>
              <input
                className="placeholder:text-sm border border-[#E8E8EA] p-3 rounded w-full mt-2"
                type="password"
                min="8"
                placeholder="Enter your Password"
                autoComplete="new-password"
                required
              />
            </div>
            <div className="mb-5">
              <div>Re-Enter Password</div>
              <input
                className="placeholder:text-sm border border-[#E8E8EA] p-3 rounded w-full mt-2"
                type="password"
                min="8"
                placeholder="Enter your Password"
                autoComplete="new-password"
                required
              />
            </div>
            <button className="bg-purple-600 text-white py-3 px-10 md:text-sm">Create account</button>
          </form>
        </div>
      </div>
      <div className="sm:w-3/5 hidden sm:block bg-[#F4F4F6] p-10">
        <div>
          <h1 className="text-3xl mb-5">Create an Account with Us!</h1>
          <p className="sm:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio
          </p>
          <img className="w-[97%] pt-4 relative left-28 xl:pt-9 xl:left-40" src="assets\images\Frontend Task Attachment.png"></img>
        </div>
      </div>
    </div>
  );
}
