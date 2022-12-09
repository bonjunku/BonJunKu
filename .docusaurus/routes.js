import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '2c1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'eb6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ba3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '016'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '741'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '03c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '5b5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '4a9'),
    exact: true
  },
  {
    path: '/blog/2022 회고',
    component: ComponentCreator('/blog/2022 회고', '5ec'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'a2e'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '055'),
    exact: true
  },
  {
    path: '/blog/tags/diary',
    component: ComponentCreator('/blog/tags/diary', '35e'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '961'),
    exact: true
  },
  {
    path: '/my-markdown-page',
    component: ComponentCreator('/my-markdown-page', '0b3'),
    exact: true
  },
  {
    path: '/my-react-page',
    component: ComponentCreator('/my-react-page', '90f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e44'),
    routes: [
      {
        path: '/docs/Problem Solving/about',
        component: ComponentCreator('/docs/Problem Solving/about', 'b4d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/array-partition',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/array-partition', '311'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/Best Time to Buy and Sell Stock', '627'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/product-of-array-except-self',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/product-of-array-except-self', 'd6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Problem Solving/LeetCode/valid-palindrome',
        component: ComponentCreator('/docs/Problem Solving/LeetCode/valid-palindrome', '4d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f9c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
