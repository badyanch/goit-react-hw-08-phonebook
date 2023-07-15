"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[482],{5482:function(n,e,o){o.r(e),o.d(e,{default:function(){return G}});var t,r,i,c,a,s,l,d,p,u,h,m,f=o(1413),x=o(2791),g=o(5048),b=o(1134),w=o(5218),Z=o(4695),y=o(6727),j=o(7062),k=o(9273),v=o(6009),P=o(6004),_=o(585),z=o(168),S=o(1087),T=o(6444),C=T.ZP.p(t||(t=(0,z.Z)(["\n  display: block;\n  margin-bottom: 36px;\n  font-weight: 700;\n  font-size: 14px;\n  line-height: 1.4;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryText})),E=T.ZP.form(r||(r=(0,z.Z)(["\n  max-width: 353px;\n"]))),F=T.ZP.label(i||(i=(0,z.Z)(["\n  display: block;\n  margin-bottom: 24px;\n"]))),I=T.ZP.span(c||(c=(0,z.Z)(["\n  display: block;\n  margin-bottom: 5.5px;\n  font-size: 14px;\n  line-height: 1.4;\n"]))),Y=T.ZP.input(a||(a=(0,z.Z)(["\n  display: block;\n  padding: 15px 20px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 1.4;\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 15px;\n  outline: none;\n\n  &::placeholder {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.4;\n    color: ",";\n  }\n\n  &:focus {\n    border-color: ",";\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.inputBorder}),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.accent})),q=T.ZP.button(s||(s=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 22px;\n  padding: 14px;\n  width: 100%;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.5;\n  text-transform: uppercase;\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 12px;\n  transition: background-color\n      ",",\n    color ",";\n  cursor: pointer;\n\n  &:hover:not(:disabled) {\n    color: ",";\n    background-color: ",";\n  }\n\n  &:disabled {\n    opacity: 0.8;\n  }\n"])),(function(n){return n.theme.colors.primary}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.primary})),R=T.ZP.span(l||(l=(0,z.Z)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 4px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.colors.secondaryText})),V=(0,T.ZP)(S.rU)(d||(d=(0,z.Z)(["\n  position: relative;\n  text-decoration: none;\n  color: ",";\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 1.5px;\n    left: 0;\n    display: block;\n    height: 1px;\n    width: 100%;\n    background-color: ",";\n    opacity: 0;\n    transition: opacity\n      ",";\n  }\n\n  &:hover::after {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){var e=n.theme;return"".concat(e.duration," ").concat(e.timingFunction)})),A=T.ZP.span(p||(p=(0,z.Z)(["\n  padding: 2px;\n  font-size: 12px;\n  line-height: 1.5;\n  color: ",";\n"])),(function(n){return n.theme.colors.errorText})),B=o(184),D=y.Ry().shape({email:y.Z_().max(255).matches(_._e.email,_.N3.email).required(),password:y.Z_().min(8).max(255).required()}),L={email:"",password:""},N=function(){var n,e,o=(0,b.cI)({defaultValues:L,resolver:(0,Z.X)(D)}),t=o.register,r=o.handleSubmit,i=o.reset,c=o.formState.errors,a=(0,g.I0)(),s=(0,v.a)(),l=s.isLoading,d=s.error;(0,x.useEffect)((function(){d&&(w.Am.error("Something went wrong. Your password or email may have been entered incorrectly."),a((0,j.fw)()))}),[d,a]);return(0,B.jsxs)(E,{autoComplete:"off",noValidate:!0,onSubmit:r((function(n){!function(n){a((0,k.Ib)(n)),i()}(n)})),children:[(0,B.jsx)(C,{children:"Enter your email and password to sign in"}),(0,B.jsxs)(F,{children:[(0,B.jsx)(I,{children:"Email"}),(0,B.jsx)(Y,(0,f.Z)((0,f.Z)({},t("email")),{},{type:"email",placeholder:"Your email address"})),c.email&&(0,B.jsx)(A,{children:null===(n=c.email)||void 0===n?void 0:n.message})]}),(0,B.jsxs)(F,{children:[(0,B.jsx)(I,{children:"Password"}),(0,B.jsx)(Y,(0,f.Z)((0,f.Z)({},t("password")),{},{type:"password",placeholder:"Your password"})),c.password&&(0,B.jsx)(A,{children:null===(e=c.password)||void 0===e?void 0:e.message})]}),(0,B.jsx)(q,{type:"submit",disabled:l,children:l?(0,B.jsx)(P.a,{width:"15",height:"15",color:"#fff"}):"Sing in"}),(0,B.jsxs)(R,{children:["Don't have an account?",(0,B.jsx)(V,{to:"/register",children:"Sign up"})]})]})},U=T.ZP.section(u||(u=(0,z.Z)(["\n  padding-top: 188px;\n  padding-left: 406px;\n  padding-right: 24px;\n"]))),W=T.ZP.h1(h||(h=(0,z.Z)(["\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  border: 0;\n  padding: 0;\n  clip: rect(0 0 0 0);\n  clip-path: inset(50%);\n  margin: -1px;\n"]))),X=T.ZP.p(m||(m=(0,z.Z)(["\n  margin-bottom: 8.5px;\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1.3;\n  color: ",";\n"])),(function(n){return n.theme.colors.accent})),G=function(){return(0,B.jsxs)(U,{children:[(0,B.jsx)(W,{children:"Register form"}),(0,B.jsx)(X,{children:"Welcome!"}),(0,B.jsx)(N,{})]})}}}]);
//# sourceMappingURL=482.3137ccaa.chunk.js.map