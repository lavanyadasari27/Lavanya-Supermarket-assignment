function UserDetails(user) {
  return `
  <div id="store_details">
   <div>
   <h3><strong></strong> ${user.storename}</h3>
   </div>
   <div>
    <p><strong></strong> ${user.address}</p>
   </div>
   <div>
    <p>GST NO:${user["GST NO"]}, PH:${user["Phone number"]}</p>
    </div>
    </div>
    `;
}

module.exports = UserDetails;
