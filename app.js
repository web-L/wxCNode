//app.js
const Towxml = require('/towxml/main');
const CNodeApi = require("/utils/CNodeApi");

App({
    towxml: new Towxml(),
    cnodeApi: new CNodeApi(),
    onLaunch: function () {
        wx.showLoading({
            title: '拼命加载中...',
        });
    },
    globalData: {
        userInfo: null,
        tips:[
            '要想学会递归，首先学会递归。',
            '世界上有10种人，一种懂二进制，一种不懂二进制。',
            'Hello World',
            'C语言很容易让你犯错误；C++看起来好一些，但当你用它时，你会发现会死的更惨。',
            '解决问题大多数都很容易；找到问题出在哪里却很难。',
            '给与足够的眼球，所有的Bugs都很容易发现。',
            '任何优秀的大软件里面都是一个优秀的小程序。',
            '真正的程序员从来不注释他们的代码。如果你做不到这样，也就说明你不能使你的程序易于理解。',
            '世上只有两种编程语言：一种是总是被人骂的，一种是从来没人用的。',
            '开发的越早，程序花费你的时间越长。',
            '优秀的判断力来自经验，但经验来自于错误的判断。',
            '我们这个世界的一个问题是，蠢人信誓旦旦，智人满腹狐疑。',
            '最初的90%的代码用去了最初90%的开发时间。余下的10%的代码用掉另外90%的开发时间。 –  比尔-盖茨',
            '软件在能够复用前必须先能用。'
        ],
        barSliderBg: [
            'http://p86t9neoe.bkt.clouddn.com/slider_bg0.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg1.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg2.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg3.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg4.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg5.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg6.png',
            'http://p86t9neoe.bkt.clouddn.com/slider_bg7.png'
        ],
        cnode: {
            api: "https://cnodejs.org/api/v1",
            tab: {
                ask: '问答',
                share: '分享',
                job: '招聘',
                good: '精华',
                index: '首页'
            }
        }
    }
})