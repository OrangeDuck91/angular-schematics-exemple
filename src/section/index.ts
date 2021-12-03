import { strings } from '@angular-devkit/core';
import { apply, template, Rule, SchematicContext, Tree, url, mergeWith, SchematicsException, move } from '@angular-devkit/schematics';
import { Schema } from './schema';
import { parseName } from '@schematics/angular/utility/parse-name';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function section(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const workspaceConfigBuffer = tree.read("angular.json");
    if (!workspaceConfigBuffer) {
      throw new SchematicsException("Not an Angular CLI Workspace");
    }

    const defaultProjectPath = 'src/app';

    // Split the param in 2 parts: path and name. Ex: feature/sub-feature/awesome-name will give
    // path = feature/sub-feature     and name = awesome-name
    const parsedPath = parseName(defaultProjectPath, _options.name)
    const { name, path } = parsedPath;

    // Compiling templates with parameters
    const sourceTemplates = url('./templates');
    const sourceParametrizedTemplates = apply(
      sourceTemplates,
      [
        template({
          ..._options,//parameters
          ...strings, // utils fucntions (ex:dasherize)
          name
        }),
        move(path)
      ]
    )

    return mergeWith(sourceParametrizedTemplates)(tree, _context);
  };
}
