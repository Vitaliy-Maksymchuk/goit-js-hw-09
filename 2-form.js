import"./assets/styles-BJWGXDxY.js";const e={email:"",message:""},a=document.querySelector(".feedback-form"),s="feedback-form-state",m=a.elements.email,o=a.elements.message;a.addEventListener("input",i);a.addEventListener("submit",r);function n(){const t=localStorage.getItem(s);if(t){const l=JSON.parse(t);e.email=l.email||"",e.message=l.message||"",m.value=e.email,o.value=e.message}}function i(t){e[t.target.name]=t.target.value.trim(),localStorage.setItem(s,JSON.stringify(e))}function r(t){if(t.preventDefault(),!e.email||!e.message)return alert("Fill please all fields");console.log(e),localStorage.removeItem(s),e.email="",e.message="",a.reset()}n();
//# sourceMappingURL=2-form.js.map