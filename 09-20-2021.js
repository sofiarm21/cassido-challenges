const util = require('util')

/*
This week’s question:
Given a string of HTML, detect and print all the HTML tags, attributes and values of attributes.

Example:

$ parseHTML(`<p><img src="https://i.imgur.com/LSG9xg3.jpeg" /></p>`)
$ [{ tag: 'p' }, { tag: 'img', attributes: [{'src': 'https://i.imgur.com/LSG9xg3.jpeg'}] }]
*/

const parseHTML = (string) => {
    const htmlParsed = []
    const htmlElements = string.split('>')
    htmlElements.map(element => {
        if (element[1] != '/') {
            const tag = element.slice(
                1,
                element.indexOf(' ') != -1
                ? element.indexOf(' ')
                : element.length
            )
            if (tag == '') {
                return
            }
            const attributes = []
            if (element.indexOf(' ') != -1) {
                const attributeElements = element.split(' ')
                attributeElements.map(a => {
                    if(a.indexOf('=') != -1) {
                        const attributeObject = {}
                        attributeObject[a.split('=')[0]] = a.split('=')[1]
                        attributes.push(
                            attributeObject
                        )
                    }
                })
            }
            htmlParsed.push({
                tag: tag,
                attributes: attributes
            })
        }
    })
    return htmlParsed
}


console.log(
    util.inspect(
        parseHTML(`<div><p alignment='center' color='black'><img src="https://i.imgur.com/LSG9xg3.jpeg" /></p></div>`),
        {showHidden: false, depth: null, colors: true}
    )
);
