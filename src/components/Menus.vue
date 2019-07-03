<template>
    <div class="topMenu">
        <ul>
            <li><a href="#">关于我们</a></li>
            <li><a href="#">产品介绍</a></li>
            <li><a href="#">新闻动态</a></li>
            <li><a href="#">加入我们</a></li>
            <li><a href="#">素材下载</a></li>
            <li><a href="#">联系我们</a></li>
            <li>
                <a href="#">
                    <div class="searchIconWrap">
                        <i class="commIcon searchIcon"></i>
                    </div>
                    <span>搜索</span>
                    <span class="cRed">shengqugames.com</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
body{
    background-color: transparent;
    font-weight: 400;
    color: #3A3D40;
    font-size: 14px;
    font-family: "Microsoft YaHei","PingFang SC",Helvetica,Roboto,Arial,sans-serif;
}
.topMenu {
    position: fixed;
    top: 0.5rem;
    background: rgba(255, 255, 255, 0.92);
    z-index: 30;
    height: 100%;
    width: 100%;
    display:none;
}
.topMenu ul {
    padding: 0rem 0.15rem;
}
.topMenu ul li {
    border-bottom: 1px solid #EEEEEE;
    text-align: center;
}
.topMenu ul li a {
    padding: 0.2rem 0rem;
    width: 100%;
    font-size: 16px;
}
.searchIconWrap {
    margin-right: 0.05rem;
    display: inline-block;
    vertical-align: middle;
}
.commIcon.searchIcon {
    background-position: -3.23rem -0.04rem;
    height: 0.24rem;
    width: 0.24rem;
}
.commIcon {
    background-image: url(https://static.web.sdo.com/shengqugames/pic/web_mobile/iconall.png);
    background-repeat: no-repeat;
    display: inline-block;
    background-size: 6.95rem 0.5rem;
    background-origin: content-box;
    vertical-align: top;
}
.cRed {
    color: #E4004F;
}
a {
    vertical-align: top;
    font-family: "Microsoft YaHei","PingFang SC",Helvetica,Roboto,Arial,sans-serif;
}
a, button {
    color: #3A3D40;
    text-decoration: none;
    cursor: pointer;
    border: none;
    display: inline-block;
}
</style>
