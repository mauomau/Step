/**
 * 
 * @param {string} tagName 
 * @param {object} attributes 
 * @returns {HTMLElement}
 */

export function createEle(tagName,attributes = {}) {
    const element = document.createElement(tagName);
    for (const [key,value] of Object.entries(attributes)) {
        if (value !== null){
            element.setAttribute(key, value);
        }
        return element;
    }
}