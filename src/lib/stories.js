export let stories = [
    {id:"1",message: "Begin the adventure of rollin'.", img:"prison cell.png",choices:[{id:"2",text:"Begin"}]},
   {id:"2",message: "Otis is planing to escape jail, what will you do?", img:"prison cell.png",choices:[{id:"3",text:"snitch"},{id:"4",text:"join in"}]},
    {id:"3",message: "Wrong! Try again!", img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},
    {id:"4",message: "🤣🤣🤣🤣🤣", html: '<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]} ]