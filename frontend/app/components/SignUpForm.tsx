import { useState } from "react"


const SignUpForm = () => {
const [showpassword , setshowpassword] = useState(false)
const [showconfirmpassword , setshowconfirmpassword] = useState(false)
const [acceptterm , setacceptterm] = useState(false)
const [form ,setform] = useState({
    username : "" ,
    email : "" ,
    phone : "" ,
    password : "" ,
    confirmpassword : "" ,
});
const [error , seterror] = useState("")
const [success , setsuccess] = useState("")
  return (
    <div>

    </div>
  )
}

export default SignUpForm