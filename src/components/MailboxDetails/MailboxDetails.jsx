import { useParams } from "react-router"



const MailboxDetails = (props) => {
  console.log(props)
  const { mailboxId } = useParams();
  const selectedBox = props.mailboxes.find((mailbox) => {
      return (
        mailbox._id === Number(mailboxId)
      )
    }
  );
  return (
    <>
      <div >
        <h2>Mailbox{selectedBox._id}</h2>
        <h3>Details</h3>
        <p>Boxholder:{selectedBox.boxOwner}</p>
        <p>Box Size: {selectedBox.boxSize }</p>
    </div>
    </>
  )
}




export default MailboxDetails