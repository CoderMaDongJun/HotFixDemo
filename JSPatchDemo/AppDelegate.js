
require('UIView,UILabel,UIColor')
defineClass('AppDelegate',{
            greenView: function(){
            var view = self.ORIGgreenView();
            view.setBackgroundColor(UIColor.redColor());
            view.setFrame({x:60,y:220,width:180,height:180});
            var subView = UIView.alloc().init();
            var label = UILabel.alloc().init();
            label.setText("JSPatch");
            label.setTextColor(UIColor.blackColor());
            label.setBackgroundColor(UIColor.yellowColor());
            label.sizeToFit();
            
            var rect = label.frame();
            var w = 20;
            var x1 = rect.x + w*0.5;
            var y1 = rect.y + w*0.5;
            var w1 = rect.width + w*0.5;
            var h1 = rect.height + w*0.5;
            var frame = {x:x1,y:y1,width:w1,height:h1}
            subView.setFrame(frame)
            console.log(frame)
            
            subView.addSubview(label);
            subView.setBackgroundColor(UIColor.greenColor())
            view.addSubview(subView)
            
            return view;
            }
            })
