export interface Visualizer {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  github: string;
  category: 'sorting' | 'linked-list' | 'stack-queue' | 'tree' | 'graph';
  tags: string[];
}