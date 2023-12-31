import React, { useEffect } from "react";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";


import { Grid } from "@material-ui/core";

export default function TenantForm(props) {

  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("first_name" in fieldValues)
      temp.first_name = fieldValues.first_name ? "" : "This field is required.";
    if ("last_name" in fieldValues)
      temp.last_name = fieldValues.last_name ? "" : "This field is required.";

    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("phone_number" in fieldValues)
      temp.phone_number =
        fieldValues.phone_number.length > 8
          ? ""
          : "Minimum 10 numbers required.";

    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length > 8 ? "" : "Minimum 10 numbers required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  //
  const genderItems = [
    { id: "MALE", title: "Male" },
    { id: "FEMALE", title: "Female" },
    { id: "OTHER", title: "Other" },
  ];
  const gender = [
    genderItems.map((r) => {
      return { id: r.id, title: r.title };
    }),
  ];
  
  const initialFValues = {
    gender: "MALE",
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    is_active: false,
  };
  //

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addOrEdit(values, resetForm);
      console.log("Values", values);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // myHouses();
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);
  //

  //
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={6}>
            <Controls.RadioGroup
            disabled
              name="gender"
              label="Gender"
              value={values.gender}
              onChange={handleInputChange}
              items={gender[0]}
              error={errors.gender}
            />

            <Controls.Input
              disabled
              name="first_name"
              onChange={handleInputChange}
              value={values.first_name}
              label="First Name"
              error={errors.first_name}
            />

            <Controls.Input
              disabled
              name="last_name"
              onChange={handleInputChange}
              value={values.last_name}
              label="Last Name"
              error={errors.last_name}
            />

          </Grid>

          <Grid item xs={6}>
            
          <Controls.Input
              disabled
              label="Email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              error={errors.email}
            />


            <Controls.Input
             disabled
              label="Phone Number"
              name="phone_number"
              value={values.phone_number}
              onChange={handleInputChange}
              error={errors.phone_number}
            />


            <Controls.Checkbox
              onChange={handleInputChange}
              name="is_active"
              label="Is Active User?"
              value={Boolean(values.is_active)}
            />

            <div className="mx-3 md:flex mt-2">
              <div className="md:w-full px-3">
                <button
                  className="md:w-md float-right  bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-md mr-14"
                  type="submit"
                >
                  Save data
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Form>
    </div>
  );
}
