export default function validateInfo(formData) {
  let errors = {}

  if (!formData.firstName) {
    errors.firstName = 'First Name required'
  }
  if (!formData.lastName) {
    errors.lastName = 'Last Name required'
  }
  if (!formData.country) {
    errors.country = 'Country required'
  }
  if (!formData.email) {
    errors.email = 'Email required'
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'Email address is invalid'
  }
  if (!formData.password) {
    errors.password = 'Password is required'
  } else if (formData.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more'
  }

  return errors
}
