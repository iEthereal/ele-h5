/**
 * BEM 是一种前端开发中常用的命名约定，用于帮助管理和组织 CSS 和 HTML。BEM 是块（Block）、元素（Element）、修饰符（Modifier）的缩写。
 *
 * Block（块）：是指一个独立的、可复用的页面组件，它代表了一个在界面中有意义的块，比如按钮、导航栏、表格等。块应该是一个相对独立的实体，可以包含其他块或元素。
 *
 * Element（元素）：是块的一部分，没有单独存在的意义，只有在特定的块内才有意义。元素通常与块密切相关，并且不能在不同的块之间共享。
 *
 * Modifier（修饰符）：是用于修改块或元素外观、行为或状态的标志。通过添加修饰符，可以改变块或元素的样式或行为，而不需要重复编写新的 CSS 规则。
 * @param name
 */
export function createBEM(name: string) {
    return (el?: string, mods?: Record<string, boolean>) => {
        let result = `${name}${el ? `__${el}` : ''}`

        if (mods) {
            const modsStr = Object.keys(mods)
                .filter((mod) => mods[mod])
                .map((mod) => ` ${result}--${mod}`)
                .join('')
            result += modsStr
        }

        return result
    }
}

export function createNamespace(name: string) {
    const prefixedName = `op-${name}`
    return [prefixedName, createBEM(prefixedName)] as const
}
