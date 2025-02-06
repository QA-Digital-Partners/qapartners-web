import React from "react"
import { Helmet } from 'react-helmet';
import FormHorizontalModule from "../componentes/FormHorizontal";
import SpinAnimation from "../componentes/SpinerText";
import CaseStudiesM from "../componentes/CaseStudiesHome";
import { CaseStudiesBMA } from "../data";

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Pool Company Case Study by QA Digital Partners</title>
        <meta name="description" content="From a landscaping company to fiberglass pool construction company" />
        <meta name="author" content="QA Digital Partners" />
        <meta property="og:title" content="Pool Company Case Study by QA Digital Partners" />
        <meta property="og:description" content="From a landscaping company to fiberglass pool construction company" />
        <meta property="og:image" content="https://qadigitalpartners.com/qacode-home-banner-320" />
        <meta property="og:url" content="https://qadigitalpartnes.com/" />
        <meta name="twitter:title" content="Pool Company Case Study by QA Digital Partners" />
        <meta name="twitter:description" content="From a landscaping company to fiberglass pool construction company" />
        <meta name="twitter:image" content="https://qadigitalpartners.com/qacode-home-banner-320" />
      </Helmet>


      <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-32 lg:pb-16 pb-8 mt-[-80px] lg:mb-[180px]" id="bma-case-study">
        <div className="container mx-auto px-8 lg:px-0">
          <h1 className="lexend font-medium text-[25px] leading-[25px] lg:w-[30rem]">From a landscaping company to fiberglass pool construction company</h1>
          <p className="lg:text-[65px] lg:leading-[75px] text-[40px] font-light">BMA <span className="font-medium">Landscaping</span></p>
          <div className="grid lg:grid-cols-2 lg:gap-8 gap-0 lg:mb-[-150px] lg:pt-16 pt-8">
            <div className="">
            <picture>
              <source media="(min-width: 1024px)" srcSet="./BMA-old-banner-588.webp" />
              <source media="(max-width: 1023px)" srcSet="./BMA-old-banner-588.webp" />
              <img
                src="./BMA-old-banner-588.webp"
                alt="Case Study BMA Old Website"
                width="588"
                height="431"
                loading="lazy"
                className="lg:w-[588px] w-[290px]"
              />
            </picture>
            </div>
            <div className="justify-self-end lg:justify-center mt-[-60px] lg:mt-0">
            <picture>
              <source media="(min-width: 1024px)" srcSet="./BMA-new-banner-588.webp" />
              <source media="(max-width: 1023px)" srcSet="./BMA-new-banner-588.webp" />
              <img
                src="./BMA-new-banner-588.webp"
                alt="Case Study BMA New Website"
                width="588"
                height="431"
                loading="lazy"
                className="lg:w-[588px] w-[290px]"
              />
            </picture>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto flex flex-wrap lg:flex-nowrap lg:pb-32 pt-16 pb-16 lg:pt-0 px-8 lg:px-0">
        <div className="lg:w-7/12 w-full">
          <h2 className="text-[20px] font-bold text-qaorange">Overview</h2>
          <h2 className="lg:text-[60px] text-[45px] lg:leading-[65px] leading-[45px] font-light lg:py-4">The <span className="font-semibold">Challenge</span></h2>
          <p className="lg:text-[27px] text-[20px] lg:leading-[40px] leading-[25px] font-semibold lg:w-[35rem] lg:py-2 py-4">QA Digital spent 2 years positioning BMA Landscaping as the number 1 paver patio company in Maryland. </p>
          <p className="lexend font-light leading-[25px] lg:pe-16 py-2">When BMA Landscaping began working with QA Digital Ads, our initial goal was to establish them as a reputable landscaping and patio company. However, as the business evolved, BMA decided to pivot toward pool construction services to meet growing demand. This change required a strategic shift in how BMA was represented online, without losing their established ranking in patio and hardscape services.</p>
          <div className="flex flex-wrap lg:flex-nowrap pt-8 gap-4 lg:gap-0">
            <div className="lg:w-[55%] w-full">
            <picture>
              <source media="(min-width: 1024px)" srcSet="./case-study-overview-1-355.webp" />
              <source media="(max-width: 1023px)" srcSet="./case-study-overview-1-355.webp" />
              <img
                src="./case-study-overview-1-355.webp"
                alt="Overview Case Study BMA Landscaping"
                width="355"
                height="455"
                loading="lazy"
                className="lg:w-[355px] w-full"
              />
            </picture>
            </div>
            <div className="lg:w-[45%] flex lg:flex-wrap flex-nowrap gap-4 lg:gap-0">
            <picture>
              <source media="(min-width: 1024px)" srcSet="./case-study-overview-2-306.webp" />
              <source media="(max-width: 1023px)" srcSet="./case-study-overview-2-306.webp" />
              <img
                src="./case-study-overview-2-306.webp"
                alt="Overview Case Study BMA Landscaping"
                width="306"
                height="215"
                loading="lazy"
                className="lg:w-[306px] w-[340px] lg:pb-[24px]"
              />
            </picture>
            <picture>
              <source media="(min-width: 1024px)" srcSet="./case-study-overview-3-306.webp" />
              <source media="(max-width: 1023px)" srcSet="./case-study-overview-3-306.webp" />
              <img
                src="./case-study-overview-3-306.webp"
                alt="Overview Case Study BMA Landscaping"
                width="306"
                height="215"
                loading="lazy"
                className="lg:w-[306px] w-[340px]"
              />
            </picture>
            </div>
          </div>
        </div>

        <div className="lg:w-5/12 w-full">
          <div className="lg:px-[40px] lg:py-[100px] py-8">
            <div className="shadow-xl bg-[#faf9f9] rounded-t-xl">
              <div className="lg:pt-16 pt-8 pb-8 px-8 ">
                <p className="text-[35px] leading-[45px] italic font-light">When people think of pools, I need them <span className="font-bold">to think of me</span></p>
              </div>
              <div className="bg-[#E0E0E0] flex items-center p-4 gap-4 rounded-b-xl">
                <img src="review-bma.webp" alt="Review BMA" width={102} height={102} />
                <p className="lexend text-[20px] font-bold whitespace-pre-line">Brian A., Owner 
                  Of BMA Landscaping</p>
              </div>
            </div>
          </div>
          <p className="lexend font-light leading-[25px] ps-4">The primary challenges were twofold: first, BMA’s brand name and domain contained “Landscaping,” which did not reflect their new focus on pools. Second, SEO posed a unique challenge—how could we build authority in the pool industry, where competitors often have “Pool” in their names, while still retaining high search rankings for patio and hardscape services? Our approach needed to balance rebranding with strategic SEO optimization to position BMA as a top choice for pool construction.</p>
        </div>
      </div>


      <div className="bg-gradient-to-b from-[#585D5E] to-qablack lg:py-16 py-8 lg:mb-16 px-8 lg:px-0">
        <div className="container mx-auto">
          <h2 className="text-white font-light lg:text-[60px] text-[40px]">Our <span className="font-semibold text-qaorange">Work</span></h2>
          <div className="flex flex-wrap lg:flex-nowrap pt-8">
            <div className="lg:w-1/2 lg:pe-4">
              <p className="lexend font-light leading-[25px] text-white pb-8">To position BMA Landscaping as the #1 pool company in Maryland, we knew we needed to accelerate internal page production, increasing from one to three pages per month, and expand beyond service descriptions alone. Our aim was to make BMA’s website the definitive resource for all things pool-related in Maryland. This involved building content on various topics, including pool types, features and add-ons, seasonal maintenance, and more. The first step was to create a comprehensive roadmap to develop what would eventually become a “pool encyclopedia” in Google’s eyes. Our mission was clear: anyone wanting information about pools should find everything they need on BMA’s site.</p>
              <p className="lexend font-light leading-[25px] text-white">Next, we needed to visually align BMA’s brand with its new pool focus. This meant a complete design overhaul, shifting from the original green color scheme to a fresh blue palette that resonated with pool imagery. We updated the homepage layout and visuals to emphasize pools over landscaping services, ensuring the look and feel reflected BMA’s new direction. This required extensive programming adjustments to avoid disrupting BMA’s existing high-ranking pages.</p>

              <div className="flex flex-wrap py-16">
                <div className="w-[72.5%]">
                  <picture className="">
                    <source media="(min-width: 1024px)" srcSet="./BMA-logo-2023-424.webp" />
                    <source media="(max-width: 1023px)" srcSet="./BMA-logo-2023-424.webp" />
                    <img
                      src="./BMA-logo-2023-424.webp"
                      alt="Overview Case Study BMA Landscaping"
                      width="424"
                      height="169"
                      loading="lazy"
                      className="lg:w-[424px] w-[340px] my-[-20px]"
                    />
                  </picture>
                </div>
                <div className="w-[27.5%] bg-white rounded-e-xl content-center lg:px-4 px-2">
                  <div className="flex pb-4">
                    <span className="lg:w-[43px] lg:h-[43px] w-[13px] h-[13px] self-center rounded-[50px] bg-[#176B87]"></span>
                    <p className="lexend font-light content-center lg:ps-4 ps-2">#176B87</p>
                  </div>
                  <div className="flex">
                    <span className="lg:w-[43px] lg:h-[43px] w-[13px] h-[13px] self-center rounded-[50px] bg-[#64CCC5]"></span>
                    <p className="lexend font-light content-center lg:ps-4 ps-2">#64CCC5</p>
                  </div>
                </div>
                <p className="text-white pt-[2.5rem] lexend font-light">Second logo with pool services (2023)</p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ps-4">
              <p className="lexend font-light leading-[25px] text-white">Finally, we bolstered our pool-focused content with strategically crafted satellite pages targeting pool services in specific Maryland cities. This approach allowed us to capture search traction across various local markets, reinforcing BMA’s authority as a comprehensive, go-to pool resource. By building a wealth of informative content, we’re steadily positioning BMA as the ultimate pool company in the region.</p>

              <div className="flex flex-wrap pt-16 pb-2">
                <div className="w-[72.5%]">
                  <picture className="">
                    <source media="(min-width: 1024px)" srcSet="./bma-logo-2022-424.webp" />
                    <source media="(max-width: 1023px)" srcSet="./bma-logo-2022-424.webp" />
                    <img
                      src="./bma-logo-2022-424.webp"
                      alt="Overview Case Study BMA Landscaping"
                      width="424"
                      height="169"
                      loading="lazy"
                      className="lg:w-[424px] w-[340px] my-[-20px]"
                    />
                  </picture>
                </div>
                <div className="w-[27.5%] bg-white rounded-e-xl content-center lg:px-4 px-2">
                  <div className="flex pb-4">
                    <span className="lg:w-[43px] lg:h-[43px] w-[13px] h-[13px] self-center rounded-[50px] bg-[#367773]"></span>
                    <p className="lexend font-light content-center lg:ps-4 ps-2">#367773</p>
                  </div>
                  <div className="flex">
                    <span className="lg:w-[43px] lg:h-[43px] w-[13px] h-[13px] self-center rounded-[50px] bg-[#1E9C96]"></span>
                    <p className="lexend font-light content-center lg:ps-4 ps-2">#1E9C96</p>
                  </div>
                </div>
                <p className="text-white pt-[2.5rem] lexend font-light">First logo with landscaping services (2022)</p>
              </div>

              <div className="flex flex-wrap py-16">
                <div className="w-[72.5%]">
                  <picture className="">
                    <source media="(min-width: 1024px)" srcSet="./bma-logo-2024-424.webp" />
                    <source media="(max-width: 1023px)" srcSet="./bma-logo-2024-424.webp" />
                    <img
                      src="./bma-logo-2024-424.webp"
                      alt="Overview Case Study BMA Landscaping"
                      width="424"
                      height="169"
                      loading="lazy"
                      className="lg:w-[424px] w-[340px] my-[-20px]"
                    />
                  </picture>
                </div>
                <div className="w-[27.5%] bg-white rounded-e-xl content-center lg:px-4 px-2">
                  <div className="flex pb-4">
                    <span className="lg:w-[43px] lg:h-[43px] w-[13px] h-[13px] self-center rounded-[50px] bg-[#176B87]"></span>
                    <p className="lexend font-light content-center lg:ps-4 ps-2">#176B87</p>
                  </div>
                  <div className="flex">
                    <span className="lg:w-[43px] lg:h-[43px] w-[13px] h-[13px] self-center rounded-[50px] bg-[#64CCC5]"></span>
                    <p className="lexend font-light content-center lg:ps-4 ps-2">#64CCC5</p>
                  </div>
                </div>
                <p className="text-white pt-[2.5rem] lexend font-light">New logo with pool services (2024)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormHorizontalModule titleThing="Let's Start" titleBold="your project" contClass={'border-[1px] border-qablack lg:p-[2.5rem] py-8 bg-white'}/>

      <div className="py-16">
        <div className="container mx-auto px-8 lg:px-0">
          <h2 className="gont-light lg:text-[60px] text-[35px] ">The <span className="font-semibold">Results</span></h2>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 py-8 px-4 lg:px-0">
          <div className="lg:w-full border-t-2 border-e-2 border-b-2 border-s-2 lg:border-s-0 border-qablack rounded-e-xl rounded-s-xl lg:rounded-s-none py-8 bg-gradient-197 from-[#FAF9F9] to-[#F3F2F2] lg:pe-[114px] grid lg:justify-end px-8 px-0">
            <p className="text-[28px] lg:leading-[35px] text-center lg:text-left font-semibold lg:w-[486px] inline pb-8">BMA is now the <span className="text-qaorange font-extrabold">number 1 result</span> for <span className="lg:block "><span className="italic font-medium">“Fiberglass Pool Contractor”</span> in</span> Pasadena and the surrounding areas</p>
            <div className="justify-self-center lg:justify-self-start">
              <div className="btn-grow-box qablack">
                <a href="https://bmalandscaping.com" className=" py-2 animated-button rounded-lg text-qablack font-bold px-8 lg:text-[16px] text-[14px]" target="_black">Visit Website</a>
              </div>
            </div>
          </div>
          <div className="lg:w-full grid justify-start lg:ps-16">
            <p className="lexend font-light leading-[25px] py-8 lg:w-[582px] lg:pe-8 px-4">Thanks to our comprehensive strategy, BMA has not only maintained its leadership in landscaping services but has also established itself as the number one fiberglass pool construction company in Maryland. Its online presence has significantly grown, with increased visibility in search results and higher client acquisition across various cities in the state. The brand evolution, along with pool-focused content optimization, has allowed BMA to tap into new markets while retaining its authority in patios and hardscaping. The continued collaboration between QA Digital and BMA is paying off, positioning the company as the go-to choice for pool construction and outdoor design expertise in Maryland.</p>
          </div>
        </div>
        <div className="container mx-auto lg:py-8 px-8 lg:px-0">
          <picture className="">
            <source media="(min-width: 1024px)" srcSet="./results-bma-graph-1197.webp" />
            <source media="(max-width: 1023px)" srcSet="./results-bma-graph-423.webp" />
            <img
              src="./results-bma-graph-1197.webp"
              alt="Results Graph for BMA sowing click and impressions"
              width="1197"
              height="532"
              loading="lazy"
              className="lg:w-[1197px] w-full shadow-[0px_10px_10px_0px_rgba(0,0,0,0.15)] rounded-2xl"
            />
          </picture>
        </div>w
        <div className="grid lg:grid-cols-4 grid-cols-1">
          
        </div>
      </div>



      <div className="bg-gradient-to-b from-[#585d5e] to-qablack py-8 px-8 lg:px-0">
      <div className="container mx-auto lg:pt-16 pt-4 pb-32">
        <h2 className="lg:text-[4.38rem] leading-tight text-white lg:mb-8 mb-4 text-[3.6rem]">Case <span className="font-bold text-qaorange">Studies</span></h2>
        <div style={{textAlign: '-webkit-right'}} className="">
            <img src="dots-4.svg" alt="Dots 4" width={'61px'} className="lg:w-[61px] w-[40px] mb-4"/>
        </div>
        <div className="gap-8 lg:px-64 px-0 grid lg:grid-cols-2 grid-cols-1" id="case-studies">
          {CaseStudiesBMA.map((datos, index) => {
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
        <a href="tel:+12405936567" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">Get a custom proposal or Call 240-593-6567</a>
        </div>
      </div>
      <div className="lg:w-1/3 w-full pb-8 lg:pb-0 order-1 lg:order-2">
          <SpinAnimation/>
      </div>
    </div>
    </>
  )
};

export default CaseStudies
