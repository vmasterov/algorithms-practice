# 009. Maximum Depth of Binary Tree

**Сложность:** Easy

## Условие
Дан корень `root` двоичного дерева. Верни его **максимальную глубину** — количество узлов
на самом длинном пути от корня до самого дальнего листа.

Узел дерева:
```ts
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
```

## Примеры

**Пример 1**
```
    3
   / \
  9  20
     / \
    15  7

Выход: 3
```

**Пример 2**
```
  1
   \
    2

Выход: 2
```

**Пример 3**
```
Пустое дерево (root = null)
Выход: 0
```

## Ограничения
- Количество узлов: от `0` до `10^4`
- `-100 <= Node.val <= 100`

## Дополнительно
Решается рекурсивно (DFS) и итеративно (BFS по уровням с очередью). Начни с рекурсии.

## Сигнатура
```ts
function maxDepth(root: TreeNode | null): number
```

## Для тестов
Деревья в кейсах можно собирать прямо конструкторами, без конвертера:
`new TreeNode(1, null, new TreeNode(2))` — это пример 2.
