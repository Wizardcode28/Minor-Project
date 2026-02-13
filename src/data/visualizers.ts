import { Visualizer } from '../types';
import sortingImg from '../assets/images/sorting.png';
import linkedListImg from '../assets/images/linkedlist.png';
import stackImg from '../assets/images/stacks.png';
import treeImg from '../assets/images/trees.png';
import graphImg from '../assets/images/graph.png';

export const visualizers: Visualizer[] = [
  {
    id: 'Sort-Viz',
    title: 'Sorting Visualizer',
    description: 'Visualization of all the Sorting algorithms with step-by-step animation',
    image: sortingImg, // Library books (Sorting)
    url: 'https://radix-explorer.vercel.app/',
    github: 'https://github.com/Wizardcode28/radix-explorer',
    category: 'sorting',
    tags: ['sorting', 'comparison', 'beginner']
  },

  {
    id: 'linked-list',
    title: 'Linked-List Visualizer',
    description: 'Visualization of operations in all type of Linked-Lists with step-by-step animation',
    image: linkedListImg, // Chain links
    url: 'https://advanced-ll-visualizer.vercel.app/',
    github: 'https://github.com/lokii9024/advanced-LL-visualizer',
    category: 'linked-list',
    tags: []
  },

  {
    id: 'stack and queue',
    title: 'Stack and Queue visualizer',
    description: 'Visualization of all types operations in stack and queue with step-by-step animation',
    image: stackImg, // Stack of stones/coins
    url: 'https://stack-queue-sigma.vercel.app/',
    github: 'https://github.com/',
    category: 'stack-queue',
    tags: []
  },

  {
    id: 'Tree building',
    title: 'BST and AVL traversal and Construction',
    description: 'Visualization of different binary tree traversal methods and Construction',
    image: treeImg, // Fractal/Tree branches
    url: 'https://gleaming-brigadeiros-22c7d5.netlify.app/',
    github: 'https://github.com/',
    category: 'tree',
    tags: ['tree', 'traversal', 'recursive']
  },
  {
    id: 'bfs-dfs',
    title: 'BFS, DFS and Dijkstra',
    description: 'Visualize breadth-first, depth-first search and Dijkstra algorithms',
    image: graphImg, // Connected network/internet
    url: 'https://graphalgo-seven.vercel.app/',
    github: 'https://github.com/Ayush-295/ProjectBased',
    category: 'graph',
    tags: ['graph', 'traversal', 'Shortes path']
  }
];

export const getVisualizers = () => {
  return visualizers;
};

export const getVisualizersByCategory = (category: Visualizer['category']) => {
  return visualizers.filter(visualizer => visualizer.category === category);
};

export const categories = [
  { id: 'sorting', name: 'Sorting Algorithms' },
  { id: 'linked-list', name: 'Linked-List Visualizer' },
  { id: 'stack-queue', name: 'Stack and Queue Visualizer' },
  { id: 'tree', name: 'Tree Algorithms' },
  { id: 'graph', name: 'Graph Algorithms' },
];