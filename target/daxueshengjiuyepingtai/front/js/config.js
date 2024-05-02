
var projectName = '大学生就业信息平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.jsp'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.jsp'
}
]


var indexNav = [

{
	name: '招聘资讯',
	url: './pages/zhaopinzixun/list.jsp'
}, 
{
	name: '企业信息',
	url: './pages/qiyexinxi/list.jsp'
}, 
{
	name: '招聘信息',
	url: './pages/zhaopinxinxi/list.jsp'
},
{
    name: '论坛交流',
    url: './pages/forum/list.jsp'
},
{
    name: '平台信箱',
    url: './pages/messages/list.jsp'
},
]

var adminurl =  "http://localhost:8080/daxueshengjiuyepingtai/index.jsp";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"招聘资讯","menuJump":"列表","tableName":"zhaopinzixun"}],"menu":"招聘资讯管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业","menuJump":"列表","tableName":"qiye"}],"menu":"企业管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"企业信息","menuJump":"列表","tableName":"qiyexinxi"}],"menu":"企业信息管理"},{"child":[{"buttons":["查看","修改","删除","导出"],"menu":"个人简历","menuJump":"列表","tableName":"gerenjianli"}],"menu":"个人简历管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"职位分类","menuJump":"列表","tableName":"zhiweifenlei"}],"menu":"职位分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"行业领域","menuJump":"列表","tableName":"xingyelingyu"}],"menu":"行业领域管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"应聘信息","menuJump":"列表","tableName":"yingpinxinxi"}],"menu":"应聘信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"通知面试","menuJump":"列表","tableName":"yingpinyaoqing"}],"menu":"通知面试管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"},{"buttons":["查看","修改","删除"],"menu":"论坛管理","tableName":"forum"},{"buttons":["新增","查看","修改","删除"],"menu":"平台信箱管理","tableName":"messages"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"招聘资讯列表","menuJump":"列表","tableName":"zhaopinzixun"}],"menu":"招聘资讯模块"},{"child":[{"buttons":["查看"],"menu":"企业信息列表","menuJump":"列表","tableName":"qiyexinxi"}],"menu":"企业信息模块"},{"child":[{"buttons":["查看","应聘"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"个人简历","menuJump":"列表","tableName":"gerenjianli"}],"menu":"个人简历管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"应聘信息","menuJump":"列表","tableName":"yingpinxinxi"}],"menu":"应聘信息管理"},{"child":[{"buttons":["查看","审核"],"menu":"通知面试","menuJump":"列表","tableName":"yingpinyaoqing"}],"menu":"通知面试管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"招聘资讯列表","menuJump":"列表","tableName":"zhaopinzixun"}],"menu":"招聘资讯模块"},{"child":[{"buttons":["查看"],"menu":"企业信息列表","menuJump":"列表","tableName":"qiyexinxi"}],"menu":"企业信息模块"},{"child":[{"buttons":["查看","应聘"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"企业信息","menuJump":"列表","tableName":"qiyexinxi"}],"menu":"企业信息管理"},{"child":[{"buttons":["查看","导出","邀请"],"menu":"个人简历","menuJump":"列表","tableName":"gerenjianli"}],"menu":"个人简历管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"职位分类","menuJump":"列表","tableName":"zhiweifenlei"}],"menu":"职位分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"行业领域","menuJump":"列表","tableName":"xingyelingyu"}],"menu":"行业领域管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"招聘信息","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息管理"},{"child":[{"buttons":["查看","修改","删除","审核"],"menu":"应聘信息","menuJump":"列表","tableName":"yingpinxinxi"}],"menu":"应聘信息管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"通知面试","menuJump":"列表","tableName":"yingpinyaoqing"}],"menu":"通知面试管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"招聘资讯列表","menuJump":"列表","tableName":"zhaopinzixun"}],"menu":"招聘资讯模块"},{"child":[{"buttons":["查看"],"menu":"企业信息列表","menuJump":"列表","tableName":"qiyexinxi"}],"menu":"企业信息模块"},{"child":[{"buttons":["查看","应聘"],"menu":"招聘信息列表","menuJump":"列表","tableName":"zhaopinxinxi"}],"menu":"招聘信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"企业","tableName":"qiye"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
