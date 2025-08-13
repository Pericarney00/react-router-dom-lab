import { Link } from "react-router"


const MailboxList = (props) => {

  return (
    <>

      <h2> Mail List</h2>
      <ul>
        {props.mailboxes.map((mailbox) => {
          return (
            <li key={mailbox._id}>
              <Link to={`/mailboxes/${mailbox._id}`} >
                {mailbox.boxOwner}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}


export default MailboxList