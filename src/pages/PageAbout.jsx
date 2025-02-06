import React from "react"
import ReviewIndividual from "../componentes/RevireIndividual";
import { ReviewAbout, Team } from "../data";
import FormHorizontalModule from "../componentes/FormHorizontal";
import TeamPictureIndividual from "../componentes/TeamPicture";
import WSUA from "../componentes/WhatSetsUsApart";

const About = (props) => {
  return (
    <>

    <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-32 lg:pb-16 pb-8 mt-[-80px] lg:mb-[180px] mb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap px-8 lg:px-0">
          <div className="lg:w-8/12 w-full pb-4 lg:pb-0">
          <h1 className="text-qablack lg:text-[60px] lg:leading-[70px] text-[30px] leading-[35px]">Helping companies cut through the noise and reach <span className="block font-semibold text-[37px] lg:text-[60px] lg:leading-[70px] leading-[40px]">their target audience</span></h1>
          </div>
          <div className="lg:w-4/12 content-center w-full pb-8 lg:pb-0">
          <p className="lexend font-light">Just as you invest in equipment to provide your services, investing in marketing connects you with the right audience. At QA Digital Partners, we make that happen. Get to know our history and our mission.</p>
          </div>
        </div>

        <div className="lg:mb-[-180px] mb-[-50px] lg:pt-16 webkit-center-right">
          <picture className="webkit-center">
            <source media="(min-width: 1024px)" srcSet="./about-us-banner-1200.webp" />
            <source media="(max-width: 1023px)" srcSet="./about-us-banner-340.webp" />
            <img
              src="./about-us-banner-1200.webp"
              alt="ABout Us Banner Image"
              width="1200"
              height="507"
              loading="lazy"
              className="lg:w-[1200px] w-full"
            />
          </picture>
          <div className="lg:w-[39rem] bg-white rounded-t-xl lg:mt-[-96px] mt-[-60px] lg:min-h-[96px] w-[95%] relative text-center content-center lg:me-16 px-4 lg:px-0 py-4">
            <p className="lexend lg:text-[22px] text-[16px] font-light">Managing and marketing your business isn’t easy. <span className="block font-bold">Let us handle the marketing for you.</span></p>
          </div>
        </div>
      </div>
    </div>


    <div className="container mx-auto flex flex-wrap lg:flex-nowrap pt-16 pb-8 px-8 lg:px-0">
      <div className="lg:w-6/12">
        <h2 className="text-[20px] lexend leading-[25px] lg:pe-16">At QA Digital Partners, we believe that a website is more than just an online presence—<span className="font-bold">it’s a powerful platform to build and grow your brand, leading to greater success.</span></h2>
        <p className="lexend font-light pt-8">As we continue to grow and adapt to new technologies and online marketing methods, so do our services and the audiences we serve.</p>
        
        <div className="lg:pe-16 pt-8">
          <ReviewIndividual slide={ReviewAbout[0]} heightMod={'min-h-auto'}/>
        </div>

      </div>
      <div className="lg:w-6/12">
        <div className="pt-8">
          <ReviewIndividual slide={ReviewAbout[1]} heightMod={'min-h-auto'}/>
        </div>

        <p className="lexend font-light pt-8">This evolution is reflected in our journey from Ikkonos in 2013, to QA Digital Ads in 2018, and now to QA Digital Partners. We understand that a company must brand itself properly to showcase its growth and adaptability to the world. No matter how we evolve, the core values of QA Digital remain intact—committed to delivering exceptional value on a global scale.</p>

      </div>
    </div>


    <div className="container mx-auto pt-16 lg:pb-32 pb-8">
      <div className="bg-gradient-197 from-[#FAF9F9] to-[#f0f0f0] rounded-2xl flex flex-wrap lg:flex-nowrap px-8 lg:px-0">
        <div className="lg:w-1/2 lg:pt-16 lg:ps-16 pt-8 pb-8 order-1 lg:order-0">
          <h2 className="lg:text-[60px] lg:leading-[65px] text-[32px] leading-[35px] font-light lg:ps-4">Our <span className="font-semibold block">Mission</span></h2>
          <p className="text-[20px] font-bold py-8">We don’t just create websites; we cultivate brands. </p>
          <p className="lexend font-light pb-8 lg:pb-0">Our mission is to deeply understand your business and how you serve your clients, allowing us to craft a bespoke website that truly resonates with your target audience. In a digital landscape flooded with generic templates and cookie-cutter designs, we strive to make your brand stand out. We aim to prevent your business from getting lost in a sea of similarity by infusing uniqueness and vitality into your online presence.</p>
        </div>
        <div className="lg:w-1/2 lg:my-[-50px] mt-[-40px] order-0 lg:order-1">
          <picture className="webkit-center">
            <source media="(min-width: 1024px)" srcSet="./our-mission-521.webp" />
            <source media="(max-width: 1023px)" srcSet="./our-mission-320.webp" />
            <img
              src="./our-mission-521.webp"
              alt="Our Mission"
              width="521"
              height="625"
              loading="lazy"
              className="lg:w-[521px] w-[340px] mb-4"
            />
          </picture>
        </div>
      </div>
    </div>


    <div className="container mx-auto pt-8 lg:pb-32 pb-8">
      <WSUA />
    </div>


    <div className="bg-gradient-to-b from-qagrey to-white lg:pt-8 ">
      <div className="container lg:pt-16">
        <div className="lg:ps-32">
          <div className="vision lg:pt-64 pt-32 lg:pb-8 lg:ps-16 px-8">
            <h2 className="text-white lg:text-[90px] text-[40px] font-light lg:leading-[85px]">Our <span className="font-semibold">Vision</span></h2>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap px-8 lg:px-0 pt-8 lg:pt-0">
          <div className="lg:w-7/12 lg:pe-8">
            <p className="lexend text-[20px] leading-[30px] font-bold lg:pt-[50px]">At QA Digital Partners, our vision is to empower businesses through comprehensive digital strategies that extend far beyond just creating websites.</p>
            <p className="lexend font-light pt-8">We understand that a website is merely a tool—a platform that needs compelling content and strategic planning to truly make an impact. It’s the content and strategy behind the website that engage your audience, tell your story, and drive your business forward.</p>
            <p className="lexend font-light pt-8">We are committed to being more than just a service provider; we strive to be your strategic partner. Our focus is on developing innovative content and tailored strategies that resonate with your target audience and differentiate you in the marketplace. By combining our expertise in content creation, design, and digital marketing, we help you harness the full potential of the online world.</p>
            <p className="lexend font-light pt-8">Our mission is to provide solutions that are not only visually stunning but also deeply effective in achieving your business goals. We aim to elevate your brand, amplify your message, and foster meaningful connections with your customers. In an ever-evolving digital landscape, we stay ahead of the curve so that you can lead in your industry.</p>
          </div>
          <div className="lg:w-5/12 w-full pt-8 lg:pt-0">
            <picture className="webkit-center-right">
              <source media="(min-width: 1024px)" srcSet="./mision-img-486.webp" />
              <source media="(max-width: 1023px)" srcSet="./mision-img-360.webp" />
              <img
                src="./mision-img-486.webp"
                alt="Our Mission"
                width="486"
                height="511"
                loading="lazy"
                className="lg:w-[486px] w-[340px] mb-4"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>

    <FormHorizontalModule titleThing={"Let's Start"} titleBold={"Your Project"} contClass={'border-[1px] border-qablack lg:p-[2.5rem] py-8 bg-white mb-16'} titleClass={"lg:text-[25px] text-[18px] lg:leading-[32px] leading-[22px]"}/>

    
    <div className="bg-gradient-to-b from-[#585D5E] to-qablack lg:pt-16 lg:pb-32 pb-16">
      <div className="container mx-auto lg:px-16 px-8">
        <h2 className="text-white text-[70px] pt-16 border-b-[1px] border-white">Our <span className="text-qaorange font-semibold">Team</span></h2>
        <div className="flex lg:flex-nowrap flex-wrap lg:pt-8 lg:pb-16 py-8">
          <div className="lg:w-3/120 pe-4 pb-4 lg:pb-0">
          <p className="lexend text-[20px] font-bold leading-[30px] text-white lg:pe-32">Our strength lies in our diverse and specialized team.</p>
          </div>
          <div className="lg:w-9/12 lg:ps-8">
          <p className="lexend font-light text-white lg:ps-4">Comprising content creators, designers, programmers, project managers, and a dedicated R&D department, we bring a wealth of expertise to every project. This collaborative approach allows us to deliver faster and superior results compared to a one-person operation. Each team member contributes their unique skills to create a cohesive and impactful digital experience for your brand.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-8 gap-8">
            {Team.map((member, index)  => (
              <TeamPictureIndividual key={index} {...member} />
            ))}
          </div>
      </div>
    </div>


    <div className="container mx-auto flex lg:flex-nowrap flex-wrap lg:pt-32 pt-16 pb-16 px-8">
      <div className="lg:w-6/12 w-full flex order-0 lg:order-1">
        <div className="w-2/12 order-0 lg:order-2 content-end">
          <h2 className="lg:text-[60px] text-[40px] lg:leading-[65px] font-light texto-vertical">Who <span className="font-semibold">We Serve</span><span className="text-qaorange lg:tracking-[-0.5rem] tracking-[-0.28rem] font-bold">-----</span></h2>
        </div>
        <div className="lg:w-10/12 order-2 lg:order-1">
          <picture className="webkit-center-right">
            <source media="(min-width: 1024px)" srcSet="./who-we-serve-486.webp" />
            <source media="(max-width: 1023px)" srcSet="./who-we-serve-320.webp" />
            <img
              src="./who-we-serve-486.webp"
              alt="Who we serve"
              width="486"
              height="511"
              loading="lazy"
              className="lg:w-[486px] w-[340px]"
            />
          </picture>
        </div>      
      </div>
      <div className="lg:w-6/12 content-center order-0 lg:order-0">
        <p className="lexend font-light pt-8">While we cater to businesses of various sizes, QA Digital Partners is looking to collaborate with companies who’s services are valued at $5,000 or more. These businesses might feel comfortable with their current website and brand, but in a rapidly changing economic landscape, this complacency can be risky.</p>
        <p className="lexend font-light pt-8">Without robust online foundations to support them, they may fall behind competitors in every aspect. We aim to fortify these companies with cutting-edge websites and branding strategies that not only withstand economic shifts but also propel them forward in their industries.</p>
      </div>
    </div>


    <div className="container mx-auto flex lg:flex-nowrap flex-wrap lg:pt-8 lg:pb-32 pb-16 px-8 lg:px-0 ">
      <div className="lg:w-6/12 flex lg:order-0 order-0">
        <div className="lg:w-2/12 order-1 lg:order-0 lg:content-end content-center">
          <h2 className="lg:text-[60px] text-[35px] lg:leading-[65px] font-light texto-vertical">Our <span className="font-semibold">Impact</span><span className="text-qaorange lg:tracking-[-0.5rem] tracking-[-0.28rem] font-bold">---------</span></h2>
        </div>
        <div className="lg:w-10/12 order-0 lg:order-1 content-around">
          <picture className="webkit-center-right">
            <source media="(min-width: 1024px)" srcSet="./our-impact-588.webp" />
            <source media="(max-width: 1023px)" srcSet="./our-impact-320.webp" />
            <img
              src="./our-impact-588.webp"
              alt="Our Impact"
              width="588"
              height="511"
              loading="lazy"
              className="lg:w-[588px] w-[340px]"
            />
          </picture>
        </div>
      </div>
      <div className="lg:w-5/12 content-center order-1 lg:order-2 lg:ps-8">
        <p className="lexend font-light pt-8">We harness the power of the latest web development technologies to make high-quality, unique websites accessible to businesses with varying budgets.</p>
        <p className="lexend font-light pt-8">By lowering development costs through innovation, we provide premium services that were once reserved for companies with substantial budgets. This democratization of web development empowers businesses to allocate resources toward broader marketing efforts, enhancing their reach and revenue potential.</p>
      </div>
    </div>
    </>
  )
};

export default About;
