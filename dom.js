/**
 * removeAllSpans -  функция, которая удаляет все элементы span со страницы
 */

function removeAllSpans() {
  var spans = Array.from(document.querySelectorAll("span"));
  spans.forEach(function(el) {
    el.remove();
  });
}
// removeAllSpans();

/**
 * firstChild -  функция, которая будет кроссбразурено возвращать firstChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function firstChild(parent) {
  var nodes = document.querySelector(parent).childNodes;
  var store = [];
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType !== 3) {
      store.push(nodes[i]);
    }
  }
  return store[0];
}

/**
 * lastChild -  функция, будет кроссбраузерно возвращать lastChild (не текстовую ноду).
 *
 * @param {Node} parent node
 * @return {Node}
 */

function lastChild(parent) {
  var nodes = document.querySelector(parent).childNodes;
  var store = [];
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType !== 3) {
      store.push(nodes[i]);
    }
  }
  return store[store.length - 1];
}

/**
 * next -  функция, которая будет кроссбраузерно возвращать следующий элемент
 * (не текстовую ноду, работа наподобие next() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function next(node) {
  var node = document.querySelector(node);
  var next = node.nextElementSibling;
  if (next) {
    return next;
  } else {
    console.log("Sorry, I am the last one");
  }
}

/**
 * prev -  функция, которая будет кроссбраузерно возвращать предыдущий элемент
 * (не текстовую ноду, работа наподобие prev() в jQuery).
 *
 * @param {Node} node
 * @return {Node}
 */

function prev(node) {
  var node = document.querySelector(node);
  var prev = node.previousElementSibling;
  if (prev) {
    return prev;
  } else {
    console.log("Sorry, I am the first one");
  }
}

/**
 * OPTIONAL
 * closest -  функция, которая будет идти вверх по DOM (по родительским елементам) от переданного ей элемента в первом
 * аргументе пока не найдет элемент переданный во втором аргументе в эту функцию и вернёт этот элемент (то есть второй).
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 *
 * Example:
 * closest(document.querySelector('[data-url="http://google.ru"]'), 'aside'); // return <aside>...</aside>
 *
 * @param {Node} node
 * @param {String} selector
 * @return {Node}
 */

function closest(node, selector) {}
