(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Indicator.39765ff3.png"},function(e,t,a){e.exports=a.p+"static/media/brioP1.aeb87dcb.svg"},function(e,t,a){e.exports=a.p+"static/media/brioP2.afa1806c.svg"},function(e,t,a){e.exports=a.p+"static/media/fairtrade.ddd660d8.png"},function(e,t,a){e.exports=a.p+"static/media/rulebkg.73de79ba.jpg"},function(e,t,a){e.exports=a.p+"static/media/bkg.f657fe0c.jpg"},function(e,t,a){e.exports=a.p+"static/media/MockupFlow.9f423af2.png"},function(e,t,a){e.exports=a.p+"static/media/foguangIA.52f9d8ef.png"},function(e,t,a){e.exports=a.p+"static/media/main.511d4b81.png"},function(e,t,a){e.exports=a.p+"static/media/photo.b3df2bd4.JPG"},function(e,t,a){e.exports=a.p+"static/media/p1.6f9641b2.png"},function(e,t,a){e.exports=a.p+"static/media/designP.ae3b7df1.png"},function(e,t,a){e.exports=a.p+"static/media/profile_new.05c3c0a3.png"},,,,,,,function(e,t,a){e.exports=a(54)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},,function(e,t,a){},,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(31),o=a.n(r),i=(a(41),a(2)),c=a(3),s=a(5),m=a(4),h=a(6),u=(a(43),a(44),a(46),a(58)),d=a(17),p=a.n(d),g=a(18),E=a.n(g),f=a(19),b=a.n(f),w=a(20),y=a.n(w),v=a(21),j=a.n(v),k=a(22),O=a.n(k),T=(a(23),a(24)),N=a.n(T),C=a(25),D=a.n(C),I=a(26),P=a.n(I),x=a(27),S=a.n(x),R=a(28),A=a.n(R),F=a(29),U=a.n(F),B=[{title:"Placement Indicator",category:"Case Study, UX Design",app:"BRIOVR",caption:"Solve the problem of placing objects in 3D space using 2D editor",img:p.a,link:"/briovr"},{title:"From Soul Food to Fair Trade",category:"Case Study, UX Design",app:"FairTrade",caption:"Bridging the disconnection between newcomers and kind hearted locals",img:y.a,link:"/fairtrade"},{title:"Paper Prototype for Quick Play Test",category:"Case Study, UX Design, Game Design, Paper Prototyping",app:"Break A Leg",caption:"A party game that brings fun to all the players",img:j.a,link:"/break-a-leg"},{title:"Foguang Temple Touring Guide",category:"Case Study, UX Design, Development",app:"Foguang Temple",caption:"Telling the story behind the temple with a thunsand year history and the visitors",img:O.a,link:"/foguang-temple"},{title:"Geogram",category:"UX Design",app:"Geogram",caption:"Telling the story behind the temple with a thunsand year history and the visitors",img:O.a,link:"/foguang-temple"},{title:"Know Who Is The Real User",category:"Case Study, UX Design, Development",app:"Jump In",caption:"Telling the story behind the temple with a thunsand year history and the visitors",img:O.a,link:"/foguang-temple"}],W=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getProjects",value:function(e){return e.map(function(e){return l.a.createElement("div",{className:"project-card spacing1",key:e.title,style:{backgroundImage:"url(".concat(e.img,")")}},l.a.createElement(u.a,{to:"/projects"+e.link},l.a.createElement("div",{className:"title-bkg"},l.a.createElement("div",{className:"brief"},l.a.createElement("h3",null,e.app),l.a.createElement("hr",null),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.category)))))})}},{key:"getCS",value:function(){return B.reduce(function(e,t){return t.category.includes("Case Study")&&e.push(t),e},[])}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated"},l.a.createElement("div",{className:"project-cards"},this.getProjects(this.getCS())))}}]),t}(n.Component),V=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated spacing1"},l.a.createElement("div",{className:"header-split"},l.a.createElement("div",{className:"header-split-left"},l.a.createElement("img",{className:"selfie",alt:"profile_pic",src:U.a}),l.a.createElement("h1",{className:"title"},"Hi, I'm Danning Lu. An interaction designer based in Toronto, Canada.")),l.a.createElement("div",{className:"header-split-right"},l.a.createElement("p",{className:"summary"},"With a background in programming and entrepreneurship, my strength lies in research & rapid prototyping for web & mobile apps. During my career I had the privilege to work with companies that are challenging the new territory of AR and VR. "))),l.a.createElement("div",null,l.a.createElement("h2",null,"Case Studies"),l.a.createElement(W,null)))}}]),t}(n.Component),G=a(11),X=a(32),L=a.n(X),H=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={menuOpen:!1,solutionsOpen:!1,verticalPosition:"top"},e.onScroll=e.onScroll.bind(Object(G.a)(Object(G.a)(e))),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"onScroll",value:function(){var e=window.scrollY<320?"top":"bottom";e!==this.state.verticalPosition&&this.setState({verticalPosition:e})}},{key:"getNavClass",value:function(){var e="bottom"===this.state.verticalPosition;return L()("nav-home",{"nav-small":e})}},{key:"render",value:function(){var e=this.getNavClass();return l.a.createElement("nav",{className:e},l.a.createElement("ul",{className:"list"},l.a.createElement("li",{className:"item"},l.a.createElement(u.a,{to:"/"},"Home")),l.a.createElement("li",{className:"item"},l.a.createElement(u.a,{to:"/projects"},"Projects")),l.a.createElement("li",{className:"item"},l.a.createElement(u.a,{to:"/about"},"About")),l.a.createElement("li",{className:"item"},l.a.createElement("a",{className:"link",href:""},"R\xe9sum\xe9"))))}}]),t}(n.Component),M=a(59),Y=a(56),J=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getProjects",value:function(){return B.map(function(e){return l.a.createElement("div",{className:"project-card",key:e.title,style:{backgroundImage:"url(".concat(e.img,")")}},l.a.createElement(u.a,{to:"/projects"+e.link},l.a.createElement("div",{className:"title-bkg"},l.a.createElement("h3",null,e.app),l.a.createElement("hr",null),l.a.createElement("h3",null,e.title),l.a.createElement("p",null,e.category))))})}},{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated spacing1"},l.a.createElement("h1",{className:"title"},"Projects"),l.a.createElement("h2",{className:"description"},"Projects include UX design, game design, rapid prototyping and developing."),l.a.createElement("div",{className:"project-cards"},this.getProjects()))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"Making Editing 3D Scenes Easier"),l.a.createElement("hr",null),l.a.createElement("h3",null,"BRIOVR"),l.a.createElement("p",null,"Solve the problem of placing objects in 3D space using 2D editor")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("p",null,"BRIOVR is an online platform for people with less 3d experiences and no coding experiences to create quick and short 3D interactive experience. We found that it\u2019s hard to tell where the object is when editing in 3D space in a 2D window. This project was to help users visualize where they are moving/placing objects while editing in BRIOVR builder."),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Challenge"),l.a.createElement("p",null,"The challenge for this project was to understand how our users use the 2D editor we provide via BRIOVR to create in a 3D space.")),l.a.createElement("h3",null,"Personas"),l.a.createElement("div",{className:"persona-section"},l.a.createElement("div",{className:"persona-card"},l.a.createElement("img",{src:E.a}),l.a.createElement("h4",null,"Tony"),l.a.createElement("h4",null,"Interaction Designer, Tech Savy"),l.a.createElement("h4",null,"34 Years Old"),l.a.createElement("p",null,"Tony works in the technology industry as a designer. ")),l.a.createElement("div",{className:"persona-card"},l.a.createElement("img",{src:b.a}),l.a.createElement("h4",null,"Amy"),l.a.createElement("h4",null,"Student"),l.a.createElement("h4",null,"20 Years Old"),l.a.createElement("p",null,"Amy is a college student that is learning new "))),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"For this project, I\u2019m working as the UI/UX designer. I was working with a developer to build this feature for BRIOVR."),l.a.createElement("h3",null,"Discovery"),l.a.createElement("p",null,"Market research: I researched apps and software that allows users to edit 3d worlds using a 2d ui, including game engines and 3d modeling software. I found that many of the apps are facing the same issue. Artists are used to using different view ports to understand the 3d space they are working in, but for people with less 3d experience, there is a learning curve in it, which is not what we want for brio."),l.a.createElement("h3",null,"Prototyping and tests"),l.a.createElement("p",null,"The prototype stage had 2 stages. Stage 1 is 2D prototyping. This stage contains the appearance and function of the indicator using Adobe XD.I took how people see 3d objects in real life as a reference and created a prototype imitate shadow. Stage 2 is 3D prototyping. This stage was done within brio using primitives and a plane to represent the bottom of the indicator. This stage also includes prototyping the animation."),l.a.createElement("p",null,"For the testing stage, I wanted to know if the indicator can:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Be visible with any background colour"),l.a.createElement("li",null,"Represent where the 3d object is (x,y,z direction)"),l.a.createElement("li",null,"Be easily understood by users with less 3d experiences")),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"From Soul Food to Fair Trade"),l.a.createElement("hr",null),l.a.createElement("h3",null,"FairTrade"),l.a.createElement("p",null,"Bridging the disconnection between newcomers and kind hearted locals")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("p",null,"This project is focusing on bridging the disconnection between newcomers/refugees that are in need of help and kind hearted people who wants to help by donating clothing and other supplies. The project started as a platform to help newcomer\u2019s families to earn some extra money by selling their home made food. We found that many people are using social media to sell their home made food. But when we dig deeper into market research, we found that there has already been platforms that are doing the same thing. So pivoted from Soul Food to Fair Trade. "),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"In this project I worked as a UX designer collaboration with another UI/UX designer and later on I used Unity to build a working prototype in Angel Hack 2018 Toronto. After winning the hackathon, I continued working on Fair Trade to shape the branding and user experience. "),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Challenge"),l.a.createElement("p",null,"The challenge for this project was to discover what we can create to bridge the gap between new comers and locals to help them adapt and ")),l.a.createElement("h3",null,"Discovery"),l.a.createElement("p",null),l.a.createElement("h3",null,"Prototyping and tests"),l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"Paper Prototype for Quick Play Test"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Break A Leg!"),l.a.createElement("p",null,"A party game that brings fun to all the players")),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("p",null," "),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"In this project I worked as a UX designer collaboration with another UI/UX designer and later on I used Unity to build a working prototype in Angel Hack 2018 Toronto. After winning the hackathon, I continued working on Fair Trade to shape the branding and user experience. "),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Challenge"),l.a.createElement("p",null,"The challenge for this project was to discover what we can create to bridge the gap between new comers and locals to help them adapt and ")),l.a.createElement("h3",null,"Discovery"),l.a.createElement("p",null),l.a.createElement("h3",null,"Prototyping and tests"),l.a.createElement("p",null),l.a.createElement("p",null),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("h3",null,"Takeaways")))}}]),t}(n.Component),K=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"getPersonas",value:function(){var e=this;return this.props.personas.map(function(t){return l.a.createElement("div",{key:t.name,className:"persona-card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("div",{className:"header-img"},l.a.createElement("img",{src:t.img})),l.a.createElement("div",{className:"header-text"},l.a.createElement("h4",null,t.name),l.a.createElement("h4",null,t.job),l.a.createElement("h4",null,t.age," Years Old"))),l.a.createElement("p",null,t.description),t.needs&&l.a.createElement("ul",null,e.getNeeds(t.needs)))})}},{key:"getNeeds",value:function(e){return e.map(function(e){return l.a.createElement("li",null,e)})}},{key:"render",value:function(){return this.getPersonas()}}]),t}(n.Component),Q=[{name:"Tina",age:"20",img:b.a,description:"Tina is a college student that is majored in Architecture. She comes to the site to see the temple in real life. Tina knows the site but she has never seen its full.",needs:["Details of the statues","Details of the writings on the ceiling","Details on peoms on the door"]},{name:"Ru Zhi",age:"65",img:E.a,description:"Ru Zhi comes to the temple with his grandson. He wants to show his grandchild the cultural heritage so he could learn about the history and appreciate the culture.",needs:["Cultural background (temple & buddahism)","Why FoGuang is important","Something fun for kids"]}],Z=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"header-home animated project-header-section"},l.a.createElement("h1",{className:"title"},"Telling the Story Behind Acient Temple with Digital Media"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Foguang Temple Touring Guide"),l.a.createElement("p",null,"Getting to know not only the audience but also the environment."),l.a.createElement("div",{className:"hero-img",style:{backgroundImage:"url(".concat(D.a,")")}})),l.a.createElement("div",{className:"project-content animated"},l.a.createElement("h2",null,"The Project"),l.a.createElement("hr",null),l.a.createElement("p",null,"This project was commissioned by our client - Cultural Heritage Conservation Center (Beijing, China) to tell the historical and cultural story behind the FoGuang Temple."),l.a.createElement("p",null,"We worked closely with our client to give the tourists onsite and visitors from online an indeepth experience via the web app we created."),l.a.createElement("ul",null,l.a.createElement("li",null,"Client: Cultural Heritage Conservation Center, Beijing GWY CO., LTD"),l.a.createElement("li",null,"Project Time: 2015 - 2016"),l.a.createElement("li",null,"Role: Product Designer / Developer, Client Contact Person")),l.a.createElement("h3",null,"Team and Roles"),l.a.createElement("p",null,"I worked on the UI/UX design and development with another designer. In addition to the app development, I also worked as the contact point between us and the client."),l.a.createElement("h3",null,"Design Process"),l.a.createElement("img",{className:"project-img project-img-small",src:A.a}),l.a.createElement("h2",null,"Discovery"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Problems & Challenges"),l.a.createElement("p",null,"Our client collect data in their process of conserve the Foguang Temple. They wanted to use the data to tell the story of Foguang Temple. Here are their problems:"),l.a.createElement("ul",null,l.a.createElement("li",null,"A huge amount of data is not being used"),l.a.createElement("li",null,"Wanted to tell the story, but didn't know where to start"),l.a.createElement("li",null,"The product needs to be accessible for both onsite and offsite visitors")),l.a.createElement("div",{className:"section-block"},l.a.createElement("h3",null,"Goal"),l.a.createElement("ul",null,l.a.createElement("li",null,"Find only one storyline to tell"),l.a.createElement("li",null,"To present the data within the story instead of a data library"),l.a.createElement("li",null,"The product should be accessible online and offline"))),l.a.createElement("h3",null,"The Location & The Visitors"),l.a.createElement("div",{className:"split-section"},l.a.createElement("div",{className:"split-left"},l.a.createElement("img",{className:"foguang-photo",src:P.a})),l.a.createElement("div",{className:"split-right"},l.a.createElement("p",{className:"first-par"},"FoGuang Temple located in ShanXi Province. Arounding the temple, there is a small village with some local restuarants opened for tourists. Inside the temple there wasn't much trace of modern technology of Internet. Because of the location, even phone network wasn't very strong."),l.a.createElement("p",null,"Most of the visitors to the site had knowledge of the temple: why it's important to the Chinese architectural history. While some visitors came to the site with a book telling the story of Liang SiChen finding the site in their hands."),l.a.createElement("p",null,"Most of the visitors came around the noon. Inside most of its halls, there wasn't artifical lights. The site was lighten up by the sunlight. The site closed early since later visitors won't be able to see anything."))),l.a.createElement("h3",null,"Personas"),l.a.createElement("div",{className:"persona-section"},l.a.createElement(K,{personas:Q})),l.a.createElement("h3",null,"Current Solutions"),l.a.createElement("h4",null,"For Client"),l.a.createElement("ul",null,l.a.createElement("li",null,"Indexed software for the database (not open to public)"),l.a.createElement("li",null,"Give presentations")),l.a.createElement("h4",null,"For Visitors"),l.a.createElement("ul",null,l.a.createElement("li",null,"Read books"),l.a.createElement("li",null,"Learn from their professors"),l.a.createElement("li",null,"Online research")),l.a.createElement("h2",null,"Prototyping and Tests"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Information Architecture"),l.a.createElement("img",{className:"project-img",src:N.a}),l.a.createElement("p",null,"We worked closely with our client to narraw down the storyline. "),l.a.createElement("ul",null,l.a.createElement("li",null,"One side of the story takes the temple as the main character and takes the audiences through its life."),l.a.createElement("li",null,"The other side of the story takes Liang SiCheng, the famous Chinese Architect as the main character.")),l.a.createElement("p",null,"The two storyline comes together when the temple was rediscovered by Liang SiCheng."),l.a.createElement("p",null,"After the two story merging together, we decided to take advantage of the data from our client by showing the 360 photos of current FoGuang Temple. "),l.a.createElement("p",null,"In this section, we tell the story that are related to the Temple, so that the audience can see the content within its context."),l.a.createElement("h3",null,"The Mockup"),l.a.createElement("p",null,"After creating the the IA diagram, we did a quick mockup for our client to review."),l.a.createElement("p",null,"This mockup represented the flow we wanted to go with: start with the background story "),l.a.createElement("h3",null,"VR or Not VR"),l.a.createElement("p",null,"Because we had a huge section that contains 360 photos, our client was considering it to be VR enabled."),l.a.createElement("p",null,"We take the exhibition display condition into considerations, here's list we presented to the client why we shouldn't do VR at the time:"),l.a.createElement("ul",null,l.a.createElement("li",null,"The exhibition is public, while VR is more of a personal experience"),l.a.createElement("li",null,"Hygiene concerns"),l.a.createElement("li",null,"Length and purpose of the experience: the experience was suppose to be educational, and audiences can take as long as they want to learn the story at their own pace.")),l.a.createElement("p",null,"We did not make the app an VR experience onsite, but we did want to enable VR experience for online visitors since some of them would be looking at the site at their home and they would have their own VR goggles and would have enough time to go through everything."),l.a.createElement("h3",null,"Future Development"),l.a.createElement("p",null,"At the end of the project, we made another purposal for future development since at the time, the technology that suited the senerio best wasn't available."),l.a.createElement("p",null,"In the future development purposal we included the following points:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Use AR to improve onsite user experiences")),l.a.createElement("h2",null,"Product"),l.a.createElement("hr",null),l.a.createElement("h3",null,"Detailed Design"),l.a.createElement("img",{src:S.a}),l.a.createElement("h3",null,"Result"),l.a.createElement("p",null,"The app can be found on the Google Chrome Store:"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/foguangapptestapp/nklaaogghgabcbdilaapmfbjlmbinmjp?authuser=1",target:"_blank"},"FoGuang App")),l.a.createElement("h2",null,"Takeaways"),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("h3",null,"Know the Audience & Location"),l.a.createElement("p",null,"This project involves physical setups. Learn the location well to tailor the solution that is suitable for the location is important."),l.a.createElement("h3",null,"Choose the Tech to Serve the Story & Experience"),l.a.createElement("p",null,"Technology is just tools. We should never design something for the technology because it's cool. We pickup the right technology for the solution we proposed."),l.a.createElement("h3",null,"Learn from the Client & Work with Them"),l.a.createElement("p",null,"Our client knows best in their fields. We brought our client into our design process. We showed our client our process on bi-weekly meetings and took their advice."))))}}]),t}(n.Component),$=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement(M.a,null,l.a.createElement(Y.a,{exact:!0,path:"/projects",component:J}),l.a.createElement(Y.a,{path:"/projects/briovr",component:_}),l.a.createElement(Y.a,{path:"/projects/fairtrade",component:q}),l.a.createElement(Y.a,{path:"/projects/break-a-leg",component:z}),l.a.createElement(Y.a,{path:"/projects/foguang-temple",component:Z})))}}]),t}(n.Component),ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"header-home animated"},l.a.createElement("h1",{className:"title"},"About"),l.a.createElement("h2",{className:"description"},"UX Designer - Creative Coder - Illustrator - Storyteller"))}}]),t}(n.Component),te=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("main",null,l.a.createElement("div",{className:"main"},l.a.createElement(M.a,null,l.a.createElement(Y.a,{exact:!0,path:"/",component:V}),l.a.createElement(Y.a,{path:"/projects",component:$}),l.a.createElement(Y.a,{path:"/about",component:ee}))))}}]),t}(n.Component),ae=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(H,null),l.a.createElement(te,null))}}]),t}(n.Component),ne=a(60),le=a(34),re=a.n(le),oe=a(57),ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),ce=Object(oe.a)(ie),se=re()();o.a.render(l.a.createElement(ne.a,{history:se,onUpdate:function(){return window.scrollTo(0,0)}},l.a.createElement(ce,null,l.a.createElement(ae,null))),document.getElementById("root"))}],[[36,2,1]]]);
//# sourceMappingURL=main.88e65fbb.chunk.js.map