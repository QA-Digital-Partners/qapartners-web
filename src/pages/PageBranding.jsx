import React from "react"
import { Helmet } from 'react-helmet';
import FormHorizontalModule from "../componentes/FormHorizontal";
import { ABrabdIs1, ABrabdIs2, BrandResonates1, BrandResonates2, ClientOptions, ClientsSucceed, FirstSteps1, FirstSteps2, impact, Journey1, Journey2, PorfolioIncludes, ProveApproach1, ProveApproach2, ProvenResultsData, QuickClicks1, QuickClicks2, QuickClicks3, QuickClicks4, SetUsApart, SetUsApart2, Team } from "../data";
import ProvenResults from "../componentes/ProvenResults";
import HelpFactBox from "../componentes/HelpFact";
import Form1InRow from "../componentes/Form1InRow";
import TeamPictureIndividual from "../componentes/TeamPicture";
import ReviewSection from "../componentes/ReviewSection";
import YoutubeEmbedLazy from "../componentes/YoutubeLazyLoader";

const BrandingPage = () => {
  return (
    <>

      <Helmet>
        <title>Branding Agency in Maryland - QA Digital Partners</title>
        <meta name="description" content="Make your brand memorable & unique. We're a Maryland branding agency trusted by over 600 businesses to build unforgettable brands. Let's share your story." />
        <meta name="author" content="QA Digital Partners" />
        <meta property="og:title" content="Branding Agency in Maryland - QA Digital Partners" />
        <meta property="og:description" content="Make your brand memorable & unique. We're a Maryland branding agency trusted by over 600 businesses to build unforgettable brands. Let's share your story." />
        <meta property="og:image" content="https://qadigitalpartners.com/qacode-home-banner-320" />
        <meta property="og:url" content="https://qadigitalpartnes.com/" />
        <meta name="twitter:title" content="Branding Agency in Maryland - QA Digital Partners" />
        <meta name="twitter:description" content="Make your brand memorable & unique. We're a Maryland branding agency trusted by over 600 businesses to build unforgettable brands. Let's share your story." />
        <meta name="twitter:image" content="https://qadigitalpartners.com/qacode-home-banner-320" />
      </Helmet>
      
      <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-32 lg:pb-16 pb-8 mt-[-80px] lg:mb-[-120px]">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-3/12 w-full content-center pt-16 hidden lg:block">
          <picture>
          <source media="(min-width: 1024px)" srcSet="./habib-logo-modern.webp" />
          <source media="(max-width: 1023px)" srcSet="./habib-logo-modern.webp" />
          <img
            src="./habib-logo-modern.webp"
            alt="Logo Modernization of Habib Health and Fitness "
            width="285"
            height="581"
            loading="lazy"
            className="w-[285px]"
          />
        </picture>
          </div>

          <div className="lg:w-5/12 w-full z-10 pb-16 lg:pb-0">
            <h1 className="text-qablack text-[36px] leading-[42px] font-light pb-4 px-8 lg:leading-[75px] lg:text-[63px] lg:px-0 lg:me-[-40px]">
            Maryland's <span className="font-semibold">Premier Branding</span> Agency
            </h1>
            <p className="text-qablack text-[16px] lg:pe-32 lg:py-2 py-8 px-8 lg:ps-0 lexend font-semibold">Your Success is Our Mission Expert Branding & SEO That Drives Results</p>

            <p className="text-qablack text-base lg:pe-32 pt-8 pb-4 px-8 lg:ps-0 lexend">706 Crain Highway North, Suite A Glen Burnie, MD 21061</p>

            <div className="btn-grow-box qablack px-8 lg:px-0">
              <a href="tel:+12405936567" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">240-593-6567 (Eng.)</a>
            </div>

            <p className="text-qablack text-base lg:pe-32 pt-8 pb-4 px-8 lg:ps-0 lexend">817 Silver Spring Ave. Silver Spring, MD 20910</p>

            <div className="btn-grow-box qablack px-8 lg:px-0">
              <a href="tel:+12405218700" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">240-521-8700 (Spa.)</a>
            </div>
          </div>

          <div className="lg:w-4/12 w-full lg:pe-[2.5rem] lg:mb-32 px-8 lg:px-0">
            <div className="bg-[#8AC4FF] rounded-xl content-baseline pt-8">

            <picture style={{textAlign: '-webkit-right'}}>
            <source media="(min-width: 1024px)" srcSet="./iphone-pro-16.webp" />
            <source media="(max-width: 1023px)" srcSet="./iphone-pro-16.webp" />
            <img
              src="./iphone-pro-16.webp"
              alt="Mockup en Iphone Habib"
              width="268"
              height="400"
              loading="lazy"
              className="lg:w-[268px] w-[230px] mb-[-200px] mt-[-80px] lg:mt-0"
            />
            </picture>

            <picture className="">
            <source media="(min-width: 1024px)" srcSet="./Instagram Post Mockup.webp" />
            <source media="(max-width: 1023px)" srcSet="./Instagram Post Mockup.webp" />
            <img
              src="./Instagram Post Mockup.webp"
              alt="Mockuo Habib Instagram"
              width="195"
              height="255"
              loading="lazy"
              className="w-[195px] lg:ms-[-53px] me-[53px] mb-[-165px]"
            />
            </picture>


            <picture style={{textAlign: '-webkit-right'}}>
            <source media="(min-width: 1024px)" srcSet="./habib tarjetas.webp" />
            <source media="(max-width: 1023px)" srcSet="./habib tarjetas.webp" />
            <img
              src="./habib tarjetas.webp"
              alt="Cards Habib Health and Fitness "
              width="298"
              height="247"
              loading="lazy"
              className="lg:w-[298px] w-[240px] ms-[20px] me-[-20px] lg:mb-[-55px]"
            />
            </picture>
            </div>
          </div>
        </div>
      </div>

      <FormHorizontalModule titleBold={"Maryland Business Owner"} contClass={'border-[1px] border-qablack lg:p-[2.5rem] py-8 bg-white'} titleClass={"lg:text-[25px] text-[18px] lg:leading-[32px] leading-[22px]"}/>

      <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 py-16">
        <div className="lg:w-4/12 w-full lg:py-8">
          <picture className="webkit-center-left">
            <source media="(min-width: 1024px)" srcSet="./quick-clicks-image-1-384.webp" />
            <source media="(max-width: 1023px)" srcSet="./quick-clicks-image-1-320.webp" />
            <img
              src="./quick-clicks-image-1-384.webp"
              alt="Mockup Servicios Notariales Salvadoreños"
              width="384  "
              height="541"
              loading="lazy"
              className="lg:w-[384px] w-[320px]"
            />
          </picture>
        </div>

        <div className="lg:w-8/12 w-full py-8">
          <h2 className="text-qablack text-[36px] leading-[42px] font-light pb-4 px-8 lg:leading-[75px] lg:text-[63px] lg:px-0 lg:me-[-40px]">
          From Quick Clicks <span className="font-semibold block">To Lasting Impact</span>
          </h2>
          <div className="flex flex-wrap lg:flex-nowrap gap-8 mt-8">
            
            <div className="lg:w-3/6 w-full lg:ms-[-100px] order-1 lg:order-0">
              <picture className="webkit-center-left">
              <source media="(min-width: 1024px)" srcSet="./quick-clicks-image-2-384.webp" />
              <source media="(max-width: 1023px)" srcSet="./quick-clicks-image-2-320.webp" />
              <img
                src="./quick-clicks-image-2-384.webp"
                alt="Mockup Servicios Notariales Salvadoreños"
                width="384"
                height="541"
                loading="lazy"
                className="lg:w-[384px] w-[320px] webkit-center-left"
              />
              </picture>
            </div>
            
            <div className="lg:w-4/6 w-full px-8 lg:px-0 order-0 lg:order-1">
              <p className="text-qablack text-base lg:pe-32 lg:pt-8 pb-4 lg:px-8 lg:ps-0 lexend">While paid ads offer quick results, they often fail to create lasting connections with your audience.</p>
              <p className="text-qablack text-[20px] font-bold">Our Solution:</p>
              <p className="text-qablack text-[20px] lexend font-light pt-4 lg:pt-0">We help Maryland businesses build powerful brands that:</p>

              <ul className="list-marker">
                <li className="py-2">Create emotional connections</li>
                <li className="py-2">Build lasting customer relationships</li>
                <li className="py-2">Create emotional connections</li>
                <li className="py-2">Foster genuine customer loyalty</li>
              </ul>

              <div className="flex flex-wrap lg:flex-nowrap py-8 lg:gap-2">
                <div className="lg:w-1/2 w-full">
                  {QuickClicks1.map((data, index) => (
                  <div className="flex py-2" key={index}>
                    <img src={data.img} alt={data.title} width={37} height={37} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)]"/>
                    <p className="content-center ps-2 lexend font-medium text-[15px]">{data.title}</p>
                  </div>
                  ))}
                </div>
                <div className="lg:w-1/2 w-full">
                  {QuickClicks2.map((data , index) => (
                    <div className="flex py-2" key={index}>
                      <img src={data.img} alt={data.title} width={37} height={37} className=" shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)]"/>
                      <p className="content-center ps-2 lexend font-medium text-[15px] leading-[15px]">{data.title}</p>
                    </div>
                  ))}
                </div>
            </div>
            </div>

          </div>
        </div>  
      </div>

      <div className="bg-gradient-to-b from-qagrey from-1% to-white to-40% py-16">
        <div className="container mx-auto">
          <h2 className="text-qablack text-[36px] leading-[42px] font-light px-8 lg:leading-[75px] lg:text-[63px] lg:px-64 lg:me-[-40px] text-center">
          Proven Results <span className="font-semibold">That Speak For Themselves</span>
          </h2>
          <div className="grid lg:grid-cols-3 gap-8 lg:py-16 pt-16 pb-8">
            {ProvenResultsData.map((data, index) => {
              return(
                <ProvenResults {...data} key={index} />
              )
            })}
          </div>
        </div>

        <div className="container lg:px-32 px-8">
          <div className="bg-gradient-225 from-[#FAF9F9] to-[#F5F5F5] shadow-[0px_4px_10px_2px_rgba(0,0,0,0.1)] rounded-lg py-8 px-8">
            <p className="text-[30px] font-semibold text-center py-8">We Are Maryland's Most Trusted Branding Agency</p>
            <p className="text-[20px] font-bold text-center">Our Impact:</p>
            <div className="grid lg:grid-cols-3 gap-8 lg:px-16 pt-8">
              {impact.map((title, index) => (
              <div className="flex" key={index}>
                <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                <p className="content-center ps-4 lexend font-light text-[15px]">{title}</p>
              </div>
              ))}
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 py-8">
              <p className="text-[20px] font-bold text-center">Lasting Customer Loyalty</p>
              <div className="btn-grow-box qablack mt-[3px]">
                <a href="case-studies" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">Explore Our Client Success Storie</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto lg:py-16 pt-8">
        <h2 className="text-qablack text-[36px] leading-[42px] font-light px-8 lg:leading-[75px] lg:text-[63px] lg:px-0 lg:me-[-40px]">
        Your <span className="font-semibold">Growth </span>Partner
        </h2>
        <p className="text-qablack font-light text-base pt-4 pb-8 px-8 lg:ps-0 lexend lg:w-[45rem] w-full lg:py-8">At QA Digital, we understand that every business is unique. Since 2006, we've helped Maryland businesses of all sizes turn their digital challenges into success stories.</p>

        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-7/12 w-full bg-gradient-to-b from-[#585D5E] to-[#5E5E5E] lg:p-[40px] p-8">
          
          <picture className="webkit-center-left">
              <source media="(min-width: 1024px)" srcSet="./grow-parner-611.webp" />
              <source media="(max-width: 1023px)" srcSet="./grow-parner-320.webp" />
              <img
                src="./grow-parner-611.webp"
                alt="Your Grow Partner"
                width="611"
                height="585"
                loading="lazy"
                className="lg:w-[611px] w-[320px]"
              />
              </picture>          
          </div>
          <div className="lg:w-5/12 w-full bg-gradient-225 from-[#FAF9F9] to-[#F2F1F1] lg:ps-16 lg:pe-8 lg:py-16 pt-8 px-8" >
          <h3 className="lexend text-[30px] text-qablack leading-[35px] lg:pe-32">Our <span className="font-bold ">Diverse Portfolio <span className="text-qaorange">Includes: </span></span></h3>
          <ul className="list-marker py-4">
            {PorfolioIncludes.map ((data, index)=>(
              <li className="lexend font-light py-2" key={index}>{data}</li>
            ))}
          </ul>
          <p className="text-qablack lexend font-bold lg:pb-4 pt-8 lg:pt-4">What Sets Us Apart:</p>
          {SetUsApart.map((title, index) => (
              <div className="flex py-2" key={index}>
                <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                <p className="content-center ps-4 lexend font-light text-[15px]">{title}</p>
              </div>
              ))}
            <div className="btn-grow-box qablack mt-[25px]">
              <a href="/" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">Let's Discuss Your Unique Business Needs</a>
            </div>
          </div>
        </div>
      </div>


      <div className="py-16 bg-gradient-to-b from-[#585D5E] to-qablack my-16">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-8">
          <div className="lg:w-4/12 w-full">
            <picture className="webkit-center-left">
              <source media="(min-width: 1024px)" srcSet="./branding-is-important-398.webp" />
              <source media="(max-width: 1023px)" srcSet="./branding-is-important-320.webp" />
              <img
                src="./branding-is-important-398.webp"
                alt="Why Branding is so important"
                width="398"
                height="494"
                loading="lazy"
                className="lg:w-[398px] w-[320px] lg:pb-16"
              />
            </picture>
            <picture className="webkit-center-left hidden lg:block">
              <source media="(min-width: 1024px)" srcSet="./branding-kpk-411.webp" />
              <source media="(max-width: 1023px)" srcSet="./branding-kpk-320.webp" />
              <img
                src="./branding-kpk-411.webp"
                alt="Why Branding is so important kpk"
                width="411"
                height="310"
                loading="lazy"
                className="lg:w-[411px] w-[320px]"
              />
            </picture>
          </div>

          <div className="lg:w-8/12 w-full lg:ps-16 lg:pe-2 px-8 pt-8 lg:pt-0">
              <h2 className="text-white lg:text-[60px] lg:leading-[65px] text-[45px] leading-[50px] font-light pb-8 lg:pe-16 pe-0">Why Branding Is <span className="font-semibold text-qaorange block"> So Important</span></h2>

              <p className="text-white italic text-[30px] font-light">"Emotions Drive Behavior"</p>
              <p className="text-white font-bold lexend">James Clear</p>

              <p className="whitespace-pre-line font-light lexend text-white lg:py-8 lg:pe-4 pt-8"><span className="font-bold block">Your brand is the bridge between your business and your customers' hearts. It's the story they remember, the feeling they chase, the trust they build.
              </span><br />Think of your favorite brands. What emotions do they evoke? That's not by accident – it's by design.</p>

              <p className="text-[20px] font-bold text-white pb-4 pt-8 lg:pt-4">A Brand Is:</p>
              <div className="flex flex-wrap lg:flex-nowrap pb-8">
              <ul className="list-marker qaorange text-white lg:w-1/2 w-full">
                {ABrabdIs1.map ((data, index)=>(
                  <li className="lexend font-light py-2" key={index}>{data}</li>
                ))} 
              </ul>
              <ul className="list-marker qaorange text-white lg:w-1/2 w-full">
                {ABrabdIs2.map ((data, index)=>(
                  <li className="lexend font-light py-2" key={index}>{data}</li>
                ))} 
              </ul>
              </div>

              <p className="text-qaorange font-medium leading-[20px] lg:pe-[15rem] pb-8">Without a strong brand, you're just another option in a sea of choices.  simply because your story didn't catch their attention.</p>

              <p className="text-white text-[20px] font-bold pb-4">When your brand resonates:</p>

              <div className="flex flex-wrap lg:flex-nowrap pb-8 lg:pb-0">
                <div className="lg:w-1/2 w-full">
                  {BrandResonates1.map((title, index) => (
                  <div className="flex py-2" key={index}>
                    <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                    <p className="content-center ps-4 lexend font-light text-[15px] text-white">{title}</p>
                  </div>
                  ))}
                </div>
                <div className="lg:w-1/2">
                  {BrandResonates2.map((title, index) => (
                    <div className="flex py-2" key={index}>
                      <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                      <p className="content-center ps-4 lexend font-light text-[15px] text-white">{title}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-white lexend font-light py-4">Your brand is your business's most valuable asset. <b>Let's build it together.</b></p>

              <div className="w-full text-center lg:w-auto lg:text-left">
                <div className="btn-grow-box qaorange mt-8 lg:w-auto lg:text-left">
                  <a className="animated-button qawhite text-[18px] font-bold text-white bg-transparent px-8 rounded-md py-2" href=''>Ready to Tell Your Brand's Story?</a>
                </div>
              </div>

              <picture className="webkit-center-left lg:hidden block mt-16">
              <source media="(min-width: 1024px)" srcSet="./branding-kpk-411.webp" />
              <source media="(max-width: 1023px)" srcSet="./branding-kpk-320.webp" />
              <img
                src="./branding-kpk-411.webp"
                alt="Why Branding is so important kpk"
                width="411"
                height="310"
                loading="lazy"
                className="lg:w-[411px] w-full"
              />
            </picture>
          </div>
        </div>
      </div>


      <div className="lg:pt-16 lg:pb-16 container mx-auto px-8 lg:px-0">
        <h2 className="text-qablack lg:text-[60px] lg:leading-[80px] font-light lg:text-center lg:px-[16rem] lg:pb-16">How Do We Help You <span className="text-qaorange font-semibold Build a Powerful Brand?">Build a Powerful Brand?</span></h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 pt-8 lg:pt-0">
          <HelpFactBox indexN={'1'} title={`Discover Your Brand's 
            Core Values`}>
            <div className="pt-2">
              <p className="text-qablack lexend font-medium leading-[20px] lg:pe-16">Before colors, logos, or designs, we dive deep into:</p>
              <ul className="list-disc ps-8 lexend font-light pt-4">
                <li className="py-[4px]">What makes your business unique</li>
                <li className="py-[4px]">Which services resonate with customers</li>
                <li className="py-[4px]">How customers currently perceive you</li>
                <li className="py-[4px]">What values drive your business decisions</li>
              </ul>
            </div>
          </HelpFactBox>
          <HelpFactBox indexN={'2'} title={`Connect With 
            Your Community`}>
            <div className="lg:pt-4">
              <p className="text-qablack lexend font-medium leading-[20px]">We Help You:</p>
              <ul className="list-disc ps-8 lexend font-light pt-4">
                <li className="py-[4px]">Identify your key service areas</li>
                <li className="py-[4px]"> Understand local customer needs</li>
                <li className="py-[4px]">Adapt your message to each community</li>
                <li className="py-[4px]"> Build neighborhood trusts</li>
              </ul>
            </div>
          </HelpFactBox>
          <HelpFactBox indexN={'3'} title={`Craft Your Brand's 
            Visual Story`}>
              <p className="text-qablack lexend font-medium leading-[20px] lg:pt-2">Essential Elements:</p>
              <div className="flex">
              <ul className="list-disc ps-4 lexend font-light pt-4 w-1/2">
                <li className="py-[4px]">Website Design</li>
                <li className="py-[4px]">Brand Colors</li>
                <li className="py-[4px]">Visual Style</li>
              </ul>
              <ul className="list-disc ps-4 lexend font-light pt-4 w-1/2">
                <li className="py-[4px]">Content Tone</li>
                <li className="py-[4px]">Brand Personality</li>
              </ul>
            </div>

            <p className="text-qablack lexend font-medium leading-[20px] lg:pt-2">Everything Must:</p>
              <div className="flex">
              <ul className="list-disc ps-4 lexend font-light pt-4 w-1/2">
                <li className="py-[4px]">Be consistent across all platforms</li>
                <li className="py-[4px]">Connect emotionally with your audience</li>
              </ul>
              <ul className="list-disc ps-4 lexend font-light pt-4 w-1/2">
                <li className="py-[4px]">Reflect your brand values</li>
                <li className="py-[4px]">Tell your unique story</li>
              </ul>
            </div>

            <p className="text-qablack lexend font-medium leading-[20px] lg:pt-2">Visual Components Box</p>
              <div className="flex pb-4">
              <ul className="list-disc ps-4 lexend font-light pt-4 w-6/12">
                <li className="py-[4px]">Colors → Emotions</li>
                <li className="py-[4px]">Design → Trust</li>
              </ul>
              <ul className="list-disc ps-4 lexend font-light pt-4 w-7/12 lg:ms-[10px]">
                <li className="py-[4px]">Content → Connection</li>
                <li className="py-[4px]">Experience → Loyalty</li>
              </ul>
            </div>
          </HelpFactBox>

          <HelpFactBox indexN={'4'} title={`Optimize Your 
            Digital Presence`}>
            <div className="lg:pt-4">
              <p className="text-qablack lexend font-medium leading-[20px]">Technical Excellence:</p>
              <ul className="list-disc ps-8 lexend font-light pt-2 pb-2">
                <li className="py-[4px]">Website Performance</li>
                <li className="py-[4px]">SEO Optimization</li>
                <li className="py-[4px]">Meta Descriptions</li>
                <li className="py-[4px]">Brand Messaging</li>
                <li className="py-[4px]">User Experience</li>
              </ul>

              <p className="text-qablack lexend font-medium leading-[20px] pt-4">Your Website Should:</p>
              <ul className="list-disc ps-8 lexend font-light pt-2">
                <li className="py-[4px]">Load Fast</li>
                <li className="py-[4px]">Be Easy to Navigate</li>
                <li className="py-[4px]">Communicate Clearly</li>
                <li className="py-[4px]">Convert Visitors</li>
                <li className="py-[4px]">Match Brand Promise</li>
              </ul>
            </div>
          </HelpFactBox>

          <HelpFactBox indexN={'5'} title={`Perfect The Balance`}>
          <div className="lg:pt-4">
              <p className="text-qablack lexend font-medium leading-[20px]">For People:</p>
              <ul className="list-disc ps-8 lexend font-light pt-2 pb-2">
                <li className="py-[4px]">Engaging Content</li>
                <li className="py-[4px]">Clear Value Proposition</li>
                <li className="py-[4px]">Emotional Connection</li>
                <li className="py-[4px]">Easy Navigation</li>
              </ul>
            </div>
          </HelpFactBox>

          <div className="bg-gradient-to-b from-[#585D5E] to-qablack shadow-[0px_4px_10px_2px_rgba(0,0,0,0.1)] rounded-xl text-white px-4">
            <p className="text-center text-[25px] font-semibold py-4">Take The First Step</p>
            <p className="text-qaorange text-[18px] font-bold text-center">Book Your Free Brand Strategy Session</p>

            <div className="flex px-2 gap-2 py-8">
                <div className="lg:w-1/2">
                  {FirstSteps1.map((title, index) => (
                  <div className="flex py-2" key={index}>
                    <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)]"/>
                    <p className="content-center ps-4 lexend font-light text-[15px] text-white">{title}</p>
                  </div>
                  ))}
                </div>
                <div className="lg:w-1/2">
                  {FirstSteps2.map((title, index) => (
                    <div className="flex py-2" key={index}>
                      <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)]"/>
                      <p className="content-center ps-4 lexend font-light text-[15px] text-white">{title}</p>
                    </div>
                  ))}
                </div>
            </div>
            <p className="text-center font-[16px] font-bold">Let's Shape Your Brand's Future Together</p>
            
            <div className="lg:w-6/12 w-full mx-auto text-center pb-4 pt-0 px-8 lg:px-0">
              <a href="tel:+12405936567" className="w-full block text-[16px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-2">240-593-6567</a>
            </div>

            <div className="flex py-8 gap-2">
                <div className="flex flex-wrap justify-center">
                  {QuickClicks3.map((data, index) => (
                  <div className="flex py-4 px-2" key={index}>
                    <img src={data.img} alt={data.title} width={37} height={37} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)]"/>
                    <p className="content-center ps-2 lexend font-medium text-[15px] leading-[18px] whitespace-pre-line">{data.title}</p>
                  </div>
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto lg:py-16 pt-16 pb-4">
        <div className="w-full flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-[52%] w-full">
          <picture className="webkit-center-left">
              <source media="(min-width: 1024px)" srcSet="./branding-agency-622.webp" />
              <source media="(max-width: 1023px)" srcSet="./branding-agency-320.webp" />
              <img
                src="./branding-agency-622.webp"
                alt="Looking for a branding Agency in Maryland?"
                width="622"
                height="514"
                loading="lazy"
                className="lg:w-[622px] w-[320px]"
              />
            </picture>
          </div>
        
          <div className="lg:w-[48%] lg:ps-16 w-full px-8 lg:pe-0 pt-8 lg:pt-0">
            <h2 className="text-qablack lg:text-[60px] lg:leading-[65px] text-[45px] leading-[50px] font-light lg:py-8">Looking For A <span className="font-semibold"> Branding Agency In Maryland?</span></h2>

            <p className="text-qablack font-light pb-8 pt-8 lg:pt-0">Here's Why Leading Businesses Trust QA Digital:</p>
            <p className="text-qablack font-bold">We Master Every Stage of Your Brand's Growth</p>

            <p className="lexend font-light text-qablack flex py-8">
            AWARENESS 
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="13" viewBox="0 0 15 13" fill="none" className="self-center">
            <path d="M1.414 12.02L0 10.607L4.6 6.007L0 1.414L1.414 0L7.425 6.01L1.414 12.02Z" fill="#FE904C"/>
            <path d="M8.27002 12.02L6.85602 10.607L11.456 6.007L6.85602 1.414L8.27002 0L14.281 6.01L8.27002 12.02Z" fill="#FE904C"/>
            </svg>
            CONSIDERATION 
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="13" viewBox="0 0 15 13" fill="none" className="self-center">
            <path d="M1.414 12.02L0 10.607L4.6 6.007L0 1.414L1.414 0L7.425 6.01L1.414 12.02Z" fill="#FE904C"/>
            <path d="M8.27002 12.02L6.85602 10.607L11.456 6.007L6.85602 1.414L8.27002 0L14.281 6.01L8.27002 12.02Z" fill="#FE904C"/>
            </svg>
            DECISION
            </p>

            <p className="text-qablack font-light">Turn Strangers into Brand Advocates</p>

          </div>
        </div>

        <div className="w-full flex flex-wrap lg:flex-nowrap px-8 lg:px-0">
          <div className="lg:w-[54%] w-full pb-16 lg:pb-0">
            <p className="text-[20px] text-qablack font-bold py-8">Our Proven Approach:</p>
            <div className="flex flex-wrap lg:flex-nowrap">
            <ul className="list-marker text-qablack lg:w-[17rem]">
              {ProveApproach1.map ((data, index)=>(
                <li className="lexend font-light py-[10px]" key={index}>{data}</li>
              ))} 
            </ul>            
            <ul className="list-marker text-qablack lg:w-[17rem]">
              {ProveApproach2.map ((data, index)=>(
                <li className="lexend font-light py-[10px]" key={index}>{data}</li>
              ))} 
            </ul>            
            </div>

            <p className="text-[20px] text-qablack font-bold py-8">Our clients succeed because we understand:</p>

            <div className="flex flex-wrap lg:flex-nowrap">
            {ClientsSucceed.map((title, index) => (
                <div className="flex lg:pe-[25px] lg:w-auto w-full py-2 lg:py-0" key={index}>
                  <img src="check-icon.svg" alt={title} width={31} height={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                  <p className="content-center ps-2 lexend font-light text-[15px]">{title}</p>
                </div>
                ))}
            </div>

            <p className="lexend text-qablack font-bold pt-8 pb-2 text-center lg:text-left">See How We Can Grow Your Brand</p>

            <div className="w-full text-center lg:w-auto lg:text-left">
              <div className="btn-grow-box qablack mt-[5px]">
                <a href="#contact" className=" py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">Book Your Free Strategy Session Today!</a>
              </div>
            </div>

          </div>

          <div className="lg:w-[46%] lg:ps-8 lg:mt-[-30px] w-full">
            <picture className="webkit-center-left">
                <source media="(min-width: 1024px)" srcSet="./proven-approach-509.webp" />
                <source media="(max-width: 1023px)" srcSet="./proven-approach-320.webp" />
                <img
                  src="./proven-approach-509.webp"
                  alt="Looking for a branding Agency in Maryland?"
                  width="509"
                  height="518"
                  loading="lazy"
                  className="lg:w-[509px] w-[320px]"
                />
              </picture>
          </div>
        </div>
      </div>


      <div className="container mx-auto py-16">
        <div className="bg-gradient-to-b from-[#585D5E] to-qablack px-8 flex flex-wrap lg:flex-nowrap rounded-xl pt-16 lg:pt-0">
          <div className="lg:w-1/2 w-full content-center lg:ps-8 text-white">
            <h3 className="lg:text-[40px] lg:leading-[50px] text-[35px] font-light lg:pe-[9rem]">15-Minute Session That <span className="font-semibold">Could Transform Your Business</span></h3>
            <div className="flex flex-wrap py-8 lg:py-0">
              {QuickClicks4.map((data, index) => (
                <div className="flex lg:py-8 py-2 ps-0 pe-[20px] w-full lg:w-auto" key={index}>
                  <img src={data.img} alt={data.title} width={37} height={37} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
                  <p className="content-center ps-2 lexend font-light text-[15px] leading-[18px] whitespace-pre-line">{data.title}</p>
                </div>
              ))}
            </div>

            <p className="font-bold lg:text-left text-center">Follow Us on Instagram:</p>

            <div className="lg:w-5/12 w-full text-center pb-4 pt-0 px-8 lg:px-0 ">
              <a href="" className="w-full block text-[16px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-2 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 23 23" fill="none" className="pe-4 pt-[2px]">
                <path d="M16.3423 1H6.65768C3.53273 1 1 3.43734 1 6.44405V15.7614C1 18.7681 3.53318 21.2055 6.65813 21.2055H16.3419C19.4668 21.2055 22 18.7681 22 15.7614V6.44405C22 3.43734 19.4673 1 16.3423 1Z" stroke="#F8F6F3" strokeWidth="1.72558" strokeMiterlimit="10"/>
                <path d="M11.5011 15.9796C14.3006 15.9796 16.5701 13.796 16.5701 11.1024C16.5701 8.40873 14.3006 6.2251 11.5011 6.2251C8.7015 6.2251 6.43201 8.40873 6.43201 11.1024C6.43201 13.796 8.7015 15.9796 11.5011 15.9796Z" stroke="#F8F6F3" strokeWidth="1.72558" strokeMiterlimit="10"/>
                <path d="M17.6548 6.22478C18.2547 6.22478 18.7409 5.75691 18.7409 5.17977C18.7409 4.60263 18.2547 4.13477 17.6548 4.13477C17.055 4.13477 16.5687 4.60263 16.5687 5.17977C16.5687 5.75691 17.055 6.22478 17.6548 6.22478Z" fill="#F8F6F3"/>
              </svg>
                @qadigitaladvertising</a>
            </div>
          </div>

          <div className="lg:w-1/2 w-full lg:pt-16 lg:pb-16 pt-8 pb-16" >
            <div className="border-2 border-white rounded-xl p-8">
              <h3 className="text-white lg:text-[35px] lg:leading-[40px] text-[30px] leading-[35px] text-center py-4">Let´s Talk About <span className="text-qaorange font-semibold block">Your Project</span></h3>
              <Form1InRow borderColor={'border-white'} buttonColor={'bg-qaorange'}/>
            </div>
          </div>
        </div>
      </div>


      <div className="container mx-auto">
        <div className="lg:px-16 px-8 flex flex-wrap lg:flex-nowrap">
          <div className="lg:w-5/12 w-full">
            <picture className="webkit-center-left">
              <source media="(min-width: 1024px)" srcSet="./transform-your-brand-future-486.webp" />
              <source media="(max-width: 1023px)" srcSet="./transform-your-brand-future-486.webp" />
              <img
                src="./transform-your-brand-future-486.webp"
                alt="Transform Your Brand Future"
                width="486"
                height="568"
                loading="lazy"
                className="lg:w-[486px] w-[320px]"
              />
            </picture>
          </div>

          <div className="lg:w-7/12 w-full lg:ps-16 pt-8 lg:pt-0 content-center">
            <h2 className="lexend text-[40px] leading-[50px] text-qablack font-light"><span className="font-bold ">Transform</span> Your <span className="font-bold text-qaorange block">Brand's Future</span></h2>

            <p className="text-qablack font-light lexend py-4">Let's Create Something Extraordinary Together</p>

            <p className="text-qaorange font-bold text-[25px] ">Your vision + our expertise = </p>
            <p className="text-qablack text-[25px] ">A brand that truly connects with your audience</p>

            <p className="text-qablack font-bold lexend pt-8">Whether you prefer:</p>

            <ul className="list-marker text-qablack">
              {ClientOptions.map ((data, index)=>(
                <li className="lexend font-light py-[10px]" key={index}>{data}</li>
              ))} 
            </ul>

            <p className="text-qablack font-bold pt-8">The journey to a stronger brand  starts with a simple conversation.</p>
          </div>
        </div>
      </div>

      <FormHorizontalModule titleBold={"Let's Talk About Your Brand Free Strategy Session In-Person or Virtual"} contClass={'border-[1px] border-qablack lg:p-[1.5rem] py-8 bg-white'} titleClass={'text-[25px] font-bold'}/>


      <div className="container mx-auto flex flex-wrap lg:flex-nowrap lg:pt-16 lg:pb-32 pt-8 pb-16 px-8 lg:px-0">
        <div className="lg:w-4/12 w-full lg:pb-16 pb-8">
          <h2 className="text-qablack text-[40px] leading-[50px]"><span className="font-medium">Our Branding Services</span> Transform Your Business Identity</h2>

          <p className="text-qaorange text-[20px] font-bold pt-8 pb-4">What Sets Us Apart?</p>

          {SetUsApart2.map((title, index) => (
            <div className="flex py-2" key={index}>
              <img src="check-icon.svg" alt={title} width={31} className="shadow-[-1px_1px_2px_0px_rgba(51,51,51,0.12)] rounded-md"/>
              <p className="content-center ps-4 lexend font-light text-[15px]">{title}</p>
            </div>
          ))}
        </div>

        <div className="lg:w-2/12 w-full lg:ms-[-50px] lg:me-[30px] lg:pt-[12rem]">
          <p className="lexend text-qablack text-[13px] text-center lg:text-left font-light pb-4">Previous Web Design</p>
            <picture className="webkit-center-left">
              <source media="(min-width: 1024px)" srcSet="./habib-screenshot-before.webp" />
              <source media="(max-width: 1023px)" srcSet="./habib-screenshot-before.webp" />
              <img
                src="./habib-screenshot-before.webp"
                alt="Previous design Habib Health and Fitness"
                width="230"
                height="409"
                loading="lazy"
                className="lg:w-[230px] w-[320px] z-10 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] relative"
              />
            </picture>
        </div>

        <div className="lg:w-3/12 w-full lg:ms-[-80px] flex flex-wrap justify-center lg:justify-start pt-8">
          <picture className="webkit-center-left order-1 lg:order-0">
              <source media="(min-width: 1024px)" srcSet="./habib-screenshot-after.webp" />
              <source media="(max-width: 1023px)" srcSet="./habib-screenshot-after.webp" />
              <img
                src="./habib-screenshot-after.webp"
                alt="New design Habib Health and Fitness"
                width="333"
                height="562"
                loading="lazy"
                className="lg:w-[333px] w-[320px] z-0 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] relative"
              />
            </picture>
            <p className="lexend text-qablack text-[13px] font-light pt-4 lg:ps-16 order-0 lg:order-1">New Web Design</p>
        </div>
        
        <div className="lg:w-4/12 lg:ps-8 pt-16 lg:pt-0">
          <ul className="list-marker text-qablack pb-4">
            <li className="lexend font-bold text-[20px]">Core Brand Development</li> 
          </ul>

          <p className="lexend pb-8"><span className="font-bold block">Slogan Creation & Company Ethos:</span> Memorable messages that capture your essence</p>
          <p className="lexend pb-8"><span className="font-bold block">Mission & Vision Crafting:</span> Clear direction for lasting impact</p>
          <p className="lexend pb-8"><span className="font-bold block">Logo Design:</span> Visual storytelling that stands out</p>

          <ul className="list-marker text-qablack pb-4">
            <li className="lexend font-bold text-[20px]">Digital Presence</li> 
          </ul>

          <p className="lexend pb-8"><span className="font-bold block">Strategic Web Design:</span> Websites that convert visitors into customers</p>
          <p className="lexend pb-8"><span className="font-bold block">Local SEO:</span> Dominate Maryland search results</p>
          <p className="lexend pb-8"><span className="font-bold block">Google Business Optimization:</span> Stand out in local searches</p>
        </div>
      </div>


      <div className="bg-gradient-to-b from-[#585D5E] to-qablack lg:pt-16 lg:pb-32 pb-16">
        <div className="container mx-auto lg:px-16 px-8">
          <h2 className="text-white text-[70px] text-center py-16">Our <span className="text-qaorange font-semibold">Team</span></h2>

          <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-8 gap-8">
            {Team.map((member, index)  => (
              <TeamPictureIndividual key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      <ReviewSection />

      <div className="container mx-auto lg:px-16 px-8 flex flex-wrap lg:flex-nowrap pb-16">
        <div className="lg:w-1/2 w-full">
          <h2 className="text-qablack lg:text-[60px] lg:leading-[70px] text-[40px] leading-[50px] font-light pe-8 pb-8 lg:pb-0">What Support Does QA Digital <span className="font-semibold block">Provide to Our Branding Clients?</span></h2>
        </div>
        <div className="lg:w-1/2 w-full">
          <p className="text-qablack font-bold lexend lg:pt-8">We're In This Together!</p>
          <p className="text-qablack font-light lexend pt-8">We're here at every step, celebrating wins and overcoming challenges together.</p>
          <p className="text-qablack font-bold lexend pt-8">Your Journey With Us:</p>

          <div className="flex flex-wrap lg:flex-nowrap">
            <ul className="list-marker text-qablack lg:w-[17rem] w-full leading-[20px]">
              {Journey1.map ((data, index)=>(
                <li className="lexend font-light py-[10px]" key={index}>{data}</li>
              ))} 
            </ul>            
            <ul className="list-marker text-qablack lg:w-[17rem] w-full leading-[20px]">
              {Journey2.map ((data, index)=>(
                <li className="lexend font-light py-[10px]" key={index}>{data}</li>
              ))} 
            </ul>            
            </div>
        </div>
      </div>

      <div className="container mx-auto lg:pt-0 lg:pb-32 px-4 pb-16">
        <div className="py-8 lg:px-16 px-4 border-[1px] border-qablack rounded-2xl">
          <p className="text-center text-[26px] leading-[30px] font-bold pb-8">600+ Maryland Businesses  Have Found Their Brand Home With Us</p>
        <YoutubeEmbedLazy embedId="EeoVMKZcc2Y"/>
        </div>
      </div>
    </>
  )
};

export default BrandingPage;
