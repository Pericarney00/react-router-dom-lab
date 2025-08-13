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
if (!selectedBox) {
  return (
    <h2>Mailbox not found</h2>
  )
}
  return (
    <>
      <section>
        <h1>Mailbox{selectedBox._id}</h1>
      <div >
          <h3>Details</h3>
          <p>Box Id:{ selectedBox._id}</p>
        <p>Boxholder:{selectedBox.boxOwner}</p>
        <p>Box Size: {selectedBox.boxSize }</p>
    </div>

      </section>
    </>
  )
}




export default MailboxDetails