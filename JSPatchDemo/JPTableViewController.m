//
//  JPTableViewController.m
//  JSPatchDemo
//
//  Created by 马栋军 on 2018/8/16.
//  Copyright © 2018年 DangDangWang. All rights reserved.
//

#import "JPTableViewController.h"

@interface JPTableViewController ()<UIAlertViewDelegate>
@property (nonatomic ,strong) NSMutableArray *dataArray;
@end

@implementation JPTableViewController
- (NSMutableArray *)dataArray
{
    if (!_dataArray) {
        NSMutableArray *temp = [NSMutableArray array];
        for (NSInteger i = 0; i < 30; i++) {
            [temp addObject:@(i)];
        }
        _dataArray = temp;
    }
    return _dataArray;
}

- (instancetype)init
{
    if (self = [super init]) {
        [[NSUserDefaults standardUserDefaults] setObject:@"a" forKey:@"key"];
        [[NSUserDefaults standardUserDefaults] synchronize];
        [[NSUserDefaults standardUserDefaults] objectForKey:@"key"];
        UIButton *btn = [UIButton buttonWithType:UIButtonTypeCustom];
//        [btn addTarget:self action:@selector(btnClick:) forControlEvents:UIControlEventTouchUpInside];
    }
    return self;
}
#pragma mark - Table view data source
#if 1
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.dataArray.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"reuseIdentifier"];
    if (!cell) {
        cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"reuseIdentifier"];
    }

    cell.textLabel.text = [NSString stringWithFormat:@"页面数据: %zd",indexPath.row];
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath
{
    UITableViewCell *cell = [tableView cellForRowAtIndexPath:indexPath];
    NSLog(@"cell.text:%@",cell.textLabel.text);
    NSLog(@"%@",NSStringFromClass([self class]));
    
    UIAlertView *alt = [[UIAlertView alloc] initWithTitle:@"Title" message:@"msg" delegate:self cancelButtonTitle:@"cancel" otherButtonTitles:@"other", nil];
    [alt show];
}
- (void)alertView:(UIAlertView *)alertView clickedButtonAtIndex:(NSInteger)buttonIndex
{
    NSLog(@"clickButton index:%@",buttonIndex);
    NSMutableDictionary *dic = [NSMutableDictionary dictionary];
//dic addEntriesFromDictionary:{}
    
    

}

#endif

@end
