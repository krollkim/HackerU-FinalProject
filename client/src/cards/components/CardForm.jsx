import React from "react";
import { func, object, string } from "prop-types";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
const CardForm = ({
  onSubmit,
  onReset,
  errors,
  onFormChange,
  onInputChange,
  data,
  title,
}) => {
  return (
    <>
     <TheaterComedyIcon sx={{
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      display: 'absolute',
      right: 0,
      left: 0,
      margin: 'auto'
    }}/>

    <Form
      onSubmit={onSubmit}
      onReset={onReset}
      errors={errors}
      onChange={onFormChange}
      styles={{ maxWidth: "800px", background: '#7662c5bb', borderRadius: 8,  }}
      title={title}
    >
      <Input
        name="title"
        label="title"
        error={errors.title}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="subtitle"
        label="subtitle"
        error={errors.subtitle}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="description"
        label="description"
        error={errors.description}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="review"
        label="review"
        type="review"
        error={errors.review}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="directedBy"
        label="directed by"
        type="directedBy"
        error={errors.directedBy}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="createdAt"
        label="created at"
        type="createdAt"
        error={errors.createdAt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="webUrl"
        label="web"
        error={errors.webUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
      <Input
        name="imageUrl"
        label="image url"
        error={errors.imageUrl}
        onChange={onInputChange}
        data={data}
        sm={6}
      />
      <Input
        name="imageAlt"
        label="image alt"
        error={errors.imageAlt}
        onChange={onInputChange}
        data={data}
        sm={6}
        required={false}
      />
    </Form>
    <TheaterComedyIcon sx={{
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      display: 'absolute',
      right: 0,
      left: 0,
      margin: 'auto'
    }}/>
    </>
  );
};

CardForm.propTypes = {
  onSubmit: func.isRequired,
  onReset: func.isRequired,
  errors: object.isRequired,
  onFormChange: func.isRequired,
  onInputChange: func.isRequired,
  data: object.isRequired,
  title: string.isRequired,
};

export default React.memo(CardForm);