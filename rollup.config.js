import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'esm',
                file: 'dist/library.mjs'
            },
            {
                format: 'cjs',
                file: 'dist/library.js'
            }
        ],
        plugins: [
            postcss({
                include: "**/styles/index.css",
                extract: resolve('dist/assets/index.css')
            }),
            css(),
            vue({ css: false }),
            peerDepsExternal()
        ]
    }
]
