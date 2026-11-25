/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
- оптимизировать,
DFS (рекурсия)
  - if root === null return 0
  - left = root.left === null ? 0 : DFS(root.left)
  - right = root.right === null ? 0 : DFS(root.right)
  - return Math.max(left, right) + 1

BFS (стек)
if root === null return 0
depth = 0
arr = [root]
while (arr.length)
  levelSize = arr.length
  for (i = 0; levelSize > i; i++)
    cur = arr.shift
    cur.left ?? arr.push(cur.left)
    cur.right ?? arr.push(cur.right)
  depth++
return depth

- оценить временную и пространственную сложность (O-большое),
DFS (рекурсия): Ot(n) Os(n) вырожденное / Os(log n) баланс, n -- число вершин
BFS (стек): Ot(n) Os(n), n -- число вершин
- написать код,
- прогнать тесты.
*/

import test from '@/helpers/test';

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function maxDepthDFS(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const left = maxDepthDFS(root.left);
  const right = maxDepthDFS(root.right);

  return Math.max(left, right) + 1;
}

export function maxDepthBFS(root: TreeNode | null): number {
  // if root === null return 0
  // depth = 0
  // arr = [root]
  // while (arr.length)
  //   levelSize = arr.length
  // for (i = 0; levelSize > i; i++)
  //   cur = arr.shift
  // cur.left ?? arr.push(cur.left)
  // cur.right ?? arr.push(cur.right)
  // depth++
  // return depth
  if (root === null) {
    return 0;
  }

  let depth = 0;
  const arr = [root];

  while (arr.length) {
    const levelSize = arr.length;

    for (let i = 0; i < levelSize; i++) {
      const current = arr.shift();

      if (current?.left) {
        arr.push(current.left);
      }

      if (current?.right) {
        arr.push(current.right);
      }
    }

    depth++;
  }

  return depth;
}

test({
  checkFunction: maxDepthBFS,
  data: [
    {
      input: [null],
      output: 0,
    },
    {
      input: [new TreeNode(1)],
      output: 1,
    },
    {
      input: [new TreeNode(0, new TreeNode(), new TreeNode())],
      output: 2,
    },
    {
      input: [new TreeNode(-1, new TreeNode(), new TreeNode(1))],
      output: 2,
    },
    {
      input: [new TreeNode(3, new TreeNode(9), new TreeNode(20))],
      output: 2,
    },
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4), null),
          new TreeNode(3, null, new TreeNode(5)),
        ),
      ],
      output: 3,
    },
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4), new TreeNode(5)),
          new TreeNode(3, new TreeNode(6), new TreeNode(7)),
        ),
      ],
      output: 3,
    },
    {
      input: [new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))))],
      output: 4,
    },
    {
      input: [new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null)],
      output: 3,
    },
  ],
});
