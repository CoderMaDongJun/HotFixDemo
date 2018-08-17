// 其他类型测试
require('NSUserDefaults,NSMutableDictionary,NSString,UITableViewCell,UIViewController,NSMutableArray,UIColor,UIAlertView')
// define struct (https://github.com/bang590/JSPatch/wiki/添加-struct-类型支持)
require('JPEngine').defineStruct({
                                 "name": "JPDemoStruct",
                                 "types": "FldB",
                                 "keys": ["keyA", "keyB", "keyC", "keyD"]
                                 })

// JPViewController
defineClass('JPViewController',{
            handleBtn: function(sender){
            var vc = TestPatchViewController.alloc().init();
            vc.setTitle("TestPatch.js-handleBtn");
            self.navigationController().pushViewController_animated(vc,YES);
            }
            })

// JPObject
var _structDataSource
defineClass('JPObject',{},{
            passStruct: function(s){
                // 存值
                _structDataSource = s;
//                NSUserDefaults.standardUserDefaults().setObject_forKey(s, "structKey");
//                NSUserDefaults.standardUserDefaults().synchronize();
            },
            returnStruct: function(){
                // 取值
            return _structDataSource;
//                var obj = NSUserDefaults.standardUserDefaults().objectForKey("structKey");
//                return obj;
            }
            
            })

// TestPatchViewController
defineClass('TestPatchViewController: UIViewController<UIAlertViewDelegate>',['data','dict'],{
            
            // init
            init: function(){
                if(self = self.super().init()){
                    /** 字典数组的操作 */
                    self.setData(["JS"]);
                    self.data().push("Patch")
                    self.setDict({"a":"b"})
                    var key = self.data().join('');
                    var otherDic = NSMutableDictionary.dictionaryWithDictionary({"c":"d"});
                    otherDic.addEntriesFromDictionary({"e":"f"});
                    otherDic.addEntriesFromDictionary(self.dict());
                    self.setDict(otherDic)
                    //console.log(self.dict());
            
                /** 数据结构的操作 */
                require('JPObject').passStruct({keyA:1, keyB:2, keyC:4.2, keyD:1})
                    var s = require('JPObject').returnStruct();
                    console.log(s)
                }
            
            /**
            常量、枚举、宏、全局变量
            // 1.常量/枚举
            // 1.1 OC
            [[NSAttributedString alloc].initWithString:@"str" attributes:@{NSForegroundColorAttributeName: [UIColor redColor]];
            //上面代码中 NSForegroundColorAttributeName 是一个静态字符串常量，源码里看不出它的值，可以先用 NSLog 打出它的值再直接写在 JS 上：
            // 1.2 OC
            NSLog(@"%@", NSForegroundColorAttributeName) //output 'NSColor'
            // 1.3 JS
            NSAttributedString.alloc().initWithString_attributes("无效啊", {'NSColor': UIColor.redColor()});
             
             // 2.宏
             Objective-C 里的宏同样不能直接在 JS 上使用。若定义的宏是一个值，可以在 JS 定义同样的全局变量代替，若定义的宏是程序，可以在JS展开宏：
             // 2.1 OC
             #define TABBAR_HEIGHT 40
             #define SCREEN_WIDTH [[UIScreen mainScreen] bounds].size.height
             [view setWidth:SCREEN_WIDTH height:TABBAR_HEIGHT];
             // 2.2 JS
             view.setWidth_height(UIScreen.mainScreen().bounds().height, 40);
             
             // 2.3若宏的值是某些在底层才能获取到的值，例如 CGFLOAT_MIN，可以通过在某个类或实例方法里将它返回，或者用添加扩展的方式提供支持：

             @implementation JPMacroSupport
             + (void)main:(JSContext *)context
             {
             context[@"CGFLOAT_MIN"] = ^CGFloat() {
             return CGFLOAT_MIN;
             }
             }
             @end
             
             require('JPEngine').addExtensions(['JPMacroSupport'])
             var floatMin = CGFLOAT_MIN();
             
             // 2.4 修改宏值
             
             JSPatch 不支持修改宏的值，若要修改，需要替换所有使用到这个宏的方法。例如：
             
             #define VIEW_HEIGHT 40
             @implementation JPMethodDemo
             + (void)func
             {
             UIView *view = [[UIView alloc] initWithFrame:CGRectMake(0, 0, 100, VIEW_HEIGHT)];
             ...
             }
             @end
             //JS
             var VIEW_HEIGHT_NEW = 20;
             defineClass('JPMethodDemo', {
             func: function() {
             var view = UIView.alloc().initWithFrame({x:0, y:0, width:100, height:VIEW_HEIGHT_NEW});
             ...
             }
             });
             
             // 3 全局变量
             
             在类里定义的 static 全局变量无法在 JS 上获取到，若要在 JS 拿到这个变量，需要在 OC 有类方法或实例方法把它返回：
             
             static NSString *name;
             @implementation JPTestObject
             + (NSString *)name {
             return name;
             }
             @end
             var name = JPTestObject.name() //拿到全局变量值
             
             // 4 加载动态库
             
             对于 iOS 内置的动态库，若原 APP 里没有加载，可以通过以下方式动态加载，以加载 SafariServices.framework 为例：
             
             var bundle = NSBundle.bundleWithPath("/System/Library/Frameworks/SafariServices.framework");
             bundle.load();
             加载后就可以使用 SafariServices.framework 了。
             
             // 5 调试
             
             可以使用 console.log() 打印一个对象，作用相当于 NSLog()，会直接在 XCode 控制台打出。
             
             console.log() 支持任意参数，但不支持像 NSLog 这样 NSLog(@"num:%f", 1.0) 的拼接：
             
             var view = UIView.alloc().init();
             var str = "test";
             var num = 1;
             console.log(view, str, num)
             console.log(str + num);   //直接在JS拼接字符串
             也可以通过 Safari 的调试工具对 JS 进行断点调试，详见 JS 断点调试

             */
                return self;
            },
            
            // viewDidLoad
            viewDidLoad: function(){
                self.super().viewDidLoad();
                self.view().setBackgroundColor(UIColor.orangeColor())
            
            },

            // viewDidAppear
            viewDidAppear: function(animated){
                var alt = UIAlertView.alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("Title","msg",self,"cancel",null);
                alt.show();
            },

            // alt代理
            alertView_clickedButtonAtIndex: function(alertView,buttonIndex){
                        console.log('clickButton idnex:'+buttonIndex)
            }

            })
