function UserDetails(user) {
  return `
    <p><strong></strong> ${user.storename}</p>
    <p><strong></strong> ${user.address}</p>
    <p>GST NO:${user["GST NO"]}, PH:${user["Phone number"]}</p>`;
}

module.exports = UserDetails;