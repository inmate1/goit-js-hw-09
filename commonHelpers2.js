import"./assets/reset-4888a376.js";/* empty css                      */const a=document.querySelector(".feedback-form"),r=a.querySelector("input"),n=a.querySelector("textarea"),s="feedback-form-state";a.addEventListener("input",u);a.addEventListener("submit",i);function u(e){const t=r.value.trim(),c=n.value.trim(),m={email:t,message:c};localStorage.setItem(s,JSON.stringify(m))}const l=localStorage.getItem(s);if(l){const e=JSON.parse(l);r.value=e.email,n.value=e.message}function i(e){e.preventDefault();const t=e.target.elements;t.email.value.trim()===""||t.message.value.trim()===""||(console.log({email:t.email.value.trim(),message:t.message.value.trim()}),e.target.reset(),localStorage.removeItem(s))}const o=a.querySelector("button");o.onmouseover=()=>{o.style.backgroundColor="#6c8cff"};o.onmouseout=()=>{o.style.backgroundColor="#4e75ff"};r.addEventListener("click",d);function d(e){r.setAttribute("placeholder","Type area")}
//# sourceMappingURL=commonHelpers2.js.map