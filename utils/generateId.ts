/**
 * generates an id from the post guid link.
 *
 * @param {string} guid the post guid
 */
const generateId = (guid: string) =>
  guid.replace(/^https?:\/\//, '').split('/')[2]

export default generateId
