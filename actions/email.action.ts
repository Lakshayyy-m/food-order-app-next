import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_VxEYjAsa_EKCU7jVcajJgT5fRZz7P4Vrk");

export const sendEmail = async ({ body }: { body: string }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["lakshaymanchanda03@gmail.com"],
      subject: "Email from LOMATO",
      html: "<p>Email aa gaya bhenchod</p>",
    });

    if (error)
      return NextResponse.json({ error: "An error occurred" }, { status: 500 });

    return NextResponse.json({ success: "Email sent!", data }, { status: 200 });
  } catch (error: any) {
    console.log(error);
  }
};
