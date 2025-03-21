import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {
  generateFiles(tree, path.join(__dirname, 'files/component'), options.name, options);
  await formatFiles(tree);
}

export default componentGenerator;
