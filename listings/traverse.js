function traverse(astRootNode, visitor) {
  function traverseArray(array, parent) {
    array.forEach(child => {
      traverseNode(child, parent);
    });
  }
  function traverseNode(node, parent) {
    let visitMethod = visitor[node.type];
    if (visitMethod) {
      visitMethod(node, parent);
    }
    switch (node.type) {
      case 'Program':
        traverseArray(node.body, node);
        break;
      //.....
      default:
        throw new Exception('Unknown node type', node.type);
    }
  }
  traverseNode(astRootNode, null);
}