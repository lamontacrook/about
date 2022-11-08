import { createOptimizedPicture } from '../../scripts/scripts.js';

export default async function decorate(block) {
  [...block.children].forEach((row) => {
    console.log(row);
  });
}