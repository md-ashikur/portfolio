import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Map from "./Map";
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) =>{
    e.preventDefault();

    emailjs.sendForm('service_15z0q77', 'template_hjbp0d8', form.current, 'COp1ZkL4gXjOM7JJx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();

      toast.success('Your message sent successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      
  }

  return (
    <div className="pt-28 fonts bg-[#22252c]">
     
      <div className="block lg:grid gap-4 grid-cols-2 p-10 ">
      <div data-aos="fade-right"
     data-aos-offset="200"
     data-aos-easing="ease-in-sine"   data-aos-duration="1000">
        <p className="text-lg">Feel free to contact me any time</p>
        <h2 className="textColor text-5xl">Get in touch</h2>

        <div class="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  lg:divide-x my-5">
          <p className="p-2"><span className="textColor">Call Me On</span> <br/> +88 01705-433694<br/>+88 01905-462300</p>
          <p className="p-2"><span className="textColor ">Email Me At</span> <br/> ashik76690@gmail.com</p>
          
          <p className="p-2"><span className="textColor ">Address</span> <br/> Silimpur, Bogura-5800, Bangladesh.</p>
          
        </div>
       <h2 className="textColor text-3xl">Follow Me</h2>
      </div>


      <form ref={form} onSubmit={sendEmail} className="flex flex-col  "
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-easing="ease-in-sine"   data-aos-duration="1000">
      <h3 className="text-5xl textColor">CONTACT</h3>
     <div className="flex items-center">
     <input  name="firstName" placeholder="First Name *"  className="px-3  border-b-2 h-10 w-1/2  border-b-[#02cfb4] bg-transparent outline-none text-[white] " required/>
      <input  name="lastName" placeholder="Last Name *"  className="px-3 border-b-2 ml-3 my-3 h-10 border-b-[#02cfb4]  bg-transparent outline-none text-[white] w-1/2 " required/>
     </div> 
      <input name="email" placeholder="Email *" type="email" className="px-3 border-b-2 h-10 bg-transparent border-b-[#02cfb4] outline-none text-[white]" required/>
      <input name="number" placeholder="Phone number" type="number" className="px-3 border-b-2 border-b-[#02cfb4] h-10 mt-3  bg-transparent outline-none text-[white]"/>
      <textarea name="message" placeholder="Message *" className="p-3 border-b-2 my-3 h-24 bg-transparent border-b-[#02cfb4] outline-none text-[white]" required></textarea>
      <input type="submit" value="Send" className="px-3 h-10 w-1/2 font-bold text-xl text-[#22252c] hover:text-[white] buttonColor rounded duration-300 hover:scale-[0.96]" />
     
    </form>
    <ToastContainer/>
    </div>
    <Map></Map>
    </div>
  );
};

export default Contact;
