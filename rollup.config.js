import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

const isProduction = process.env.NODE_ENV === 'production';

export default {
    entry: 'src/index.js',
    format: 'umd',
    moduleName: process.env.npm_package_name,
    plugins: [
      eslint({ exclude: 'node_modules/**' }),
      babel({
        exclude: 'node_modules/**',
      }),
      (isProduction && uglify()),
    ],
    dest: 'dist/index.js',
};
