import React from "react";

import { useForm } from "react-hook-form";
import Map from "./Map";

const Contact = () => {
  
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="pt-28 ">
     
      <div className="block lg:grid gap-4 grid-cols-2 p-10 ">
      <div>
        
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  ">
      <h3 className="text-5xl">CONTACT</h3>
     <div className="flex items-center">
     <input {...register("firstName", { required: true })} placeholder="First Name"  className="px-3  h-10 w-1/2 rounded-md text-[#333] "/>
      <input {...register("lastName", { required: true })} placeholder="Last Name"  className="px-3 ml-3 my-3 h-10 rounded-md text-[#333] w-1/2 "/>
     </div>
      <input {...register("email", { required: true })} placeholder="Email" className="px-3 h-10 rounded-md text-[#333]"/>
      <textarea {...register("message", { required: true })} placeholder="Message" className="p-3 my-3 h-24 text-[#333] rounded-md"></textarea>
      <input type="submit" className="px-3 h-10 rounded-md bg-[red] hover:bg-[#333] duration-300 hover:scale-[0.96]" />
    </form>

    </div>
    <Map></Map>
    </div>
  );
};

export default Contact;
