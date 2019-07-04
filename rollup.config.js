import typescript from 'rollup-plugin-typescript';
import server from 'rollup-plugin-serve';

export default {
    input: './app/main.ts',
    plugins: [
        typescript({ lib: ["es5", "es6", "dom"], target: "es5", sourceMap: true }),
        server({
            host:'192.168.1.3',
            port:888,
            contentBase:'../'
        })
    ],
    output: {
        file: 'bundle.js',
        // format: 'es'
        sourceMap: true,
        format: 'es'
    }
}