/**
 * creates an excerpt from the description API output
 *
 * @param {string} desc the raw HTML description
 */
const getExcerpt = (desc: string) => desc.split('</p>')[0].replace(/\\n/, '')

export default getExcerpt
