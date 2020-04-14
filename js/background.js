//-------------------- 右键菜单演示 ------------------------//
chrome.contextMenus.create({
	title: "啦啦啦啦~~~๑乛◡乛๑ ",
	onclick: function(){
		chrome.notifications.create(null, {
			type: 'basic',
			iconUrl: 'img/icon.png',
			title: '撒花~~~✿✿✿✿✿✿✿✿',
			message: ' ︶ε╰✿ ✿◡‿◡'
		});
	}
});
