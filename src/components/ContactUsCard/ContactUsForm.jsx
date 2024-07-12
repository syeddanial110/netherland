"use client";

import { Grid } from "@mui/material";
import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactusSchema } from "@/utils/schema";
import UITextField from "../UITextField/UITextField";
import UIMultiLineTextField from "../UITextField/UIMultiLineTextField";
import UIButton from "../UIButton/UIButton";

const ContactUsForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactusSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleContactUs = () => {};
  return (
    <form onSubmit={handleSubmit(handleContactUs)}>
      <Grid container gap={6}>
        <Grid item xs={12}>
          <UITextField
            variant="outlined"
            control={control}
            name="name"
            placeholder="Can we have your name ?"
            fullWidth
            errorMessage={errors?.name?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <UITextField
            variant="outlined"
            control={control}
            name="email"
            placeholder="And your email ?"
            fullWidth
            errorMessage={errors?.email?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <UIMultiLineTextField
            variant="standard"
            control={control}
            name="message"
            placeholder="What would you like to say ?"
            fullWidth
            errorMessage={errors?.message?.message}
            multiline
            rows={6}
          />
        </Grid>
        <Grid item xs={4}>
          <UIButton btnType="contained" title="Send" fullWidth={true} />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactUsForm;
