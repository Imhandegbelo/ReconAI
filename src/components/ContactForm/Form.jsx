import { useState } from "react";
import  InputField  from "../InputField";
// import {} from "../InputField"
import { TextareaField } from "../TextareaField";
// import Button from "../Button";

export const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    isSubscribed: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="pt-10 sm:flex sm:flex-wrap" onSubmit={handleSubmit}>
      <InputField
        id="firstName"
        resDesign="sm:w-3/6 sm:pr-[8px]"
        type="text"
        label="First Name"
        value={formData.firstName}
        placeholder="First Name"
        onChange={(value) => setFormData({ ...formData, firstName: value })}
      />
      <InputField
        id="lastName"
        resDesign="sm:w-3/6 sm:pl-[8px]"
        type="text"
        label="Last Name"
        value={formData.lastName}
        placeholder="Last Name"
        onChange={(value) => setFormData({ ...formData, lastName: value })}
      />
      <InputField
        id="email"
        type="email"
        label="Email"
        value={formData.email}
        placeholder="olivia@zuri.com"
        onChange={(value) => setFormData({ ...formData, email: value })}
      />

      <TextareaField
        id="message"
        label="Message"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
      />

      <button
        className="w-full text-lg my-4 h-[44px] rounded-lg text-white bg-sky-500"
        type="submit"
        value="Send Message"
      >
        Send Message
      </button>

      <div className="w-full flex flex-row-reverse gap-5 text-gray-600 pb-4">
        <label
          htmlFor="Subscribe"
          className="text-s w-full"
        >
          Subscribe to our newsletter
        </label>

        <input
          id="Subscribe"
          className="w-[1.3rem] h-[1.3rem] accent-sky-600"
          type="checkbox"
          value={formData.isSubscribed}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
