import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  lastName,
  message,
}) => (
  <div>
    <p>{message}</p>
    <p>
      From: {firstName} {lastName}
    </p>
  </div>
);
