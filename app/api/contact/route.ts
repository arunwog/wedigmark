import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { name, email, company, website, service, message } = body;

        const { error } = await resend.emails.send({
            from: "WeDigMark Website <website@mail.wedigmark.online>",
            to: "ceo@wedigmark.online",
            replyTo: email,
            subject: `New enquiry from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2>📩 New Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "-"}</p>
          <p><strong>Website:</strong> ${website || "-"}</p>
          <p><strong>Service:</strong> ${service || "-"}</p>

          <hr />

          <p><strong>Message</strong></p>

          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
        });

        if (error) {
            console.error(error);

            return NextResponse.json(
                { success: false },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);

        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}