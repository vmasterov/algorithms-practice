/*
- уточнить условие,
- придумать примеры и граничные случаи,
- описать brute force,
- оптимизировать,
- оценить временную и пространственную сложность (O-большое),
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

export function maxDepth(root: TreeNode | null): number {
  // твоё решение
  return 0;
}

test({
  checkFunction: maxDepth,
  data: [
    // твои кейсы
  ],
});
