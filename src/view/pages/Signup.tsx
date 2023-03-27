import "./Signup.style.scss";
import { Input } from "../components/Input";
import { SubmitButton } from "../components/SubmitButton";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { TypeOf, z } from "zod";
import { useState } from "react";

const user = z.object({
  name: z.string().regex(/[א-ת]+(\ [א-ת]+)+/, { message: 'שם מלא הכולל שם פרטי ושם משפחה המכיל אותיות ורווחים בלבד' }),
  id: z.string().regex(/^[0-9]{9}$/, { message: 'מספר תעודת זהות יכול להכיל 9 ספרות בלבד' }),
  birthDate: z.date(),
  phone: z.string().regex(/^0\d{9}$/, { message: 'מספר טלפון נייד חייב להכיל 9 ספרות ולהתחיל בקידומת 0' }),
  email: z.string().email({ message: 'כתובת דואר אלקטרוני אינה תקינה' }),
  city: z.string().regex(/[א-ת]+/, { message: 'עיר אינה נמצאת ברשימת הערים' }),
  street: z.string().regex(/[א-ת]+/, { message: 'עיר אינה נמצאת ברשימת הערים' }),
  houseNumber: z.string(),
  mailReceive: z.boolean().optional(),
  agree: z.boolean(),
});

const INITIAL_USER = {
  name: '',
  id: '',
  birthDate: '',
  phone: '',
  email: '',
  city: '',
  street: '',
  houseNumber: '',
  emailReceive: true,
  agree: false
}

const Signup: React.FC = () => {

  // const [userData, setUserDate] = useState(INITIAL_USER)

  const { register, control, handleSubmit} = useForm({defaultValues: INITIAL_USER})
  console.log({ register });


  const onSave = (formValues: any): void => {
    console.log({formValues});
  }

  return (
    <form
      className="signup container"
      onSubmit={handleSubmit(onSave)}
    >
      <div className="personal">

        <h5>פרטים אישיים</h5>
        <div className="section">

          <label>
            <span>*</span> שם מלא
            <Input className="name" type="text" register={()=> register('name')}/>
          </label>

          <label>
            <span>*</span> ת.ז
            <Input className="id" type="text" register={()=> register('id')}/>
          </label>

          <label>
            <span>*</span> תאריך לידה
            <Input className="birthDate" type="date" register={()=> register('birthDate')}/>
          </label>

        </div>

        <div className="contact">

          <h5>פרטי התקשרות</h5>
          <div className="section">

            <label>
              <span>*</span> נייד
              <Input className="phone" type="text" register={()=> register('phone')}/>
            </label>

            <label>
              <span>*</span> אימייל
              <Input className="email" type="email" register={()=> register('email')}/>
            </label>

          </div>

          <div className="address">

            <h5>כתובת</h5>
            <div className="section">

              <label>
                <span>*</span> עיר
                <Input className="city" type="text" register={()=> register('city')}/>
              </label>

              <label>
                <span>*</span> רחוב
                <Input className="street" type="text" register={()=> register('street')}/>
              </label>

              <label>
                <span>*</span> מספר בית
                <Input className="houseNumber" type="text" register={()=> register('houseNumber')}/>
              </label>

            </div>

            <div className="end">

              <div className="section">

                <label>
                  <Input className="emailReceive" type="checkbox" register={()=> register('emailReceive')}/>
                  אני מסכים לקבל דיוור במייל
                </label>

                <label>
                  <Input className="agree" type="checkbox" register={()=> register('agree')}/>
                  אני מסכים לתנאי השירות
                </label>


              </div>

              <div>
                <SubmitButton className="submit" />
              </div>

            </div>
          </div>
        </div>
      </div>

    </form>
  );
};

export default Signup;
