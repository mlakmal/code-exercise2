System.config({
  //use typescript for compilation
  transpiler: 'typescript',
  //typescript compiler options
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  //map tells the System loader where to look for things
  map: {
    'exercise-app': "./",
    'unit-test': './',
    '@angular/core': 'https://unpkg.com/@angular/core@5.1.0',
    '@angular/platform-browser-dynamic': 'https://unpkg.com/@angular/platform-browser-dynamic@5.1.0',
    '@angular/common': 'https://unpkg.com/@angular/common@5.1.0',
    '@angular/compiler': 'https://unpkg.com/@angular/compiler@5.1.0',
    '@angular/forms': 'https://unpkg.com/@angular/forms@5.1.0',
    '@angular/http': 'https://unpkg.com/@angular/http@5.1.0',
    '@angular/platform-browser': 'https://unpkg.com/@angular/platform-browser@5.1.0',
    '@angular/router': 'https://unpkg.com/@angular/router@5.1.0',
    '@angular/http': 'https://unpkg.com/@angular/http@5.1.0',
    'rxjs': 'https://unpkg.com/rxjs@5.4.0'
  },
  //packages defines our app package
  packages: {
    'unit-test': {
      main: 'test.ts',
      defaultExtension: 'ts'
    },
    'exercise-app': {
      main: 'main.ts',
      defaultExtension: 'ts'
    },
    '@angular/core': {
      main: 'bundles/core.umd.js',
      defaultExtension: 'js'
    },
    '@angular/compiler': {
      main: 'bundles/compiler.umd.js',
      defaultExtension: 'js'
    },
    '@angular/common': {
      main: 'bundles/common.umd.js',
      defaultExtension: 'js'
    },
    '@angular/router': {
      main: 'bundles/router.umd.js',
      defaultExtension: 'js'
    },
    '@angular/forms': {
      main: 'bundles/forms.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'bundles/platform-browser-dynamic.umd.js',
      defaultExtension: 'js'
    },
    '@angular/platform-browser': {
      main: 'bundles/platform-browser.umd.js',
      defaultExtension: 'js'
    },
    'zone-js': {
      main: 'dist/zone.js',
      defaultExtension: 'js'
    },
    rxjs: {
      defaultExtension: 'js'
    },
    '@angular/core/testing': { main: '../bundles/core-testing.umd.js', defaultExtension: 'js' },
    '@angular/common/testing': { main: '../bundles/common-testing.umd.js', defaultExtension: 'js' },
    '@angular/compiler/testing': { main: '../bundles/compiler-testing.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser/testing': { main: '../bundles/platform-browser-testing.umd.js', defaultExtension: 'js' },
    '@angular/http/testing': { main: '../bundles/http-testing.umd.js', defaultExtension: 'js' },
    '@angular/router/testing': { main: '../bundles/router-testing.umd.js', defaultExtension: 'js' },
    '@angular/forms/testing': { main: '../bundles/forms-testing.umd.js', defaultExtension: 'js' },
    '@angular/platform-browser-dynamic/testing': { main: '../bundles/platform-browser-dynamic-testing.umd.js', defaultExtension: 'js' }
  }
});