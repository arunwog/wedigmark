import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createHash } from "crypto";


export const runtime = "nodejs";

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY?.trim();
        const keyFingerprint = apiKey
            ? createHash("sha256")
                .update(apiKey)
                .digest("hex")
                .slice(0, 12)
            : "missing";

        console.log("RESEND KEY CHECK:", {
            present: Boolean(apiKey),
            length: apiKey?.length ?? 0,
            startsCorrectly: apiKey?.startsWith("re_") ?? false,
            fingerprint: keyFingerprint,
        });


        if (!apiKey) {
            console.error("RESEND_API_KEY is missing in this deployment.");

            return NextResponse.json(
                {
                    success: false,
                    error: "Email service is not configured.",
                },
                { status: 500 }
            );
        }

        if (!apiKey.startsWith("re_")) {
            console.error(
                "RESEND_API_KEY exists but does not begin with re_."
            );

            return NextResponse.json(
                {
                    success: false,
                    error: "Email service configuration is invalid.",
                },
                { status: 500 }
            );
        }

        const body = await request.json();

        const name = String(body.name || "").trim();
        const email = String(body.email || "").trim();
        const company = String(body.company || "").trim();
        const website = String(body.website || "").trim();
        const service = String(body.service || "").trim();
        const message = String(body.message || "").trim();

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Name, email and message are required.",
                },
                { status: 400 }
            );
        }

        const resend = new Resend(apiKey);

        const { data, error } = await resend.emails.send({
            from: "WeDigMark Website <website@mail.wedigmark.online>",
            to: [
                "ceo@wedigmark.online",
                "arunvasishta4@gmail.com",
            ],
            replyTo: email,
            subject: `New enquiry from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.7;">
                    <h2>New Website Enquiry</h2>

                    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
                    <p><strong>Company:</strong> ${company ? escapeHtml(company) : "-"
                }</p>
                    <p><strong>Website:</strong> ${website ? escapeHtml(website) : "-"
                }</p>
                    <p><strong>Service:</strong> ${service ? escapeHtml(service) : "-"
                }</p>

                    <hr />

                    <p><strong>Message</strong></p>
                    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
                </div>
            `,
        });

        if (error) {
            console.error(
                "FULL RESEND ERROR:",
                JSON.stringify(error, null, 2)
            );

            return NextResponse.json(
                {
                    success: false,
                    error,
                },
                { status: 500 }
            );
        }

        console.log("WeDigMark enquiry sent successfully:", data?.id);

        return NextResponse.json({
            success: true,
            id: data?.id,
        });
    } catch (error) {
        console.error("Contact route unexpected error:", error);

        return NextResponse.json(
            {
                success: false,
                error: "Unexpected server error.",
            },
            { status: 500 }
        );
    }
}