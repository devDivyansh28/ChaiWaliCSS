const targets = document.body.querySelectorAll("*")
// console.log(targets)


const properties = {
    m : "margin",
    p : "padding",
    bg : "background-color",
    clr : "color",
    border : "border"
}

const toAddPx = ["margin","padding"]
targets.forEach((target)=>{
    
    target.classList.forEach((cls)=>{
            if(cls.startsWith("do-")){
                
                const toDo = cls.split("-")
                console.log(toDo)
                let [doit , property , ...value] = [...toDo]
                // if( toAddPx.includes(properties[property])){
                //     value = value+"px"
                // }
                console.log(doit)
                console.log(property)
                console.log(value.join(" "))
                console.log(value.join(" "))
                // console.log(doit , property , value)
                // console.log(`${properties[property]}:${value}`);

                // target.setAttribute("style",`${properties[property]}: ${value}`) This is overriding old styles okk

               target.style[properties[property]] = value.join(" ")
            }
    })
})


     // *******Basic POC i have applied but it will give only direct child*********
// const elements = document.body.childNodes

// elements.forEach((node)=>{
    
//     if( node.nodeType === 1){
//         console.log(node)
//     } 
// })

// document.body.setAttribute("style","min-height : 100vh")

// element.setAttribute("style","margin: 400 200")