import { Form, useForm } from "../../components/useForm";
import { Grid } from "@material-ui/core";
import Controls from "../../components/controls/Controls";
import { useState } from "react";
import { country } from "../../components/Data/CountryData";

const genderItems = [
  { id: "MALE", title: "Male" },
  { id: "FEMALE", title: "Female" },
  { id: "OTHER", title: "Other" },
];

const contractType = [
  { id: "INDIVIDUAL", title: "Individual" },
  { id: "COMPANY", title: "Company" },
];

const nation = [
  country.map((c) => {
    return { id: c.abbreviation, title: c.country };
  }),
];

export default function ClientSignUpForm(props) {
  const { signUp } = props;
  const [errorMsg, SetErrorMsg] = useState("");

  const initialFValues = {
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    national: "",
    password: "",
    contactType: "INDIVIDUAL",
    gender: "MALE",
    phone_number: "",
    company_name: "",
    company_email: "",
    autorisation: "",
    termsAndConditions: true,
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    if ("first_name" in fieldValues)
      temp.first_name = fieldValues.first_name ? "" : "This field is required.";

    if ("last_name" in fieldValues)
      temp.last_name = fieldValues.last_name ? "" : "This field is required.";

    if ("email" in fieldValues)
      // temp.email = fieldValues.email ? "" : "This field is required.";
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";

    // if ("company_name" in fieldValues)
    //   temp.company_name = fieldValues.company_name
    //     ? ""
    //     : "This field is required.";

    // if ("company_email" in fieldValues)
    //   temp.company_email = /$^|.+@.+..+/.test(fieldValues.company_email)
    //     ? ""
    //     : "Company email is not valid.";

    if ("phone_number" in fieldValues)
      temp.phone_number =
        fieldValues.phone_number.length > 8
          ? ""
          : "Minimum 10 numbers required.";

    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 8 ? "" : "Minimum 8 characters required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, errors, setErrors, handleInputChange, resetForm } = useForm(
    initialFValues,
    true,
    validate
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (validate()) {
        SetErrorMsg("")
        signUp(values, resetForm);
        console.log("CLENT DATA", values);
      }else{

        SetErrorMsg(
          "There is a user with the same email or phone nume, please choose another email and or phone number"
        );
      }
      console.log("Values", values);
    } catch (err) {
      // Email has already been used
      console.log(err);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
      </div>

      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.RadioGroup
              required
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={genderItems}
            />

            <Controls.Input
              required
              name="first_name"
              onChange={handleInputChange}
              value={values.first_name}
              label="First Name"
              error={errors.first_name}
            />

            <Controls.Input
              required
              name="last_name"
              onChange={handleInputChange}
              value={values.last_name}
              label="Last Name"
              error={errors.last_name}
            />
            <Controls.Select
              name="national"
              label="Country of operation..."
              options={nation[0]}
              onChange={handleInputChange}
              value={values.national}
              required
            />

            <Controls.RadioGroup
              required
              name="contactType"
              label="Contract Type"
              value={values.contactType}
              onChange={handleInputChange}
              items={contractType}
            />

            <Controls.Input
              name="company_name"
              onChange={handleInputChange}
              value={values.company_name}
              label="Comapy Name"
              error={errors.company_name}
            />
          </Grid>

          <Grid item xs={6}>
            <Controls.Input
              name="company_email"
              onChange={handleInputChange}
              value={values.company_email}
              label="Comapy Email"
              error={errors.company_email}
            />
            <Controls.Input
              required
              label="Client Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <Controls.Input
              required
              label="Phone Number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleInputChange}
              error={errors.phone_number}
            />
            <Controls.Input
              required
              label="Address"
              name="address"
              value={values.address}
              onChange={handleInputChange}
              error={errors.address}
            />

            <Controls.Input
              required
              label="password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
              type="password"
            />

            <Controls.Checkbox
              required
              label="I agree to the Terms & Conditions"
              name="termsAndConditions"
              value={Boolean(values.termsAndConditions)}
              onChange={handleInputChange}
            />

            <div className="mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button
                  className="md:w-md float-right w-[90%]  bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-md mr-14"
                  type="submit"
                >
                  Sign up
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Form>
    </>
  );
}
