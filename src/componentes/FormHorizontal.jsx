import React, { useRef, useState } from "react"
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

const FormHorizontalModule = ({titleThing="", titleBold="", contClass, titleClass}) => {

    let formClass = false;
    const form = useRef();
    const phone = useRef();
    const statusRef = useRef(null);
    const pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    const [token, setToken] = useState("");
    const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

    const setTokenFunc = (getToken) => {
      setToken(getToken);
    };

    const handleChange = (phoneRef) => {
        const input = phoneRef.current;
        // Clear any old status
        input.setCustomValidity('');
      };

    const handleSubmit = (event, formRef, phoneRef, statusRef) => {
        event.preventDefault();

        const input = phoneRef.current;

    // Clear any old status
    input.setCustomValidity('');

    // Check for invalid state(s)
    if (!pattern.test(input.value)) {
      input.setCustomValidity('Please enter a valid phone number');
      input.reportValidity();
    } else {
      input.setCustomValidity('');
      // Proceed with form submission if needed
      emailjs
      .sendForm('service_iyjzik5', 'template_7qvsg6f', formRef.current, {
        publicKey: '25bO-dCc3QTCgWjyH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          formRef.current.reset();
          formClass = true;
          statusRef.current.innerHTML = "Submition sent succesfully"
        },
        (error) => {
          setRefreshReCaptcha(!refreshReCaptcha);
          console.log('FAILED...', error.text);
          formClass = false;
          statusRef.current.innerHTML = "There was an error. Please try again or call us!"
        },
      );
    } 
        
    }
  return (
    <>
      <div className="z-20 relative py-8 px-4 lg:px-0">
        <div className={`container mx-auto rounded-xl ${contClass}`}>
            {(titleThing != "" || titleBold != "") ? (
                <h2 className={`text-qablack ${titleClass} pb-2 px-8 lg:px-0 pt-2 text-center`}>
                {titleThing} <span className="font-extrabold">{titleBold}</span>
                </h2>

            ) : ("")}
            <form className="pt-3" ref={form} onSubmit={(e) => handleSubmit(e, form, phone, statusRef)}>
            <div className="grid lg:grid-cols-4 grid-cols-1 px-8 lg:pc-0 gap-4">
            <div>
  								<input  type="text" 
											className="form-control p-2 border rounded-md border-qablack w-full bg-transparent placeholder-qablack" 
											id="name"  
											placeholder="Name"
											name="name"
											required
											/>
            </div>
            <div>
	                <input type="text"
                    className="form-control p-2 border rounded-md border-qablack w-full bg-transparent placeholder-qablack" 
                    id="phone"
                    aria-describedby="emailHelp" 
                    placeholder="Phone"
                    name="phone"
                    ref={phone}
                    onChange={() => handleChange(phone1)}
                    required
                  />
            </div>
            <div>
                  <input type="email" 
                    className="form-control p-2 border rounded-md border-qablack w-full bg-transparent placeholder-qablack" 
                    id="email" 
                    placeholder="Email"
                    name="email"
                    required/>
            </div>
            <div>
                  <input rows="1" 
                    type="text" 
                    className="form-control p-2 border rounded-md border-qablack w-full bg-transparent placeholder-qablack" 
                    id="comment" 
                    placeholder="Tell Us about your Buiness!"
                    name="comment"/>
            </div>
          </div>
              <div className="col-span-12 pt-8" >
                <div className="w-3/12 mx-auto text-center">
                  <button className="w-full text-white bg-qablack py-2 rounded-md font-bold">SEND</button>
                </div>
                <p ref={statusRef} className={formClass ? "text-green-600 mb-0" : "text-red-700 mb-0"} ></p>
              </div>
              <GoogleReCaptchaProvider reCaptchaKey={import.meta.env.VITE_GOOGLE_RECAPCHA}>
              <GoogleReCaptcha
                className="google-recaptcha-custom-class"
                onVerify={setTokenFunc}
                refreshReCaptcha={refreshReCaptcha}
              />
              </GoogleReCaptchaProvider>
	        </form>
        </div>
    </div>
    </>
  )
};

export default FormHorizontalModule;
