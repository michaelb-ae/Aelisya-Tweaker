const style = document.createElement('style');
style.textContent = `
::-webkit-scrollbar{
    width:8px!important;
    height:8px!important
}
::-webkit-scrollbar-track{
    background-color:#3B3B3B!important
}
::-webkit-scrollbar-thumb{
    border-radius:4px!important;
    background-color:#7D7D7D!important
}
::-webkit-scrollbar-thumb:vertical:active{
    background:#7D7D7D!important
}
::-webkit-scrollbar-thumb:hover{
    background-color:#979797!important
}
@media(prefers-color-scheme:light){
    ::-webkit-scrollbar-track{
        background-color:#F7F7F7!important
    }
    ::-webkit-scrollbar-thumb{
        background-color:#8D8D8D!important
    }
    ::-webkit-scrollbar-thumb:vertical:active{
        background:#8D8D8D!important
    }
    ::-webkit-scrollbar-thumb:hover{
        background-color:#A7A7A7!important
    }
}
`;
document.head.append(style);