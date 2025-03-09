"use server";

import { EmailTemplate } from "@/components/ui/email-template";
import { Resend } from "resend";
import { z } from "zod";
import { formSchema } from "./schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    // TODO: Add this emailFormData to some database

    const { error } = await resend.emails.send({
      from: `${process.env.RESEND_FROM_EMAIL}`,
      to: `${process.env.RESEND_FROM_EMAIL}`,
      replyTo: emailFormData.email,
      subject: "Physiotherapy Contact Form Query",
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        lastName: emailFormData.lastName,
        message: emailFormData.message,
      }) as React.ReactNode,
    });

    if (error) {
      throw error;
    }
  } catch (e) {
    throw e;
  }
};
