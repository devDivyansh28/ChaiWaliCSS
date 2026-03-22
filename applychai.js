import  properties  from "./customProperty.js";


(function addChaiWaliCss(){
  const targets = document.body.querySelectorAll("*");

  function classParser(cls) {
    const chaiclass = cls.trim().split("-");
    let [_, property, ...value] = chaiclass;
    return { property, value };
  }

  targets.forEach((target) => {

    target.classList.forEach((cls) => {

      if (cls.startsWith("chai-")) {

        const { property, value } = classParser(cls);

        target.style[properties[property] || property] = Array.isArray(value)? value.join(" "): value;
      }
    });
  });
}());


