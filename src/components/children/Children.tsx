import React from "react";
// import { useState } from "react";

type ChildrenProps = {
  children: React.ReactNode;
}

type TitleProps = {
  titleText: string;
}

type DescriptionProps = {
  textDes: string;
}

export default function RenderChildren(): React.JSX.Element {

  return (
    <div>
      <Card>
        <Title titleText="This is title" />
        <Description textDes="This is description" />
        <p>Це додатковий дочірній текст</p>
      </Card>

      <CardAbout title="About me">
        <p>I love programming.</p>
      </CardAbout>

      <Alert type="error">
        User created successfully.
      </Alert>

      <Button variant="primary" size="sm">
        Save
      </Button>
      <Button variant="secondary" size="lg">
        Delete
      </Button>


    </div>
  )
}

export function Card({ children }: ChildrenProps): React.JSX.Element {
  return (
    <div className="card">
      {children}
    </div>
  )
}

function Title({ titleText }: TitleProps): React.JSX.Element {
  return (
    <h1 className="main-title">{titleText}</h1>
  )
}

function Description({ textDes }: DescriptionProps): React.JSX.Element {
  return (
    <p className="description">
      {textDes}
    </p>
  )
}




// ===================== tasks ===================
// Задача 1. Card
type CardProps = {
  title: string;
  children: React.ReactNode;
}
function CardAbout({ title, children }: CardProps): React.JSX.Element {
  return (
    <div className="card-about">
      <h2 className="card-about__title">{title}</h2>
      <div className="card-about__content">
        {children}
      </div>
    </div>
  )
}

// Задача 2. Alert
interface AlertProps {
  type: 'success' | 'error';
  children: React.ReactNode
}
function Alert({ type, children }: AlertProps): React.JSX.Element {
  const classes = `
  rounded-lg p-4
  text-white
  ${type === 'success' ? `${'bg-green-500'}` : 'bg-red-500'}
  `

  const alertMessage = {
    success: 'Operation completed successfully',
    error: 'Something went wrong'
  }

  const message = alertMessage[type]

  return (
    <div className={classes}>
      <p>{message}</p>
      {children}
    </div>
  )
}

// Задача 3. Button
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
function Button({ variant, size, children }: ButtonProps): React.JSX.Element {
  const sizeClasses = size === 'sm' ? 'py-1 px-2' : size === 'md' ? 'py-2 px-4' : 'py-3 px-6'
  const baseClasses = 'rounded-lg text-white button-base'
  const variantClasses = variant === 'primary' ? 'bg-blue-500 hover:bg-blue-400' : 'bg-green-500 hover:bg-green-400'

  const classes = `${variantClasses} ${baseClasses} ${sizeClasses}`
  return (
    <button className={classes}>
      {children}
    </button>
  )
}

