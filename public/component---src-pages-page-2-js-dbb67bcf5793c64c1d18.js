(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(142),c=a(154),o=a(144);t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(141),s=a.n(o);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(143),d=a.n(u);a.d(t,"PageRenderer",function(){return d.a});var l=a(32);a.d(t,"parsePath",function(){return l.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},143:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},144:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(156),u=a.n(s),d=a(142);function l(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=l;var p="1025518380"},145:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{aspectRatio:1.6232785428698355,src:"/static/f191e761abc0cc19d49c68dbaa6de202/ea838/wedding_img.jpg",srcSet:"/static/f191e761abc0cc19d49c68dbaa6de202/62966/wedding_img.jpg 1040w,\n/static/f191e761abc0cc19d49c68dbaa6de202/0fcdb/wedding_img.jpg 2080w,\n/static/f191e761abc0cc19d49c68dbaa6de202/ea838/wedding_img.jpg 4160w,\n/static/f191e761abc0cc19d49c68dbaa6de202/41280/wedding_img.jpg 6240w,\n/static/f191e761abc0cc19d49c68dbaa6de202/325a1/wedding_img.jpg 7308w",sizes:"(max-width: 4160px) 100vw, 4160px"}}}}}},146:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(52),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=u},147:function(e,t,a){},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(e,t,a){},150:function(e,t,a){e.exports=a.p+"static/slogan-transparent-a17aaefb2a53452d1212688b68935d1c.png"},151:function(e,t,a){e.exports=a.p+"static/logo-transparent-d6be5d625cfac9c2c4c9f7c55e62e55d.png"},152:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),c=a.n(i),o=a(145),s=a(142),u=(a(147),a(155)),d=a.n(u),l=function(e){var t=e.children;return c.a.createElement(s.StaticQuery,{query:"1854945152",render:function(e){var a=e.placeholderImage.childImageSharp.fluid;return c.a.createElement(d.a,{Tag:"section",className:"backGroundImg",backgroundColor:"white",fluid:a},t)},data:o})},p=a(144),m=a(4),f=a.n(m),g=(a(149),function(){return c.a.createElement("div",{className:"menu_desktop"},h.map(function(e){return c.a.createElement("div",null,c.a.createElement(s.Link,{to:e},c.a.createElement("a",{href:e},e.charAt(0).toUpperCase()+e.slice(1))))}))}),h=["servicios","equipo","eventos","contacto"];g.propTypes={siteTitle:f.a.string},g.defaultProps={siteTitle:""};var y=g,w=a(150),b=a.n(w),v=a(151),E=a.n(v),k=(a(152),a(153),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=b.a,t=E.a;return c.a.createElement("div",{className:"wrapper"},c.a.createElement(p.a,{title:"Home",keywords:["gatsby","application","react"]}),c.a.createElement("div",{style:{height:"11em",display:"flex"}},c.a.createElement("img",{style:{width:"5em",height:"10em"},src:t,alt:"InterAudio"}),c.a.createElement(y,null)),c.a.createElement("div",null,c.a.createElement("div",{className:"slogan"},c.a.createElement("img",{style:{width:"30em"},src:e,alt:"Sound System Rental"}),c.a.createElement("h4",{className:"sub_slogan"},"Sonorización Profesional"))),c.a.createElement(l,{style:{position:"absolute"}}))},t}(c.a.Component));t.a=k}}]);
//# sourceMappingURL=component---src-pages-page-2-js-dbb67bcf5793c64c1d18.js.map