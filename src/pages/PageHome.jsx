import React, { useEffect, useRef } from "react"
import { CaseStudiesHome, Team } from "../data";
import SmallServices from "../componentes/SmallServicesHome";
import MyCarousel from "../componentes/BandingCarousel";
import  CaseStudiesM  from "../componentes/CaseStudiesHome";
import SpinAnimation from "../componentes/SpinerText";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import FormHorizontalModule from "../componentes/FormHorizontal";
import ReviewSection from "../componentes/ReviewSection";

const Home = () => {

  const anchors = {
    'case-studies': useRef(null),
  };
  
  const location = useLocation();

useEffect(() => {
  const section = location.hash.replace('#', ''); // Remover el símbolo #
  if (anchors[section] && anchors[section].current) {
    anchors[section].current.scrollIntoView({ behavior: 'smooth' });
  }
}, [location]);



  return (
    <>
        <Helmet>
        <title>Digital Marketing Agency in Maryland - QA Digital Partners</title>
        <meta name="description" content="QA Digital Partners: Maryland's top digital marketing agency for SEO, PPC, and web design. Grow your business with strategies that drive results. Contact us today!" />
        <meta name="author" content="QA Digital Partners" />
        <meta property="og:title" content="Digital Marketing Agency in Maryland - QA Digital Partners" />
        <meta property="og:description" content="QA Digital Partners: Maryland's top digital marketing agency for SEO, PPC, and web design. Grow your business with strategies that drive results. Contact us today!" />
        <meta property="og:image" content="https://qadigitalpartners.com/qacode-home-banner-320" />
        <meta property="og:url" content="https://qadigitalpartnes.com/" />
        <meta name="twitter:title" content="Digital Marketing Agency in Maryland - QA Digital Partners" />
        <meta name="twitter:description" content="QA Digital Partners: Maryland's top digital marketing agency for SEO, PPC, and web design. Grow your business with strategies that drive results. Contact us today!" />
        <meta name="twitter:image" content="https://qadigitalpartners.com/qacode-home-banner-320" />
      </Helmet>


    <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-16 pb-8 mt-[-80px] lg:mb-[-120px]" id="home">
      <div className="container flex mx-auto flex-wrap lg:flex-nowrap">
        <div className="lg:w-3/6 pt-16 w-6/6">
          <h1 className="text-qablack lg:text-[63px] text-[36px] font-light pb-4 lg:leading-[75px] leading-[42px] px-8 lg:px-0">
          A Digital Marketing Agency That <span className="font-semibold">Generates Business</span>
          </h1>
          <p className="text-qablack text-base lg:pe-32 py-8 px-8 lg:ps-0 lexend">Through high-performing SEO campaigns, award-winning web design, and 
            effective marketing strategies, we have helped businesses across the USA achieve over <b>$5 million in annual revenue. </b> A number that keeps going up.</p>
          
          <p className="text-qablack px-8 lg:px-0 hidden"><b className="block">Design is our domain:</b>
          Anywhere from corporate to <button href="/" className=" animate-bounce rounded-[25px] text-white py-2 px-8 speed-button font-extrabold ">space</button></p>
        </div>
        <div className="mt-16 justify-center lg:w-3/6 w-full flex">
        <picture>
          <source media="(min-width: 1024px)" srcSet="./qacode-home-banner-545.webp" />
          <source media="(max-width: 1023px)" srcSet="./qacode-home-banner-320.webp" />
          <img
            src="./qacode-home-banner-320.webp"
            alt="QR Code SEO and Web Design Agency"
            width="545"
            height="581"
            loading="lazy"
            className="lg:w-[545px] w-[340px] mb-4 fade up"
          />
        </picture>
        </div>
      </div>
    </div>

    <FormHorizontalModule contClass={'border-[1px] border-qablack lg:p-[2.5rem] py-8 bg-white'}/>

    <div className="lg:my-32 my-16" id="services-home">
      <div className="container mx-auto bg-gradient-197 from-qagrey to-[#faf9f9] rounded-xl lg:p-16 p-8 fade left">
        <div>
        <h2 className="text-qablack lg:text-[70px] text-[36px] font-light lg:leading-[80px] leading-[42px] capitalize mb-4">
        Services that <span className="font-bold block">make this happen</span>
          </h2>
          <div className="flex lg:flex-nowrap flex-wrap">
            <SmallServices home={true}/> 
          </div>
        </div>
      </div>
    </div>


    <div className="bg-gradient-to-t from-qablack to-[#585d5e] py-16 ">
      <div className="pb-8">
        <MyCarousel reverse={true}/>
        <MyCarousel reverse={false}/>
      </div>
      <div className="container mx-auto lg:py-16 py-4 flex lg:flex-nowrap flex-wrap lg:px-0 px-8 fade up">
        <div className="lg:w-3/6 w-full">
        <picture>
          <source srcSet="stand-out-and-grow-hight-w-529.webp" media="(min-width: 1000px)" />
          <source srcSet="stand-out-and-grow-w-340.webp" media="(min-width: 400px)"/>
          <img src="stand-out-and-grow-w-340.webp" alt="Stand Out and Grow with QA Digital Partners" width={'529px'} loading="lazy"/>
        </picture>
        </div>
        <div className="lg:w-3/6 w-full content-around text-right">
          <div style={{textAlign: '-webkit-right'}} className="lg:pb-16 mb-[-20px] mt-4 lg:m-0">
            <img src="dots-1.svg" alt="Dots 1" width={'64px'} className="w-[45px] lg:w-[64px]"/>
          </div>
          <h3 className="text-white font-light lg:text-[4.4rem] text-[2.6rem] lg:text-right text-left leading-[4.7rem] leading-[3.2rem] pb-8">Our Clients <span className="font-bold block">Stand Out <span className="text-qaorange">& Grow</span></span></h3>
          <p className="text-white font-light lg:text-right text-left lg:ps-16">In a world with billions of websites, only a phew stays in people's minds, and only another phew gets actual results. We bring both. Our designs and strategies are crafted to give you a competitive edge, putting you ahead of your competitors. Set your goals, partner with us, and see real growth. </p>
          <div className="lg:pt-16 pt-4 mb-[-20px] lg:m-0">
            <img src="dots-2.svg" alt="Dots 2" width={'88px'} className="w-[55px] lg:w-[88px]"/>
          </div>
        </div>
      </div>
    </div>

    <ReviewSection heightMod={false}/>

    <div className="bg-gradient-to-b from-qagrey from-1% to-white to-40% py-16">
      <div className="container mx-auto px-8 lg:px-0">
      <div className="flex w-full lg:flex-nowrap flex-wrap fade right">
          <div className="lg:w-5/12 w-full">
          <h2 className="lexend font-light text-[2.5rem] leading-tight">We Get<span className="font-bold block">Things <span className="text-qaorange">Moving</span></span></h2>
            <picture>
              <source srcSet="moving-things-large.webp" media="(min-width: 1000px)"/>
              <source srcSet="moving-things-small.webp" media="(min-width: 400px)"/>
              <img src="moving-things-large.webp" alt="We get thing moving" width={'510px'} className="mt-8 fade-up"/>
            </picture>
          </div>
          <div className="lg:w-7/12 w-full lg:ps-16 ps-0 content-center">
            <h2 className="text-qablack lg:text-[70px] text-[36px] font-light lg:leading-[80px] leading-[42px] capitalize mt-8 lg:mt-0">
            Your <span className="font-bold">Experienced</span> Digital Marketing Powerhouse
            </h2>
            <p className="lg:pe-32 lg:mt-16 mt-4">We are proud to say the reason for our success is the success of our clients. At QA Digital Partners, we are a one-stop for all things digital. Organized and structured for high-speed, high-performing results, you can expect a team that delivers. With a professional in-house marketing team divided into departments for SEO, lead generation, web design, marketing, UX/UI, and customer success, we have built long-term relationships that have lasted more than 10 years. </p>
          </div>
      </div>
      <div className="flex w-full flex-wrap lg:flex-nowrap">
          <div className="lg:w-7/12 w-full lg:pt-16 lg:pe-8 pe-0 pt-8 pb-16">
            <h2 className="lexend font-light text-[2.5rem] leading-tight">Why <span className="font-bold">QA Digital <span className="text-qaorange block">Patners<span className="text-qablack font-light">?</span></span></span></h2>
            <h3 className="text-qablack font-bold text-xl flex pt-8 pb-4">
              <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
              <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
              <rect width="13" height="15" fill="#D9D9D9"/>
              </mask>
              <g mask="url(#mask0_4516_36746)">
              <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
              </g>
              </svg>
              We Adapt and Constantly Innovate
            </h3>
            <p className="lexend font-light text-qablack">No one knows how the Google algorithm works, and no one-size-fits-all strategy exists. However, with extensive education in Google's certifications and recommendations, best practices for SEO and web development, and years of data from all our clients, we make educated guesses that generate results over time. We can guarantee you that we will work hard, go above and beyond, and adjust anything we need to change until your business thrives. </p>
            <div className="flex w-full lg:gap-16 gap-4 flex-wrap lg:flex-nowrap">
              <div className="lg:w-3/6 w-full">
                <h3 className="text-qablack font-bold text-xl flex pt-8 pb-4 pe-16">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
                  <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
                  <rect width="13" height="15" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_4516_36746)">
                  <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
                  </g>
                  </svg>
                  Proven Track Record of Success
                </h3>
                <p className="lexend font-light text-qablack">With years of experience working and managing marketing and SEO campaigns for multiple industries, we have been highly consistent in achieving results for our clients. We invite you to see our case studies of how we have achieved remarkable success with illustrious entrepreneurs worldwide.</p>
              </div>
              <div className="lg:w-3/6 w-full">
                <h3 className="text-qablack font-bold text-xl flex pt-8 pb-4">
                  <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
                  <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
                  <rect width="13" height="15" fill="#D9D9D9"/>
                  </mask>
                  <g mask="url(#mask0_4516_36746)">
                  <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
                  </g>
                  </svg>
                  A Brand Designed To Your Standards
                </h3>
                <p className="lexend font-light text-qablack">Our expert designers and developers can create and code any idea you have in a way that transforms into the results you want. When you work with us, you can expect a team that truly cares about your business and image. With every page and word we put on your website, we're creating an opportunity to get leads.</p>
              </div>
              </div>  
          </div>
          <div className="lg:w-5/12 w-full lg:ps-8 px-0 pt-8 lg:pt-0" style={{textAlignLast: 'end'}}>
            <div className="grid grid-cols-3 rounded-2xl gap-0" >
              {Team.map((member, index)  => {
                let roundCorner = '';
                let delay = 30*index + 'ms';
                if(index === 0 ) {
                  roundCorner = 'rounded-tl-[30px]'
                }else if(index === 2 ) {
                  roundCorner = 'rounded-tr-[30px]'
                }else if (index === 9) {
                  roundCorner = 'rounded-bl-[30px]'
                }else if (index === 11) {
                  roundCorner = 'rounded-br-[30px]'
                }
                return(
                  <div style={{transitionDelay: delay, backgroundImage: `url(${member.img})`}} alt={member.alt} className={`fade up ${roundCorner} bg-center bg-cover lg:min-h-[216px] min-h-[120px]`} key={index}>

                  </div>
                )
              })}
            </div>
            <span type="button" className="font-bold text-qablack text-xl border-b-2 border-qablack mt-4">Meet Your Team</span>
          </div>
      </div>
      </div>
    </div>

    <div className="bg-gradient-to-b from-[#585d5e] to-qablack py-8 px-8 lg:px-0">
      <div className="container mx-auto lg:pt-16 pt-4 pb-32">
        <h2 className="lg:text-[4.38rem] leading-tight text-white lg:mb-8 mb-4 text-[3.6rem]">Case <span className="font-bold text-qaorange">Studies</span></h2>
        <div style={{textAlign: '-webkit-right'}} className="">
            <img src="dots-4.svg" alt="Dots 4" width={'61px'} className="lg:w-[61px] w-[40px] mb-4"/>
        </div>
        <div className="gap-8 lg:px-16 px-0 grid lg:grid-cols-3 grid-cols-1" id="case-studies" ref={anchors['case-studies']}>
          {CaseStudiesHome.map((datos, index) => {
            let direction = ''
            if(index === 1 ) {
              direction = "down"
            }else {direction = "up"}
            return(
              <CaseStudiesM key={index} {...datos} clas={direction}/>
            )
          })}
        </div>
        <div className="pb-16">
            <img src="dots-3.svg" alt="Dots 3" width={'61px'} className="lg:w-[61px] w-[40px] mt-4"/>
        </div>
      </div>
    </div>

    <div className="container mx-auto bg-qalightgrey rounded-2xl py-16 lg:px-16 px-8 mt-[-120px] flex lg:mb-32 mb-8 flex-wrap lg:flex-nowrap">
      <div className="lg:w-2/3 w-full lg:pe-16 order-2 lg:order-1">
        <h2 className="lg:text-[4.38rem] text-[3rem] leading-tight text-qablack mb-8">Get a <span className="font-bold">Personalized Estimate</span> for Your Business</h2>
        <p className="lg:pe-16 mb-8">We know every business is unique and will require a tailored approach. Based on your objectives, we'll create a strategy that meets your needs, offer you pricing options, and give you our expert take. Let's make your goals a reality.</p>
        <div className="btn-grow-box qablack">
        <a href="tel:+12405936567" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[13px]">Get a custom proposal or Call 240-593-6567</a>
        </div>
      </div>
      <div className="lg:w-1/3 w-full pb-8 lg:pb-0 order-1 lg:order-2">
          <SpinAnimation />
      </div>
    </div>
    </>
  )
};

export default Home;
