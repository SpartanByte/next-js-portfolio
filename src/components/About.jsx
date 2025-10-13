'use client'

import SectionHeading from './sub/SectionHeading'
import Image from 'next/image'

const About = () => {

    return(
        <div id="about" className="min-h-screen flex flex-col items-center justify-start">
            <SectionHeading text={'About Me'} />
            <Image
                src={'/images/about-collage.png'}
                alt="Portrait image of Brian Wardwell"
                width={890}
                height={500}
            />
            <section className="background mb-14">
                <div className="flex items-center justify-between md:justify-center">
                    <div className="flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                        <p>Hello, my name is Brian Wardwell and was born and raised in Fargo, North Dakota. In 2020, my wife, son and I moved to the greater Minneapolis/St. Paul area. Moving during the pandemic had its own unique challenges but it was certainly exciting. I grew up going to the "cabin country" region of Minnesota and have always loved the lakes, walking in state parks, camping, and so on. We're massive Minnesota Wild fans, so that didn't hurt. We have two furry family members, Frankie (shih tzu) and Zimmer (chihuahua mix), as well as two corn snakes (Checkers and Rob) and one ball python (Django, named after the Python web framework).</p>

                        <p>I also love concerts, art, and other interesting events such as the Minnesota Renaissance Festival (yes, I dress up). I adore Halloween and have been planning this year, 2025, to not only have regular decorations but designing "DIY" decorations. We also enjoy visiting Fargo as well since we both have family there.</p> 
                    </div>
                </div>
            </section>
            <SectionHeading text={'My Background'} />
            <section className="background mb-14">
                <div className="flex items-center justify-between md:justify-center">
                    <div className="flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                        <p>My journey into web development officially dates back to building a website on Tripod.com's site builder (when that excited) for the music I was recording in 2004. I remember creating Flash and shockwave media banners and animations, guest books, and other site elements that are now long gone. Also, enjoying amateur photography, I dove into teaching myself Adobe Photoshop within creating photomanipulation art and composite.</p>
		
                        <p>I enrolled in college in 2012, putting my personal life on hold, to obtain the skills and project experience for computer programming and web development. My professors and instructions at Minnesota State Community and Technical College were amazing and their teaching styles were both empathetic and challenging. Main studies included: HTML5/CSS, Adobe Photoshop, JavaScript, PHP, MySQL, Python, Adobe Dreamweaver, Web Development Strategies & Practices, Computer Management Systems (WordPress), Microcomputer Databases, Ecommerce Principles, User Interface & User Experience Design, Search Engine Optimization, and Web Applications Programming (which included many different JavaScript "recipes" in different libraries such as Handlebars). In addition to technical courses, I studied College Writing, Technical Writing, and InterPersonal Communication.</p>

                        <details>
                            <summary className="mb-4">View More Background</summary>
                                <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-10 lg:gap-y-6">
                                    <p>After gradutating with my Associates of Applied Science (with extra credits for Python and Microcomputer Databases) and while working at Microsoft as a Support Engineer, I took some formal classes that focused on Object Oriented Programming at Hennipen Technical College. Though it didn't result in a degree, the courses were valuable in teaching me OOP in Java, C#, more SQL and database design, and a little C++.</p>
                                
                                    <p>My professional career began in 2016 when I was contracted by Dakota Supply Group to merge their two intranet sites. After the project was completed in late 2016, I joined Insight Technologies as a full time Web Developer and part of a small development team. This position gifted me an abundace of opportunity to new tools and technologies such as Laravel (MVC framework), MVC design patterns, Vagrant development environments, and using cURL PHP (client URL) to run verification checks on hosted SSL certificates. I developed a brand new project in Umbraco (C#/ASP.NET) and learning the Razor syntax. I also managed site updates for other clients using Sitefinity and osCommerce content management systems.</p>
                                
                                    <p>In 2018, I transitioned to New Vision Engineering Solutions as a Software Engineer I. In May 2018, I transitioned my employment to New Vision Solutions as a Software Engineer I. New Vision's introduced the fascinating world of the Internet of Things (IoT), much of what I have worked on to this point has been PTC's IoT development platform: ThingWorx Studio. ThingWorx very often interacts with PTC Product LifeCycle Management (PLM) products such as Navigate and Windchill (for interaction with BoM Management (Bill of Materials) and more). ThingWorx customization entails JavaScript based services, Java entities and objects, XML exporting/importing, etc.</p>
                                
                                    <p>In July 2019, I wanted to focus on web development again rather than IoT, which lead me to accepting a position at Codelation, a small company in Fargo that focused on other startup clients. This taught me adaptability as I had to pick up Ruby on Rails rather quickly, having no prior knowledge. Beyond the workday, I spent time after hours in a long Udemy course for Ruby on Rails. This position was also great for learning React, Postgres, Heroku, RSpec/Capybara testing, and many other technologies. The development team was collaborative and fun to work with.</p>

                                    <p>After moving to the Twin Cities area in 2020, I took a contract for a Web Developer position at Winnebago and to be working with the ASP.NET content management system, DynamicWeb, and vanilla JavaScript. We also used Azure pipelines, Microsoft IIS, SQL, and managing some Active Directory. We also developed a custom RV configuration app in Next.js and React.js. Winnebago was the largest company I had worked with since I was at Microsoft.</p>
                                    
                                    <p>While at my last position with LuminFire, I built and maintained WordPress and vanilla PHP applications including building custom plugins from scratch and PHP for custom functionality for existing and third party plugins. New projects included SCSS (Sassy Stylesheets), custom jQuery, Laravel Mix, testing out boilerplate structures like Bedrock. Additionally, I contributed to Laravel projects that often used Vue.js and DevOps related tasks including configuring servers, SSL Certificates, site and database migrations, and DNS configuration.</p>
                    
                                    <p>As I look for my next adventure, I can honestly say that I have loved working on every team I have been on. I still get humbled by the amazing senior developers and other team members that have patience, support, and dedication to keep sharing knowledge so that we all level up. I love that every day is different and there are always new problems to solve. I am very dedicated to continuous learning certainly including Udemy, LinkedIn, Laracasts, and Lynda.com (before it was LinkedIn Learning). I'll continue to approach and learn new things as it's one of the ingredients of what I set out to do so many years ago.</p>
                                </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
  );
}

export default About