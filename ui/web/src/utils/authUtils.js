/**
 * Should return something like this
 * @returns {
 *  firstName: String,
 *  lastName: String,
 *  id: String
 * }
 */

export function getUser() {
  const userCode = localStorage.getItem('userCode')
  if(!userCode) return;

  return {
    code: userCode
  }
}