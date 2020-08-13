


class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback () {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render () {
        this.shadowDOM.innerHTML = `
        <style>
        @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
        h3 {
            font-size: 40px;
            margin-bottom:20px;
        }
        .sub {
            font-size:25px;
        }
        
        .fa {
            margin-right: 7px;
        }
        .title {
            padding-top: 90px;
            font-size:30px;
            margin-bottom:10px;
            color:white;
            text-align: center;
        }
        .sub {
            text-align: center;
            color:white;
        }
        .pencarian {
            margin:0 auto;
            width:40%;
            border-radius:10px;
            margin-top:30px;
            background-color:rgb(240, 240, 240);
            height:60px;
            margin-bottom:40px;
            text-align: center;
        }
        input{
            padding:12px 20px;
            font-size:14px;
            background-color:rgba(255, 255, 255, 0);
            margin: 7px 10px 0px 10px;
            width:60%;
            border:none;
            border-bottom:solid 2px cornflowerblue;
        }
        button{
            width:15%;
            background-color:rgb(44, 125, 231);
            color:white;
            padding:10px 10px;
            font-size:14px;
            border:none;
            border-radius:8px;
            opacity:0.8;
            box-shadow:0px 4px 0px 0px rgb(18, 53, 95);
        }
        button:hover{
            opacity:1;
            cursor: pointer;
        }
        button:active{
            position:relative;
            top: 4px;
        }
        @media screen and (max-width:1000px) {
            .pencarian{
                width:50%
            }
            input {
                width: 50%;
             }
             button {
                 width: 20%;
             }
             h3 {
                 font-size:30px;
             }
             .sub {
                 font-size:20px
             }
        }
        @media screen and (max-width:690px) {
            h3 {
                font-size: 25px;
                margin-bottom:15px;
            }
            .sub {
                font-size:15px;
            }
            .pencarian {
                height: 50px;
                width: 70%;
            }
            input {
                margin-left: 10px;
                padding: 7px 15px 5px 15px;
                font-size: 14px;
                width: 60%;
                margin-top: 10px;
            }
            button {
                width: 15%;
                font-size: 12px;
                padding: 6px 10px;
                border-radius: 5px;
            }
        }
        
        </style>

        <div id="search-container">
            <div class="title"><h3>Temukan berbagai pilihan Kuliner Nusantara</h3></div>
            <div class="sub">Mulailah mencari referensi kuliner yang anda inginkan!</div>
            <div class="pencarian">
                <input id="searchElement" type="text">
                <button id="searchButtonElement"><span style="font-size: 15px; margin-right: 0px;" class="fa fa-search"></span></button>
            </div>
        </div>    
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}
customElements.define("search-bar", SearchBar);

/* var input = document.getElementById("searchElement");
input.addEventListener("keyup", function(event) {
    if(characterCode ==13) {
        console.log("dipencet");
    }
});*/