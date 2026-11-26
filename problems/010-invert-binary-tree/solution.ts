/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
- оптимизировать,
recursiveInvertBinaryTree
    if (!root) return null
    invertBinaryTree(root.left)
    invertBinaryTree(root.right)
    const tempLeft = root.left
    root.left = root.right
    root.right = tempLeft
    return root

queInvertBinaryTree
    if (!root) return null
    const arr = [root]
    let head = 0
    while (head < arr.length)
        const item = arr[head]
        const tempLeft = item.left
        item.left = item.right
        item.right = tempLeft
        if (item.left) arr.push(item.left)
        if (item.right) arr.push(item.right)
        head++
    return root

stackInvertBinaryTree
- оценить временную и пространственную сложность (O-большое),
DFS (рекурсия): Ot(n) Os(n) вырожденное / Os(log n) баланс, n -- число вершин
BFS (очередь): Ot(n) Os(n), n -- число вершин
- написать код,
- прогнать тесты.
*/

//      4       *       4
//    /   \     *     /   \
//   2     7    *    7     2
//  / \   / \   *   / \   / \
// 1   3 6   9  *  9   6 3   1

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

export function recursiveInvertBinaryTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  recursiveInvertBinaryTree(root.left);
  recursiveInvertBinaryTree(root.right);

  const tempLeft = root.left;
  root.left = root.right;
  root.right = tempLeft;

  return root;
}

export function queInvertBinaryTree(root: TreeNode | null): TreeNode | null {
  if (!root) {
    return null;
  }

  const arr = [root];
  let head = 0;

  while (head < arr.length) {
    const item = arr[head];
    const tempLeft = item.left;

    item.left = item.right;
    item.right = tempLeft;

    if (item.left) {
      arr.push(item.left);
    }

    if (item.right) {
      arr.push(item.right);
    }

    head++;
  }

  return root;
}

export function stackInvertBinaryTree(root: TreeNode | null): TreeNode | null {
  return null;
}

test({
  checkFunction: stackInvertBinaryTree,
  data: [
    {
      input: [null],
      output: null,
    },
    {
      input: [new TreeNode(1)],
      output: new TreeNode(1),
    },
    {
      input: [new TreeNode(0, new TreeNode(), new TreeNode())],
      output: new TreeNode(0, new TreeNode(), new TreeNode()),
    },
    {
      input: [new TreeNode(3, new TreeNode(9), new TreeNode(20))],
      output: new TreeNode(3, new TreeNode(20), new TreeNode(9)),
    },
    {
      input: [new TreeNode(3, new TreeNode(9), null)],
      output: new TreeNode(3, null, new TreeNode(9)),
    },
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4), null),
          new TreeNode(3, null, new TreeNode(5)),
        ),
      ],
      output: new TreeNode(
        1,
        new TreeNode(3, new TreeNode(5), null),
        new TreeNode(2, null, new TreeNode(4)),
      ),
    },
    {
      input: [
        new TreeNode(
          1,
          new TreeNode(2, new TreeNode(4), new TreeNode(5)),
          new TreeNode(3, new TreeNode(6), new TreeNode(7)),
        ),
      ],
      output: new TreeNode(
        1,
        new TreeNode(3, new TreeNode(7), new TreeNode(6)),
        new TreeNode(2, new TreeNode(5), new TreeNode(4)),
      ),
    },
    {
      input: [new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null)],
      output: new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3))),
    },
  ],
});
