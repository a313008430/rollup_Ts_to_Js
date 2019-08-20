import typescript from 'rollup-plugin-typescript2';
let defaults = { compilerOptions: { declaration: true } };

/**
 * 如果使用rollup-plugin-typescript2版本为2的这个库
 * 想要更好的使用sourcemap除了这个文件里面要配置以外
 * 在tsconfig.json里面需要配置sourcemap：true这边才会生效
 */
export default {
    input: 'main.ts',
    plugins: [
        // typescript({ lib: ["es5", "es6", "dom"], target: "es5", sourceMap: true }),
        typescript({ tsconfig: 'tsconfig.json' }),
        // server({
        //     host:'192.168.1.3',
        //     port:888,
        //     contentBase:'../'
        // })
    ],
    output: {
        file: 'bundle.js',
        // format: 'es'
        format: 'umd',
        sourcemap: 'inline',

    }
}