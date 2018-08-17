//
//  JPViewController.m
//  JSPatchDemo
//
//  Created by 马栋军 on 2018/8/15.
//  Copyright © 2018年 DangDangWang. All rights reserved.
//

#import "JPViewController.h"
#import "JPTableViewController.h"

@interface JPViewController ()

@end

@implementation JPViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIButton *btn = [[UIButton alloc] initWithFrame:CGRectMake(0, 100, [UIScreen mainScreen].bounds.size.width, 50)];
    [btn setTitle:@"Push JPTableViewController" forState:UIControlStateNormal];
    [btn addTarget:self action:@selector(handleBtn:) forControlEvents:UIControlEventTouchUpInside];
    [btn setBackgroundColor:[UIColor grayColor]];
    [self.view addSubview:btn];
}

- (void)handleBtn:(id)sender
{
    UIViewController *vc = [[UIViewController alloc] init];
    vc.title = @"UIViewController";
    [self.navigationController pushViewController:vc animated:YES];
}

@end
