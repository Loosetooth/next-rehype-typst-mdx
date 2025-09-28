import { visit } from 'unist-util-visit';
import { Code, Root } from 'mdast';

export function remarkTypstAsMath() {
  return (tree: Root) => {
    visit(tree, 'code', (node: Code) => {
      if (node.lang === 'typst') {
        node.lang = 'math';
      }
    });
  };
}