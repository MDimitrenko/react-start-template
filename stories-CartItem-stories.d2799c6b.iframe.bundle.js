"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[371],{"./src/stories/CartItem.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CartItem_stories});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var ItemContainer=styled_components_browser_esm.ZP.div(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  padding: 8px;\n  border: 1px solid #ccc;\n  border-radius: 8px;\n  margin-bottom: 8px;\n  font-family: system, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Segoe WP', Roboto, Ubuntu, Oxygen, Cantarell,\n    'Fira Sans', 'Helvetica Neue', Helvetica, 'Lucida Grande', 'Droid Sans', Tahoma, 'Microsoft Sans Serif', sans-serif;\n"]))),ItemImage=styled_components_browser_esm.ZP.img(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  width: 80px;\n  height: 80px;\n  border-radius: 8px;\n  margin-right: 16px;\n  object-fit: cover;\n"]))),ItemContent=styled_components_browser_esm.ZP.div(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),ItemHeader=styled_components_browser_esm.ZP.div(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  font-weight: bold;\n  margin-bottom: 8px;\n"]))),ItemDescription=styled_components_browser_esm.ZP.div(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  color: #888;\n  margin-bottom: 8px;\n"]))),ItemFooter=styled_components_browser_esm.ZP.div(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n"]))),ItemPrice=styled_components_browser_esm.ZP.span(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  font-weight: bold;\n  margin-left: auto;\n"]))),DeleteButton=styled_components_browser_esm.ZP.button(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n  background-color: transparent;\n  border: none;\n  color: red;\n  cursor: pointer;\n  margin-top: 8px;\n"]))),CartItem=function CartItem(_ref){var name=_ref.name,description=_ref.description,price=_ref.price,imageSrc=_ref.imageSrc,onDelete=_ref.onDelete;return(0,jsx_runtime.jsxs)(ItemContainer,{children:[(0,jsx_runtime.jsx)(ItemImage,{src:imageSrc,alt:name}),(0,jsx_runtime.jsxs)(ItemContent,{children:[(0,jsx_runtime.jsx)(ItemHeader,{children:name}),(0,jsx_runtime.jsxs)(ItemFooter,{children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(ItemDescription,{children:description}),(0,jsx_runtime.jsxs)(ItemPrice,{children:["$",price]})]}),(0,jsx_runtime.jsx)(DeleteButton,{onClick:onDelete,children:"Delete"})]})]})]})};CartItem.displayName="CartItem";const cartItem_cartItem=CartItem;try{cartItem.displayName="cartItem",cartItem.__docgenInfo={description:"",displayName:"cartItem",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},imageSrc:{defaultValue:null,description:"",name:"imageSrc",required:!0,type:{name:"string"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/cartItem/cartItem.tsx#cartItem"]={docgenInfo:cartItem.__docgenInfo,name:"cartItem",path:"src/components/cartItem/cartItem.tsx#cartItem"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const CartItem_stories={title:"Components/CartItem",component:cartItem_cartItem,tags:["autodocs"]};var Default={args:{name:"Backpack",description:"Lightweight Casual Laptop Backpack with USB Charging Port For for Men and Women, Daily use backpack, Backpack for gym (Full Black)",price:19.99,imageSrc:"https://media.wired.com/photos/6452efd60b67c709cbcaa75b/2:3/w_818,h_1227,c_limit/Jumper-Photo_Red_Front_18c2a0e2-5a49-4afe-83d3-04d2e31328a9_1296x.png"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    name: 'Backpack',\n    description: 'Lightweight Casual Laptop Backpack with USB Charging Port For for Men and Women, Daily use backpack, Backpack for gym (Full Black)',\n    price: 19.99,\n    imageSrc: 'https://media.wired.com/photos/6452efd60b67c709cbcaa75b/2:3/w_818,h_1227,c_limit/Jumper-Photo_Red_Front_18c2a0e2-5a49-4afe-83d3-04d2e31328a9_1296x.png'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]}}]);