// console.log('heyyy')
const container=document.getElementById('container');

const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red'}},'welcome to react js')
const h1=React.createElement('h1',{style:{color:'blue',backgroundColor:'pink'}},'welcome to react js')
const img=React.createElement('img',{src:'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhvcnxlbnwwfHwwfHx8MA%3D%3D',style:{height:'100',width:'300'}});

 const div2='<div></div>';




const div=React.createElement('div',{},img,h1,h2)

root.render(div);
