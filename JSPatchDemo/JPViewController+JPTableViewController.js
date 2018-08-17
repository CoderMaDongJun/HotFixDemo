// 综合测试JPViewController、JPTableViewController js文件
require('NSString,UITableViewCell,NSMutableArray,UIColor')

defineClass('JPViewController',{
            handleBtn: function(sender){
            var vc = JPTableViewController.alloc().init();
            vc.setTitle("JP*+JPTableViewController.js-handleBtn");
            var view = vc.view();
            var bgColor = UIColor.redColor();
            view.setBackgroundColor(bgColor);
            
            self.navigationController().pushViewController_animated(vc,YES);
            }
            })
defineClass('JPTableViewController:UITableViewController<UITableViewDelegate,UITableViewDataSource>',['dataArray','data','totalCount','preString'],{
            
            // method0
            init: function(){
                self = self.super().init();
                self.setData(['a','b']);
                self.setTotalCount(2);
                self.setPreString("页面数据");
                return self;
            },
            viewDidLoad: function(){
                var data = self.data();
                var totalCount = self.totalCount();
                var preString = self.preString();
                console.log(data,totalCount,preString);

            },
            
            // method1
            dataArray: function(){
            /* 属性在文件内声明
            var superArr = self.valueForKey("_dataArray");
            if(!superArr){
                var arr = NSMutableArray.array();
                for (var i = 0; i < 30; i++) {
                    arr.addObject((i));
                }
                self.setValue_forKey(arr,"_dataArray");
                //superArr = arr; 该方式也可
            }
             return superArr;
             */
            var arr = NSMutableArray.array();
            for (var i = 0; i < 30; i++) {
                arr.addObject((i));
            }
            return arr;
            },
            
           // method2
            tableView_numberOfRowsInSection: function(tableView,section){
                var dataArray = self.dataArray()
                var count = dataArray.count();
                return count;
            },
            
            // method3
            tableView_cellForRowAtIndexPath: function(tableView,indexPath){
            var identifier = "reuseIdentifier";
            var cell = tableView.dequeueReusableCellWithIdentifier(identifier);
            var UITableViewCellStyleDefault  = 0;
            if(!cell){
                cell = UITableViewCell.alloc().initWithStyle_reuseIdentifier(UITableViewCellStyleDefault,identifier);
            }
            var index = self.dataArray().objectAtIndex(indexPath.row());
            var text = NSString.stringWithFormat("%@: %@",self.preString(),index);
            cell.textLabel().setText(text);
            return cell;
            },
            
            // method4
            tableView_didSelectRowAtIndexPath: function(tableView,indexPath){
                var cell = tableView.cellForRowAtIndexPath(indexPath);
                var text = cell.textLabel().text();
                console.log(text,self)
            }
            
            })

