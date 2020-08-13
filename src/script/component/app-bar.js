class AppBar extends HTMLElement {
    constructor () {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }
    render () {
        this.shadowDOM.innerHTML = `
        <style>
        

        @import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
        @media screen and (max-width:670px) {
            .right-menu {
                display:none;
            }
        }
        .fa {
            margin-right: 7px;
        }
        .header-img {
            height:50px;
            position:absolute;
            top:6px;
            left: 5px;
        }
        .right-menu{
            float:right;
            margin:0 auto;
            margin-right:50px;
        }
        .sub-menu{
            display:inline-block;
            margin: 0px;
            opacity:0.7;
            padding: 0px 12px;
        }
        a{
            text-decoration:none;
            color:white;
        }
        .sub-menu:hover{
            border-bottom:solid 4px rgb(89, 118, 172);
            transition: all;
            opacity:1;
        }
        </style>

        <img class="header-img" src="meal.png"><span style="font-size:25px; 
          padding-left:60px;
          font-weight: bolder; ">CariMakan.com</span>
          <div class="right-menu">
              <a onclick="alert('Maaf saat ini, menu yang anda pilih belum tersedia! ')" href=# class="sub-menu"><span class="fa fa-paper-plane"></span>Tentang Kami</a>
              <a onclick="alert('Maaf saat ini, menu yang anda pilih belum tersedia! ')" href=# class="sub-menu"><span class="fa fa-bell"></span>Updates</a>
              <a onclick="alert('Maaf saat ini, menu yang anda pilih belum tersedia! ')" href=# class="sub-menu"><span class="fa fa-commenting"></span>Beri Masukan</a>
          </div>
        `;
    }
}

customElements.define("app-bar", AppBar);