/**
 * 我们中的大多数人都不得不时不时地解析一下命令行参数。如果我们没有一个方便的工具，那么我们就简单地处理一下传入 main 函数的字符串数组。
 * 有很多开源工具可以完成这个任务，但它们可能并不能完全满足我们的要求。所以我们再写一个吧。
 * 传递给程序的参数由标志和值组成。标志应该是一个字符，前面有一个减号。每个标志都应该有零个或多个与之相关的值。
 * 例如：　-l -p 8080 -d /usr/logs　“l”（日志）没有相关的值，它是一个布尔标志，如果存在则为 true，不存在则为 false。
 * “p”（端口）有一个整数值，
 * “d”（目录）有一个字符串值。标志后面如果存在多个值，则该标志表示一个列表：
 * -g this is a list -d 1 2 -3 5　"g"表示一个字符串列表[“this”, “is”, “a”, “list”]，
 * “d"标志表示一个整数列表[1, 2, -3, 5]。
 * 如果参数中没有指定某个标志，那么解析器应该指定一个默认值。
 * 例如，false 代表布尔值，0 代表数字，”"代表字符串，[]代表列表。如果给出的参数与模式不匹配，重要的是给出一个好的错误信息，准确地解释什么是错误的。
 * 确保你的代码是可扩展的，即如何增加新的数值类型是直接和明显的。
 */

import Args from "./Args";
// 构思如何被用户使用
// -l -p 8080 -d /usr/logs
/**
 *  -l boolean
 *  -p 8080
 *  -d /usr/logs
 *  -multi:
 */
/**
 * ## 需求拆分

### 任务列表

1. 常规Option
2. 列表Option
3. 可扩展支持其他Option

### 测试列表

1. Single Option
    - case 1
      - `-l` bool
      - `-p 8080` int
      - `-d /usr/logs` string
    - case 2
      - `-g this is a list` []stirng
      - `-d 1 3 2 4` []int
2. Multiple Options
   - `-l -p 8080 -d /usr/logs`
   - `-g this is a list -d 1 3 2 4`
3. Sad path
   - bool `-l t` `-l t f`
   - int `-p` `-p 8080 8081`
   - string `-d /usr/logs /usr/vars`
4. Default Values
   - bool `false`
   - int `0`
   - string `""`
5. Handle Error

 */

test("should_boolean_is_true_if_flag_presented", () => {
  const args = Args.parse(["-l"]);
  expect(args.logging()).toBe(true);
});

test("should_boolean_is_true_if_flag_not_presented", () => {
  const args = Args.parse(["-d"]);
  expect(args.logging()).toBe(false);
});

test("should_boolean_is_true_if_flag_not_presented", () => {
  const args = Args.parse(["-p", "8080"]);
  expect(args.port()).toBe(8080);
});

// test("should_example_1", () => {
//   const args = Args.parse(["-l", "-p", "8080", "-d", "/usr/logs"]);
//   expect(args.logging()).toBe(true);
//   expect(args.port()).toBe("8080");
//   expect(args.directory()).toBe("/usr/logs");
// });

// test("should_example_2", () => {
//   const args = Args.parse([
//     "-g",
//     "this",
//     "is",
//     "a",
//     "list",
//     "-d",
//     "1",
//     "2",
//     "-3",
//     "5",
//   ]);

//   expect(Array.from(["this", "is", "a", "list"])).toEqual(args.group());
//   expect(Array.from(["1", "2", "-3", "5"])).toEqual(args.decimals());
// });
