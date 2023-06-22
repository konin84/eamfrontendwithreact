import React, { useEffect } from "react";
import Controls from "../../components/controls/Controls";
import { useForm, Form } from "../../components/useForm";
import { Grid } from "@material-ui/core";

export default function PhotoCategoryForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("name" in fieldValues)
      temp.name = fieldValues.name ? "" : "This field is required.";
    if ("description" in fieldValues)
      temp.description = fieldValues.description
        ? ""
        : "This field is required.";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const initialFValues = {
    name: "",
    description: "",
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  useEffect(() => {
    // myHouses();
    if (recordForEdit != null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit, setValues]);
  //

  //

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (validate()) {
        // addOrEdit(values);
        addOrEdit(values, resetForm);
        console.log("Values", values);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className='mx-auto'>

      <Form onSubmit={handleSubmit}>
        <Grid container>
          <Grid item xs={9}>
            <Controls.Input
              name="name"
              onChange={handleInputChange}
              value={values.name}
              label="Image Category"
              error={errors.name}
              className='mb-9'
            />

            <Controls.Textarea
              name="description"
              onChange={handleInputChange}
              value={values.description}
              placeholder='Enter Image Category'
              error={errors.description}
              className='border border-separate mt-5'
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
    </div>
  );
}
