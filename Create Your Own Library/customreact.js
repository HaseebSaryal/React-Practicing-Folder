const root = document.querySelector("#root")


const reactElement  = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank"
    },
    children : "Click Here"
}
customRender(root, reactElement)
// function  customRender(root, reactElementElement){
//     const dom = document.createElement(reactElement.type)
//     dom.innerHTML = reactElement.children;
//     dom.setAttribute("href", reactElement.props. href)
//     dom.setAttribute("target", reactElement.props. target)
    

//     root.appendChild(dom)
// }

function customRender(root, reactElement){
    createDom = document.createElement(reactElement.type)
    createDom.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === "children") continue; 
           createDom.setAttribute(prop, reactElement.props[prop])

        }
        root.appendChild(createDom)
        
        
   
    }








