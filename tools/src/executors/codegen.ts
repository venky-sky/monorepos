import { PromiseExecutor } from '@nx/devkit';
import { CodegenExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<CodegenExecutorSchema> = async (options) => {
  console.log('Executor ran for Codegen', options);
  return {
    success: true,
  };
};

export default runExecutor;
