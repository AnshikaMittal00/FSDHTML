const parent=document.getElementById("root");
console.log(parent);
const root=ReactDOM.createRoot(parent);
// const h2=React.createElement("h2",{style:{color:'cyan'}},"ABES");
// const l1=React.createElement("li",{},"orange");
// const l2=React.createElement("li",{},"Mango");
// const ul=React.createElement("ul",{},[l1,l2]);
// root.render(ul);
//jsx
const h2=<h2>hello</h2>;
const l1=<li>orange</li>
const l2=<li>mango</li>
const ul=<ul style={{color:'red'}}>{l1}{l2}</ul>
const container=(
    <div style={{backgroundColor:'pink'}}>
        {h2}
        <div>
            {ul}
        </div>
    </div>
)
root.render(container);