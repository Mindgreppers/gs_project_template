const config = require('config');
const path = require('path');
const fs = require('fs');
const fse = require('fs-extra');

const projectDir = path.resolve(process.cwd());
const nodeModulesDir = path.resolve(projectDir, "node_modules");
const packages = config.copy_packages || [];

for (const pack of packages) {
    // packageDir: ./node_modules/${pack}/
    const packageDir = path.resolve(nodeModulesDir, pack);
    console.log('packageDir: ', packageDir);
    if (fs.existsSync(packageDir)) {
        // srcDir: ./node_modules/${pack}/src
        const srcDir = path.resolve(packageDir, 'src');
        console.log('Copying content from srcDir: ', srcDir);
        if (fs.existsSync(srcDir)) {
            const destSrcDir = path.resolve(projectDir, '../gs_service/project/src');
            console.log('Copying to destination: ', destSrcDir);

            const datasourcesDir = path.resolve(srcDir, 'datasources');
            const eventsDir = path.resolve(srcDir, 'events');
            const functionsDir = path.resolve(srcDir, 'functions');
            const mappingsDir = path.resolve(srcDir, 'mappings');
            const pluginsDir = path.resolve(srcDir, 'plugins');
            const definitionsDir = path.resolve(srcDir, 'definitions');

            if (fs.existsSync(datasourcesDir)) {
                fse.copySync(datasourcesDir, path.resolve(destSrcDir, `datasources`), { overwrite: false, errorOnExist: true })
            }
            if (fs.existsSync(eventsDir)) {
                fse.copySync(eventsDir, path.resolve(destSrcDir, `events`), { overwrite: false, errorOnExist: true })
            }
            if (fs.existsSync(functionsDir)) {
                fse.copySync(functionsDir, path.resolve(destSrcDir, `functions`), { overwrite: false, errorOnExist: true })
            }
            if (fs.existsSync(mappingsDir)) {
                fse.copySync(mappingsDir, path.resolve(destSrcDir, `mappings`), { overwrite: false, errorOnExist: true })
            }
            if (fs.existsSync(pluginsDir)) {
                fse.copySync(pluginsDir, path.resolve(destSrcDir, `plugins`), { overwrite: false, errorOnExist: true })
            }
            if (fs.existsSync(definitionsDir)) {
                fse.copySync(definitionsDir, path.resolve(destSrcDir, `definitions`), { overwrite: false, errorOnExist: true })
            }

            // Copy package.json of the package to project/packages/${pack} directory
            const packageJSON = path.resolve(packageDir, 'package.json');
            if (fs.existsSync(packageJSON)) {
                const destPackageJson = path.resolve(projectDir, '../gs_service/project/packages/', pack, 'package.json');
                console.log('Copying package.json to destination: ', destPackageJson);
                fse.copySync(packageJSON, destPackageJson, { overwrite: false, errorOnExist: true })
            }

        } else {
            console.warn(`!! ${srcDir} is not present. Nothing to copy in ${pack} package !!`);
        }
    } else {
        console.error(`!! No node_module with name ${pack} is present. Please install the module. Exiting !!`);
        process.exit(1);
    }
}
