import {useState} from "react"
import { useNavigate } from "react-router"

const initialState = {
  boxSize: "small",
  boxOwner: "",
};


const MailboxForm = (props) => {
  const [formData, setFormData] = useState(initialState)

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addBox(formData)
    setFormData(initialState)
    navigate("/mailboxes")
  }

  const handleChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value})
  }


  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxOwner">Enter a Boxholder:</label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          required
          value={formData.boxOwner}
          onChange={handleChange}
        />

        <label htmlFor="boxSize">Select a Box Size:</label>
        <select
          name="boxSize"
          id="boxSize"
          onChange={handleChange}
          defaultValue={"Select a Size" || formData.boxSize}
        >
          <option value="">Select a Size</option>
          <option value="small">small</option>
          <option value="medium">medium</option>
          <option value="large">large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}


export default MailboxForm