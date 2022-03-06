import React, { useContext } from 'react';
import CardCertif from '../components/CardCertif';
import CardDegrees from '../components/CardDegrees';
import { LangContext } from '../context/LangContext';
import { ThemeContext } from '../context/ThemeContext';
import language from '../Lang/lang';


const Education = () => {

    const { theme } = useContext(ThemeContext)
    const { lang } = useContext(LangContext)
    const themeColor = theme ? 'light' : 'dark'
    const selectedLang = lang ? language.FR.education : language.EN.education



    return (
        <div className='education'>
            <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                    <svg id="eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 795.39431 574.03802"><defs><linearGradient id="b2a81085-935f-40be-bb27-75940df8c338" x1="-450.78971" y1="2803.04671" x2="-450.78971" y2="2729.34772" gradientTransform="translate(3217.53309 1009.65784) rotate(90)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="gray" stopOpacity="0.25"></stop><stop offset="0.53514" stopColor="gray" stopOpacity="0.12"></stop><stop offset="1" stopColor="gray" stopOpacity="0.1"></stop></linearGradient></defs><title>Graduation</title><ellipse cx="232.05775" cy="450.06897" rx="35.09476" ry="5.26421" transform="translate(-476.55674 294.92367) rotate(-63.61079)" fill="#e0e0e0"></ellipse><ellipse cx="670.57742" cy="667.85592" rx="35.09476" ry="3.57677" transform="translate(-428.03695 808.73554) rotate(-63.61079)" fill="#e0e0e0"></ellipse><rect x="397.95325" y="566.93514" width="21.05685" height="70.18951" transform="translate(274.52069 -285.26226) rotate(39.54732)" fill="#f55f44"></rect><rect x="409.32507" y="573.56618" width="23.69234" height="70.18951" transform="translate(489.54965 1134.58125) rotate(-166.7689)" opacity="0.05"></rect><rect x="411.92558" y="573.86778" width="21.05685" height="70.18951" transform="translate(492.0121 1135.47005) rotate(-166.7689)" fill="#f55f44"></rect><rect x="414.48638" y="314.08219" width="73.69899" height="489.57186" transform="translate(-452.20218 551.7936) rotate(-63.61079)" fill="url(#b2a81085-935f-40be-bb27-75940df8c338)"></rect><path d="M655.01556,699.105c-8.584-4.11751-444.8438-220.718-438.55625-217.5983,24.21371-36.95739,31.19689-62.87545,31.19689-62.87545l438.55625,217.5983S670.81132,663.25857,655.01556,699.105Z" transform="translate(-202.30284 -162.98099)" fill="#f5f5f5"></path><rect x="421.72508" y="519.09383" width="40.35897" height="70.18951" transform="translate(90.06389 -301.64381) rotate(26.38921)" opacity="0.05"></rect><rect x="423.47981" y="519.09383" width="36.8495" height="70.18951" transform="translate(90.06389 -301.64381) rotate(26.38921)" fill="#f55f44"></rect><rect x="428.83545" y="518.70387" width="24.56633" height="70.18951" transform="translate(89.80867 -301.33512) rotate(26.38921)" opacity="0.05"></rect><rect x="430.59019" y="518.70387" width="21.05685" height="70.18951" transform="translate(89.80867 -301.33512) rotate(26.38921)" fill="#f55f44"></rect><circle cx="261.30557" cy="563.92499" r="2.92569" fill="#dbdbdb"></circle><g opacity="0.5"><rect x="29.39431" y="482" width="3" height="17" fill="#47e6b1"></rect><rect x="231.69716" y="644.98099" width="3" height="17" transform="translate(684.3753 257.30284) rotate(90)" fill="#47e6b1"></rect></g><g opacity="0.5"><rect x="785.39431" y="270" width="3" height="17" fill="#47e6b1"></rect><rect x="987.69716" y="432.98099" width="3" height="17" transform="translate(1228.3753 -710.69716) rotate(90)" fill="#47e6b1"></rect></g><g opacity="0.5"><rect x="47.39431" y="59" width="3" height="17" fill="#47e6b1"></rect><rect x="249.69716" y="221.98099" width="3" height="17" transform="translate(279.3753 -183.69716) rotate(90)" fill="#47e6b1"></rect></g><g opacity="0.5"><rect x="695.39431" y="33" width="3" height="17" fill="#47e6b1"></rect><rect x="897.69716" y="195.98099" width="3" height="17" transform="translate(901.3753 -857.69716) rotate(90)" fill="#47e6b1"></rect></g><path d="M214.59252,416.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,214.59252,416.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"></path><path d="M386.59252,219.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,386.59252,219.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"></path><path d="M596.59252,730.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,596.59252,730.4373Z" transform="translate(-202.30284 -162.98099)" fill="#4d8af0" opacity="0.5"></path><circle cx="759.39431" cy="444" r="6" fill="#f55f44" opacity="0.5"></circle><circle cx="627.39431" cy="482" r="6" fill="#4d8af0" opacity="0.5"></circle><circle cx="103.39431" cy="541" r="6" fill="#47e6b1" opacity="0.5"></circle><circle cx="411.39431" cy="6" r="6" fill="#f55f44" opacity="0.5"></circle><path d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z" transform="translate(-202.30284 -162.98099)" fill="#0E6BA8"></path><path d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z" transform="translate(-202.30284 -162.98099)" opacity="0.15"></path><polygon points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224" fill="#0E6BA8"></polygon><polygon points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224" opacity="0.15"></polygon><polygon points="553.894 257.32 547.894 257.68 541.184 143.67 547.374 146.53 553.894 257.32" fill="#f5f5f5"></polygon><path d="M411.19716,386.481l-28,170s201-65,376,0l-26-180S498.19716,347.481,411.19716,386.481Z" transform="translate(-202.30284 -162.98099)" fill="#0E6BA8"></path><ellipse cx="553.39431" cy="272" rx="29" ry="20" fill="#f5f5f5"></ellipse></svg>
                </div>
                <div className="col-12 col-lg-6 text-center mt-5 text-light">
                    <h1 className={`subtitle theme-title-${themeColor} m-3`}>{selectedLang.education}</h1>
                    <h3 className={`theme-title-${themeColor} m-3`}>{selectedLang.subtitle}</h3>
                    <ul className='inline logo justify-content-center'>
                        <li>
                            <img src="https://cdn.worldvectorlogo.com/logos/codingame-1.svg" alt='photoshop' />
                        </li>
                        <li>
                            <img src="https://docs.codewars.com/logo.svg" alt='Codewars' />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-12 text-center mb-5">
                    <h1 className={`theme-title-${themeColor}`}>{selectedLang.degreesReceived}</h1>
                </div>
                {selectedLang.cardDegrees.map((elem, index) => {
                    return <CardDegrees
                        key={index}
                        themeColor={themeColor}
                        title={elem.title}
                        subtitle={elem.subtitle}
                        year={elem.year}
                        logo={elem.logo}
                        order={elem.order}
                    />
                })}
            </div>
            <div className="row py-5 text-light justify-content-between">
                <div className="col-12 text-center">
                    <h1>Certifications</h1>
                </div>
                {selectedLang.certificationCard.map((elem, index) => {
                    return <CardCertif
                        key={index}
                        themeColor={themeColor}
                        background={elem.background}
                        img={elem.img}
                        title={elem.title}
                        subtitle={elem.subtitle}
                    />
                })}
            </div>
        </div>
    );
};

export default Education;