import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import {
    uglify
} from 'rollup-plugin-uglify';

var input = 'src/zoom.js';
var babelPlugin = babel({
    exclude: 'node_modules/**'
});

export default [{
    input: input,
    output: {
        file: 'dist/zoom.js',
        format: 'umd',
        name: 'Zoom'
    },
    plugins: [
        nodeResolve({
            browser: true
        }),
        commonjs(),
        babelPlugin,
        uglify()
    ]
}, {
    input: input,
    output: {
        file: 'dist/zoom.common.js',
        format: 'cjs'
    },
    plugins: [
        babelPlugin
    ]
}, {
    input: input,
    output: {
        file: 'dist/zoom.esm.js',
        format: 'esm'
    },
    plugins: [
        babelPlugin
    ]
}];