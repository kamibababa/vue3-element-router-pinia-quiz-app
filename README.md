# 答题App（单选题）

### 数据接口

```
https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple
```

### 需求
数据接口，请求回10道题目信息；题目信息中包含题干，一个正确答案，3个错误答案。
#### 答题界面
总共10道题。
依次显示10道题到界面上（题干及选项），首先显示第一题，用户点击下一题按钮，显示第二题。在最后一题点击下一题之后，显示查看结果按钮，点击后给出得分（每题10分）。
要求正确选项不能总是同一个位置（比如总是D为正确答案），即每一题的正确答案和错误答案需要随机打乱。
#### 查看结果界面
再次显示10道题到界面上，首先显示第一题，用户答案选项如果错误，显示为红色，并将正确选项用蓝色显示；用户答案选项如果正确，显示为蓝色。本界面显示的题目顺序，以及每一题的选项顺序需要和答题界面时一致。

#### 提示
可以将全部题目信息保存到pinia，实现2个界面数据共享。

#### 给分点
UI:20分
答题界面：40分（选项做不到随机打乱扣10分）。提示：可以先不考虑选项随机打乱，争取先拿到30分。时间允许再考虑如何实现选项随机打乱。
查看结果界面：40分。

#### 考试时间
120分钟
#### 考试要求
1.录屏
2.不得使用双屏（包括手机，平板）
3.不得交头接耳，雷同卷0分