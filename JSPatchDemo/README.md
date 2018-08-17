#  https://github.com/bang590/JSPatch
## 基础使用
//require
require('UIView, UIColor, UISlider, NSIndexPath')

// Invoke class method
var redColor = UIColor.redColor();

// Invoke instance method
var view = UIView.alloc().init();
view.setNeedsLayout();

// set proerty
view.setBackgroundColor(redColor);

// get property 
var bgColor = view.backgroundColor();

// multi-params method (use underline to separate)
// OC：NSIndexPath *indexPath = [NSIndexPath indexPathForRow:0 inSection:1];
var indexPath = NSIndexPath.indexPathForRow_inSection(0, 1);

// method name contains underline (use double undeline to represent)
// OC: [JPObject _privateMethod];
JPObject.__privateMethod()

// use .toJS() to convert NSArray / NSString / NSDictionary to JS type.
var arr = require('NSMutableArray').alloc().init()
arr.addObject("JS")
jsArr = arr.toJS()
console.log(jsArr.push("Patch").join(''))  //output: JSPatch

// use hashes to represent struct like CGRect / CGSize / CGPoint / NSRange
var view = UIView.alloc().initWithFrame({x:20, y:20, width:100, height:100});
var x = view.bounds().x;

// wrap function with `block()` when passing block from JS to OC
// OC Method: + (void)request:(void(^)(NSString *content, BOOL success))callback
require('JPObject').request(block("NSString *, BOOL", function(ctn, succ) {
if (succ) log(ctn)
}));

// GCD
dispatch_after(1.0, function(){
// do something
})
dispatch_async_main(function(){
// do something
})

## 

