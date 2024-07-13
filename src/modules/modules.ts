import { DynamicModule, Logger, Module } from '@nestjs/common';
import { glob } from 'glob';

async function loadModules(): Promise<DynamicModule[]> {
  try {
    let files = await glob('**/*.module.ts', {
      ignore: ['node_modules/**', 'src/libs/**'],
    });


    files = files
      .filter((f) => !f.includes('app.module.ts'))
      .map((e) =>
        e
          .split(e.includes('/') ? 'modules/' : 'modules\\')[1]
          .replace('.ts', ''),
      );

    const imports = await Promise.all(files.map((file) => import('./' + file)));

    // Debugging what is actually being imported

    const dynamicModules = imports.map((mod) => {
      // Try to find the first available export which is a DynamicModule or return undefined
      return Object.values(mod)[0] as DynamicModule;
    });

    Logger.log(`Loaded ${dynamicModules.length} modules`);
    return dynamicModules;
  } catch (error) {
    Logger.error('Error loading modules:', error);
    throw error;
  }
}

@Module({})
export class DynamicModules {
  static async register(): Promise<DynamicModule> {
    const modules = await loadModules();
    return {
      module: DynamicModules,
      imports: modules,
    };
  }
}
