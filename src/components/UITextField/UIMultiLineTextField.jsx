"use client";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormHelperText, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  UIStyledContainedField,
  UIStyledOutlinedField,
  UIStyledOutlinedMultiline,
} from "./ui";

const UIMultiLineTextField = ({
  name,
  type,
  label,
  value,
  control,
  variant,
  errorMessage,
  handleChange,
  isOtp,
  isNewsLetter,
  ...rest
}) => {
  const { control: fallbackControl } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <>
      <Controller
        name={name}
        control={control == null ? fallbackControl : control}
        render={({ field }) => (
          <>
            <UIStyledOutlinedMultiline
              type={type}
              variant="standard"
              label={label}
              value={value}
              onChange={handleChange}
              error={errorMessage && true}
              {...rest}
              {...field}
            />
          </>
        )}
      />
      {errorMessage && (
        <FormHelperText
          sx={{ color: (theme) => theme.palette.secondary.error }}
        >
          {errorMessage}
        </FormHelperText>
      )}
    </>
  );
};

export default UIMultiLineTextField;
