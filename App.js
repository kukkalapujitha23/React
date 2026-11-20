const parent = React.createElement('div',{id:'parentdiv'},[React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'I am h1 tag'),React.createElement('p',{},'This is paragraph tag')]),
        React.createElement('div',{id:'child'},
        [React.createElement('h1',{},'I am h1 tag'),React.createElement('p',{},'This is paragraph tag')])
    ]
    )




// const heading = React.createElement('h1',{id:'heading',xyz:'abc'},"Hello world from React!")
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);
console.log(parent);

// console.log(heading);




 