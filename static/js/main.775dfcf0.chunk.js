(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},20:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var i=a(7),n=a.n(i),s=(a(19),a(12)),c=a(8),r=a(9),l=a(13),o=a(11),m=a(1),d=a.n(m),j=(a(20),a(14)),b=(a(21),a(22),a(0)),h=function(e){var t=e.title,a=e.description,i=e.imgUrl,n=e.imdbUrl;return Object(b.jsxs)("div",{className:"card",children:[Object(b.jsx)("div",{className:"card-image",children:Object(b.jsx)("figure",{className:"image is-4by3",children:Object(b.jsx)("img",{src:i,alt:"Film logo"})})}),Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("div",{className:"media",children:[Object(b.jsx)("div",{className:"media-left",children:Object(b.jsx)("figure",{className:"image is-48x48",children:Object(b.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(b.jsx)("div",{className:"media-content",children:Object(b.jsx)("p",{className:"title is-8",children:t})})]}),Object(b.jsxs)("div",{className:"content",children:[a,Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:n,children:"IMDB"})]})]})]})},u=function(e){var t=e.movies;return Object(b.jsx)("div",{className:"movies",children:t.map((function(e){return Object(b.jsx)(h,Object(j.a)({},e),e.imdbId)}))})},O=a(2),g=a(3),p=a.n(g),f=(a(24),function(e){var t=e.addMovie,a=Object(m.useState)(""),i=Object(O.a)(a,2),n=i[0],s=i[1],c=Object(m.useState)(""),r=Object(O.a)(c,2),l=r[0],o=r[1],d=Object(m.useState)(""),j=Object(O.a)(d,2),h=j[0],u=j[1],g=Object(m.useState)(""),f=Object(O.a)(g,2),v=f[0],w=f[1],_=Object(m.useState)(""),x=Object(O.a)(_,2),N=x[0],M=x[1],y=Object(m.useState)(!1),U=Object(O.a)(y,2),S=U[0],T=U[1],B=Object(m.useState)(!1),I=Object(O.a)(B,2),k=I[0],z=I[1],A=Object(m.useState)(!1),D=Object(O.a)(A,2),V=D[0],Y=D[1],C=Object(m.useState)(!1),Z=Object(O.a)(C,2),F=Z[0],X=Z[1],P=Object(m.useState)(!1),E=Object(O.a)(P,2),L=E[0],J=E[1],G=Object(m.useState)(!0),Q=Object(O.a)(G,2),R=Q[0],W=Q[1],$=Object(m.useState)(!0),H=Object(O.a)($,2),q=H[0],K=H[1],ee=/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;return Object(b.jsxs)("form",{className:"NewMovie",onSubmit:function(e){(e.preventDefault(),T(!n),z(!l),Y(!h),X(!v),J(!N),[n,l,h,v,N].every((function(e){return e.length>0}))&&(ee.test(h)||ee.test(v)))&&(t({title:n,description:l,imgUrl:h,imdbUrl:v,imdbId:N}),s(""),o(""),u(""),w(""),M(""))},children:[Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsx)("input",{className:p()("form__item",{"form__item--warning":S}),type:"text","data-cy":"form-title",placeholder:"Title",value:n,onChange:function(e){!function(e){s(e.target.value),T(!1)}(e)}}),S&&Object(b.jsx)("span",{className:"warning",children:"Please enter the title"})]}),Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsx)("input",{className:p()("form__item",{"form__item--warning":k}),type:"text","data-cy":"form-description",placeholder:"Description",value:l,onChange:function(e){!function(e){o(e.target.value),z(!1)}(e)}}),k&&Object(b.jsx)("span",{className:"warning",children:"Please enter the description"})]}),Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsx)("input",{className:p()("form__item",{"form__item--warning":V||!R}),type:"text","data-cy":"form-imgUrl",placeholder:"imgUrl",value:h,onChange:function(e){!function(e){u(e.target.value),Y(!1)}(e),function(e){h&&!ee.test(e.target.value)?W(!1):W(!0)}(e)}}),V&&Object(b.jsx)("span",{className:"warning",children:"Please enter the imgUrl"}),!R&&Object(b.jsx)("span",{className:"warning",children:"Please enter correct url"})]}),Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsx)("input",{className:p()("form__item",{"form__item--warning":F||!q}),type:"text","data-cy":"form-imdbUrl",placeholder:"imdbUrl",value:v,onChange:function(e){!function(e){w(e.target.value),X(!1)}(e),function(e){v&&!ee.test(e.target.value)?K(!1):K(!0)}(e)}}),F&&Object(b.jsx)("span",{className:"warning",children:"Please enter the imdbUrl"}),!q&&Object(b.jsx)("span",{className:"warning",children:"Please enter correct url"})]}),Object(b.jsxs)("div",{className:"form__container",children:[Object(b.jsx)("input",{className:p()("form__item",{"form__item--warning":L}),type:"text","data-cy":"form-imdbId",placeholder:"imdbId",value:N,onChange:function(e){!function(e){M(e.target.value),J(!1)}(e)}}),L&&Object(b.jsx)("span",{className:"warning",children:"Please enter the imdbId"})]}),Object(b.jsx)("button",{className:"form__button",type:"submit",children:"Add movie"})]})}),v=a(10),w=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(c.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={movies:v},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(s.a)(e.movies),[t])}}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.movies;return Object(b.jsxs)("div",{className:"page",children:[Object(b.jsx)("div",{className:"page-content",children:Object(b.jsx)(u,{movies:e})}),Object(b.jsx)("div",{className:"sidebar",children:Object(b.jsx)(f,{addMovie:this.addMovie})})]})}}]),a}(d.a.Component);n.a.render(Object(b.jsx)(w,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.775dfcf0.chunk.js.map