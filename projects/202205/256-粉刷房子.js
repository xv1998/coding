/**
 * 题目：假如有一排房子，共 n 个，每个房子可以被粉刷成红色、蓝色或者绿色这三种颜色中的一种，你需要粉刷所有的房子并且使其相邻的两个房子颜色不能相同。
 * 当然，因为市场上不同颜色油漆的价格不同，所以房子粉刷成不同颜色的花费成本也是不同的。每个房子粉刷成不同颜色的花费是以一个 n x 3 的正整数矩阵 costs 来表示的。
 * 例如，costs[0][0] 表示第 0 号房子粉刷成红色的成本花费；costs[1][2] 表示第 1 号房子粉刷成绿色的花费，以此类推。
 * 请计算出粉刷完所有房子最少的花费成本。
 *
 * 输入: costs = [[17,2,17],[16,16,5],[14,3,19]]
 * 输出: 10
 * 解释: 将 0 号房子粉刷成蓝色，1 号房子粉刷成绿色，2 号房子粉刷成蓝色。最少花费: 2 + 5 + 3 = 10。
 */

/**
 * 思路：动态规划
 * 1. 如果前面i-1个房子刷过红色，则下一个选择绿色或蓝色
 * 2. dp[i][j] 连续刷到第i个房子使用j颜色时所花费的最少钱
 * 3. 转换方程 dp[i][0] += Math.min(dp[i-1]][1], dp[i-1]][2]) + 当前房子刷红色的钱 // 0 红色，1 蓝色，2 绿色
 * 4. 蓝色和绿色同理
 * 5. 时间复杂度：O(n), 空间复杂度O(n)
 */

var minCost = function (costs) {
  let dp = new Array(costs.length + 1);
  // init dp
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(3).fill(0);
  }
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]) + costs[i - 1][0];
    dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]) + costs[i - 1][1];
    dp[i][2] += Math.min(dp[i - 1][1], dp[i - 1][0]) + costs[i - 1][2];
  }
  return Math.min(...dp[costs.length]);
};
