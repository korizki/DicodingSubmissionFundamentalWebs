class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render () {
        this.shadowDOM.innerHTML = 
        `<style>
        @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
        


        .fa {
            margin-right: 7px;
        }
        button:hover{
            opacity:1;
            cursor: pointer;
        }
        button:active{
            position:relative;
            top: 4px;
        }
        *{
            box-sizing:border-box;
        }
        .sub{
            font-size:20px;
            font-weight:100;        
        }
        .result {
            background-color:rgb(220, 220, 221);
            width:30%;
            border-radius:10px;
            padding:20px;
            color:rgb(75, 74, 74);
            margin: 2% 1.5% auto;
            float:left;     
        }
        hr{
            margin:5px 0px;        
        }
        .content-title {
            font-size: 25px;
            text-align: left;
            margin: 0;       
        }
        .item-desc {
            font-size:13px; text-align:justify;  
            height:110px;
            overflow: auto;   
        }

        .image-content > img {
            border-radius:25px;
            margin: 15px 0px;
            width:100%;
            height:250px;
            object-fit:cover;
            object-position: center;
            box-shadow: 0 4px 8px 0 rgb(168, 168, 168);
            border: solid 1px rgba(177, 177, 177, 0.609);
            padding:10px;       
        }
        .action-panel {
            margin-top:15px;
            text-align: left;
            font-size: 14px;        
        }
        .content-button {
            border-radius: 5px;
            background-color: rgb(62, 150, 204);
            color: white;
            font-size: 12px;
            padding: 8px 10px;
            margin-left: 0px;
            width: 100%;
            box-shadow: 0px 4px 0px 0px rgb(29, 97, 126);
            margin-top:10px;
            border:none;        
        }
        .daerah {
            font-style: italic;     
        }

        @media screen and (max-width:1050px) {
            .result {
                width: 40%;
                margin: 0 auto;
                margin: 2% 5%;
                float:left;
            }
            .item-desc {
                font-size:13px; text-align:justify;  
                height:150px;
                overflow: auto;   
            }
            .content-button {
                margin-top: 10px;
                width: 100%;
                margin-left:0px;
            }
            .content-title {
                font-size: 20px;       
            }
        }
        @media screen and (max-width:670px) {
    
            .result {
                width: 80%;
                font-size:12px;
                margin: 0 auto;
                float:none;
                margin-bottom: 20px;
            }
        
            .image-content > img {
                height:200px;
            }
            .item-desc {
                font-size: 12px;
            }
            .content-button {
                margin-top: 10px;
                width: 100%;
                margin-left:0px;
            }
            .item-desc { 
                height:100px;
                overflow: auto;   
            }

        }
        </style>

        <div class="result">
            <div class="image-content">
                <img class="image-content" src="${this._meal.image}">
            </div>
            <h3 class="content-title">${this._meal.name}</h3>
            <hr></hr>
            <p class="item-desc">${this._meal.desc}</p>
            <div class="action-panel"><span class="fa fa-map-marker"></span><span class="daerah">Makanan Khas ${this._meal.city} </span>
            <button class="content-button"><span class="fa fa-shopping-cart"></span> Pesan </button>
        </div>`; 
    }
}
customElements.define("meal-item", MealItem);
