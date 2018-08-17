// 测试 handleBtn
require('JPTableViewController,UIColor')
defineClass('JPViewController',{
            handleBtn: function(sender){
            var vc = JPTableViewController.alloc().init();
            vc.setTitle("JPViewController.js-handleBtn");
            var view = vc.view();
            var bgColor = UIColor.redColor();
            view.setBackgroundColor(bgColor);
            
        self.navigationController().pushViewController_animated(vc,YES);
            }
            })
