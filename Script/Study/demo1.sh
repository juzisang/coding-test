#!/bin/bash
# 打印
echo "Hello World"

# 变量
name="张三"
age=18
echo $name
echo $age
echo "我是${name}今年${age}"

# 获取字符串长度
echo ${#name}
# 截取字符串
echo ${name:0:1}

# 查找字符串，i 或者 o的位置
# 输出 4
string="runoob is a great site"
echo `expr index "$string" io`

# 数组
array=('123' '456' '3233')
# 所有元素
echo ${array[@]}
echo ${array[2]}
echo ${#array[@]}
# > 123 456 3233
# > 3233
# > 3