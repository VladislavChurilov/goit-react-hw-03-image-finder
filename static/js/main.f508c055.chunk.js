(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={button:"Button_button__724PK",Loader:"Button_Loader__3tMY5"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__WJXai",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__18XlQ"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__1LkzJ",modal:"Modal_modal__1yF2z"}},24:function(e,t,a){e.exports={conteiner:"Conteiner_conteiner__2Rbg2"}},25:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2sGwR"}},31:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(9),c=a.n(o),i=(a(31),a(15)),l=a(4),s=a(5),u=a(7),h=a(6),m=a(24),d=a.n(m),g=a(0),b=function(e){var t=e.children;return Object(g.jsx)("div",{className:d.a.conteiner,children:t})},y=a(10),j=a.n(y),p=function(e){var t=e.onClick;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),Object(g.jsx)("button",{type:"button",onClick:t,className:j.a.button,children:"Load more"})},f=a(25),O=a.n(f),v=a(12),_=a.n(v),S=function(e){var t=e.url,a=e.name,r=e.onClick;return Object(g.jsx)("li",{className:_.a.ImageGalleryItem,children:Object(g.jsx)("img",{className:_.a.ImageGalleryItemImage,src:t,alt:a,onClick:r})})},I=function(e){var t=e.gallery,a=e.bigImage;return Object(g.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.id,r=e.webformatURL,n=e.user,o=e.largeImageURL;return Object(g.jsx)(S,{name:n,url:r,onClick:function(){return a(o)}},t)}))})},x=(a(33),a(26)),w=a.n(x),k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)(w.a,{className:j.a.Loader,type:"ThreeDots",color:"#00BFFF",height:80,width:80,timeout:3e3})}}]),a}(r.Component),C=a(13),F=a.n(C),L=document.querySelector("#modal-root"),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).hendleKeyDown=function(t){"Escape"===t.code&&e.props.showModal()},e.hendleBecdropClick=function(t){t.currentTarget===t.target&&e.props.showModal()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(g.jsx)("div",{className:F.a.overlay,onClick:this.hendleBecdropClick,children:Object(g.jsx)("div",{className:F.a.modal,children:this.props.children})}),L)}}]),a}(r.Component),G=a(8),M=a.n(G),N=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:M.a.Searchbar,children:Object(g.jsxs)("form",{className:M.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(g.jsx)("button",{type:"submit",className:M.a.SearchFormButton,children:Object(g.jsx)("span",{className:M.a.SearchFormButtonLabel,children:"Search"})}),Object(g.jsx)("input",{className:M.a.SearchFormInput,type:"text",autoComplete:"off",value:this.state.query,onChange:this.handleChange,autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(r.Component),P=a(14),Q=a.n(P),q=a(2),D=a.n(q);Q.a.defaults.baseURL="https://pixabay.com/api/";var R=function(e){var t=e.searchQuery,a=void 0===t?"":t,r=e.currentPage,n=void 0===r?1:r;return Q.a.get("?q=".concat(a,"&page=").concat(n,"&key=").concat("20658315-dd3dbd2a0550adf6d5ae10318","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};R.propTypes={searchQuery:D.a.string.isRequired,currentPage:D.a.number.isRequired};var T=R,E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={gallery:[],currentPage:1,searchQuery:"",largeImage:"",isLoading:!1,showModal:!1,error:null},e.onChangeQuery=function(t){e.setState({searchQuery:t,currentPage:1,gallery:[],error:null})},e.fetchPictures=function(){var t=e.state,a=t.currentPage,r={searchQuery:t.searchQuery,currentPage:a};e.setState({isLoading:!0}),T(r).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(i.a)(e.gallery),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(t){return e.state({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.getBigImage=function(t){e.setState({largeImage:t}),e.toggleModal()},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.searchQuery!==this.state.searchQuery&&this.fetchPictures()}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading,r=e.showModal,n=e.largeImage,o=e.error,c=t.length>0&&!a;return Object(g.jsxs)(b,{children:[o&&Object(g.jsx)("h1",{children:o}),Object(g.jsx)(N,{onSubmit:this.onChangeQuery}),Object(g.jsx)(I,{gallery:t,bigImage:this.getBigImage}),a&&Object(g.jsx)(k,{}),c&&Object(g.jsx)(p,{onClick:this.fetchPictures}),r&&Object(g.jsx)(B,{showModal:this.getBigImage,children:Object(g.jsx)("img",{src:n,alt:"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f"})})]})}}]),a}(r.Component);c.a.render(Object(g.jsx)(n.a.StrictMode,{children:Object(g.jsx)(E,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__u-YGp",SearchForm:"Searchbar_SearchForm__1cYDs",SearchFormButton:"Searchbar_SearchFormButton__pOTmC",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3ehr7",SearchFormInput:"Searchbar_SearchFormInput__18AoT"}}},[[72,1,2]]]);
//# sourceMappingURL=main.f508c055.chunk.js.map