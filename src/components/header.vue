<template>
    
    <div class="sgHeader2">
        <div class="logoIconWrap">
            <a href="#">
                <i class="commIcon logoSmallIcon"></i>
                <span class="sgHeader2Title">
                        <font style="vertical-align: inherit;">
                            <font style="vertical-align: inherit;">{{msg}}</font>
                        </font>
                </span>
            </a>
        </div>
        <div class="menuIconWrap">
            <a id="topMenuBtn">
            <i class="commIcon menuIcon"></i>
            </a>
        </div>
    
    </div>

 

</template>

<script>
export default {
    
    data(){
        return{
            msg:"素材下载"
        }
    },
    methods:{

    }
}
</script>

<style scoped>
.sgHeader2 {
    width: 100%;
    height: .5rem;
    position: fixed;
    top: 0rem;
    background: rgba(255, 255, 255, 1);
    z-index: 6;
}
div{
    margin: 0;
    padding: 0;
    font-weight: 400;
}
.sgHeader2{
    background-color: transparent;
    font-weight: 400;
    color: #3A3D40;
    font-size: 14px;
    font-family: "Microsoft YaHei","PingFang SC",Helvetica,Roboto,Arial,sans-serif;
}

.logoIconWrap {
    float: left;
    padding: 0.1rem 0.12rem;
}
a, button {
    color: #3A3D40;
    text-decoration: none;
    cursor: pointer;
    border: none;
    display: inline-block;
    
}
a {
    vertical-align: top;
}
.menuIconWrap {
    float: right;
    padding: 0.1rem 0.12rem;
}
.commIcon.logoSmallIcon {
    background-position: -6.65rem 0.035rem;
    height: 0.31rem;
    width: 0.31rem;
    margin-right: 0.12rem;
}
.sgHeader2 .sgHeader2Title {
    font-size: 0.14rem;
    font-weight: bolder;
    line-height: 0.31rem;
    padding-left: 0.16rem;
    border-left: 1px solid #F4F4F4;
}
.commIcon.menuIcon {
    background-position: -1.92rem 0rem;
    height: 0.31rem;
    width: 0.31rem;
}
.commIcon {
    background-image: url(https://static.web.sdo.com/shengqugames/pic/web_mobile/iconall.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-size: 6.95rem 0.5rem;
    background-origin: content-box;
    vertical-align: top;
}
</style>