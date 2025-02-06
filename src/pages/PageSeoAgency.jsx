import React, { useRef, useEffect, useState } from "react"
import SmallServices from "../componentes/SmallServicesHome";
import ReviewCarousel from "../componentes/ReviewCarousel";
import emailjs from '@emailjs/browser';
import { BusinessRankSEO, comprehensiveSeo1, comprehensiveSeo2, FAQsSEOAgency, ImageSEOMemorableBrands, SEOResources, SpecializedSEOIndustryData } from "../data";
import ComprenhensiveSeo from "../componentes/ComprehensiveSeo";
import SpecializedSEOIndustry from "../componentes/SpecializedSEOIndustry";
import HelpFactBox from "../componentes/HelpFact";
import FAQs from "../componentes/FAQs";
import ImageCarousel from "../componentes/SliderImage";
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import FormHorizontalModule from "../componentes/FormHorizontal";
import Form2InRow from "../componentes/Form2InRow";

const SeoAgency = () => {
    const prevRev = useRef(null);
    const nextRev = useRef(null);
    const prevImg = useRef(null);
    const nextImg = useRef(null);

    const anchors = {
      'seo-solutions': useRef(null),
      'seo-consulting': useRef(null),
      'ecommerce-seo': useRef(null),
      'b2b-seo': useRef(null),
      'seo-audits': useRef(null),
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
        <title>An SEO Agency That Generates Business - QA Digital Partners</title>
        <meta name="description" content="Work with an SEO company that knows what works and prioritizes your business objectives. Get your rankings up and make your brand an online authority with us." />
        <meta name="keywords" content="seo agency, Search engine optimization, Organic traffic, Local SEO, Technical SEO" />
        <meta name="author" content="QA Digital Partners" />
        <meta property="og:title" content="An SEO Agency That Generates Business - QA Digital Partners" />
        <meta property="og:description" content="Work with an SEO company that knows what works and prioritizes your business objectives. Get your rankings up and make your brand an online authority with us." />
        <meta property="og:image" content="https://qadigitalpartners.com/seo-agency-banner-320.webp" />
        <meta property="og:url" content="https://qadigitalpartnes.com/search-engine-optimization/" />
        <meta name="twitter:title" content="An SEO Agency That Generates Business - QA Digital Partners" />
        <meta name="twitter:description" content="Work with an SEO company that knows what works and prioritizes your business objectives. Get your rankings up and make your brand an online authority with us." />
        <meta name="twitter:image" content="https://qadigitalpartners.com/seo-agency-banner-320.webp" />
      </Helmet>


      <div className="bg-gradient-225 from-[#e8e7e7] to-white pt-16 pb-8 mt-[-80px]">
        <div className="container flex mx-auto flex-wrap lg:flex-nowrap">
        <div className="lg:w-7/12 pt-16 w-6/6">
          <h1 className="text-qablack lg:text-[63px] text-[36px] font-light pb-4 lg:leading-[75px] leading-[42px] px-8 lg:px-0">
          An SEO Agency <span className="font-semibold block">That Drives Success</span>
          </h1>
          <p className="text-qablack text-base lg:pe-[13rem] py-8 px-8 lg:ps-0 lexend font-light"> With over <b>15 years of experience, </b> we have helped businesses grow their revenue, leads, and organic traffic through personalized, data-driven SEO strategies that focus on achieving your goals.</p>
          <div className="flex lg:flex-nowrap flex-wrap">
          <SmallServices seo={true} home={false}/>
          </div>
          <div className="btn-grow-box qablack lg:mb-16 lg:left-0 left-[50%] translate-x-[-50%] lg:translate-x-0">
            <a href="tel:+12405936567" className="py-2 animated-button rounded-lg text-qablack font-bold px-4 lg:text-[16px] text-[14px]">Talk with our SEO Specialists</a>
          </div>
        </div>
        <div className="mt-16 justify-center lg:w-5/12 w-full flex">
            <picture>
            <source media="(min-width: 1024px)" srcSet="./seo-agency-banner-510.webp" />
            <source media="(max-width: 1023px)" srcSet="./seo-agency-banner-320.webp" />
            <img
                src="./seo-agency-banner-320.webp"
                alt="Seo Agency"
                width="510"
                height="558"
                loading="lazy"
                className="lg:w-[510px] w-[320px] mb-4"
            />
            </picture>
        </div>
        </div>
      </div>

      <div className="lg:py-16">
        <div className="container flex mx-auto flex-wrap lg:flex-nowrap py-8">
            <div className="lg:w-6/12 w-full order-last lg:order-first webkit-center-left grid grid-cols-2 gap-[24px] px-8 lg:px-0">
            <div className="">
              <picture>
              <source media="(min-width: 1024px)" srcSet="./directed-goal-focused-optimization-1-282.webp" />
              <source media="(max-width: 1023px)" srcSet="./directed-goal-focused-optimization-1-180.webp" />
              <img
                  src="./directed-goal-focused-optimization-1-282.webp"
                  alt="Directed, Goal-focused SEO Optimzation"
                  width="288"
                  height="622"
                  loading="lazy"
                  className="lg:w-[288px] w-full"
              />
              </picture>
            </div>
            <div className="grid gap-[24px]">
            <picture>
              <source media="(min-width: 1024px)" srcSet="./directed-goal-focused-optimization-2-282.webp" />
              <source media="(max-width: 1023px)" srcSet="./directed-goal-focused-optimization-2-180.webp" />
              <img
                  src="./directed-goal-focused-optimization-2-282.webp"
                  alt="Directed, Goal-focused SEO Optimzation"
                  width="287"
                  height="291"
                  loading="lazy"
                  className="lg:w-[287px] w-full "
              />
              </picture>
              <picture>
              <source media="(min-width: 1024px)" srcSet="./directed-goal-focused-optimization-3-282.webp" />
              <source media="(max-width: 1023px)" srcSet="./directed-goal-focused-optimization-3-180.webp" />
              <img
                  src="./directed-goal-focused-optimization-3-282.webp"
                  alt="Directed, Goal-focused SEO Optimzation"
                  width="287"
                  height="291"
                  loading="lazy"
                  className="lg:w-[287px] w-full"
              />
              </picture>

            </div>
            </div>
            <div className="lg:w-6/12 w-full pt-4 lg:ps-8">
                <h2 className="text-qablack lg:text-[60px] text-[36px] font-light pb-4 lg:leading-[65px] leading-[42px] px-8 lg:px-0">
                Directed, Goal-Focused <span className="font-semibold">Search Engine Optimization </span>
                </h2>
              <p className="text-qablack text-base lg:pe-8 py-8 px-8 lg:ps-0 lexend font-light">At QA Digital Partners, you'll discover an expert SEO team dedicated to achieving your business goals. Our mission is straightforward: drive growth, achieve your specific goals, and ensure a strong return on your investment.
                <br /><br />
                We aim to be your trusted digital partner, guiding you towards sustainable success. Whether you're a small business or a large corporation, we tailor our proven SEO strategies to fit any industry and meet your specific goals.</p>

                <div className="bg-gradient-225 from-[#FAF9F9] to-[#F3F2F2] flex p-4 rounded-xl items-center shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] lg:ms-[-10%] lg:me-[5%] mt-8">
                    <p className="font-medium text-[16px] lexend py-2 ps-2">Thousands of Page 1 Rankings</p>
                  <div className="w-[2px] py-0 px-[1.5rem] content-evenly lg:block hidden">
                      <div className="bg-[#dedbdb] w-full min-w-[3px] min-h-[3rem]">
                      </div>
                  </div>
                  <p className="font-medium text-[16px] lexend py-2 ps-4">127% Organic Traffic Growth on Average</p>
                  <div className="w-[2px] py-0 px-[1.5rem] content-evenly lg:block hidden">
                      <div className="bg-[#dedbdb] w-full min-w-[3px] min-h-[3rem]">
                      </div>
                  </div>
                  <p className="font-medium text-[16px] lexend py-2 pe-2">Web Design That Stands Out</p>
                </div>
            </div>
        </div>
      </div>

      <div className="lg:pt-16 lg:pb-4">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-8">
            <div className="lg:w-3/6 flex w-full order-last lg:order-first px-8 lg:px-0">
            <div className="hover:scale-125 transition-transform content-center">
              <button aria-label="Left review" ref={prevImg} className="bg-qalightgrey p-[0.75rem] rounded-[25px] me-4">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5954 6.29199L3.00342 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.20055 11.0879L1.40454 6.29188L6.20055 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <ImageCarousel data={ImageSEOMemorableBrands} prev={prevImg} next={nextImg}/>
            <div className="hover:scale-125 transition-transform content-center">
              <button aria-label="Right review" ref={nextImg} className="bg-qalightgrey p-[0.75rem] rounded-[25px] ms-4">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.40456 6.29199L10.9966 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.79945 11.0879L12.5955 6.29188L7.79945 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            </div>
            <div className="lg:w-3/6 lg:ps-16 content-center">
                <h3 className="text-qablack lg:text-[40px] text-[36px] pb-2 lg:leading-[50px] leading-[42px] px-8 lg:px-0 pt-2">
                We Create <span className="font-extrabold block">Memorable Brands</span>
                </h3>
                <p className="text-qablack text-base lg:pe-8 py-4 px-8 lg:ps-0 lexend font-light">Our expert web design goes beyond optimizing your site for top SEO performance—it also enhances user experience and leaves a lasting impression. Our SEO plans integrate structure, order, and efficiency with exceptional web design that truly embodies your brand.</p>
            </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto flex flex-wrap lg:flex-nowrap">
            <div className="lg:w-3/6">
                <h3 className="text-qablack lg:text-[40px] text-[36px] pb-8 lg:leading-[50px] leading-[42px] px-8 lg:px-0 pt-8">
                An Up-To-Date SEO Company <span className="font-extrabold">Committed to Lasting Success </span>
                </h3>
                <picture className="webkit-center-left">
                <source media="(min-width: 1024px)" srcSet="./portfolio-graph-580.webp" />
                <source media="(max-width: 1023px)" srcSet="./portfolio-graph-320.webp" />
                <img
                    src="./portfolio-graph-580.webp"
                    alt="Portfolio Graph"
                    width="580"
                    height="290"
                    loading="lazy"
                    className="lg:w-[580px] w-[320px] mb-4 shadow-lg rounded-lg"
                />
                </picture>
            </div>
            <div className="lg:w-3/6">
                <picture className="webkit-center-left">
                <source media="(min-width: 1024px)" srcSet="./branding-tequila-renacer-592.webp" />
                <source media="(max-width: 1023px)" srcSet="./branding-tequila-renacer-320.webp" />
                <img
                    src="./branding-tequila-renacer-592.webp"
                    alt="Impresion Graph"
                    width="592"
                    height="342"
                    loading="lazy"
                    className="lg:w-[592px] w-[320px] mb-4 shadow-lg rounded-lg"
                />
                </picture>
                <p className="text-qablack text-base lg:pe-8 py-4 px-8 lg:ps-0 lexend font-light">With experience across diverse clients, we understand the importance of staying updated with the latest SEO trends. We continuously refine our skills, ensuring we apply fast, effective solutions aligned with Google's evolving algorithms. Our structured approach ensures your website remains organized and optimized for long-term success.</p>
            </div>
        </div>
      </div>

      <div className="lg:pt-0 lg:pb-16 lg:py-16 py-8">
      <div className="container mx-auto flex lg:flex-nowrap flex-wrap px-8 lg:px-0">
        <div className="lg:w-1/3 w-full content-center lg:pe-4">
            <h3 className="text-qablack lg:text-[40px] text-[36px] pb-2 lg:leading-[50px] leading-[42px] lg:px-0 pt-2">
            Get an SEO Agency <span className="font-extrabold block">That Achieves Results</span>
            </h3>
            <p className="text-qablack text-base lg:pe-16 py-2 lg:ps-0 lexend font-light leading-[25px]">Based in the United States, our web services are offered nationwide. See what our clients say about their experience working with us.</p>
          <div className="flex pb-8 lg:pb-0">
            <div className="hover:scale-125 transition-transform">
              <button aria-label="Left review" ref={prevRev} className="bg-qalightgrey p-[0.75rem] rounded-[25px] me-4 animation-d-400">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5954 6.29199L3.00342 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.20055 11.0879L1.40454 6.29188L6.20055 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div className="hover:scale-125 transition-transform">
              <button aria-label="Right review" ref={nextRev} className="bg-qalightgrey p-[0.75rem] rounded-[25px] animation-d-400">
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.40456 6.29199L10.9966 6.29199" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.79945 11.0879L12.5955 6.29188L7.79945 1.49587" stroke="#3F3E3E" strokeWidth="2.39801" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-2/3 w-full ">
          <ReviewCarousel prev={prevRev} next={nextRev} heightMod={false}/>
        </div>
      </div>
    </div>

    <FormHorizontalModule titleThing={"Let's Start"} titleBold={"Your Project"} contClass={'lg:p-16 py-8 bg-gradient-197 from-[#FAF9F9] to-qagrey'} titleClass={"lg:text-[40px] text-[36px] lg:leading-[50px] leading-[42px]"}/>


    <div className="bg-gradient-to-b from-[#585D5E] to-qablack pt-64 mt-[-120px] z-10">
      <div className="container mx-auto">
        <div>
          <h2 className="text-white font-light lg:text-[70px] lg:leading-[80px] text-[40px] leading-[50px] text-center px-8 lg:px-0">Comprehensive SEO Services
          <span className="block font-semibold">For Local <span className="text-qaorange">And National Reach</span></span></h2>
          <div className="flex mt-[-20px]">
          <div className="lg:w-2/12 w-1/12">
            <img src="dots-2.svg" alt="Dots 2" width={'88px'} className="w-[55px] lg:w-[88px]"/>
          </div>
          <p className="text-white text-base py-16 px-0 lg:px-4 lexend font-light lg:w-8/12 w-10/12 text-center">At QA Digital Ads, we excel in all facets of SEO, consistently updating our strategies to align with Google's ever-evolving algorithms. We provide tailored SEO solutions to meet your specific needs, whether local or nationwide. Our expertise ensures that your business stays ahead of competitors, no matter the location.</p>
          <div style={{textAlign: '-webkit-right'}} className="lg:w-2/12 w-1/12">
            <img src="dots-1.svg" alt="Dots 1" width={'64px'} className="w-[45px] lg:w-[64px]"/>
          </div>
          </div>
        </div>
        <div id="seo-solutions" ref={anchors['seo-solutions']} className="grid lg:grid-cols-4 grid-cols-1 gap-8 pb-8 px-8 lg:px-0">
          {comprehensiveSeo1.map((data, index) => {
            return(
              <ComprenhensiveSeo {...data} key={index} />
            )
          })}
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:pb-32 pb-16 px-8 lg:px-0">
          {comprehensiveSeo2.map((data, index) => {
            return(
              <ComprenhensiveSeo {...data} key={index} />
            )
          })}
        </div>
        <div>
        <h3 className="text-white font-light text-[40px] leading-[45px] text-center">Get the Right SEO Company<span className="font-semibold"> For Your Brands</span></h3>
          <div className="lg:w-4/12 w-10/12 mx-auto text-center lg:pb-36 pb-16 pt-8">
            <a className="w-full block text-[25px] text-white bg-qaorange py-2 rounded-md font-bold mt-4">Talk with our SEO Specialists</a>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto flex flex-wrap lg:flex-nowrap lg:pt-16 pt-16">
      <div className="lg:w-[46%] lg:pt-8 px-8 lg:px-0">
      <h2 className="text-qablack font-light text-[60px] leading-[80px]">Enterprise <span className="font-semibold block"> SEO Services</span></h2>
      <p className="text-qablack text-base lg:pe-16 py-4 px-8 lg:ps-0 lexend font-light">Our Enterprise SEO Services are tailored for mid to big-scale businesses seeking significant results across extensive websites and multiple locations. We collaborate with your in-house teams to ensure seamless integration of SEO best practices.
      <br /><br />
      Or we can take full control of development and implementation. From technical adjustments to strategic content optimization, we aim to enhance visibility, drive traffic, and generate quality leads while aligning with your business goals.</p>
      
      <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4" id="ecommerce-seo" ref={anchors['ecommerce-seo']}>
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        Ecommerce SEO
      </h3>
      <p className="text-qablack text-base lg:pe-16 py-4 px-8 lg:ps-0 lexend font-light">We don't just optimize for services; our SEO services extend to products as well. We increase traffic and sales by targeting high-intent keywords related to your offerings, ensuring seamless and organized navigation for a better user experience. We work with known web builders: Shopify SEO, Woo-commerce SEO, and more.</p>

      <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        Franchise SEO
      </h3>
      <p className="text-qablack text-base lg:pe-16 py-4 px-8 lg:ps-0 lexend font-light">If you're expanding your business through franchises, we maintain consistency across your digital presence. Whether each location has its own website or shares one, we create strategies to ensure your SEO efforts are effective and cohesive, helping your projects grow seamlessly.</p>

      <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4" >
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        B2B SEO
      </h3>
      <p className="text-qablack text-base lg:pe-16 py-4 px-8 lg:ps-0 lexend font-light">Our B2B SEO services focus on reaching decision-makers within businesses. We develop targeted strategies that increase visibility among potential partners, clients, or suppliers. From optimizing landing pages to creating in-depth content that addresses industry-specific needs, we ensure your business becomes the go-to solution for other companies.</p>

      </div>
      <div className="lg:w-[54%] w-full px-8 webkit-center-left">
        <picture className="">
          <source media="(min-width: 1024px)" srcSet="./BMA-results-enterprises-services-630.webp" />
          <source media="(max-width: 1023px)" srcSet="./BMA-results-enterprises-services-320.webp" />
          <img
            src="./BMA-results-enterprises-services-630.webp"
            alt="BMA Results with Enterprices Services"
            width="630"
            height="373"
            loading="lazy"
            className="lg:w-[630px] w-[320px] mb-16 rounded-xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)]"
          />
        </picture>
        <picture>
          <source media="(min-width: 1024px)" srcSet="./Misty-results-enterprises-services-630.webp" />
          <source media="(max-width: 1023px)" srcSet="./Misty-results-enterprises-services-320.webp" />
          <img
            src="./Misty-results-enterprises-services-630.webp"
            alt="Misty Clean Results with Enterprices Services"
            width="630"
            height="373"
            loading="lazy"
            className="lg:w-[630px] w-[320px] mb-4 rounded-xl shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)]"
          />
        </picture>
      </div>
    </div>


    <div className="container mx-auto flex flex-wrap lg:flex-nowrap pt-8">
      <div className="w-full lg:w-[52%] webkit-center-left order-last lg:order-first pt-8 lg:pt-0">
      <picture>
          <source media="(min-width: 1024px)" srcSet="./all-about-599.webp" />
          <source media="(max-width: 1023px)" srcSet="./all-about-599.webp" />
          <img
            src="./all-about-599.webp"
            alt="All About Client"
            width="599"
            height="533"
            loading="lazy"
            className="lg:w-[599px] w-[320px] mb-4 lg:rounded-[22px] rounded-md shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] lg:mt-8"
          />
        </picture>
      </div>
      <div className="w-full lg:w-[48%] lg:ps-16 px-8 lg:pe-0">
        <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4 lg:pt-0" id="seo-audits" ref={anchors['seo-audits']}>
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
            <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
              <rect width="13" height="15" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_4516_36746)">
              <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
            </g>
          </svg>
          SEO Audits
        </h3>
        <p className="text-qablack text-base lg:pe-2 py-4 px-8 lg:ps-0 lexend font-light">Our SEO audits provide a comprehensive evaluation of your website's performance. We analyze technical, on-page, and off-page factors to identify areas of improvement. By understanding your website's strengths and weaknesses, we deliver actionable insights that enhance your site's structure, speed, and search engine rankings.</p>

        <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4" id="seo-consulting" ref={anchors['seo-consulting']}>
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        SEO Consulting
      </h3>
      <p className="text-qablack text-base lg:pe-2 py-4 px-8 lg:ps-0 lexend font-light">For businesses seeking strategic guidance, our SEO consulting services offer expert advice tailored to your unique needs. We work closely with your team to develop customized strategies, optimize campaigns, and refine marketing plans. Whether you need a fresh perspective or ongoing support, our consulting services ensure you're always on the right path.</p>

      <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        Google My Business Optimization
      </h3>
      <p className="text-qablack text-base lg:pe-2 py-4 px-8 lg:ps-0 lexend font-light">Google My Business (GMB) is a crucial tool for attracting local customers. When optimized correctly, GMB becomes a powerful ally for SEO success. Our team ensures that your GMB is fully optimized as part of our services, giving your business a competitive edge.</p>
      </div>
    </div>

    <div className="lg:py-32 py-16 ">
      <div className="container mx-auto bg-[#F2F1F1] lg:px-32 rounded-xl py-16 px-8 lg:px-0">
      <h2 className="text-qablack font-light text-[40px] leading-[45px] text-center">Take Your Digital Marketing 
      <span className="font-semibold"> To The Next Level</span></h2>
      <p className="text-qablack text-base lg:pe-32 lg:ps-32 py-8 px-2 lexend font-light text-center ">Our SEO strategies are designed to elevate your digital marketing and deliver measurable results. Let us drive quality leads and growth for your business with targeted, data-driven solutions.</p>
      <div className="lg:w-6/12 w-full mx-auto text-center py-4">
        <a href="#contact" className="w-full block text-[25px] text-white bg-qablack py-2 rounded-md font-bold">Talk with our SEO Specialists</a>
      </div>
      </div>
    </div>

    <div className="bg-gradient-to-b from-[#E6E6E6] to-white py-16">
      <div className="container mx-auto flex flex-wrap ">
        <div className="w-full lg:pb-8 px-8 lg:px-0">
        <h2 className="text-qablack font-light lg:text-[60px] lg:leading-[70px] text-[40px] leading-[50px] text-center">Why Choose QA Digital Partners 
        <span className="font-semibold block"> From Other SEO Companies?</span></h2>
        </div>
        <div className="lg:w-3/6 w-full px-8 lg:px-0">
        
        <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        We Innovate and Adapt to Your Needs
        </h3>
        <p className="text-qablack text-base lg:pe-2 py-4 px-8 lg:ps-0 lexend font-light">SEO success isn't achieved through a one-size-fits-all strategy, nor is there a definitive guide to Google's algorithms. However, our deep knowledge of Google certifications, SEO best practices, and data-driven insights allow us to make strategic adjustments that deliver results. We are committed to working tirelessly, making necessary refinements, and adapting our approach until your business reaches its goals.</p>

        <picture>
          <source media="(min-width: 1024px)" srcSet="./QA-founders-julian-alfonso-sebastian-548.webp" />
          <source media="(max-width: 1023px)" srcSet="./QA-founders-julian-alfonso-sebastian-320.webp" />
          <img
            src="./QA-founders-julian-alfonso-sebastian-548.webp"
            alt="QA Founders "
            width="548"
            height="539"
            loading="lazy"
            className="lg:w-[548px] w-[320px] mb-4 rounded-[22px] shadow-[0_4px_10px_2px_rgba(0,0,0,0.1)] lg:mt-8"
          />
        </picture>

        </div>
        <div className="lg:w-3/6 w-full px-8 lg:px-0">
        <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        A Brand Aligned with Your Vision
        </h3>
        <p className="text-qablack text-base lg:pe-2 py-4 px-8 lg:ps-0 lexend font-light">Our designers and developers bring your ideas to life, transforming them into tangible results. We don't just build websites; we create digital experiences that align with your brand's identity and objectives. Every page and word on your website is crafted with the intention of generating leads, boosting visibility, and driving growth. With QA Digital Partners, you can expect a team that is truly invested in your success.</p>

        <h3 className="text-qablack font-bold text-[20px] flex pt-8 pb-4">
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="me-2 mt-2">
          <mask id="mask0_4516_36746" maskUnits="userSpaceOnUse" x="0" y="0" width="13" height="15">
            <rect width="13" height="15" fill="#D9D9D9"/>
          </mask>
          <g mask="url(#mask0_4516_36746)">
            <path d="M0.528312 12.7707C0.355785 13.3458 0.269522 13.6333 0.343338 13.8017C0.407397 13.9478 0.537332 14.0546 0.693087 14.0891C0.872566 14.1289 1.13793 13.9885 1.66866 13.7077L12.0537 8.21398C12.4872 7.98463 12.704 7.86996 12.7749 7.71695C12.8366 7.58367 12.8366 7.43 12.7749 7.29673C12.704 7.14372 12.4872 7.02904 12.0537 6.79969L1.66866 1.3059C1.13793 1.02514 0.872567 0.884761 0.693087 0.924531C0.537331 0.959044 0.407396 1.06581 0.343337 1.21192C0.269521 1.38028 0.355783 1.66783 0.528308 2.24292L2.03849 7.27696C2.06413 7.36242 2.07695 7.40515 2.08205 7.44868C2.08657 7.48732 2.08657 7.52636 2.08205 7.565C2.07695 7.60853 2.06413 7.65126 2.03849 7.73671L0.528312 12.7707Z" fill="#1D1D1D"/>
          </g>
        </svg>
        Proven Results Across Industries
        </h3>
        <p className="text-qablack text-base lg:pe-2 py-4 px-8 lg:ps-0 lexend font-light">With a solid track record of managing successful marketing and SEO campaigns across various industries, we have consistently delivered impactful results. Our success is evident in the case studies and client testimonials that showcase the achievements we've helped them reach. We invite you to explore these stories and see how we have made a difference for businesses around the world.</p>

        <h3 className="text-qablack font-light text-[40px] leading-[50px] lg:pe-32 pt-8">Get <span className="font-semibold">Quality Leads</span> with Proven <span className="text-qaorange font-semibold">SEO Management</span></h3>

        <div>
        <Form2InRow />
        </div>
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-b from-[#585D5E] to-qablack py-16">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap lg:flex-nowrap pb-8 px-8 lg:px-0" id="b2b-seo" ref={anchors['b2b-seo']}>
          <div className="lg:w-3/6 w-full">
          <h2 className="text-white font-light text-[70px] leading-[80px] mb-4"><span className="font-semibold text-qaorange"> Specialized SEO</span> by Industry</h2>
          <p className="text-white text-base lg:pe-2 py-4 lg:ps-0 pb-8 lg:pb-0 lexend font-light">At QA Digital Ads, we know that each industry requires a unique approach to SEO. With our deep expertise across diverse sectors, we create tailored strategies that drive results. Whether you're aiming to attract local clients or dominate a niche market, our industry-specific SEO solutions are designed to generate leads, increase visibility, and grow your business.</p>
          </div>
          <div className="lg:w-3/6 w-full lg:ps-16">
          <SpecializedSEOIndustry title={"SEO for Medical Services (Local)"} content={"Our local SEO strategies for medical services help you attract more patients within your area. We optimize your website for local searches, ensuring that your practice appears prominently in search results and on Google Maps. From dental clinics to urgent care centers, our approach focuses on building trust and making it easy for potential patients to connect with you."} icon={'pill-icon.svg'} />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 px-8 lg:px-0">
          {SpecializedSEOIndustryData.map((data, index) => {
            return(
              <SpecializedSEOIndustry {...data} key={index} />
            )
          })}
        </div>
        <div>
        <p className="text-white text-base py-8 px-8 lexend font-light text-center lg:px-[14rem] lg:py-16">Not seeing your industry listed? No worries—we can still help. Our SEO services are adaptable to any industry. For sensitive or highly specialized topics, we collaborate closely with your team to develop content that accurately represents your brand. With our tailored SEO strategies, we ensure alignment with your industry's specific needs, driving superior results and ROI. <span className="font-bold">Ready to dominate your market?</span> Let's make it happen!</p>
        <div className="lg:w-6/12 w-full mx-auto text-center pb-4 pt-0 px-8 lg:px-0">
          <a href="#contact2" className="w-full block text-[25px] text-white bg-qaorange py-2 rounded-md font-bold mt-4 px-4 lg:px-0">Get an SEO Firm To Improve Your Rankings</a>
        </div>
        </div>
      </div>
    </div>


    <div className="container mx-auto lg:py-8 py-16">
      <div className="lg:py-16 lg:px-32 px-8 pt-8 pb-16">
        <h2 className="text-qablack font-light text-[40px] leading-[50px] lg:text-[60px] lg:leading-[80px] text-center">How QA Digital Partners  
        <span className="font-semibold"> Will Help Your Business Rank Higher</span></h2>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 lg:pb-16 px-8 lg:px-0">
        {BusinessRankSEO.map(data => {
          return(
            <HelpFactBox {...data} key={data.indexN} />
          )
        })}
      </div>
    </div>

    <div className="container lg:px-16 lg:pb-32">
      <div className="container mx-auto flex flex-wrap lg:flex-nowrap bg-[#F2F1F1] rounded-2xl p-16">
        <div className="w-full lg:w-3/6">
          <h3 className="text-qablack font-normal lg:text-[60px] lg:leading-[80px] text-[40px] leading-[50px]">Hire <span className="font-semibold">SEO Experts</span> For Your Business</h3>
          <p className="text-qablack text-base lg:pe-2 py-4 lg:ps-0 lexend font-light">By partnering with QA Digital Partners, you’ll receive expert SEO support that drives growth, targets the right audience, and adapts to new challenges—ensuring sustained success.</p>
        </div>
        <div className="w-full lg:w-3/6 lg:ps-8 content-center">
        <Form2InRow />
        </div>      
      </div>
    </div>


    <div className="bg-gradient-to-b from-[#585D5E] to-qablack lg:pt-16 lg:pb-32 pb-8 pt-8 px-8 lg:px-0">
      <div className="container mx-auto py-8">
        <h2 className="text-[70px] leading-[80px] text-white "><span className="text-qaorange font-semibold">SEO</span> Resources</h2>
        <div style={{textAlign: '-webkit-right'}} className="lg:w-full lg:mt-[-20px] me-[-1rem] lg:me-0">
          <img src="dots-4.svg" alt="Dots 1" width={'64px'} className="w-[50px] lg:w-[64px]"/>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:px-16 px-0">
        {SEOResources.map((data, index) => {
          return(
            <div className="px-8 py-[2.5rem] rounded-xl border-white border-2" key={index}>
              <img src={data.img} alt={data.title} className="w-full border-none" width={308} height={128}/>
              <div className="min-h-[60px] my-[1.3rem] content-center">
              <h3 className="text-[20px] leading-[30px] text-white">{data.title}</h3>
              </div>
              <p className="text-white font-light">{data.content}</p>
              {(data.link != '') ? (
              <div className="btn-grow-box qaorange mt-8">
                <a className="animated-button qawhite text-white bg-transparent px-4 py-1 rounded-md" href={data.link}>Learn More</a>
              </div>                
              ) : ('') }
            </div>
          )
        })}
        </div>
        <div className="lg:w-full ms-[-1rem] lg:ms-0">
          <img src="dots-3.svg" alt="Dots 1" width={'64px'} className="w-[50px] lg:w-[64px]"/>
        </div>
      </div>
    </div>


    <div className="container mx-auto flex flex-wrap lg:flex-nowrap py-16 px-8 lg:px-0">
      <div className="w-full lg:w-3/6 py-8">
      <h2 className="lg:text-[60px] lg:leading-[80px] text-[43px] leading-[55px] text-qablack ">Search Engine <b>Optimization FAQs</b></h2>
      </div>
      <div className="w-full lg:w-3/6 py-8" >
      <FAQs faqsData={FAQsSEOAgency}/>
      </div>
    </div>
    </>
  )
};

export default SeoAgency;
