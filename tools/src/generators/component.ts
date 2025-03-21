import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import * as _ from 'lodash';
import { ComponentGeneratorSchema } from './schema';

export async function componentGenerator(
  tree: Tree,
  options: ComponentGeneratorSchema
) {
  const componentName = options.name.split('/').at(-1);
  generateFiles(tree, path.join(__dirname, 'files/component'), options.name, {
    name: componentName,
    _
  });
  await formatFiles(tree);
}

export default componentGenerator;
