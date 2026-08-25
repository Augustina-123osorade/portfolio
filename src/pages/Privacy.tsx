export default function Privacy() {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-20 lg:py-28">
      <div>
        <span className="text-sm font-semibold uppercase tracking-widest text-[#C4633C]">
          Legal
        </span>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-gray-500">Last updated: August 2026</p>
      </div>

      <div className="flex flex-col gap-6 text-sm leading-relaxed text-gray-600">
        <p>
          This page explains what information this site collects and how
          it's used. This is a personal portfolio, not a commercial platform,
          so data collection here is minimal.
        </p>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">
            What's collected
          </h2>
          <p>
            The only data collected is what you choose to submit through the
            contact form — your name, email address, and message. That
            information is used solely to reply to you and isn't sold,
            shared, or added to any mailing list.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">Analytics</h2>
          <p>
            This site does not currently use third-party analytics or
            advertising trackers.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">Your data</h2>
          <p>
            You can ask for any information you've submitted to be deleted
            at any time by emailing the address below.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-base font-bold text-gray-900">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:ewuramaosorade@gmail.com"
              className="font-semibold text-[#D9713F] hover:underline"
            >
              ewuramaosorade@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
